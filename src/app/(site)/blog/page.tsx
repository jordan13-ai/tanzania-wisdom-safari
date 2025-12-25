// ... imports ...
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogListingPage() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[400px]">
                <Image
                    src="/images/destinations/serengeti/serengeti-1.webp"
                    alt="Tanzania Safari Blog"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                        Wonders of Tanzania
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl font-light">
                        Explore stories, facts, and travel guides about the most beautiful country in Africa.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                            <Link href={`/blog/${post.slug}`} className="relative h-60 w-full overflow-hidden block group">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                                        {post.category}
                                    </Badge>
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                <Link href={`/blog/${post.slug}`} className="group">
                                    <h2 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>
                                </Link>

                                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                                >
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
