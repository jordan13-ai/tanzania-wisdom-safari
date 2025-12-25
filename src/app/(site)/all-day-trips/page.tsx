import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, DollarSign, Users, MapPin, Coffee, Droplets, Mountain, Camera, Heart } from "lucide-react";

const dayTrips = [
    {
        title: "Kilimanjaro Day Hike",
        slug: "kili-hiking",
        description: "Hike to Mandara Hut through rainforest, or explore Materuni Waterfalls and Lake Chala. Multiple options available!",
        image: "/images/destinations/kilimanjaro/kilimanjaro-4.webp",
        duration: "Half to full day",
        difficulty: "Easy-Moderate",
        price: "$50-250",
        highlights: ["Mandara Hut", "Materuni Falls", "Lake Chala", "Hot Springs"],
        icon: Mountain
    },
    {
        title: "West Kilimanjaro (Shira Plateau)",
        slug: "west-kilimanjaro",
        description: "Explore Kilimanjaro's western alpine wonderland. Trek across the stunning Shira Plateau at 3,500-3,800m elevation.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp",
        duration: "Full day (8-10 hours)",
        difficulty: "Moderate",
        price: "$240-453",
        highlights: ["Shira Plateau", "Cathedral Point", "Alpine landscape", "High altitude"],
        icon: Mountain
    },
    {
        title: "One-Day Safari",
        slug: "one-day-safari",
        description: "Visit Arusha National Park, Tarangire, or Ngorongoro for a full game drive experience in one day.",
        image: "/images/destinations/ngorongoro/ngorongoro-5.webp",
        duration: "10-12 hours",
        difficulty: "Easy",
        price: "$200-350",
        highlights: ["Game drives", "Big 5 viewing", "Packed lunch", "Professional guide"],
        icon: Camera
    },
    {
        title: "Chemka Hot Springs",
        slug: "moshi-excursions",
        description: "Swim in crystal-clear, naturally heated springs surrounded by lush vegetation. Perfect for relaxation.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-5.webp",
        duration: "4-5 hours",
        difficulty: "Easy",
        price: "$80",
        highlights: ["Natural hot springs", "Swimming", "Picnic lunch", "Scenic drive"],
        icon: Droplets
    },
    {
        title: "Cultural Village Tours",
        slug: "cultural-tours",
        description: "Visit Maasai, Chagga, or Meru villages. Learn traditional customs, see homesteads, and participate in daily activities.",
        image: "/images/destinations/tarangire/tarangire-3.webp",
        duration: "4-6 hours",
        difficulty: "Easy",
        price: "$100",
        highlights: ["Village visits", "Traditional ceremonies", "Local crafts", "Authentic meals"],
        icon: Heart
    },
    {
        title: "Coffee Plantation Tour",
        slug: "arusha-excursions",
        description: "Learn the coffee-making process from bean to cup. Includes tasting and traditional Chagga lunch.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-6.webp",
        duration: "3-4 hours",
        difficulty: "Easy",
        price: "$60",
        highlights: ["Coffee roasting", "Bean picking", "Tasting session", "Local lunch"],
        icon: Coffee
    }
];

export default function DayTripsPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/hero/slide-1.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground text-base px-4 py-2">
                            Day Trips & Excursions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            One Day Adventures
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Short on time? Experience the magic of Tanzania in a single day. From coffee tours to hiking and game drives.
                        </p>
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Book a Day Trip</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Day Trips Grid */}
            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Choose Your Adventure
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Perfect for layovers, pre/post-safari relaxation, or when you're short on time
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dayTrips.map((trip, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all group">
                                <div className="relative h-56">
                                    <Image
                                        src={trip.image}
                                        alt={trip.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                                            <trip.icon className="text-primary" size={24} />
                                        </div>
                                    </div>
                                    <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground">
                                        {trip.difficulty}
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif">{trip.title}</CardTitle>
                                    <p className="text-muted-foreground">{trip.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex justify-between items-center mb-4 text-sm">
                                        <div className="flex items-center gap-1 text-muted-foreground">
                                            <Clock size={16} className="text-primary" />
                                            <span>{trip.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-primary font-bold text-lg">
                                            <DollarSign size={18} />
                                            <span>{trip.price.replace('$', '')}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        {trip.highlights.map((highlight, i) => (
                                            <div key={i} className="text-xs text-muted-foreground flex items-center gap-1">
                                                <span className="text-primary">✓</span>
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Button className="w-full" asChild>
                                        <Link href={`/all-day-trips/${trip.slug}`}>
                                            Learn More <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Day Trips */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                Why Choose Day Trips?
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    <strong className="text-foreground">Perfect for Short Stays:</strong> Maximize your limited time in Tanzania with focused, high-quality experiences.
                                </p>
                                <p>
                                    <strong className="text-foreground">Budget-Friendly:</strong> Get a taste of Tanzania without committing to a multi-day safari or trek.
                                </p>
                                <p>
                                    <strong className="text-foreground">Great Add-Ons:</strong> Enhance your main safari or Kilimanjaro climb with cultural or relaxation experiences.
                                </p>
                                <p>
                                    <strong className="text-foreground">Flexible Scheduling:</strong> Available daily with morning or afternoon departure options.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/intro/day-trips-card.webp"
                                alt="Day Trips"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold mb-6">
                            What's Included
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-bold text-lg mb-4 text-green-600">✓ Included</h3>
                                <ul className="space-y-2 text-sm">
                                    <li>• Professional guide</li>
                                    <li>• Transportation from/to hotel</li>
                                    <li>• All entrance fees</li>
                                    <li>• Lunch or snacks</li>
                                    <li>• Bottled water</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="pt-6">
                                <h3 className="font-bold text-lg mb-4 text-orange-600">✗ Not Included</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Tips for guide</li>
                                    <li>• Personal expenses</li>
                                    <li>• Travel insurance</li>
                                    <li>• Alcoholic beverages</li>
                                    <li>• Souvenirs</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Book Your Day Adventure
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Available daily. Last-minute bookings welcome!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Book Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/safaris">View Multi-Day Safaris</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
