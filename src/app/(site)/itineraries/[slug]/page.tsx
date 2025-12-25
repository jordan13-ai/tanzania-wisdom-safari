
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
    Clock,
    Check,
    X,
    Calendar,
    MapPin,
    ArrowRight,
    Mountain,
    AlertTriangle,
    TrendingUp,
    Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { tours } from "@/lib/tours-data"

export async function generateStaticParams() {
    return tours.map((tour) => ({
        slug: tour.slug,
    }))
}

interface ItineraryPageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function ItineraryPage({ params }: ItineraryPageProps) {
    const { slug } = await params
    const tour = tours.find((t) => t.slug === slug)

    if (!tour) {
        notFound()
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-end overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4 pb-12">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground text-base px-4 py-2">
                            {tour.location || "Safari Itinerary"}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                            {tour.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-6 line-clamp-2">
                            {tour.description}
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap gap-6 text-white">
                            <div className="flex items-center gap-2">
                                <Clock size={20} className="text-primary" />
                                <span className="font-semibold">{tour.duration}</span>
                            </div>

                            {tour.difficulty && (
                                <div className="flex items-center gap-2">
                                    <Mountain size={20} className="text-primary" />
                                    <span className="font-semibold">{tour.difficulty}</span>
                                </div>
                            )}

                            {tour.distance && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={20} className="text-primary" />
                                    <span className="font-semibold">{tour.distance}</span>
                                </div>
                            )}

                            {tour.successRate ? (
                                <div className="flex items-center gap-2">
                                    <TrendingUp size={20} className="text-primary" />
                                    <span className="font-semibold">{tour.successRate} Success Rate</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <TrendingUp size={20} className="text-primary" />
                                    <span className="font-semibold">Top Rated Experience</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">

                        {/* Overview */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-6">Tour Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                {tour.description}
                            </p>

                            {/* Meta Info Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-muted/30 p-4 rounded-xl border border-muted">
                                <div>
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Group Size</span>
                                    <span className="font-medium">{tour.maxGroupSize ? `Max ${tour.maxGroupSize}` : 'Small Group'}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Min Age</span>
                                    <span className="font-medium">{tour.minAge || 'All Ages'}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Activity</span>
                                    <span className="font-medium">{tour.activityLevel || 'Moderate'}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">Location</span>
                                    <span className="font-medium">{tour.location || 'Tanzania'}</span>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Highlights:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tour.highlights.map((highlight, i) => (
                                        <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                                            {highlight}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Tabs Section */}
                        <Tabs defaultValue="itinerary" className="w-full">
                            <TabsList className="w-full justify-start h-auto p-1 bg-muted rounded-lg mb-8 overflow-x-auto flex-wrap gap-2">
                                <TabsTrigger value="itinerary" className="py-2.5 px-5 text-base rounded-md">
                                    Itinerary
                                </TabsTrigger>
                                <TabsTrigger value="accommodation" className="py-2.5 px-5 text-base rounded-md">
                                    Accommodation
                                </TabsTrigger>
                                <TabsTrigger value="inclusions" className="py-2.5 px-5 text-base rounded-md">
                                    Included
                                </TabsTrigger>
                                <TabsTrigger value="logistics" className="py-2.5 px-5 text-base rounded-md">
                                    Logistics
                                </TabsTrigger>
                                <TabsTrigger value="packing" className="py-2.5 px-5 text-base rounded-md">
                                    Packing List
                                </TabsTrigger>
                            </TabsList>

                            {/* Itinerary Tab */}
                            <TabsContent value="itinerary" className="space-y-4">
                                <Accordion type="single" collapsible className="w-full space-y-3" defaultValue="day-1">
                                    {tour.itinerary.map((day) => (
                                        <AccordionItem
                                            key={day.day}
                                            value={`day-${day.day}`}
                                            className="border rounded-lg bg-muted/30"
                                        >
                                            <AccordionTrigger className="hover:no-underline px-6 py-4">
                                                <div className="flex flex-col md:flex-row md:items-center text-left gap-2 md:gap-4 w-full">
                                                    <Badge variant="outline" className="w-fit shrink-0">
                                                        Day {day.day}
                                                    </Badge>
                                                    <span className="font-semibold text-lg">{day.title}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                                <div className="mb-4">
                                                    {day.description}
                                                </div>

                                                {/* Daily Stats Grid */}
                                                {(day.accommodation || day.meals || day.distance || day.time || day.elevation) && (
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm mt-4 p-4 bg-muted/40 rounded-lg border border-border/50">
                                                        {day.accommodation && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-semibold text-primary">Accommodation:</span>
                                                                <span>{day.accommodation}</span>
                                                            </div>
                                                        )}
                                                        {day.meals && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-semibold text-primary">Meals:</span>
                                                                <span>{day.meals}</span>
                                                            </div>
                                                        )}
                                                        {day.distance && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-semibold text-primary">Distance:</span>
                                                                <span>{day.distance}</span>
                                                            </div>
                                                        )}
                                                        {day.time && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-semibold text-primary">Time:</span>
                                                                <span>{day.time}</span>
                                                            </div>
                                                        )}
                                                        {day.elevation && (
                                                            <div className="flex items-center gap-2 md:col-span-2">
                                                                <span className="font-semibold text-primary">Elevation:</span>
                                                                <span>{day.elevation}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>

                            {/* Accommodation Tab */}
                            <TabsContent value="accommodation">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-serif flex items-center gap-3">
                                            <div className="p-2 bg-primary/10 rounded-full">
                                                <Shield className="w-6 h-6 text-primary" />
                                            </div>
                                            Where You'll Stay
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {tour.accommodationDetails || "We select high-quality lodges and camps that offer comfort, safety, and an authentic experience."}
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Inclusions Tab */}
                            <TabsContent value="inclusions">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-serif">
                                            What's Included
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-4 text-green-600 flex items-center gap-2">
                                                    <Check className="w-5 h-5" /> Included
                                                </h3>
                                                <ul className="space-y-3">
                                                    {tour.inclusions.map((item, index) => (
                                                        <li key={index} className="flex items-start gap-3">
                                                            <Check className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                                                            <span className="text-gray-600 text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-4 text-red-500 flex items-center gap-2">
                                                    <X className="w-5 h-5" /> Not Included
                                                </h3>
                                                <ul className="space-y-3">
                                                    {tour.exclusions.map((item, index) => (
                                                        <li key={index} className="flex items-start gap-3">
                                                            <X className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                                            <span className="text-gray-600 text-sm">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Logistics Tab */}
                            <TabsContent value="logistics">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-serif">Trip Logistics</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold mb-2 text-primary">Getting There</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {tour.gettingThere || "Transfers are gathered from Kilimanjaro International Airport (JRO)."}
                                            </p>
                                        </div>
                                        {tour.bestTime && (
                                            <div>
                                                <h3 className="text-lg font-semibold mb-2 text-primary">Best Time to Go</h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {tour.bestTime}
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Packing List Tab */}
                            <TabsContent value="packing">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-serif">Essential Packing List</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {tour.packingList ? (
                                            <ul className="grid md:grid-cols-2 gap-4">
                                                {tour.packingList.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                                                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-700">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-muted-foreground">
                                                A detailed packing list will be provided upon booking confirmation.
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>

                        {/* Best Time info (Rendered logic updated, keeping this as fallback or additional info) */}
                        <section className="mt-12">
                            <Card className="border-primary/20 bg-blue-50/50 dark:bg-blue-900/10">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Calendar className="text-primary" size={24} />
                                        Expert Tip
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {tour.bestTime || "Wildlife viewing is excellent year-round, but the best time depends on what you want to see. The dry season (June to October) is generally considered the best time for game viewing."}
                                    </p>
                                </CardContent>
                            </Card>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            {/* Pricing Card */}
                            <Card className="border-primary/20 shadow-lg">
                                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                                <CardContent className="pt-8 space-y-6">
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">
                                            Starting From
                                        </p>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl font-bold font-serif text-primary">
                                                {tour.price}
                                            </span>
                                            <span className="text-muted-foreground">/ person</span>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md flex items-start gap-3 text-sm text-blue-700 dark:text-blue-300">
                                        <AlertTriangle size={18} className="shrink-0 mt-0.5" />
                                        <p>Prices exclude international flights and tips. Group discounts available.</p>
                                    </div>

                                    <Button size="lg" className="w-full text-lg font-semibold py-6" asChild>
                                        <Link href={`/request-quote?tour=${encodeURIComponent(tour.title)}`}>
                                            Request a Quote
                                        </Link>
                                    </Button>

                                    <div className="text-center">
                                        <Button variant="link" className="text-primary text-sm">
                                            Download Itinerary PDF
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Why Book With Us */}
                            <Card className="bg-muted/50">
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif">Why Travel with Us?</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Expert Local Guides</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Customizable Itineraries</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>24/7 On-Trip Support</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                                <Check size={14} />
                                            </div>
                                            <span>Comfortable Vehicles</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Other Tours */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg font-serif">Similar Tours</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {tours
                                            .filter(t => t.slug !== tour.slug)
                                            .slice(0, 3)
                                            .map((t) => (
                                                <Link
                                                    key={t.slug}
                                                    href={`/itineraries/${t.slug}`}
                                                    className="block p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all group"
                                                >
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">
                                                            {t.title}
                                                        </h4>
                                                        <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <div className="flex gap-3 text-xs text-muted-foreground">
                                                        <span>{t.duration}</span>
                                                        <span>•</span>
                                                        <span>{t.price}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        <Link href="/all-safaris">
                                            <Button variant="outline" className="w-full mt-2" size="sm">
                                                View All Tours
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <section className="py-16 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Ready for Your Adventure?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Contact us today to start planning your dream safari in Tanzania.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href={`/request-quote?tour=${encodeURIComponent(tour.title)}`}>
                                Get a Free Quote
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
