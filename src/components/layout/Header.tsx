"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./MobileMenu"
import { MegaMenuPane } from "./MegaMenuPane"
import { ChevronDown, Search, Star, MessageCircle } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const ListItem = ({ className, title, children, href, ...props }: any) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:translate-x-1",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-primary group-hover:text-primary/80">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}


export function Header() {
    // Removed scroll logic as header is now always solid

    return (
        <>
            {/* Top Bar - No TripAdvisor */}
            <div className="hidden lg:block bg-[#1A1A1A] text-gray-300 border-b border-gray-800 text-xs font-medium py-2.5">
                <div className="container max-w-screen-2xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@tanzaniawisdomsafaris.com" className="hover:text-white transition-colors flex items-center gap-2">
                            <span>info@tanzaniawisdomsafaris.com</span>
                        </a>
                        <div className="w-px h-3 bg-white/20"></div>
                        <a href="tel:+255759333679" className="hover:text-white transition-colors">
                            +255 759 333 679
                        </a>
                    </div>

                    <div className="flex items-center gap-6">
                        {/* Removed TripAdvisor from Header as requested */}
                        <div className="flex gap-4">
                            <button className="hover:text-white transition-colors">USD</button>
                            <button className="hover:text-white transition-colors">EN</button>
                        </div>
                    </div>
                </div>
            </div>

            <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm py-2">
                <div className="container max-w-screen-2xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-12 items-center gap-4">

                    {/* LOGO - Left col */}
                    <Link href="/" className="relative z-50 flex-shrink-0 group py-2 lg:col-span-3">
                        <div className="relative h-12 w-48 md:h-[60px] md:w-[220px]">
                            <Image
                                src="/images/logo.webp"
                                alt="Tanzania Wisdom Safaris"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* DESKTOP NAV - Center col (Spans 6) */}
                    <div className="hidden lg:flex items-center justify-center lg:col-span-6">
                        <NavigationMenu>
                            <NavigationMenuList className="font-bold text-sm tracking-widest text-gray-900">

                                {/* KILIMANJARO MEGA MENU */}
                                <NavigationMenuItem>
                                    <Link href="/kilimanjaro" legacyBehavior passHref>
                                        <NavigationMenuTrigger className="bg-transparent text-gray-900 hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4">
                                            Kilimanjaro
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="Climbing Kilimanjaro"
                                            defaultDescription="Your ultimate guide to the Roof of Africa. Detailed route comparisons, training advice, and gear requirements to ensure your summit success with our expert team."
                                            defaultLink="/kilimanjaro"
                                            defaultLinkText="Explore All Routes ›"
                                            defaultImage="/images/intro/kilimanjaro-card.webp"
                                            items={[
                                                { title: "Lemosho Route", href: "/kilimanjaro/lemosho-route", description: "The premier route for acclimatization and scenic views. Approaching from the west, offering high success rates.", image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp" },
                                                { title: "Machame Route", href: "/kilimanjaro/machame-route", description: "The popular 'Whiskey Route'. Known for its steep profile, scenic beauty, and excellent climb-high sleep-low opportunities.", image: "/images/destinations/kilimanjaro/kilimanjaro-2.webp" },
                                                { title: "Marangu Route", href: "/kilimanjaro/marangu-route", description: "The classic 'Coca-Cola Route'. The only trail offering hut accommodation for sleeping.", image: "/images/destinations/kilimanjaro/kilimanjaro-3.webp" },
                                                { title: "Rongai Route", href: "/kilimanjaro/rongai-route", description: "The only route approaching Mt Kilimanjaro from the north. Drier, wilder, and less crowded.", image: "/images/destinations/kilimanjaro/kilimanjaro-4.webp" },
                                                { title: "Umbwe Route", href: "/kilimanjaro/umbwe-route", description: "The steepest and most challenging route. Recommended only for experienced trekkers looking for a quiet climb.", image: "/images/destinations/kilimanjaro/kilimanjaro-5.webp" },
                                                { title: "Northern Circuit", href: "/kilimanjaro/northern-circuit", description: "The newest and longest route on Kilimanjaro. Unmatched 360-degree scenery and the highest summit success rate.", image: "/images/destinations/kilimanjaro/kilimanjaro-6.webp" },
                                                { title: "Joining Groups", href: "/kilimanjaro/joining-groups", description: "Join our scheduled group departures. Meet fellow adventurers and save on costs.", badge: "$100 Deposit", badgeColor: "bg-[#D4E8BC] text-[#3A5223]", image: "/images/intro/kilimanjaro-card.webp" },
                                                { title: "Kilimanjaro Guide", href: "/kilimanjaro/guide", description: "Everything you need to know before you go. Preparation, packing lists, and expert tips.", image: "/images/intro/kilimanjaro-card.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* SAFARI MEGA MENU */}
                                <NavigationMenuItem>
                                    <Link href="/all-safaris" legacyBehavior passHref>
                                        <NavigationMenuTrigger className="bg-transparent text-gray-900 hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4">
                                            Safari
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="Tanzania Safari"
                                            defaultDescription="Experience the wild heart of Africa. From the Great Migration to private luxury lodges, discover the perfect safari adventure tailored to your dreams."
                                            defaultLink="/all-safaris"
                                            defaultLinkText="View All Safaris ›"
                                            defaultImage="/images/intro/safari-card.webp"
                                            items={[
                                                { title: "Mid Range Safaris", href: "/all-safaris/mid-range", description: "Comfortable tented camps and lodges offering an authentic experience at excellent value.", image: "/images/intro/safari-card.webp" },
                                                { title: "Luxury Safaris", href: "/all-safaris/luxury", description: "Exclusive 5-star accommodations, gourmet dining, and private game drives for the discerning traveler.", image: "/images/intro/safari-card.webp" },
                                                { title: "Migration Safaris", href: "/all-safaris/migration", description: "Witness the greatest show on earth. Follow the massive herds of wildebeest across the Serengeti.", image: "/images/destinations/serengeti/serengeti-1.webp" },
                                                { title: "Cultural Experience", href: "/all-safaris/cultural", description: "Go beyond the wildlife. Meet the Maasai, Hadzabe, and Datoga tribes for a true cultural immersion.", image: "/images/destinations/tarangire/tarangire-3.webp" },
                                                { title: "Honeymoon", href: "/all-safaris/honeymoon", description: "Romantic escapes tailored for two. Private dinners, bush sunsets, and unforgettably magical moments.", image: "/images/destinations/zanzibar/zanzibar-1.webp" },
                                                { title: "Tented Camps", href: "/all-safaris/tented-camps", description: "Stay in the heart of the action. Canvas walls mean you hear the sounds of the African night.", image: "/images/intro/safari-card.webp" },
                                                { title: "Lodge Safaris", href: "/all-safaris/lodge", description: "Traditional structures with solid walls, swimming pools, and robust amenities for a relaxing stay.", image: "/images/intro/safari-card.webp" },
                                                { title: "Day Trips", href: "/all-day-trips", description: "Short on time? Experience Arusha National Park, Tarangire, or the crater in just one day.", image: "/images/intro/day-trips-card.webp" },
                                                { title: "Safari Guide", href: "/all-safaris/guide", description: "Expert advice on when to go, what to pack, and which parks to visit for your specific interests.", image: "/images/intro/safari-card.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* DESTINATIONS MEGA MENU */}
                                <NavigationMenuItem>
                                    <Link href="/destinations" legacyBehavior passHref>
                                        <NavigationMenuTrigger className="bg-transparent text-gray-900 hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4">
                                            Destinations
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="Explore Destinations"
                                            defaultDescription="Uncover the jewels of Tanzania. From the endless plains of the Serengeti to the turquoise waters of Zanzibar, explore our country's most iconic sites."
                                            defaultLink="/destinations"
                                            defaultLinkText="Discover All Places ›"
                                            defaultImage="/images/intro/destinations-card.webp"
                                            items={[
                                                { title: "Serengeti National Park", href: "/destinations/serengeti", description: "The quintessential African savannah. Famous for the Great Migration and its high density of predators.", image: "/images/destinations/serengeti/serengeti-1.webp" },
                                                { title: "Ngorongoro Crater", href: "/destinations/ngorongoro", description: "A UNESCO World Heritage site. The world's largest inactive volcanic caldera, teeming with wildlife.", image: "/images/destinations/ngorongoro/ngorongoro-1.webp" },
                                                { title: "Tarangire National Park", href: "/destinations/tarangire", description: "Known for its massive elephant herds and iconic baobab trees. A dry season gem.", image: "/images/destinations/tarangire/tarangire-1.webp" },
                                                { title: "Lake Manyara", href: "/destinations/manyara", description: "Famous for tree-climbing lions and vast flocks of pink flamingos along the lake shores.", image: "/images/destinations/manyara/manyara-1.webp" },
                                                { title: "Zanzibar Archipelago", href: "/destinations/zanzibar", description: "The Spice Island. Pristine white sands, historic Stone Town, and crystal clear indian ocean waters.", image: "/images/destinations/zanzibar/zanzibar-1.webp" },
                                                { title: "Arusha National Park", href: "/destinations/arusha-park", description: "Home to Mount Meru. A diverse park offering walking safaris, canoeing, and rich birdlife.", image: "/images/destinations/arusha/arusha-1.webp" },
                                                { title: "Nyerere National Park", href: "/destinations/nyerere", description: "Africa's largest stand-alone park. A wilderness of oxbow lakes, riverine forests, and vast savannahs.", image: "/images/destinations/nyerere/Selous-Game-Reserve_Elephants.webp" },
                                                { title: "Ruaha National Park", href: "/destinations/ruaha", description: "Rugged scenery and massive predator populations. The remote heart of Tanzania.", image: "/images/destinations/ruaha/Ruaha-NP-1900x1000-1.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* DAY TRIPS MEGA MENU */}
                                <NavigationMenuItem>
                                    <Link href="/all-day-trips" legacyBehavior passHref>
                                        <NavigationMenuTrigger className="bg-transparent text-gray-900 hover:text-primary hover:bg-primary/5 data-[state=open]:text-primary focus:bg-transparent text-sm uppercase px-4">
                                            Day Trips
                                        </NavigationMenuTrigger>
                                    </Link>
                                    <NavigationMenuContent>
                                        <MegaMenuPane
                                            defaultTitle="One Day Adventures"
                                            defaultDescription="Short on time? Experience the magic of Tanzania in a single day. From coffee tours to hiking and game drives."
                                            defaultLink="/all-day-trips"
                                            defaultLinkText="View All Day Trips ›"
                                            defaultImage="/images/intro/day-trips-card.webp"
                                            items={[
                                                { title: "Kilimanjaro Day Hike", href: "/all-day-trips/kili-hiking", description: "Get a taste of Kilimanjaro on a day hike through the rainforest zone to the first huts.", image: "/images/destinations/kilimanjaro/kilimanjaro-4.webp" },
                                                { title: "West Kilimanjaro (Shira)", href: "/all-day-trips/west-kilimanjaro", description: "Explore the stunning Shira Plateau on Kilimanjaro's western side.", image: "/images/destinations/kilimanjaro/kilimanjaro-1.webp" },
                                                { title: "One-Day Safari", href: "/all-day-trips/one-day-safari", description: "Visit Arusha National Park, Tarangire, or Ngorongoro for a full game drive experience in one day.", image: "/images/destinations/ngorongoro/ngorongoro-5.webp" },
                                                { title: "Moshi Excursions", href: "/all-day-trips/moshi-excursions", description: "Chemka Hot Springs, waterfalls, and coffee plantation tours around Moshi.", image: "/images/destinations/kilimanjaro/kilimanjaro-5.webp" },
                                                { title: "Cultural Tours", href: "/all-day-trips/cultural-tours", description: "Visit Maasai, Hadzabe, and Chagga villages for authentic cultural experiences.", image: "/images/destinations/tarangire/tarangire-3.webp" },
                                                { title: "Arusha Excursions", href: "/all-day-trips/arusha-excursions", description: "Explore the city, markets, coffee plantations, and Mount Meru foothills.", image: "/images/destinations/kilimanjaro/kilimanjaro-6.webp" }
                                            ]}
                                        />
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/blog" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent uppercase tracking-widest text-gray-900 hover:text-primary hover:bg-primary/5")}>
                                            Blog
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/about" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent uppercase tracking-widest text-gray-900 hover:text-primary hover:bg-primary/5")}>
                                            About
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent uppercase tracking-widest text-gray-900 hover:text-primary hover:bg-primary/5")}>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* ACTIONS - Right col (Spans 3) */}
                    <div className="hidden lg:flex items-center justify-end gap-3 lg:col-span-3">
                        <Button asChild className="rounded-full bg-primary text-white hover:bg-primary/90 font-bold text-sm px-6 py-5 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 flex items-center gap-2">
                            <Link href="/request-quote">
                                Request Quote
                            </Link>
                        </Button>
                        <Button asChild size="icon" className="rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white w-10 h-10 shadow-md">
                            <a href="https://wa.me/255759333679" target="_blank" rel="noopener noreferrer">
                                <MessageCircle size={20} fill="currentColor" />
                            </a>
                        </Button>
                    </div>

                    {/* MOBILE MENU TOGGLE */}
                    <div className="flex items-center gap-4 lg:hidden justify-end">
                        <Button size="sm" className="rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white p-2" asChild>
                            <a href="https://wa.me/255759333679">
                                <MessageCircle size={20} fill="currentColor" />
                            </a>
                        </Button>
                        <MobileMenu />
                    </div>
                </div>
            </header>
        </>
    )
}
