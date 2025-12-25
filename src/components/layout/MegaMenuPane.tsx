"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MenuItem {
    title: string
    href: string
    description: string
    badge?: string
    badgeColor?: string // e.g., "bg-[#D4E8BC] text-[#3A5223]"
    image?: string // Optional image for this menu item
}

interface MegaMenuPaneProps {
    items: MenuItem[]
    defaultTitle: string
    defaultDescription: string
    defaultImage: string
    defaultLink: string
    defaultLinkText: string
}

export function MegaMenuPane({
    items,
    defaultTitle,
    defaultDescription,
    defaultImage,
    defaultLink,
    defaultLinkText
}: MegaMenuPaneProps) {
    const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null)

    // The active content is either the hovered item OR the default category info
    const activeContent = hoveredItem ? {
        title: hoveredItem.title,
        description: hoveredItem.description,
        link: hoveredItem.href,
        linkText: `View ${hoveredItem.title} ›`, // Dynamic button text
        image: hoveredItem.image || defaultImage // Use item image or fallback to default
    } : {
        title: defaultTitle,
        description: defaultDescription,
        link: defaultLink,
        linkText: defaultLinkText,
        image: defaultImage
    }

    return (
        <div className="flex w-[900px] gap-0 p-0 bg-white shadow-2xl rounded-xl overflow-hidden">

            {/* LEFT SIDEBAR - MENU ITEMS */}
            <div className="w-[300px] bg-gray-50 p-6 flex flex-col gap-2 border-r border-gray-100">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className={cn(
                            "group flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-sm font-medium",
                            hoveredItem?.href === item.href
                                ? "bg-white shadow-md text-[#5C8038] scale-[1.02]" // Active/Hover State
                                : "hover:bg-gray-100 text-gray-700" // Normal State
                        )}
                    >
                        <span className="truncate pr-2">{item.title}</span>
                        {item.badge ? (
                            <span className={cn("text-[10px] px-1.5 py-0.5 rounded uppercase font-bold shrink-0", item.badgeColor || "bg-gray-200 text-gray-700")}>
                                {item.badge}
                            </span>
                        ) : (
                            <span className={cn(
                                "text-gray-400 group-hover:text-[#5C8038]",
                                hoveredItem?.href === item.href ? "text-[#5C8038]" : ""
                            )}>›</span>
                        )}
                    </Link>
                ))}
            </div>

            {/* CENTER - DYNAMIC CONTENT PREVIEW */}
            <div className="flex-1 p-8 flex flex-col justify-center bg-gray-50/50 transition-all duration-300">
                <div key={activeContent.title} className="animate-in fade-in slide-in-from-left-2 duration-300">
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                        {activeContent.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                        {activeContent.description}
                    </p>
                    <Button asChild className="self-start rounded-full bg-[#5C8038] hover:bg-[#4a6b2a] text-white px-6 shadow-md hover:shadow-lg transition-all">
                        <Link href={activeContent.link}>{activeContent.linkText}</Link>
                    </Button>
                </div>
            </div>

            {/* RIGHT - DYNAMIC IMAGE */}
            <div className="w-[280px] relative overflow-hidden">
                <Image
                    key={activeContent.image} // Key forces re-render for smooth transition
                    src={activeContent.image}
                    alt={activeContent.title}
                    fill
                    className="object-cover transition-all duration-500 ease-in-out"
                />
            </div>

        </div>
    )
}
