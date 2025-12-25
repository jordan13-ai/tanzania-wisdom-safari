"use client"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const reviews = [
    {
        name: "Sarah Jenkins",
        country: "USA",
        type: "Migration Safari",
        text: "Exceptional guides, breathtaking wildlife, and flawless organization. Tanzania at its absolute best. We saw the crossing on our second day!",
        rating: 5
    },
    {
        name: "David & Elena",
        country: "UK",
        type: "Honeymoon Safari",
        text: "The perfect mix of adventure and luxury. The lodges were stunning, and our guide felt like family by the end. Highly recommended.",
        rating: 5
    },
    {
        name: "Michael Chen",
        country: "Singapore",
        type: "Kilimanjaro Trek",
        text: "Summiting Kilimanjaro was a dream come true. The crew was supportive, professional, and kept spirits high even on the toughest days.",
        rating: 5
    },
    {
        name: "Jessica Alverez",
        country: "Spain",
        type: "Family Safari",
        text: "Traveling with kids can be hard, but the team made it effortless. We felt safe, cared for, and saw SO many animals.",
        rating: 5
    },
    {
        name: "Liam O'Connor",
        country: "Ireland",
        type: "Photography Tour",
        text: "As a photographer, the driver knew exactly how to position the vehicle for the best light. Got some award-winning shots!",
        rating: 5
    }
]

export function TravelerReviews() {
    return (
        <section className="py-20 bg-[#F9F7F2]">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <div className="text-left">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2C1810] mb-2">
                            Traveler Reviews & Trust
                        </h2>
                        <div className="flex items-center gap-2">
                            <div className="flex text-[#D97706]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} size={20} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <span className="font-semibold text-lg text-[#2C1810]">4.9/5 Average Rating</span>
                        </div>
                    </div>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4 pb-4">
                        {reviews.map((review, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                <Card className="h-full border-none shadow-sm bg-white relative overflow-hidden group hover:shadow-md transition-all">
                                    <CardContent className="p-8 pt-10 relative">
                                        <Quote className="absolute top-6 right-6 text-primary/10 rotate-180" size={60} />
                                        <div className="flex gap-1 mb-4 text-[#D97706]">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                                            &quot;{review.text}&quot;
                                        </p>
                                        <div className="flex items-center gap-3 mt-auto border-t border-gray-100 pt-4">
                                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#2C1810] text-sm">{review.name}</h4>
                                                <p className="text-xs text-muted-foreground">{review.country} • {review.type}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center md:justify-end gap-2 mt-6">
                        <CarouselPrevious className="relative translate-y-0 border-[#2C1810]/20 hover:bg-[#2C1810] hover:text-white" />
                        <CarouselNext className="relative translate-y-0 border-[#2C1810]/20 hover:bg-[#2C1810] hover:text-white" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
