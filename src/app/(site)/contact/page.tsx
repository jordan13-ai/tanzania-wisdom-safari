"use client"
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        interest: "Wildlife Safari",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error('Failed to send');
            setIsSubmitted(true);
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/serengeti/serengeti-1.webp")' }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Let's Plan Your Journey</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Your Tanzanian adventure starts here. Reach out to our expert team for a personalized itinerary.
                    </p>
                </div>
            </section>

            <div className="container max-w-7xl mx-auto px-4 -mt-20 relative z-20 pb-24">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                            <h3 className="font-serif font-bold text-2xl mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email Us</h4>
                                        <a href="mailto:info@tanzaniawisdomsafaris.com" className="text-muted-foreground hover:text-primary transition-colors block">
                                            info@tanzaniawisdomsafaris.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Call Us</h4>
                                        <a href="tel:+255759333679" className="text-muted-foreground hover:text-primary transition-colors block">+255 759 333 679</a>
                                        <a href="tel:+255778906679" className="text-muted-foreground hover:text-primary transition-colors block">+255 778 906 679</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Visit Us</h4>
                                        <p className="text-muted-foreground">
                                            Moshi, Kilimanjaro<br />
                                            Tanzania
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 pt-4 border-t">
                                    <div className="p-3 bg-green-100 rounded-full text-green-600 shrink-0">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                                        <a href="https://wa.me/255759333679" className="text-green-600 hover:text-green-700 font-medium transition-colors">
                                            Chat instantly →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-xl">
                            <h3 className="font-serif font-bold text-2xl mb-4">Opening Hours</h3>
                            <div className="space-y-3 opacity-90">
                                <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-2">
                                    <span>Mon - Fri</span>
                                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-primary-foreground/20 pb-2">
                                    <span>Saturday</span>
                                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Sunday</span>
                                    <span className="font-medium">Closed</span>
                                </div>
                            </div>
                            <div className="mt-6 flex gap-2 items-center text-sm bg-black/20 p-3 rounded-lg">
                                <Clock size={16} />
                                <span>24/7 Emergency Support for clients</span>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 h-full">
                            <div className="mb-8">
                                <h2 className="text-3xl font-serif font-bold mb-2">Send us a Message</h2>
                                <p className="text-muted-foreground">Fill out the form below and our safari experts will get back to you within 24 hours.</p>
                            </div>

                            {isSubmitted ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center h-[400px]">
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8 max-w-md">
                                        Thank you for contacting us. One of our travel consultants will be in touch with you shortly.
                                    </p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                                            <Input id="firstName" placeholder="John" className="bg-gray-50 h-12" required value={formData.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                                            <Input id="lastName" placeholder="Doe" className="bg-gray-50 h-12" required value={formData.lastName} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                            <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-50 h-12" required value={formData.email} onChange={handleChange} />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                            <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-gray-50 h-12" value={formData.phone} onChange={handleChange} />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="interest" className="text-sm font-medium text-gray-700">I am interested in...</label>
                                        <select
                                            id="interest"
                                            className="flex h-12 w-full items-center justify-between rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            value={formData.interest}
                                            onChange={handleChange}
                                        >
                                            <option>Kilimanjaro Trek</option>
                                            <option>Wildlife Safari</option>
                                            <option>Zanzibar Beach Holiday</option>
                                            <option>Combined Tour</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your travel plans, dates, group size..."
                                            className="min-h-[150px] bg-gray-50 resize-y"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <Button type="submit" className="w-full text-lg h-14 font-semibold shadow-lg hover:shadow-xl transition-all" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending Message...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
