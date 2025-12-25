import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Users, Camera, Binoculars, Mountain } from "lucide-react";

const destinations = [
    {
        title: "Serengeti National Park",
        slug: "serengeti",
        description: "The quintessential African savannah. Famous for the Great Migration and high density of predators.",
        image: "/images/destinations/serengeti/serengeti-1.webp",
        bestFor: "Migration | Big Cats | Photography",
        size: "14,763 km²",
        wildlife: "Big 5, Migration herds",
        bestTime: "Year-round",
        icon: Binoculars
    },
    {
        title: "Ngorongoro Crater",
        slug: "ngorongoro",
        description: "UNESCO World Heritage site. The world's largest inactive volcanic caldera, teeming with wildlife.",
        image: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        bestFor: "Big 5 | Crater Views | Day Trips",
        size: "264 km²",
        wildlife: "Densest predator population",
        bestTime: "Year-round",
        icon: Mountain
    },
    {
        title: "Tarangire National Park",
        slug: "tarangire",
        description: "Known for massive elephant herds and iconic baobab trees. A dry season gem.",
        image: "/images/destinations/tarangire/tarangire-1.webp",
        bestFor: "Elephants | Baobabs | Bird Watching",
        size: "2,850 km²",
        wildlife: "Largest elephant herds",
        bestTime: "June-October",
        icon: Camera
    },
    {
        title: "Lake Manyara National Park",
        slug: "manyara",
        description: "Famous for tree-climbing lions and vast flocks of pink flamingos along the lake shores.",
        image: "/images/destinations/lake-manyara/lake-manyara-1.webp",
        bestFor: "Tree-climbing Lions | Flamingos | Scenic Views",
        size: "330 km²",
        wildlife: "Tree-climbing lions, flamingos",
        bestTime: "Year-round",
        icon: Binoculars
    },
    {
        title: "Zanzibar Archipelago",
        slug: "zanzibar",
        description: "The Spice Island. Pristine white sands, historic Stone Town, and crystal clear Indian Ocean waters.",
        image: "/images/destinations/zanzibar/zanzibar-1.webp",
        bestFor: "Beaches | Culture | Relaxation",
        size: "2,461 km²",
        wildlife: "Marine life, dolphins",
        bestTime: "June-October, December-February",
        icon: Users
    },
    {
        title: "Arusha National Park",
        slug: "arusha-park",
        description: "Home to Mount Meru. Diverse park offering walking safaris, canoeing, and rich birdlife.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-12.webp",
        bestFor: "Walking Safaris | Mount Meru | Day Trips",
        size: "552 km²",
        wildlife: "Colobus monkeys, giraffes",
        bestTime: "Year-round",
        icon: Mountain
    },
    {
        title: "Nyerere National Park",
        slug: "nyerere",
        description: "Africa's largest stand-alone park. A wilderness of oxbow lakes, riverine forests, and vast savannahs.",
        image: "/images/destinations/nyerere/Selous-Game-Reserve_Elephants.webp",
        bestFor: "Boat Safaris | Wild Dogs | Solitude",
        size: "30,893 km²",
        wildlife: "Largest elephant population",
        bestTime: "June-October",
        icon: Binoculars
    },
    {
        title: "Ruaha National Park",
        slug: "ruaha",
        description: "Rugged scenery and massive predator populations. The remote heart of Tanzania.",
        image: "/images/destinations/ruaha/Ruaha-NP-1900x1000-1.webp",
        bestFor: "Predators | Baobabs | Wilderness",
        size: "20,226 km²",
        wildlife: "Massive lion & leopard populations",
        bestTime: "June-October",
        icon: Camera
    }
];

export default function DestinationsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/hero/slide-3.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground text-base px-4 py-2">
                            Tanzania Destinations
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Explore the Jewels of Tanzania
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            From the endless plains of the Serengeti to the turquoise waters of Zanzibar, discover our country's most iconic destinations
                        </p>
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Plan My Trip</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Iconic Destinations
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Each destination offers unique landscapes, wildlife, and experiences
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((dest, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                                <div className="relative h-64">
                                    <Image
                                        src={dest.image}
                                        alt={dest.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                            <dest.icon className="text-primary" size={24} />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif">{dest.title}</CardTitle>
                                    <p className="text-muted-foreground">{dest.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 mb-4 text-sm">
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <MapPin size={16} className="text-primary" />
                                            <span>{dest.size}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Binoculars size={16} className="text-primary" />
                                            <span>{dest.wildlife}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Clock size={16} className="text-primary" />
                                            <span>Best: {dest.bestTime}</span>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="mb-4 w-full justify-center py-2">
                                        {dest.bestFor}
                                    </Badge>
                                    <Button className="w-full" asChild>
                                        <Link href={`/destinations/${dest.slug}`}>
                                            Explore <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section Placeholder */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold mb-6">
                            Tanzania at a Glance
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            All our destinations are easily accessible from Arusha, the safari capital
                        </p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                            <div className="text-center text-muted-foreground">
                                <MapPin size={48} className="mx-auto mb-4 text-primary" />
                                <p>Interactive map coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Ready to Explore Tanzania?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let us create the perfect itinerary combining your favorite destinations
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Get Custom Itinerary</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/safaris">View Safari Packages</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
