import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Waves, Wifi, UtensilsCrossed, Check } from "lucide-react";

export default function LodgeSafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/slide-2.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-blue-600 text-white">Lodge Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Solid Comfort, Wild Views
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Permanent structures with swimming pools, full amenities, and robust facilities. Perfect for families and those preferring solid walls.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Book Lodge Safari</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Lodge Amenities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Building2, title: "Solid Structures", desc: "Permanent buildings with solid walls" },
                            { icon: Waves, title: "Swimming Pools", desc: "Cool off after morning game drives" },
                            { icon: Wifi, title: "Modern Amenities", desc: "WiFi, electricity, and charging stations" },
                            { icon: UtensilsCrossed, title: "Restaurant Dining", desc: "Full-service restaurants and bars" }
                        ].map((feature, i) => (
                            <Card key={i} className="text-center">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="text-blue-600" size={28} />
                                    </div>
                                    <h3 className="font-bold mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/ngorongoro/ngorongoro-4.webp" alt="Lodge Pool" fill className="object-cover" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Perfect for Families</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Lodges offer the security and amenities families need - swimming pools for kids, reliable electricity, spacious rooms, and full-service dining.
                            </p>
                            <ul className="space-y-3">
                                {["Family rooms and interconnecting suites", "Kids' menus and high chairs", "Swimming pools and play areas", "24/7 electricity and hot water", "Laundry services", "Gift shops and lounges"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-blue-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Comfort & Convenience Combined</h2>
                    <p className="text-xl text-muted-foreground mb-10">Enjoy wildlife viewing with all the comforts of home</p>
                    <Button size="lg" asChild><Link href="/contact">Plan My Lodge Safari</Link></Button>
                </div>
            </section>
        </div>
    );
}
