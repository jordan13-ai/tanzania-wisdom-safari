"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PawPrint, Mountain, Calendar } from "lucide-react"

const destinations = [
    {
        name: "Serengeti National Park",
        description: "The quintessential African savannah. Famous for the Great Migration and its high density of predators.",
        image: "/images/destinations/migration/migration-3.webp",
        link: "/destinations/serengeti",
        wildlife: "Big 5",
        activity: "Game Drive",
        bestTime: "Jun-Oct"
    },
    {
        name: "Ngorongoro Crater",
        description: "A UNESCO World Heritage site. The world's largest inactive volcanic caldera, teeming with wildlife.",
        image: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        link: "/destinations/ngorongoro",
        wildlife: "Rare Rhinos",
        activity: "Crater Tour",
        bestTime: "Year Round"
    },
    {
        name: "Mount Kilimanjaro",
        description: "The Roof of Africa. The highest commercial trekking peak in the world.",
        image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp",
        link: "/kilimanjaro",
        wildlife: "Colobus Monkeys",
        activity: "Trekking",
        bestTime: "Jan/Feb, Jul-Oct"
    },
    {
        name: "Tarangire National Park",
        description: "Known for its massive elephant herds and iconic baobab trees. A dry season gem.",
        image: "/images/destinations/tarangire/tarangire-1.webp",
        link: "/destinations/tarangire",
        wildlife: "Elephants",
        activity: "Game Drive",
        bestTime: "Jul-Oct"
    },
    {
        name: "Lake Manyara National Park",
        description: "Famous for tree-climbing lions and vast flocks of pink flamingos along the lake shores.",
        image: "/images/destinations/lake-manyara/lake-manyara-1.webp",
        link: "/destinations/manyara",
        wildlife: "Tree Lions",
        activity: "Bird Watching",
        bestTime: "Jun-Oct"
    },
    {
        name: "Zanzibar Island",
        description: "The Spice Island. Pristine white sands, historic Stone Town, and crystal clear waters.",
        image: "/images/destinations/zanzibar/zanzibar-1.webp",
        link: "/destinations/zanzibar",
        wildlife: "Dolphins",
        activity: "Beach",
        bestTime: "Jun-Oct, Dec-Feb"
    },
    {
        name: "Ruaha National Park",
        description: "Tanzania's hidden gem. Remote, wild, and offering an exclusive safari experience.",
        image: "/images/destinations/ruaha/ruaha-ruaha-national-park-tanzania.webp",
        link: "/destinations/ruaha",
        wildlife: "Wild Dogs",
        activity: "Game Drive",
        bestTime: "Jun-Oct"
    },
    {
        name: "Nyerere National Park",
        description: "Africa's largest game reserve. Famous for boat safaris on the Rufiji River.",
        image: "/images/destinations/nyerere/selous_08-scaled.webp",
        link: "/destinations/nyerere",
        wildlife: "Hippos",
        activity: "Boat Safari",
        bestTime: "Jun-Oct"
    }
]

export function IconicDestinations() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Iconic Destinations of Tanzania
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore Tanzania’s most celebrated landscapes — world-class wildlife parks, legendary mountains, and tropical island escapes.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 pb-4">
                        {destinations.map((dest, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <Link href={dest.link} className="block h-full">
                                    <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-gray-100">
                                        <Image
                                            src={dest.image}
                                            alt={dest.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                                {dest.bestTime}
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                            <div className="flex gap-3 mb-3 text-white/80 text-xs font-medium uppercase tracking-wider">
                                                <div className="flex items-center gap-1">
                                                    <PawPrint size={14} className="text-primary" />
                                                    {dest.wildlife}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Mountain size={14} className="text-primary" />
                                                    {dest.activity}
                                                </div>
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                                                {dest.name}
                                            </h3>
                                            <p className="text-gray-300 text-sm line-clamp-2 mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-75">
                                                {dest.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 transition-opacity duration-300 group-hover:opacity-100 delay-100">
                                                Explore <span className="text-lg">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    < div className="hidden md:flex justify-end gap-2 mt-4" >
                        <CarouselPrevious className="relative translate-y-0" />
                        <CarouselNext className="relative translate-y-0" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
