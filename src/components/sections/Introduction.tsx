"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Introduction() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Side - Modern Composition */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/intro/safari-card.webp"
                                alt="Safari Experience"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="text-4xl font-bold text-primary">10+</div>
                                <div className="text-sm text-muted-foreground font-medium leading-tight">Years of<br />Excellence</div>
                            </div>
                            <p className="text-sm text-gray-600">Creating unforgettable Tanzanian memories since 2014.</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2 lg:pl-10">
                        <h4 className="text-primary font-bold tracking-wider uppercase mb-3 text-sm">Welcome to Tanzania Wisdom</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight mb-6">
                            Let us be your guide to the wonders of Tanzania
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            We are not just a tour operator; we are locally-owned experts with deep roots in this land.
                            From the snow-capped peak of Kilimanjaro to the endless plains of the Serengeti,
                            count on us for exceptional service, safety, and authentic local expertise.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "98% Kilimanjaro Summit Success Rate",
                                "Tailor-made Private Safaris",
                                "Ethical Porter Treatment & Fair Wages",
                                "Authentic Cultural Immersions"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary h-5 w-5 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button asChild size="lg" className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-1">
                            <Link href="/about">
                                Our Story <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}
