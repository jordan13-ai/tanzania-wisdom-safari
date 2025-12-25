"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Award, Shield, Users } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/images/hero/slide-1.webp",
        subtitle: "KARIBU TANZANIA",
        title: "Tanzania Wisdom Safaris",
        description: "Experience the magic of the wild with expert local guides who call this land home.",
        cta: "Start Your Journey",
        link: "/all-safaris"
    },
    {
        id: 2,
        image: "/images/hero/slide-2.webp",
        subtitle: "ROOF OF AFRICA",
        title: "Conquer Kilimanjaro",
        description: "Stand on the highest peak in Africa. Choose from our expert-led routes for the adventure of a lifetime.",
        cta: "Find Your Route",
        link: "/kilimanjaro"
    },
    {
        id: 3,
        image: "/images/destinations/migration/migration-1.webp",
        subtitle: "ENDLESS PLAINS",
        title: "Serengeti Migration",
        description: "Witness the greatest show on earth. Millions of wildebeest, zebras, and predators in action.",
        cta: "See Safaris",
        link: "/all-safaris/migration"
    },
    {
        id: 4,
        image: "/images/hero/slide-4.webp",
        subtitle: "TROPICAL PARADISE",
        title: "Relax in Zanzibar",
        description: "Unwind on pristine white sands and turquoise waters after your safari adventure.",
        cta: "Explore Zanzibar",
        link: "/destinations/zanzibar"
    }
];

export function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out scale-105"
                        style={{ backgroundImage: `url('${slides[current].image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 container max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-center px-4 pt-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-4xl"
                    >
                        <p className="text-primary font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
                            {slides[current].subtitle}
                        </p>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
                            {slides[current].title}
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md leading-relaxed opacity-90">
                            {slides[current].description}
                        </p>

                        {/* Trust Badges - Modernized (No Glassmorphism) */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <Badge className="bg-primary text-primary-foreground border-none px-4 py-2 text-sm shadow-md">
                                <Star className="mr-2 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                98% Summit Success
                            </Badge>
                            <Badge className="bg-black/50 text-white border-white/20 px-4 py-2 text-sm">
                                <Award className="mr-2 h-4 w-4" />
                                TATO Certified
                            </Badge>
                            <Badge className="bg-black/50 text-white border-white/20 px-4 py-2 text-sm">
                                <Users className="mr-2 h-4 w-4" />
                                500+ Happy Climbers
                            </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-primary" asChild>
                                <Link href={slides[current].link}>{slides[current].cta}</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-semibold text-white border-2 border-white hover:bg-white hover:text-black bg-transparent" asChild>
                                <Link href="/contact">Get Free Quote</Link>
                            </Button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Stats Bar - Positioned at bottom of hero */}

            </div>

            {/* Controls */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-4 hidden md:flex">
                <button onClick={prevSlide} className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} className="p-3 rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white"}`}
                    />
                ))}
            </div>
        </section>
    );
}
