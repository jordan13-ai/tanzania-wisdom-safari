import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Camera, Check, ArrowRight, AlertCircle } from "lucide-react";

const migrationCalendar = [
    { month: "January-March", location: "Southern Serengeti", event: "Calving season - 8,000 wildebeest born daily", best: true },
    { month: "April-May", location: "Central Serengeti", event: "Herds move north, green season", best: false },
    { month: "June-July", location: "Western Corridor", event: "Grumeti River crossings begin", best: true },
    { month: "July-October", location: "Northern Serengeti", event: "Mara River crossings - peak action", best: true },
    { month: "November-December", location: "Eastern Serengeti", event: "Short rains, herds return south", best: false }
];

const packages = [
    {
        name: "Calving Season Special",
        months: "January - March",
        days: 7,
        price: "$2,650",
        highlights: ["Witness 8,000 births daily", "Predator action", "Ndutu Plains", "Ngorongoro Crater"]
    },
    {
        name: "River Crossing Adventure",
        months: "July - October",
        days: 8,
        price: "$3,200",
        highlights: ["Mara River crossings", "Northern Serengeti", "Crocodile action", "Peak migration"]
    },
    {
        name: "Complete Migration Circuit",
        months: "Year-round",
        days: 10,
        price: "$3,800",
        highlights: ["Follow the herds", "Multiple locations", "Best seasonal timing", "Flexible dates"]
    }
];

export default function MigrationSafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/migration/migration-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-orange-500 text-white">Migration Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            The Greatest Show on Earth
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Witness 2 million wildebeest, zebras, and gazelles on their epic journey across the Serengeti. Nature's most spectacular event.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Plan My Migration Safari</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Migration Calendar */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-6">Migration Calendar</h2>
                        <p className="text-xl text-muted-foreground">The herds move year-round - timing is everything</p>
                    </div>

                    <div className="space-y-4">
                        {migrationCalendar.map((period, index) => (
                            <Card key={index} className={period.best ? "border-2 border-primary" : ""}>
                                <CardContent className="pt-6">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Calendar className="text-primary" size={20} />
                                                <h3 className="font-bold text-lg">{period.month}</h3>
                                                {period.best && <Badge className="bg-green-600">Best Time</Badge>}
                                            </div>
                                            <div className="flex items-start gap-2 mb-2">
                                                <MapPin size={16} className="text-muted-foreground mt-1" />
                                                <span className="text-muted-foreground">{period.location}</span>
                                            </div>
                                            <p className="text-sm">{period.event}</p>
                                        </div>
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href="/contact">Book This Period</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200">
                        <div className="flex gap-3">
                            <AlertCircle className="text-blue-600 shrink-0 mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Timing is Crucial</h4>
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                    The migration follows rainfall patterns and can vary by 2-3 weeks each year. We monitor herd movements daily and adjust itineraries for the best viewing opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Migration Packages */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Migration Safari Packages</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Card key={index} className="hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
                                    <div className="flex gap-2 mt-2">
                                        <Badge>{pkg.days} Days</Badge>
                                        <Badge variant="outline">{pkg.months}</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 mb-6">
                                        {pkg.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm">
                                                <Check size={16} className="text-green-600 mt-0.5" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <div>
                                            <div className="text-sm text-muted-foreground">From</div>
                                            <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                                        </div>
                                        <Button asChild>
                                            <Link href="/contact">Book Now</Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Migration Safari */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Why a Migration Safari?</h2>
                            <div className="space-y-4 text-lg">
                                <p>
                                    <strong className="text-foreground">Unparalleled Wildlife Density:</strong> See hundreds of thousands of animals in a single view - something impossible anywhere else on earth.
                                </p>
                                <p>
                                    <strong className="text-foreground">Dramatic River Crossings:</strong> Watch wildebeest brave crocodile-infested waters in a life-or-death spectacle.
                                </p>
                                <p>
                                    <strong className="text-foreground">Predator Action:</strong> Lions, leopards, cheetahs, and hyenas follow the herds, providing incredible hunting scenes.
                                </p>
                                <p>
                                    <strong className="text-foreground">Calving Season Magic:</strong> Witness 8,000 wildebeest calves born daily in February - nature's nursery.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/migration/migration-2.webp" alt="Migration Crossing" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Witness the Great Migration</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let us position you perfectly to see nature's greatest spectacle
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/contact">Get Migration Itinerary</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/destinations/serengeti">Explore Serengeti</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
