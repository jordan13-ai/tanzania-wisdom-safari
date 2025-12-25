import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Heart, Shield, Leaf, Target, Mountain, Globe, CheckCircle2 } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Passion for Tanzania",
        description: "We're not just tour operators—we're Tanzanians who love sharing our homeland's beauty with the world."
    },
    {
        icon: Shield,
        title: "Safety First",
        description: "Your wellbeing is paramount. We maintain the highest safety standards on every trek and safari."
    },
    {
        icon: Users,
        title: "Fair Treatment",
        description: "We pay fair wages to our porters and guides, exceeding industry standards and KPAP guidelines."
    },
    {
        icon: Leaf,
        title: "Sustainable Tourism",
        description: "We practice Leave No Trace principles and support local conservation efforts."
    }
];



export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/images/hero/slide-2.webp")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-2xl">
                        <Badge className="mb-4 bg-primary text-primary-foreground">Our Story</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Locally Owned, Globally Trusted
                        </h1>
                        <p className="text-xl text-gray-200">
                            Born in Tanzania, dedicated to sharing its wonders with the world
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Tanzania Wisdom Safaris was founded in 2014 by Joseph Mtui, a native Tanzanian who grew up in the shadow of Mount Kilimanjaro. From a young age, Joseph was captivated by the mountain's majesty and the incredible wildlife that roamed the plains below.
                                </p>
                                <p>
                                    After years of working as a porter and guide for international tour companies, Joseph saw an opportunity to create something different—a locally-owned company that would treat its staff fairly, prioritize safety, and provide authentic experiences that only true locals could offer.
                                </p>
                                <p>
                                    Today, Tanzania Wisdom Safaris is a fully licensed and registered tour operator with over 500 successful Kilimanjaro climbs and countless unforgettable safaris. We're proud to employ 50+ local guides, porters, and support staff, all of whom share our passion for Tanzania and commitment to excellence.
                                </p>
                                <p>
                                    We're not just showing you Tanzania—we're inviting you to experience it through the eyes of those who call it home.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero/slide-4.webp"
                                alt="Our Story"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">500+</div>
                            <div className="text-muted-foreground">Successful Climbs</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">98%</div>
                            <div className="text-muted-foreground">Summit Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">10+</div>
                            <div className="text-muted-foreground">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-primary mb-2">50+</div>
                            <div className="text-muted-foreground">Local Staff</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Our Values</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            These principles guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-8">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <value.icon className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                                            <p className="text-muted-foreground">{value.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-muted/30">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Licensed & Certified
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Fully accredited and committed to the highest standards
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">TATO Registered</h3>
                                <p className="text-sm text-muted-foreground">
                                    Tanzania Association of Tour Operators member in good standing
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Mountain size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">KPAP Partner</h3>
                                <p className="text-sm text-muted-foreground">
                                    Kilimanjaro Porters Assistance Project - Fair treatment guaranteed
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardContent className="pt-8">
                                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Globe size={32} />
                                </div>
                                <h3 className="font-bold text-lg mb-2">Licensed Operator</h3>
                                <p className="text-sm text-muted-foreground">
                                    Fully licensed by Tanzania National Parks Authority
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>



            {/* Why Choose Us */}
            <section className="py-24 bg-primary/10">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">
                                Why Choose Tanzania Wisdom?
                            </h2>
                            <div className="space-y-4">
                                {[
                                    "100% locally owned and operated",
                                    "Fair wages exceeding KPAP guidelines",
                                    "98% Kilimanjaro summit success rate",
                                    "Professional, certified guides",
                                    "Small group sizes for personalized attention",
                                    "24/7 support before, during, and after your trip",
                                    "Comprehensive travel insurance included",
                                    "Sustainable and responsible tourism practices"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />
                                        <span className="text-lg">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/hero/slide-1.webp"
                                alt="Why Choose Us"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-background">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Ready to Experience Tanzania?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10">
                        Let our local expertise guide you to the adventure of a lifetime
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6" asChild>
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                            <Link href="/kilimanjaro">Climb Kilimanjaro</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
