import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Youtube, CreditCard } from "lucide-react";
// import { SiVisa, SiMastercard, SiStripe, SiAmericanexpress } from "react-icons/si"; 
// Using visual fallbacks instead since react-icons is not installed

// Fallback for payment icons if react-icons not available, using text/divs for now to ensure no build break
// Ideally we'd use nice SVG assets.

export function Footer() {
    return (
        <footer>
            {/* Main Footer - Dark Brown */}
            <div className="bg-[#2C1810] text-gray-200 pt-16 pb-12">
                <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: About Us */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-1 bg-[#D97706]"></div> {/* Orange accent bar */}
                            <h3 className="text-xl font-bold font-serif text-white tracking-wide uppercase">ABOUT US</h3>
                        </div>
                        <p className="text-sm leading-7 text-gray-300">
                            We are TANZANIA WISDOM SAFARIS – a licensed Tanzania travel company, officially registered by the government of Tanzania. We specialize in Mount Kilimanjaro climbing, Tanzania wildlife safaris, Zanzibar beach holidays and East Africa Safaris.
                            <br /><br />
                            Our team is made up of highly trained, knowledgeable, cheerful, and enthusiastic professionals – all passionate about tourism and backed by years of experience in the field.
                            <br /><br />
                            Join us to experience the unforgettable!
                        </p>
                    </div>

                    {/* Column 2: Pages */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-1 bg-[#D97706]"></div>
                            <h3 className="text-xl font-bold font-serif text-white tracking-wide uppercase">PAGES</h3>
                        </div>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="/kilimanjaro" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Kilimanjaro</Link></li>
                            <li><Link href="/all-safaris" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Safari & Tours</Link></li>
                            <li><Link href="/destinations/zanzibar" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Zanzibar</Link></li>
                            <li><Link href="/all-safaris/migration" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Migration</Link></li>
                            <li><Link href="/all-safaris/honeymoon" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Honeymoon</Link></li>
                            <li><Link href="/all-day-trips" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Day trips</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-1 bg-[#D97706]"></div>
                            <h3 className="text-xl font-bold font-serif text-white tracking-wide uppercase">QUICK LINKS</h3>
                        </div>
                        <ul className="space-y-3 text-sm font-medium">
                            <li><Link href="/all-safaris/guide" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Safari preparation</Link></li>
                            <li><Link href="/kilimanjaro/guide" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Kilimanjaro preparation</Link></li>
                            <li><Link href="#" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Tanapa</Link></li>
                            <li><Link href="#" className="flex items-center gap-2 hover:text-[#D97706] transition-colors"><span className="text-[#D97706]">›</span> Visa application</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Social */}
                    <div className="space-y-8">
                        {/* Contact */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-6 w-1 bg-[#D97706]"></div>
                                <h3 className="text-xl font-bold font-serif text-white tracking-wide uppercase">CONTACT</h3>
                            </div>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3">
                                    <Phone size={16} className="text-[#D97706]" />
                                    <span>+255 759 333 679</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail size={16} className="text-[#D97706]" />
                                    <a href="mailto:info@tanzaniawisdomsafaris.com" className="hover:text-[#D97706] transition-colors">info@tanzaniawisdomsafaris.com</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="text-[#D97706] mt-1" />
                                    <span>Moshi, Kilimanjaro<br />Tanzania</span>
                                </li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-6 w-1 bg-[#D97706]"></div>
                                <h3 className="text-xl font-bold font-serif text-white tracking-wide uppercase">SOCIAL MEDIA</h3>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-[#D97706] transition-colors"><Facebook size={20} /></a>
                                <a href="#" className="hover:text-[#D97706] transition-colors"><Twitter size={20} /></a>
                                <a href="#" className="hover:text-[#D97706] transition-colors"><Youtube size={20} /></a>
                                <a href="#" className="hover:text-[#D97706] transition-colors"><Instagram size={20} /></a>
                            </div>
                            {/* TripAdvisor Logo */}
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <div className="relative w-10 h-10 bg-[#00AA6C] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
                                        <circle cx="7" cy="13" r="1.2" className="fill-black" />
                                        <circle cx="17" cy="13" r="1.2" className="fill-black" />
                                        <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" className="fill-black" opacity="0.2" />
                                    </svg>
                                </div>
                                <span className="font-bold text-xl text-[#00AA6C] group-hover:text-[#008f5b] transition-colors">Tripadvisor</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar - Beige */}
            <div className="bg-[#FFF8E7] text-[#5C4D4D] border-t border-[#E5DCC5] py-6">
                <div className="container max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold uppercase tracking-wider">

                    {/* Copyright */}
                    <div>
                        &copy; {new Date().getFullYear()} Tanzania Wisdom Safaris. All rights reserved
                    </div>

                    {/* TALA Licence */}
                    <div className="hidden md:block">
                        TALA LICENCE
                    </div>

                    {/* Payment Logos */}
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] normal-case tracking-normal">We accept</span>
                        <div className="flex gap-3">
                            <div className="px-2 py-1 bg-blue-700 text-white font-bold text-xs rounded">VISA</div>
                            <div className="px-2 py-1 bg-gradient-to-br from-red-600 to-orange-500 text-white font-bold text-xs rounded">Mastercard</div>
                            <div className="px-2 py-1 bg-blue-600 text-white font-bold text-xs rounded">AMEX</div>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black">Terms & conditions</Link>
                    </div>

                </div>
            </div>
        </footer>
    );
}
