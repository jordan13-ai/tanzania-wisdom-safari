// ... imports ...
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static params if you want static generation, but standard dynamic is fine for now
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Post Header/Hero */}
            <div className="relative h-[50vh] min-h-[400px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <Badge className="bg-primary text-primary-foreground mb-6 hover:bg-primary px-4 py-1 text-sm font-medium">
                        {post.category}
                    </Badge>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-sm md:text-base text-gray-200">
                        <div className="flex items-center gap-2">
                            <span className="bg-white/20 p-2 rounded-full"><User size={16} /></span>
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-white/20 p-2 rounded-full"><Calendar size={16} /></span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container max-w-4xl mx-auto px-4 py-16">
                {/* Back Link */}
                <div className="mb-8">
                    <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft size={18} className="mr-2" /> Back to All Articles
                    </Link>
                </div>

                {/* Content */}
                <article className="prose prose-lg md:prose-xl max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-img:rounded-xl prose-a:text-primary hover:prose-a:text-primary/80">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>

                {/* divider */}
                <div className="h-px bg-border my-12" />

                {/* Call to Action */}
                <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-white">
                        Inspired to visit Tanzania?
                    </h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Turn this story into your reality. Start planning your custom safari adventure with our local experts today.
                    </p>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-white hover:text-secondary font-bold text-lg px-8 py-6" asChild>
                        <Link href="/request-quote">Plan Your Trip Now</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
