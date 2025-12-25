"use client"
import { Award, Compass, Users, Leaf, ShieldCheck, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Expert Local Guides",
        description: "Our guides are Tanzanian natives with over 10 years of experience on the mountain and in the bush. They know every path and every paw print."
    },
    {
        icon: Compass,
        title: "Tailored Experiences",
        description: "Whether it's a private honeymoon or a family adventure, we craft itineraries that fit your pace, interests, and dreams perfectly."
    },
    {
        icon: Award,
        title: "Ethical & Sustainable",
        description: "We are committed to fair wages for our porters and responsible tourism that protects Tanzania's wildlife for future generations."
    },
    {
        icon: ShieldCheck,
        title: "Safety First",
        description: "Your safety is paramount. We use high-quality gear, perform daily health checks on climbs, and have comprehensive evacuation plans."
    },
    {
        icon: HeartHandshake,
        title: "24/7 Support",
        description: "From your first enquiry to your flight home, our team provides round-the-clock support to ensure a seamless journey."
    },
    {
        icon: Leaf,
        title: "Eco-Friendly",
        description: "We practice 'Leave No Trace' principles and support local conservation initiatives to keep our parks pristine."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">Why Choose Wisdom?</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        We don&apos;t just show you Tanzania; we invite you to experience its soul.
                        Here is what sets our journeys apart.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 group">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-serif mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
