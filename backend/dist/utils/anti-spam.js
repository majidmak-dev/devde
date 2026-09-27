"use strict";
/**
 * Enterprise Multi-Tier Anti-Spam Security Engine for Backend Express
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluateAntiSpam = evaluateAntiSpam;
const ipSubmissions = new Map();
const emailSubmissions = new Map();
setInterval(() => {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    for (const [ip, record] of ipSubmissions.entries()) {
        if (now - record.firstRequestTime > windowMs) {
            ipSubmissions.delete(ip);
        }
    }
    for (const [email, record] of emailSubmissions.entries()) {
        if (now - record.firstRequestTime > windowMs) {
            emailSubmissions.delete(email);
        }
    }
}, 15 * 60 * 1000);
const DISPOSABLE_DOMAINS = new Set([
    'mailinator.com',
    'guerrillamail.com',
    '10minutemail.com',
    'temp-mail.org',
    'tempmail.com',
    'throwawaymail.com',
    'yopmail.com',
    'trashmail.com',
    'getnada.com',
    'sharklasers.com',
    'dispostable.com',
    'maildrop.cc',
    'inboxkitten.com',
    'burnermail.io',
    'crazymailing.com',
    'fakeinbox.com',
    'dropmail.me'
]);
const SPAM_PATTERNS = [
    /\b(buy\s+backlinks|cheap\s+backlinks|rank\s+#?1\s+on\s+google|seo\s+ranking\s+service)\b/i,
    /\b(da90|dr80|guest\s+posting\s+service|pbn\s+links|boost\s+domain\s+authority)\b/i,
    /\b(crypto\s+recovery|binary\s+options|forex\s+trading\s+bot|bitcoin\s+generator)\b/i,
    /\b(guaranteed\s+roi|passive\s+crypto\s+income|investment\s+doubler)\b/i,
    /\b(viagra|cialis|online\s+pharmacy|poker\s+bonus|casino\s+slots)\b/i,
    /\b(telegram:\s*@|t\.me\/|wa\.me\/|whatsapp\s+us\s+at)\b/i,
    /\b(scrape\s+emails|bulk\s+email\s+list|b2b\s+database\s+leads)\b/i,
    /\b(russian\s+brides|adult\s+dating|hookup\s+site)\b/i,
    /\b(increase\s+website\s+traffic\s+organically\s+guaranteed)\b/i
];
function evaluateAntiSpam(payload, clientIp) {
    let score = 0;
    let reason;
    // 1. HONEYPOT CHECK
    if (payload.website_hp && payload.website_hp.trim().length > 0) {
        return {
            isSpam: true,
            isBot: true,
            isRateLimited: false,
            reason: 'Honeypot field (website_hp) was populated',
            score: 100
        };
    }
    if (payload.company_fax_hp && payload.company_fax_hp.trim().length > 0) {
        return {
            isSpam: true,
            isBot: true,
            isRateLimited: false,
            reason: 'Honeypot field (company_fax_hp) was populated',
            score: 100
        };
    }
    // 2. TIMING CHECK
    if (payload.formLoadedAt) {
        const elapsed = Date.now() - payload.formLoadedAt;
        if (elapsed < 2500) {
            return {
                isSpam: true,
                isBot: true,
                isRateLimited: false,
                reason: `Submission completed too rapidly (${elapsed}ms < 2500ms threshold)`,
                score: 95
            };
        }
        if (elapsed > 24 * 60 * 60 * 1000) {
            return {
                isSpam: true,
                isBot: true,
                isRateLimited: false,
                reason: 'Stale form submission token (>24h)',
                score: 80
            };
        }
    }
    // 3. RATE LIMITING CHECK
    const now = Date.now();
    const tenMinutes = 10 * 60 * 1000;
    const ipKey = clientIp || 'unknown';
    if (ipKey !== 'unknown') {
        const ipRecord = ipSubmissions.get(ipKey);
        if (ipRecord) {
            if (now - ipRecord.firstRequestTime < tenMinutes) {
                if (ipRecord.count >= 4) {
                    return {
                        isSpam: true,
                        isBot: false,
                        isRateLimited: true,
                        reason: 'IP submission rate limit exceeded (max 4 per 10 mins)',
                        score: 90
                    };
                }
                ipRecord.count += 1;
            }
            else {
                ipSubmissions.set(ipKey, { count: 1, firstRequestTime: now });
            }
        }
        else {
            ipSubmissions.set(ipKey, { count: 1, firstRequestTime: now });
        }
    }
    const cleanEmail = payload.email.toLowerCase().trim();
    const emailRecord = emailSubmissions.get(cleanEmail);
    if (emailRecord) {
        if (now - emailRecord.firstRequestTime < tenMinutes) {
            if (emailRecord.count >= 3) {
                return {
                    isSpam: true,
                    isBot: false,
                    isRateLimited: true,
                    reason: 'Email submission rate limit exceeded (max 3 per 10 mins)',
                    score: 90
                };
            }
            emailRecord.count += 1;
        }
        else {
            emailSubmissions.set(cleanEmail, { count: 1, firstRequestTime: now });
        }
    }
    else {
        emailSubmissions.set(cleanEmail, { count: 1, firstRequestTime: now });
    }
    // 4. DISPOSABLE EMAIL DOMAIN CHECK
    const emailParts = cleanEmail.split('@');
    if (emailParts.length === 2) {
        const domain = emailParts[1];
        if (DISPOSABLE_DOMAINS.has(domain)) {
            return {
                isSpam: true,
                isBot: false,
                isRateLimited: false,
                reason: `Disposable burner email domain rejected: ${domain}`,
                score: 95
            };
        }
    }
    // 5. EMAIL SYNTAX VALIDATION
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleanEmail)) {
        return {
            isSpam: true,
            isBot: false,
            isRateLimited: false,
            reason: 'Malformed RFC email format',
            score: 85
        };
    }
    // 6. CONTENT HEURISTICS & KEYWORD SCORING
    const fullText = `${payload.name} ${payload.subject} ${payload.service} ${payload.message}`;
    for (const pattern of SPAM_PATTERNS) {
        if (pattern.test(fullText)) {
            score += 45;
            reason = `Spam keyword pattern matched: ${pattern.source}`;
        }
    }
    const urlMatches = payload.message.match(/https?:\/\/[^\s]+/gi) || [];
    if (urlMatches.length >= 3) {
        score += 50;
        reason = `Excessive URL links in inquiry body (${urlMatches.length} URLs)`;
    }
    if (/bit\.ly|tinyurl\.com|cutt\.ly|goo\.gl|t\.co/i.test(payload.message)) {
        score += 35;
        reason = 'Obfuscated link shortener detected in message';
    }
    if (/(.)\1{4,}/i.test(payload.name) || /(.)\1{4,}/i.test(payload.message)) {
        score += 30;
        reason = 'Repetitive keystroke character spam';
    }
    if (payload.message.trim().length < 8) {
        score += 25;
        reason = 'Message too short';
    }
    const isSpam = score >= 50;
    return {
        isSpam,
        isBot: score >= 90,
        isRateLimited: false,
        reason,
        score
    };
}
