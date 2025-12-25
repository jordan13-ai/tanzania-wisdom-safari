import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tent, Moon, Sunrise, Volume2, Check } from "lucide-react";

export default function TentedCampSafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/slide-3.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-green-600 text-white">Tented Camp Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Sleep in the Heart of the Wild
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Canvas walls mean you hear lions roaring, hyenas calling, and elephants passing by. The authentic African safari experience.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Book Tented Safari</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Why Choose Tented Camps?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Tent, title: "Authentic Experience", desc: "True safari atmosphere with canvas and nature" },
                            { icon: Volume2, title: "Sounds of the Wild", desc: "Hear animals throughout the night" },
                            { icon: Moon, title: "Under the Stars", desc: "Unzip your tent to see the Milky Way" },
                            { icon: Sunrise, title: "Prime Locations", desc: "Camps positioned for best wildlife viewing" }
                        ].map((feature, i) => (
                            <Card key={i} className="text-center">
                                <CardContent className="pt-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="text-green-600" size={28} />
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
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Comfort in Canvas</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Don't let "tented" fool you - our camps offer proper beds, en-suite bathrooms, hot showers, and quality meals. You get the authentic sounds and atmosphere without sacrificing comfort.
                            </p>
                            <ul className="space-y-3">
                                {["Comfortable beds with quality linens", "En-suite bathrooms with flush toilets", "Hot bucket showers", "Dining tent with chef-prepared meals", "Close to wildlife migration routes"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/tarangire/tarangire-2.webp" alt="Tent Interior" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Experience True Safari Living</h2>
                    <p className="text-xl text-muted-foreground mb-10">Fall asleep to the sounds of the African night</p>
                    <Button size="lg" asChild><Link href="/contact">Plan My Tented Safari</Link></Button>
                </div>
            </section>
        </div>
    );
}
