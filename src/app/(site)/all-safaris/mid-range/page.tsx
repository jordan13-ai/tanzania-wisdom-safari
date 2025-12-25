import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Clock, Users, MapPin, Tent, Star, Calendar, ArrowRight } from "lucide-react";

const packages = [
    {
        name: "Classic Northern Circuit",
        days: 6,
        parks: ["Tarangire", "Serengeti", "Ngorongoro"],
        accommodation: "Comfortable tented camps",
        price: "$2,100",
        highlights: ["Big 5 viewing", "Great Migration (seasonal)", "Crater floor game drive"]
    },
    {
        name: "Southern Circuit Explorer",
        days: 7,
        parks: ["Ruaha", "Selous"],
        accommodation: "Mid-range lodges & camps",
        price: "$2,450",
        highlights: ["Off-the-beaten-path", "Fewer crowds", "Boat safaris"]
    },
    {
        name: "Tanzania Highlights",
        days: 8,
        parks: ["Lake Manyara", "Serengeti", "Ngorongoro", "Tarangire"],
        accommodation: "Quality tented camps",
        price: "$2,650",
        highlights: ["Complete northern circuit", "Tree-climbing lions", "Diverse ecosystems"]
    }
];

const faqs = [
    {
        question: "What's the difference between mid-range and budget safaris?",
        answer: "Mid-range safaris offer comfortable tented camps with proper beds, en-suite bathrooms, and quality meals. Budget safaris use basic camping with shared facilities. Mid-range provides significantly better comfort while still maintaining an authentic safari experience."
    },
    {
        question: "Are mid-range safaris good value?",
        answer: "Absolutely! Mid-range safaris offer the best balance of comfort, authenticity, and value. You get quality accommodations, experienced guides, and excellent game viewing at a fraction of luxury safari costs."
    },
    {
        question: "What type of accommodation can I expect?",
        answer: "You'll stay in comfortable tented camps with proper beds, bedding, en-suite bathrooms with flush toilets and hot showers, and dining tents. Camps are semi-permanent and located in prime wildlife areas."
    },
    {
        question: "Is food included?",
        answer: "Yes! All meals are included - breakfast, packed lunch during game drives, and 3-course dinners. Meals are freshly prepared by camp chefs. Vegetarian and special dietary requirements can be accommodated."
    },
    {
        question: "How many people share a vehicle?",
        answer: "Maximum 6 people per 4x4 safari vehicle, with guaranteed window seats for everyone. Private vehicle upgrades available for an additional cost."
    }
];

export default function MidRangeSafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/slide-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground">Mid-Range Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Comfort Meets Adventure
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Experience Tanzania's wildlife in comfortable tented camps without the luxury price tag. The perfect balance of authenticity and comfort.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" asChild>
                                <Link href="/request-quote">Get Custom Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black" asChild>
                                <Link href="#packages">View Packages</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Mid-Range */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-6">Why Choose Mid-Range?</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Get 90% of the luxury experience at 50% of the cost
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardContent className="pt-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Tent className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Comfortable Camps</h3>
                                <p className="text-muted-foreground">
                                    Proper beds, en-suite bathrooms, and hot showers. Sleep well after exciting game drives.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Star className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Excellent Value</h3>
                                <p className="text-muted-foreground">
                                    Professional guides, quality vehicles, and great locations at affordable prices.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="pt-8 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="text-primary" size={32} />
                                </div>
                                <h3 className="font-bold text-xl mb-3">Small Groups</h3>
                                <p className="text-muted-foreground">
                                    Maximum 6 people per vehicle ensures everyone gets window seats and personal attention.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Popular Packages */}
            <section id="packages" className="py-24 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-6">Popular Mid-Range Packages</h2>
                        <p className="text-xl text-muted-foreground">Carefully crafted itineraries for the best wildlife experiences</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Card key={index} className="hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="text-2xl font-serif">{pkg.name}</CardTitle>
                                        <Badge>{pkg.days} Days</Badge>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin size={16} />
                                        <span>{pkg.parks.join(" • ")}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 mb-4">
                                        <div className="flex items-start gap-2 text-sm">
                                            <Tent size={16} className="text-primary mt-0.5" />
                                            <span className="text-muted-foreground">{pkg.accommodation}</span>
                                        </div>
                                        {pkg.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-start gap-2 text-sm">
                                                <Check size={16} className="text-green-600 mt-0.5" />
                                                <span className="text-muted-foreground">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <div>
                                            <div className="text-sm text-muted-foreground">From</div>
                                            <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                                        </div>
                                        <Button asChild>
                                            <Link href="/request-quote">Book Now</Link>
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
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">What's Included</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-600">✓ Included</h3>
                            <ul className="space-y-3">
                                {[
                                    "Comfortable tented camp accommodation",
                                    "All meals (breakfast, lunch, dinner)",
                                    "Professional safari guide",
                                    "4x4 safari vehicle with pop-up roof",
                                    "All park entrance fees",
                                    "Bottled water during game drives",
                                    "Airport transfers",
                                    "Game drives as per itinerary",
                                    "Binoculars for wildlife viewing"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
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
                                    "Travel insurance (required)",
                                    "Tips for guide and camp staff",
                                    "Alcoholic beverages",
                                    "Personal expenses",
                                    "Optional activities",
                                    "Laundry services"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-orange-600">✗</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Frequently Asked Questions</h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-6 bg-background">
                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready for Your Mid-Range Safari?</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Get the best value safari experience in Tanzania
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="/request-quote">Get Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/safaris">View All Safari Types</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
