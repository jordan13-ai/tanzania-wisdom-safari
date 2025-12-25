import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, Users, Camera, Check } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";

const stats = { size: "264 km²", depth: "610 meters", wildlife: "25,000+ large animals", density: "Highest in Africa" };

export default function NgorongoroPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/ngorongoro/ngorongoro-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-green-600">Ngorongoro Crater</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Africa's Garden of Eden
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            A UNESCO World Heritage Site. The world's largest inactive volcanic caldera with the highest density of predators in Africa.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Visit Ngorongoro</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-primary/10">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {Object.entries(stats).map(([key, value]) => (
                            <div key={key}>
                                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                                <div className="text-sm text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">The Crater Experience</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Descend 600 meters into this natural amphitheater where 25,000 large animals live in a self-contained ecosystem. See the Big 5 in a single day - almost guaranteed.
                            </p>
                            <ul className="space-y-3">
                                {["Big 5 in one location", "Black rhino sightings", "Flamingo-filled soda lake", "Year-round water source", "Spectacular crater views"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/ngorongoro/ngorongoro-1.webp" alt="Crater View" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Ngorongoro Gallery"
                description="Explore the breathtaking landscapes and wildlife of the world's largest caldera."
                images={[
                    { src: "/images/destinations/ngorongoro/ngorongoro-2.webp", alt: "Ngorongoro Wildlife", caption: "Wildlife on the crater floor" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-3.webp", alt: "Rhino in Ngorongoro", caption: "The rare black rhino" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-4.webp", alt: "Flamingos in Crater", caption: "Soda lake blooming with flamingos" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-5.webp", alt: "Lions in Ngorongoro", caption: "Pride of lions in the tall grass" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-6.webp", alt: "Zebras in Crater", caption: "Zebras grazing in the natural amphitheater" },
                    { src: "/images/destinations/ngorongoro/ngorongoro-7.webp", alt: "Aerial Crater View", caption: "Breathtaking view from the rim" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Explore Ngorongoro Crater</h2>
                    <p className="text-xl text-muted-foreground mb-10">Perfect for day trips or multi-day safaris</p>
                    <Button size="lg" asChild><Link href="/contact">Plan My Visit</Link></Button>
                </div>
            </section>
        </div>
    );
}
