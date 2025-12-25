import { Star } from "lucide-react";

export function Testimonials() {
    const reviews = [
        {
            name: "Sarah Jenkins, UK",
            rating: 5,
            text: "Climbing Kilimanjaro was the hardest thing I've ever done, but the team at Tanzania Wisdom made it possible. The guides were incredible!",
            trip: "7-Day Machame Route"
        },
        {
            name: "Michael & Emily, USA",
            rating: 5,
            text: "Our honeymoon safari was pure magic. From the luxury tented camps to seeing the Big Five on day one. Flawless organization.",
            trip: "Luxury Honeymoon Safari"
        },
        {
            name: "David Chen, Singapore",
            rating: 5,
            text: "I appreciated the sustainable approach. Knowing my trip supported local porters and conservation made the experience even better.",
            trip: "5-Day Safari"
        }
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">What Our Guests Say</h2>
                    <div className="flex justify-center items-center gap-2 text-yellow-500 mb-4">
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <Star fill="currentColor" />
                        <span className="text-foreground font-semibold ml-2">5.0 Rating</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-card p-8 rounded-xl shadow-sm border border-border">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-muted-foreground italic mb-6 leading-relaxed">
                                &quot;{review.text}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold font-serif text-foreground">{review.name}</h4>
                                <p className="text-xs text-primary uppercase tracking-wide mt-1">{review.trip}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
