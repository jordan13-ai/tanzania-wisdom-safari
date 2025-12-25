import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Clock, MapPin, Star, Calendar, Tent, Building2, Heart, Sparkles } from "lucide-react";

const safariTypes = [
    {
        title: "Mid-Range Safaris",
        slug: "mid-range",
        description: "Comfortable tented camps and lodges offering authentic experiences at excellent value. Perfect balance of comfort and adventure.",
        image: "/images/destinations/serengeti/serengeti-1.webp",
        priceFrom: "$1,850",
        duration: "5-7 days",
        icon: Tent,
        features: ["Comfortable tented camps", "Quality game drives", "Experienced guides", "Great value"]
    },
    {
        title: "Luxury Safaris",
        slug: "luxury",
        description: "Exclusive 5-star accommodations, gourmet dining, and private game drives for the discerning traveler.",
        image: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        priceFrom: "$3,500",
        duration: "6-10 days",
        icon: Building2,
        features: ["5-star lodges", "Private vehicles", "Gourmet meals", "Premium service"]
    },
    {
        title: "Migration Safaris",
        slug: "migration",
        description: "Witness the greatest show on earth. Follow massive herds of wildebeest across the Serengeti.",
        image: "/images/destinations/migration/migration-3.webp",
        priceFrom: "$2,400",
        duration: "6-8 days",
        icon: Calendar,
        features: ["River crossings", "Predator action", "Best timing", "Expert tracking"]
    },
    {
        title: "Cultural Experience",
        slug: "cultural",
        description: "Go beyond wildlife. Meet Maasai, Hadzabe, and Datoga tribes for true cultural immersion.",
        image: "/images/destinations/serengeti/serengeti-3.webp",
        priceFrom: "$1,650",
        duration: "4-6 days",
        icon: Users,
        features: ["Village visits", "Traditional ceremonies", "Local guides", "Authentic interactions"]
    },
    {
        title: "Honeymoon Safaris",
        slug: "honeymoon",
        description: "Romantic escapes tailored for two. Private dinners, bush sunsets, and unforgettable moments.",
        image: "/images/destinations/zanzibar/zanzibar-1.webp",
        priceFrom: "$4,200",
        duration: "7-10 days",
        icon: Heart,
        features: ["Private experiences", "Romantic setups", "Champagne sunsets", "Couples spa"]
    },
    {
        title: "Tented Camp Safaris",
        slug: "tented-camps",
        description: "Stay in the heart of the action. Canvas walls mean you hear the sounds of the African night.",
        image: "/images/destinations/serengeti/serengeti-4.webp",
        priceFrom: "$2,100",
        duration: "5-7 days",
        icon: Tent,
        features: ["Authentic camping", "Close to wildlife", "Comfortable beds", "En-suite facilities"]
    },
    {
        title: "Lodge Safaris",
        slug: "lodge",
        description: "Traditional structures with solid walls, swimming pools, and robust amenities.",
        image: "/images/destinations/ngorongoro/ngorongoro-2.webp",
        priceFrom: "$2,300",
        duration: "5-8 days",
        icon: Building2,
        features: ["Solid structures", "Swimming pools", "Full amenities", "Family-friendly"]
    },
    {
        title: "Safari Planning Guide",
        slug: "guide",
        description: "Expert advice on when to go, what to pack, and which parks to visit for your interests.",
        image: "/images/destinations/tarangire/tarangire-1.webp",
        priceFrom: "Free",
        duration: "Read time: 15 min",
        icon: Sparkles,
        features: ["Best times", "Packing lists", "Park guides", "Expert tips"]
    }
];

const popularPackages = [
    {
        name: "Classic Northern Circuit",
        days: 6,
        parks: ["Tarangire", "Serengeti", "Ngorongoro"],
        price: "$2,100",
        image: "/images/destinations/serengeti/serengeti-5.webp"
    },
    {
        name: "Great Migration Special",
        days: 7,
        parks: ["Serengeti", "Ngorongoro", "Lake Manyara"],
        price: "$2,650",
        image: "/images/destinations/migration/migration-4.webp"
    },
    {
        name: "Tanzania Explorer",
        days: 10,
        parks: ["Tarangire", "Serengeti", "Ngorongoro", "Lake Manyara"],
        price: "$3,400",
        image: "/images/destinations/serengeti/serengeti-7.webp"
    }
];

export default function SafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/hero/slide-1.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground text-base px-4 py-2">
                            Tanzania Safaris
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Experience the Wild Heart of Africa
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            From the Great Migration to private luxury lodges, discover the perfect safari adventure tailored to your dreams
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="/request-quote">Plan My Safari</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 text-white border-2 border-white hover:bg-white hover:text-black" asChild>
                                <Link href="#safari-types">Explore Options</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 bg-primary/10">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">8</div>
                            <div className="text-sm text-muted-foreground">National Parks</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">Big 5</div>
                            <div className="text-sm text-muted-foreground">Guaranteed Sightings</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">4x4</div>
                            <div className="text-sm text-muted-foreground">Safari Vehicles</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-sm text-muted-foreground">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Safari Types */}
            <section id="safari-types" className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Choose Your Safari Style
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Every traveler is unique. Find the perfect safari experience that matches your style, budget, and dreams
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {safariTypes.map((safari, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                                <div className="relative h-56">
                                    <Image
                                        src={safari.image}
                                        alt={safari.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                            <safari.icon className="text-primary" size={24} />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif">{safari.title}</CardTitle>
                                    <p className="text-muted-foreground">{safari.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Clock size={16} />
                                            <span>{safari.duration}</span>
                                        </div>
                                        <div className="text-primary font-bold text-lg">
                                            From {safari.priceFrom}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {safari.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Star size={12} className="text-primary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full" asChild>
                                        <Link href={`/all-safaris/${safari.slug}`}>
                                            Learn More <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Packages */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Popular Safari Packages
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Our most-booked itineraries, loved by hundreds of travelers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {popularPackages.map((pkg, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative h-64">
                                    <Image
                                        src={pkg.image}
                                        alt={pkg.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                                        {pkg.days} Days
                                    </Badge>
                                </div>
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-xl mb-3">{pkg.name}</h3>
                                    <div className="flex items-start gap-2 mb-4">
                                        <MapPin size={16} className="text-primary shrink-0 mt-1" />
                                        <div className="text-sm text-muted-foreground">
                                            {pkg.parks.join(" • ")}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-sm text-muted-foreground">From</div>
                                            <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                                        </div>
                                        <Button asChild>
                                            <Link href="/customize-trip">Book Now</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            What's Included in Our Safaris
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-600">✓ Included</h3>
                            <ul className="space-y-3">
                                {[
                                    "Professional safari guide",
                                    "4x4 safari vehicle with pop-up roof",
                                    "All park entrance fees",
                                    "Accommodation as per itinerary",
                                    "All meals during safari",
                                    "Bottled water throughout",
                                    "Airport transfers",
                                    "Game drives as per itinerary",
                                    "Binoculars for wildlife viewing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Star size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-orange-600">✗ Not Included</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                {[
                                    "International flights",
                                    "Tanzania visa ($50-100)",
                                    "Travel insurance (mandatory)",
                                    "Tips for guide and staff",
                                    "Personal expenses & souvenirs",
                                    "Alcoholic beverages",
                                    "Optional activities",
                                    "Laundry services"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-orange-600 shrink-0">✗</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Ready for Your Safari Adventure?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let us create a custom itinerary tailored to your dreams and budget
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/customize-trip">Get Free Custom Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/destinations">Explore Destinations</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
