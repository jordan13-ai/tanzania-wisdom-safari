import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Sparkles, Wine, Camera, Check } from "lucide-react";

const packages = [
    { name: "Serengeti Romance", days: 7, price: "$4,500", highlights: ["Private vehicle", "Champagne sunsets", "Bush dinners", "Couples spa"] },
    { name: "Ultimate Honeymoon", days: 10, price: "$6,800", highlights: ["Luxury lodges", "Hot air balloon", "Zanzibar beach", "Private chef"] },
    { name: "Safari & Beach Escape", days: 12, price: "$5,200", highlights: ["Safari + Zanzibar", "Private island", "Sunset dhow cruise", "Romantic dinners"] }
];

export default function HoneymoonSafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/slide-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-pink-500 text-white">Honeymoon Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Romance Under African Skies
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Celebrate your love with private game drives, champagne sunsets, bush dinners, and unforgettable moments in the wild.
                        </p>
                        <Button size="lg" className="bg-pink-600 hover:bg-pink-700" asChild>
                            <Link href="/contact">Plan Our Honeymoon</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-7xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Honeymoon Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow border-2 border-pink-100">
                                <CardContent className="pt-8">
                                    <h3 className="font-bold text-2xl mb-2">{pkg.name}</h3>
                                    <Badge className="mb-4 bg-pink-500">{pkg.days} Days</Badge>
                                    <div className="space-y-2 mb-6">
                                        {pkg.highlights.map((h, j) => (
                                            <div key={j} className="flex items-center gap-2 text-sm">
                                                <Heart size={14} className="text-pink-500" />
                                                <span>{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <div className="text-2xl font-bold text-pink-600">{pkg.price}</div>
                                        <Button asChild><Link href="/contact">Inquire</Link></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-pink-50 dark:bg-pink-900/10">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Start Your Forever Adventure</h2>
                    <p className="text-xl text-muted-foreground mb-10">Let us create the perfect romantic escape tailored just for you two</p>
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700" asChild>
                        <Link href="/contact">Design Our Honeymoon</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
