import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palmtree, Waves, Building, UtensilsCrossed } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { DestinationItineraries } from "@/components/sections/DestinationItineraries";

export default function ZanzibarPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/zanzibar/zanzibar-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-cyan-600">Zanzibar Archipelago</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            The Spice Island Paradise
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Pristine white-sand beaches, turquoise waters, historic Stone Town, and rich Swahili culture. The perfect post-safari relaxation.
                        </p>
                        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                            <Link href="/contact">Plan Zanzibar Escape</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">Zanzibar Experiences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Waves, title: "Beach Relaxation", desc: "Pristine white sands and crystal waters" },
                            { icon: Building, title: "Stone Town", desc: "UNESCO heritage site with rich history" },
                            { icon: UtensilsCrossed, title: "Spice Tours", desc: "Discover cloves, vanilla, and cinnamon" },
                            { icon: Palmtree, title: "Water Sports", desc: "Snorkeling, diving, and dhow cruises" }
                        ].map((exp, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <exp.icon className="text-cyan-600" size={28} />
                                    </div>
                                    <h3 className="font-bold mb-2">{exp.title}</h3>
                                    <p className="text-sm text-muted-foreground">{exp.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <DestinationItineraries location="Zanzibar" title="Zanzibar Vacation Packages" subtitle="From romantic honeymoons to cultural escapes." />

            <ImageGallery
                title="Zanzibar Gallery"
                description="Turquoise waters, white sands, and the rich culture of the Spice Island."
                images={[
                    { src: "/images/destinations/zanzibar/zanzibar-1.webp", alt: "Zanzibar Beach", caption: "Crystal clear Indian Ocean" },
                    { src: "/images/destinations/zanzibar/zanzibar-2.webp", alt: "Stone Town", caption: "Historic Stone Town streets" },
                    { src: "/images/destinations/zanzibar/zanzibar-3.webp", alt: "Zanzibar Dhow", caption: "Traditional dhow at sunset" },
                    { src: "/images/destinations/zanzibar/zanzibar-4.webp", alt: "Zanzibar Spices", caption: "Freshly harvested spices" },
                    { src: "/images/destinations/zanzibar/zanzibar-5.webp", alt: "Underwater Zanzibar", caption: "Vibrant marine life" },
                    { src: "/images/destinations/zanzibar/zanzibar-6.webp", alt: "Zanzibar Resort", caption: "Luxury beach relaxation" },
                    { src: "/images/destinations/zanzibar/zanzibar-7.webp", alt: "Rock Restaurant", caption: "Iconic dining experience" },
                    { src: "/images/destinations/zanzibar/zanzibar-8.webp", alt: "Zanzibar Door", caption: "Ornate carved wooden doors" },
                    { src: "/images/destinations/zanzibar/zanzibar-9.webp", alt: "Zanzibar Sunset", caption: "Golden hour on the coast" },
                ]}
            />

            <section className="py-24 bg-cyan-50 dark:bg-cyan-900/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Combine Safari & Beach</h2>
                    <p className="text-xl text-muted-foreground mb-10">The perfect way to end your Tanzania adventure</p>
                    <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
                        <Link href="/contact">Design Safari + Beach Package</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
