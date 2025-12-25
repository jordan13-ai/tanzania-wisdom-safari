import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Binoculars, Camera, Check } from "lucide-react";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { DestinationItineraries } from "@/components/sections/DestinationItineraries";

const stats = { size: "14,763 km²", established: "1951", wildlife: "3,000+ lions, 1,000+ leopards", visitors: "350,000/year" };
const bestTime = [
    { period: "June-October", reason: "Dry season - best game viewing", rating: 5 },
    { period: "January-March", reason: "Calving season - 8,000 births daily", rating: 5 },
    { period: "November-May", reason: "Green season - fewer crowds, lush landscapes", rating: 3 }
];

export default function SerengetiPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/serengeti/serengeti-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-amber-600">Serengeti National Park</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            The Endless Plains
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Home to the Great Migration and Africa's highest concentration of predators. The quintessential African savannah experience.
                        </p>
                        <Button size="lg" asChild><Link href="/request-quote">Plan Serengeti Safari</Link></Button>
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
                    <h2 className="text-4xl font-serif font-bold mb-12">Why Visit Serengeti?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">The Great Migration</h3>
                            <p className="text-muted-foreground mb-6">
                                Witness 2 million wildebeest, zebras, and gazelles on their annual 800km circular journey. River crossings, predator action, and the calving season make this nature's greatest spectacle.
                            </p>
                            <h3 className="text-2xl font-bold mb-4">Big Cat Capital</h3>
                            <p className="text-muted-foreground">
                                Serengeti has Africa's highest density of lions (3,000+) and leopards (1,000+). Cheetahs hunt on the open plains, making this a photographer's paradise.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/serengeti/serengeti-1.webp" alt="Serengeti Lions" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>


            <DestinationItineraries location="Serengeti" title="Top Serengeti Safaris" />

            <ImageGallery
                title="Serengeti Gallery"
                description="A glimpse into the endless plains and its magnificent inhabitants."
                images={[
                    { src: "/images/destinations/migration/migration-7.webp", alt: "Serengeti Migration", caption: "The Great Migration in full swing" },
                    { src: "/images/destinations/serengeti/serengeti-3.webp", alt: "Serengeti Leopard", caption: "A leopard resting on a branch" },
                    { src: "/images/destinations/serengeti/serengeti-4.webp", alt: "Serengeti Sunset", caption: "Golden hour over the savannah" },
                    { src: "/images/destinations/serengeti/serengeti-5.webp", alt: "Serengeti Cheetah", caption: "Cheetah on the hunt" },
                    { src: "/images/destinations/serengeti/serengeti-6.webp", alt: "Serengeti Elephant", caption: "Gentle giants of the plains" },
                    { src: "/images/destinations/migration/migration-8.webp", alt: "Serengeti Landscape", caption: "Iconic acacia trees" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold mb-12 text-center">When to Visit</h2>
                    <div className="space-y-4">
                        {bestTime.map((time, i) => (
                            <Card key={i}>
                                <CardContent className="pt-6">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{time.period}</h3>
                                            <p className="text-muted-foreground">{time.reason}</p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, j) => (
                                                <div key={j} className={`w-3 h-3 rounded-full ${j < time.rating ? 'bg-amber-500' : 'bg-gray-300'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Experience the Serengeti</h2>
                    <p className="text-xl text-muted-foreground mb-10">Let us create the perfect Serengeti itinerary for you</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild><Link href="/request-quote">Get Custom Quote</Link></Button>
                        <Button size="lg" variant="outline" asChild><Link href="/all-safaris/migration">View Migration Safaris</Link></Button>
                    </div>
                </div>
            </section>
        </div >
    );
}
