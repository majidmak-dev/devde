import { notFound } from 'next/navigation';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';
import { Clock, User, ArrowLeft, ArrowRight, Sparkles, CheckCircle2, HelpCircle, Layers, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GoogleAd from '@/components/google-ad';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return {};

    const title = `${post.title} | DevDesigns Blog`;
    const description = post.excerpt;
    const url = `https://devdesigns.net/blog/${post.slug}`;
    const allKeywords = [
        post.category,
        'DevDesigns',
        'Enterprise Digital Agency',
        ...(post.seoKeywords || []),
        ...post.title.split(' ').slice(0, 5)
    ].join(', ');

    return {
        title,
        description,
        keywords: allKeywords,
        authors: [{ name: post.author }],
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            siteName: 'DevDesigns',
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author],
            tags: [post.category, 'DevDesigns', 'Web Development', ...(post.seoKeywords || [])],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            site: '@devdesigns',
        },
    };
}

async function fetchPostImage(query: string): Promise<string | null> {
    try {
        const backendUrl = process.env.BACKEND_URL ||
            (process.env.NODE_ENV === 'development' ? 'http://localhost:5001' : 'https://devde-backend.vercel.app');
        const res = await fetch(
            `${backendUrl}/api/images/search?query=${encodeURIComponent(query)}&limit=1`,
            { next: { revalidate: 86400 } } // cache for 24 hours
        );
        if (!res.ok) return null;
        const data = await res.json();
        return data?.[0]?.url ?? null;
    } catch {
        return null;
    }
}

function formatMarkdownContent(rawText: string): string {
    // 1. Code blocks: ```lang\ncode\n```
    let formatted = rawText.replace(/```([a-zA-Z]*)\n([\s\S]*?)```/g, (_match, _lang, code) => {
        const escaped = code
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        return `<pre class="bg-slate-950/90 p-5 rounded-2xl border border-white/10 overflow-x-auto text-sm text-emerald-400 font-mono my-6 leading-relaxed"><code>${escaped}</code></pre>`;
    });

    // 2. Tables
    formatted = formatted.replace(/((\|.*\|\r?\n)+)/g, (match) => {
        const lines = match.trim().split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        if (lines.length < 2) return match;
        
        const parseRow = (rowStr: string) => 
            rowStr.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
        
        const headerCells = parseRow(lines[0]);
        const bodyLines = lines.slice(2);
        
        let tableHtml = '<div class="overflow-x-auto my-8"><table class="w-full border-collapse border border-white/10 text-sm text-left rounded-xl overflow-hidden">';
        tableHtml += '<thead class="bg-white/[0.06] text-white uppercase text-xs tracking-wider"><tr>';
        headerCells.forEach(cell => {
            tableHtml += `<th class="border border-white/10 px-4 py-3 font-black">${cell}</th>`;
        });
        tableHtml += '</tr></thead><tbody class="divide-y divide-white/5">';
        bodyLines.forEach((bLine, i) => {
            const cells = parseRow(bLine);
            const rowBg = i % 2 === 0 ? 'bg-white/[0.01]' : 'bg-white/[0.03]';
            tableHtml += `<tr class="${rowBg} hover:bg-primary/5 transition-colors">`;
            cells.forEach(c => {
                tableHtml += `<td class="border border-white/10 px-4 py-3 text-white/80">${c}</td>`;
            });
            tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>';
        return tableHtml;
    });

    // 3. Headings
    formatted = formatted.replace(/^### (.*$)/gim, '<h3 class="text-2xl font-black italic text-white mt-10 mb-4 tracking-tight">$1</h3>');
    formatted = formatted.replace(/^## (.*$)/gim, '<h2 class="text-3xl font-black italic text-white mt-14 mb-6 tracking-tight pb-3 border-b border-white/10">$1</h2>');

    // 4. Bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-bold">$1</strong>');

    // 5. Links
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline font-semibold">$1</a>');

    // 6. Unordered lists
    formatted = formatted.replace(/(?:^|\n)- (.*)/g, '<li class="text-white/80 ml-6 list-disc mb-2">$1</li>');

    // 7. Paragraph line breaks
    formatted = formatted.replace(/\n\n/g, '<br/><br/>');

    return formatted;
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) return notFound();

    const imageUrl = await fetchPostImage(post.query);
    const pageUrl = `https://devdesigns.net/blog/${post.slug}`;
    const isoDate = new Date(post.date).toISOString();

    // Schema.org Article / TechArticle
    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        '@id': `${pageUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        url: pageUrl,
        datePublished: isoDate,
        dateModified: isoDate,
        author: {
            '@type': 'Person',
            name: post.author,
            url: 'https://devdesigns.net/about',
        },
        publisher: {
            '@type': 'Organization',
            name: 'DevDesigns',
            url: 'https://devdesigns.net',
            logo: {
                '@type': 'ImageObject',
                url: 'https://devdesigns.net/icon.svg',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': pageUrl,
        },
        keywords: post.seoKeywords ? post.seoKeywords.join(', ') : post.category,
        articleSection: post.category,
        inLanguage: 'en-US',
    };

    // Schema.org FAQPage if FAQs exist
    const faqJsonLd = post.faqs && post.faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: post.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    } : null;

    // Schema.org BreadcrumbList
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://devdesigns.net',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
                item: 'https://devdesigns.net/blog',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: post.title,
                item: pageUrl,
            },
        ],
    };

    return (
        <article className="min-h-screen pt-32 pb-20">
            {/* JSON-LD Structured Data Injections for AEO & Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="container mx-auto px-4 max-w-5xl">
                {/* Back button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-12"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    BACK TO BLOG
                </Link>

                {/* Header */}
                <header className="space-y-8 mb-16">
                    <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-primary uppercase tracking-widest">
                        <span className="bg-primary/10 border border-primary/20 px-3.5 py-1 rounded-full">{post.category}</span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{post.date}</span>
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-emerald-400 flex items-center gap-1 text-xs">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            AEO / GEO Verified
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter leading-tight italic">
                        {post.title}
                    </h1>

                    <div className="flex items-center space-x-6 text-sm text-muted-foreground pt-4 border-t border-white/5">
                        <div className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</div>
                        <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {post.readTime}</div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="aspect-[21/9] rounded-3xl overflow-hidden mb-16 relative bg-slate-900 border border-white/5 shadow-2xl">
                    {imageUrl ? (
                        <>
                            <img
                                src={imageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                        </>
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-slate-900 to-slate-950 flex items-center justify-center">
                            <h2 className="text-4xl font-black italic text-white/10 tracking-widest uppercase">{post.category}</h2>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8 prose prose-invert prose-lg max-w-none">
                        <p className="text-xl italic text-muted-foreground leading-relaxed">
                            {post.excerpt}
                        </p>

                        {/* AEO Quick Answer / AI Summary Callout */}
                        {post.directAnswer && (
                            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/30 my-8 space-y-3 relative overflow-hidden">
                                <div className="flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
                                    <Sparkles className="w-4 h-4" />
                                    <span>AEO Quick Answer • AI Overview Verified</span>
                                </div>
                                <p className="text-base sm:text-lg text-white/90 leading-relaxed font-medium">
                                    {post.directAnswer}
                                </p>
                            </div>
                        )}

                        {/* Key Takeaways & Statistical Benchmarks */}
                        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 my-8 space-y-4">
                                <h3 className="text-lg font-black tracking-tight text-white uppercase flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                    Key Takeaways &amp; Statistical Benchmarks
                                </h3>
                                <ul className="space-y-3 pt-2">
                                    {post.keyTakeaways.map((item, idx) => (
                                        <li key={idx} className="text-sm text-white/80 flex items-start gap-3">
                                            <span className="text-primary font-mono font-bold shrink-0">0{idx + 1}.</span>
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <GoogleAd slot="blog_post_top" />

                        {/* Main Article Body with Formatted Markdown */}
                        <div
                            className="space-y-6 text-white/80 leading-loose"
                            dangerouslySetInnerHTML={{ __html: formatMarkdownContent(post.content) }}
                        />

                        {/* AEO FAQ Section for Natural Language Search */}
                        {post.faqs && post.faqs.length > 0 && (
                            <section className="mt-16 pt-12 border-t border-white/10 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-primary text-xs font-bold uppercase tracking-widest">
                                        <HelpCircle className="w-4 h-4" />
                                        <span>Frequently Asked Questions</span>
                                    </div>
                                    <h2 className="text-3xl font-black italic text-white tracking-tight">
                                        AEO &amp; Natural Language Queries
                                    </h2>
                                </div>
                                <div className="space-y-4">
                                    {post.faqs.map((faq, i) => (
                                        <div
                                            key={i}
                                            className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2 hover:border-primary/30 transition-colors"
                                        >
                                            <h3 className="text-lg font-bold text-white flex items-start gap-2">
                                                <span className="text-primary font-mono">Q.</span>
                                                <span>{faq.question}</span>
                                            </h3>
                                            <p className="text-sm text-white/70 leading-relaxed pl-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    
                        <GoogleAd slot="blog_post_bottom" />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Related Services Links */}
                        <div className="glass p-6 rounded-[2rem] border border-white/10 space-y-4">
                            <h3 className="text-lg font-black italic text-white flex items-center gap-2">
                                <Layers className="w-4 h-4 text-primary" />
                                Core Enterprise Hubs
                            </h3>
                            <nav className="flex flex-col space-y-2 text-sm">
                                <Link
                                    href="/aeo-geo"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-primary/10 hover:text-primary transition-colors border border-white/5"
                                >
                                    <span>AEO &amp; GEO Framework</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                                <Link
                                    href="/seo-growth"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-primary/10 hover:text-primary transition-colors border border-white/5"
                                >
                                    <span>SEO &amp; Growth Engine</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                                <Link
                                    href="/web-development"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-primary/10 hover:text-primary transition-colors border border-white/5"
                                >
                                    <span>Enterprise Web Apps</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                                <Link
                                    href="/powerapps"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-primary/10 hover:text-primary transition-colors border border-white/5"
                                >
                                    <span>Microsoft PowerApps</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                                <Link
                                    href="/hosting"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-primary/10 hover:text-primary transition-colors border border-white/5"
                                >
                                    <span>Managed Cloud Hosting</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                                <Link
                                    href="/saas-development"
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-primary/10 hover:text-primary transition-colors border border-white/5"
                                >
                                    <span>SaaS Development</span>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </Link>
                            </nav>
                        </div>

                        {/* Sidebar CTA */}
                        <div className="glass p-8 rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent sticky top-32">
                            <h3 className="text-2xl font-black italic mb-4">Ready to Innovate?</h3>
                            <p className="text-sm text-muted-foreground mb-8 italic leading-relaxed">
                                Don&apos;t let your digital infrastructure hold you back. Our enterprise team is ready to scale your vision.
                            </p>
                            <Link href="/contact" className="block">
                                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-black rounded-xl h-14 shadow-lg shadow-primary/20 group">
                                    START A PROJECT
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
