import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TreePine, Users, Camera } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";

export default function TarangirePage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/tarangire/tarangire-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-orange-600">Tarangire National Park</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Land of Giants
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Home to Tanzania's largest elephant herds and iconic baobab trees. A dry season paradise.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Visit Tarangire</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Why Tarangire?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: "Elephant Paradise", desc: "Herds of 300+ elephants during dry season" },
                            { icon: TreePine, title: "Ancient Baobabs", desc: "Iconic trees up to 3,000 years old" },
                            { icon: Camera, title: "Bird Watching", desc: "550+ species including rare endemics" }
                        ].map((feature, i) => (
                            <Card key={i} className="text-center">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="text-orange-600" size={28} />
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Tarangire Gallery"
                description="Experience the land of giants, ancient baobabs, and diverse birdlife."
                images={[
                    { src: "/images/destinations/tarangire/tarangire-1.webp", alt: "Tarangire Elephant", caption: "Elephant herds in Tarangire" },
                    { src: "/images/destinations/tarangire/tarangire-2.webp", alt: "Tarangire Baobab", caption: "Majestic baobab tree" },
                    { src: "/images/destinations/tarangire/tarangire-3.webp", alt: "Tarangire Wildlife", caption: "Wildlife at the river" },
                    { src: "/images/destinations/tarangire/tarangire-4.webp", alt: "Tarangire Landscape", caption: "Savannah views" },
                    { src: "/images/destinations/tarangire/tarangire-5.webp", alt: "Tarangire Zebras", caption: "Zebras grazing" },
                    { src: "/images/destinations/tarangire/tarangire-6.webp", alt: "Tarangire Birds", caption: "Colorful birdlife" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Experience Tarangire</h2>
                    <p className="text-xl text-muted-foreground mb-10">Best visited June-October for massive elephant concentrations</p>
                    <Button size="lg" asChild><Link href="/contact">Plan Safari</Link></Button>
                </div>
            </section>
        </div>
    );
}
