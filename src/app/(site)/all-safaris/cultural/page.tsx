import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Home, Music, Check } from "lucide-react";

const experiences = [
    {
        title: "Maasai Village Visit",
        description: "Spend a day with Maasai warriors, learn traditional jumping dances, visit homesteads, and understand their pastoral lifestyle.",
        duration: "Full day",
        price: "$150"
    },
    {
        title: "Hadzabe Tribe Experience",
        description: "Join one of Africa's last hunter-gatherer tribes. Learn ancient hunting techniques, make fire the traditional way, and hear click-language stories.",
        duration: "Full day",
        price: "$200"
    },
    {
        title: "Chagga Coffee & Culture",
        description: "Visit Chagga villages on Kilimanjaro's slopes. Learn coffee cultivation, traditional brewing, and enjoy authentic local meals.",
        duration: "Half day",
        price: "$100"
    }
];

export default function CulturalSafarisPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero/slide-3.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-purple-500 text-white">Cultural Safaris</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Beyond Wildlife: Meet the People
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Go beyond game drives. Meet Maasai, Hadzabe, and Datoga tribes for authentic cultural immersion and meaningful connections.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Plan Cultural Safari</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-serif font-bold text-center mb-16">Cultural Experiences</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {experiences.map((exp, i) => (
                            <Card key={i} className="hover:shadow-xl transition-shadow">
                                <CardContent className="pt-8">
                                    <h3 className="font-bold text-xl mb-3">{exp.title}</h3>
                                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">{exp.duration}</span>
                                        <span className="font-bold text-primary">{exp.price}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Experience Authentic Tanzania</h2>
                    <p className="text-xl text-muted-foreground mb-10">Combine wildlife safaris with cultural encounters for a complete Tanzania experience</p>
                    <Button size="lg" asChild><Link href="/contact">Get Custom Itinerary</Link></Button>
                </div>
            </section>
        </div>
    );
}
