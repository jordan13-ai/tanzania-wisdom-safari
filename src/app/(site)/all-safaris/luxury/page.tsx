import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Sparkles, Wine, Utensils, Bed, Camera, ArrowRight } from "lucide-react";

const packages = [
    {
        name: "Serengeti Luxury Experience",
        days: 7,
        lodges: ["Four Seasons Safari Lodge", "Singita Grumeti"],
        price: "$5,800",
        highlights: ["Private game drives", "Gourmet dining", "Infinity pools", "Spa treatments"]
    },
    {
        name: "Ultimate Tanzania",
        days: 10,
        lodges: ["Ngorongoro Crater Lodge", "Singita Sasakwa", "AndBeyond Manyara"],
        price: "$8,500",
        highlights: ["Butler service", "Hot air balloon", "Private chef", "Helicopter transfers"]
    },
    {
        name: "Romantic Honeymoon Safari",
        days: 8,
        lodges: ["Sanctuary Retreats", "Elewana Lodges"],
        price: "$6,200",
        highlights: ["Private plunge pools", "Couples spa", "Bush dinners", "Champagne sunsets"]
    }
];

export default function LuxurySafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/slide-2.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-amber-500 text-white">Luxury Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            The Ultimate Safari Experience
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Exclusive 5-star accommodations, gourmet dining, private game drives, and unparalleled service. Experience Tanzania in absolute luxury.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Request Luxury Itinerary</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Luxury Features */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-6">Luxury Safari Features</h2>
                        <p className="text-xl text-muted-foreground">Every detail perfected for your comfort</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Bed, title: "5-Star Lodges", desc: "Spacious suites with king beds and private decks" },
                            { icon: Utensils, title: "Gourmet Dining", desc: "World-class chefs and fine wine selections" },
                            { icon: Sparkles, title: "Private Vehicles", desc: "Exclusive use with professional guide" },
                            { icon: Wine, title: "Premium Service", desc: "Butler service and 24/7 concierge" }
                        ].map((feature, i) => (
                            <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="text-amber-600" size={28} />
                                    </div>
                                    <h3 className="font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Packages */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Luxury Safari Packages</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, index) => (
                            <Card key={index} className="hover:shadow-2xl transition-shadow border-2">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-serif mb-2">{pkg.name}</CardTitle>
                                    <Badge className="w-fit bg-amber-500">{pkg.days} Days</Badge>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3 mb-6">
                                        <p className="text-sm text-muted-foreground font-semibold">Featured Lodges:</p>
                                        {pkg.lodges.map((lodge, i) => (
                                            <p key={i} className="text-sm text-muted-foreground">• {lodge}</p>
                                        ))}
                                    </div>
                                    <div className="space-y-2 mb-6">
                                        {pkg.highlights.map((highlight, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm">
                                                <Check size={16} className="text-green-600" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <div>
                                            <div className="text-sm text-muted-foreground">From</div>
                                            <div className="text-3xl font-bold text-amber-600">{pkg.price}</div>
                                        </div>
                                        <Button asChild>
                                            <Link href="/contact">Inquire</Link>
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
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Luxury Inclusions</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8">
                            <h3 className="text-2xl font-bold mb-6 text-green-600">Premium Inclusions</h3>
                            <ul className="space-y-3">
                                {[
                                    "5-star luxury lodge accommodation",
                                    "Private safari vehicle with guide",
                                    "All gourmet meals & premium beverages",
                                    "Unlimited game drives",
                                    "Hot air balloon safari (selected packages)",
                                    "Spa treatments",
                                    "Laundry service",
                                    "Private airstrip transfers",
                                    "Butler & concierge service",
                                    "Premium wine & champagne"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/ngorongoro/ngorongoro-3.webp" alt="Luxury Lodge" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-br from-amber-50 to-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Experience Tanzania in Ultimate Luxury</h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let us create a bespoke luxury safari tailored to your preferences
                    </p>
                    <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
                        <Link href="/contact">Design My Luxury Safari</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
