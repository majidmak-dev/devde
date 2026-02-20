'use client';

import { ChevronRight } from 'lucide-react';

interface FormattedContentProps {
    content: string;
    className?: string;
    isUser?: boolean;
}

export function FormattedContent({ content, className = "", isUser = false }: FormattedContentProps) {
    if (isUser) return <p className={className}>{content}</p>;

    const lines = content.split('\n');

    return (
        <div className={`space-y-3 ${className}`}>
            {lines.map((line, i) => {
                if (!line.trim()) return <div key={i} className="h-1" />;

                // Header check (e.g. ### Header)
                if (line.trim().startsWith('###')) {
                    return <h4 key={i} className="text-sm font-black italic text-white mt-4 mb-2 tracking-tighter uppercase opacity-90">{line.replace('###', '').trim()}</h4>;
                }

                // List item check (e.g. - item or * item)
                if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                    const text = line.trim().substring(2);
                    return (
                        <div key={i} className="flex items-start space-x-2 group pl-2">
                            <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                            <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<b class="text-white not-italic">$1</b>') }} />
                        </div>
                    );
                }

                // Default paragraph with bolding support
                return (
                    <p key={i} dangerouslySetInnerHTML={{
                        __html: line.replace(/\*\*(.*?)\*\*/g, '<b class="text-white not-italic">$1</b>')
                    }} />
                );
            })}
        </div>
    );
}
