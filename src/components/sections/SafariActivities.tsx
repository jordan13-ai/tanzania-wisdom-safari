"use client"
import Link from "next/link"
import { Car, Mountain, Footprints, Camera, Waves, Sun, Bird, User } from "lucide-react"

const activities = [
    {
        title: "Game Drives",
        description: "Explore the vast savannahs in 4x4 vehicles with pop-up roofs for 360° wildlife viewing.",
        icon: Car,
        link: "/safaris"
    },
    {
        title: "Balloon Safaris",
        description: "Float silently over the Serengeti at sunrise for a breathtaking bird's-eye perspective.",
        icon: Sun,
        link: "/safaris"
    },
    {
        title: "Mountain Climbing",
        description: "Conquer the roof of Africa. Guided treks up Mount Kilimanjaro and Mount Meru.",
        icon: Mountain,
        link: "/kilimanjaro"
    },
    {
        title: "Walking Safaris",
        description: "Step out of the vehicle and connect with nature on a guided bush walk.",
        icon: Footprints,
        link: "/safaris/cultural"
    },
    {
        title: "Cultural Experiences",
        description: "Meet the Maasai, Hadzabe, and Datoga tribes to learn about their ancient traditions.",
        icon: User,
        link: "/safaris/cultural"
    },
    {
        title: "Beach Escapes",
        description: "Relax on the pristine white sands of Zanzibar after your safari adventure.",
        icon: Waves,
        link: "/destinations/zanzibar"
    },
    {
        title: "Boat Safaris",
        description: "Drift along the Rufiji River in Nyerere or Lake Manyara for close encounters with hippos.",
        icon: Bird,
        link: "/destinations/nyerere"
    }
]

export function SafariActivities() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
                        Top Safari Activities
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Beyond the game drive. Discover the many ways to experience the magic of Tanzania.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activities.map((activity, index) => (
                        <Link
                            key={index}
                            href={activity.link}
                            className="group block"
                        >
                            <div className="h-full p-8 rounded-2xl bg-muted/20 hover:bg-[#FDF6E3] transition-all duration-300 border border-transparent hover:border-primary/20 hover:shadow-lg text-center">
                                <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 text-primary">
                                    <activity.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                    {activity.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {activity.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
