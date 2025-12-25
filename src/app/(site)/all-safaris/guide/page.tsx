import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, MapPin, Backpack, DollarSign, Camera, AlertCircle, Check } from "lucide-react";

const bestTimes = [
    { season: "Dry Season (June-October)", wildlife: "Excellent", weather: "Sunny, cool mornings", crowds: "Higher", best: true },
    { season: "Short Rains (November-December)", wildlife: "Good", weather: "Brief showers", crowds: "Lower", best: false },
    { season: "Calving (January-March)", wildlife: "Spectacular", weather: "Warm", crowds: "Moderate", best: true },
    { season: "Long Rains (April-May)", wildlife: "Fair", weather: "Heavy rains", crowds: "Lowest", best: false }
];

const packingList = {
    clothing: ["Neutral colored clothes (khaki, green, brown)", "Long-sleeved shirts for sun protection", "Light jacket for early mornings", "Comfortable walking shoes", "Sun hat and sunglasses"],
    gear: ["Binoculars (essential!)", "Camera with zoom lens", "Extra batteries and memory cards", "Power bank", "Headlamp or flashlight"],
    essentials: ["Sunscreen (SPF 50+)", "Insect repellent with DEET", "Personal medications", "Hand sanitizer", "Reusable water bottle"]
};

const faqs = [
    { q: "When is the best time for a safari?", a: "June-October (dry season) offers the best wildlife viewing as animals congregate around water sources. January-March is ideal for witnessing the wildebeest calving season in southern Serengeti." },
    { q: "How much should I budget for a safari?", a: "Mid-range safaris: $250-350/day. Luxury safaris: $500-800/day. Budget includes accommodation, meals, park fees, and guide. Tips, drinks, and personal expenses are extra." },
    { q: "Do I need vaccinations?", a: "Yellow fever vaccination is required if coming from endemic countries. Malaria prophylaxis is recommended. Consult your doctor 6-8 weeks before travel." },
    { q: "What wildlife will I see?", a: "The Big 5 (lion, leopard, elephant, buffalo, rhino) are commonly seen. Also expect zebras, giraffes, wildebeest, hippos, crocodiles, and hundreds of bird species." },
    { q: "Is it safe?", a: "Yes! Tanzania is one of Africa's safest safari destinations. You'll be with professional guides at all times, and lodges/camps have security." }
];

export default function SafariGuidePage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-24 bg-gradient-to-br from-primary/10 to-background">
                <div className="container max-w-5xl mx-auto px-4 text-center">
                    <Badge className="mb-4">Safari Planning Guide</Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Your Complete Tanzania Safari Guide
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know to plan the perfect safari adventure
                    </p>
                </div>
            </section>

            {/* Best Time to Visit */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-12">
                        <Calendar className="text-primary" size={32} />
                        <h2 className="text-4xl font-serif font-bold">When to Go</h2>
                    </div>

                    <div className="space-y-4">
                        {bestTimes.map((time, i) => (
                            <Card key={i} className={time.best ? "border-2 border-primary" : ""}>
                                <CardContent className="pt-6">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                        <div className="md:col-span-2">
                                            <h3 className="font-bold text-lg mb-1">{time.season}</h3>
                                            {time.best && <Badge className="bg-green-600">Best Time</Badge>}
                                        </div>
                                        <div><span className="text-sm text-muted-foreground">Wildlife:</span> <strong>{time.wildlife}</strong></div>
                                        <div><span className="text-sm text-muted-foreground">Weather:</span> {time.weather}</div>
                                        <div><span className="text-sm text-muted-foreground">Crowds:</span> {time.crowds}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packing List */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="flex items-center gap-3 mb-12">
                        <Backpack className="text-primary" size={32} />
                        <h2 className="text-4xl font-serif font-bold">What to Pack</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader><CardTitle>Clothing</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {packingList.clothing.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Photography Gear</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {packingList.gear.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader><CardTitle>Essentials</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {packingList.essentials.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm">
                                            <Check size={16} className="text-green-600 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>

                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-6 bg-muted/30">
                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Plan Your Safari?</h2>
                    <p className="text-xl text-muted-foreground mb-10">Let our experts create the perfect itinerary for you</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild><Link href="/request-quote">Get Free Custom Quote</Link></Button>
                        <Button size="lg" variant="outline" asChild><Link href="/safaris">View Safari Packages</Link></Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
