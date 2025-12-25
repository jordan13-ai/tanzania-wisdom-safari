"use client"
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        title: "7-Day Machame Route",
        category: "Kilimanjaro",
        image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp",
        price: "From $2,100",
        description: "The 'Whiskey' route offers excellent acclimatization and varied scenery.",
        link: "/kilimanjaro/machame-route"
    },
    {
        title: "5-Day Big Five Safari",
        category: "Wildlife Safari",
        image: "/images/destinations/ngorongoro/ngorongoro-1.webp",
        price: "From $1,800",
        description: "Visit Tarangire, Ngorongoro Crater, and Lake Manyara in a compact trip.",
        link: "/all-safaris/mid-range"
    },
    {
        title: "8-Day Lemosho Route",
        category: "Kilimanjaro",
        image: "/images/destinations/kilimanjaro/kilimanjaro-2.webp",
        price: "From $2,400",
        description: "Our highest success rate route with panoramic views across the Shira Plateau.",
        link: "/kilimanjaro/lemosho-route"
    },
    {
        title: "10-Day Migration & Beach",
        category: "Luxury Combo",
        image: "/images/destinations/migration/migration-5.webp",
        price: "From $3,500",
        description: "Witness the Great Migration in Serengeti then fly to Zanzibar for relaxation.",
        link: "/all-safaris/migration"
    }
];

export function FeaturedExperiences() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Featured Experiences</h2>
                        <p className="text-muted-foreground max-w-xl">
                            Handpicked itineraries that our guests love the most.
                        </p>
                    </div>
                    <Button variant="link" className="hidden md:inline-flex text-primary text-lg" asChild>
                        <Link href="/all-safaris">View All Trips</Link>
                    </Button>
                </div>

                <Carousel className="w-full">
                    <CarouselContent className="-ml-4">
                        {experiences.map((exp, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full border-0 shadow-md flex flex-col overflow-hidden group">
                                    <div className="relative h-64 overflow-hidden">
                                        <div
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${exp.image}')` }}
                                        />
                                        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground hover:bg-primary/90">
                                            {exp.category}
                                        </Badge>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="font-serif text-xl">{exp.title}</CardTitle>
                                        <CardDescription className="text-primary font-semibold">{exp.price}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                            {exp.description}
                                        </p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button className="w-full font-semibold" asChild>
                                            <Link href={exp.link}>View Itinerary</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-2 mt-8 md:hidden">
                        <CarouselPrevious className="relative static translate-y-0" />
                        <CarouselNext className="relative static translate-y-0" />
                    </div>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="link" className="text-primary text-lg" asChild>
                        <Link href="/all-safaris">View All Trips</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
