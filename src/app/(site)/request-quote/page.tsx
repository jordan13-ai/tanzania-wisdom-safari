"use client"
import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    Calendar, Users, DollarSign, Mail, Phone, User, MapPin,
    Sparkles, CheckCircle, Clock, Shield, Award
} from "lucide-react"

function RequestQuoteContent() {
    const searchParams = useSearchParams()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        tripType: "",
        destinations: "",
        travelDates: "",
        duration: "",
        travelers: "",
        budget: "",
        accommodation: "",
        specialRequests: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const tourName = searchParams.get('tour')
        if (tourName) {
            setFormData(prev => ({
                ...prev,
                specialRequests: `I am interested in booking the "${tourName}" tour. \n\n` + prev.specialRequests
            }))
        }
    }, [searchParams])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            setIsSubmitting(false)
            setIsSubmitted(true)
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('Something went wrong. Please try again or contact us directly on WhatsApp.')
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pt-32 pb-20">
                <div className="container max-w-3xl mx-auto px-4">
                    <Card className="border-2 border-primary/20 shadow-2xl">
                        <CardContent className="p-12 text-center">
                            <div className="mb-6 flex justify-center">
                                <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="h-12 w-12 text-green-600" />
                                </div>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                                Thank You for Your Request!
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                We've received your custom quote request and our team will get back to you within 24 hours with a personalized itinerary.
                            </p>
                            <div className="bg-muted/50 rounded-lg p-6 mb-8">
                                <p className="text-sm text-muted-foreground mb-2">
                                    A confirmation email has been sent to:
                                </p>
                                <p className="font-semibold text-lg">{formData.email}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" onClick={() => window.location.href = "/"}>
                                    Return to Home
                                </Button>
                                <Button size="lg" variant="outline" onClick={() => setIsSubmitted(false)}>
                                    Submit Another Request
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background pt-32 pb-20">
            <div className="container max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Custom Safari Planning
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                        Request Your Custom Quote
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Share your dream safari details with us and we'll craft a personalized itinerary tailored to your preferences and budget.
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">24-Hour Response</h3>
                            <p className="text-xs text-muted-foreground">Quick turnaround time</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">No Obligation</h3>
                            <p className="text-xs text-muted-foreground">Free quote, no pressure</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Expert Planning</h3>
                            <p className="text-xs text-muted-foreground">10+ years experience</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-2 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-2xl font-serif">Tell Us About Your Dream Safari</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Personal Information */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold flex items-center gap-2">
                                            <User className="h-5 w-5 text-primary" />
                                            Personal Information
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="firstName" className="text-sm font-medium">
                                                    First Name *
                                                </label>
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    placeholder="John"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="lastName" className="text-sm font-medium">
                                                    Last Name *
                                                </label>
                                                <Input
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    placeholder="Doe"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    Email Address *
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder="john@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    Phone Number
                                                </label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    type="tel"
                                                    placeholder="+1 (555) 000-0000"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="country" className="text-sm font-medium flex items-center gap-2">
                                                <MapPin className="h-4 w-4" />
                                                Country of Residence *
                                            </label>
                                            <Input
                                                id="country"
                                                name="country"
                                                required
                                                placeholder="e.g., United States"
                                                value={formData.country}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t pt-6" />

                                    {/* Trip Details */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold flex items-center gap-2">
                                            <Sparkles className="h-5 w-5 text-primary" />
                                            Trip Details
                                        </h3>
                                        <div className="space-y-2">
                                            <label htmlFor="tripType" className="text-sm font-medium">
                                                Type of Trip *
                                            </label>
                                            <select
                                                id="tripType"
                                                name="tripType"
                                                required
                                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                                                value={formData.tripType}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select trip type</option>
                                                <option value="wildlife-safari">Wildlife Safari</option>
                                                <option value="kilimanjaro">Kilimanjaro Trek</option>
                                                <option value="zanzibar">Zanzibar Beach Holiday</option>
                                                <option value="combined">Combined Safari & Beach</option>
                                                <option value="combined-kili">Kilimanjaro & Safari</option>
                                                <option value="honeymoon">Honeymoon Package</option>
                                                <option value="family">Family Safari</option>
                                                <option value="cultural">Cultural Experience</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="destinations" className="text-sm font-medium">
                                                Preferred Destinations
                                            </label>
                                            <Input
                                                id="destinations"
                                                name="destinations"
                                                placeholder="e.g., Serengeti, Ngorongoro, Zanzibar"
                                                value={formData.destinations}
                                                onChange={handleChange}
                                            />
                                            <p className="text-xs text-muted-foreground">
                                                List the parks or destinations you'd like to visit
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="travelDates" className="text-sm font-medium flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    Preferred Travel Dates
                                                </label>
                                                <Input
                                                    id="travelDates"
                                                    name="travelDates"
                                                    placeholder="e.g., June 2025 or Flexible"
                                                    value={formData.travelDates}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="duration" className="text-sm font-medium">
                                                    Trip Duration *
                                                </label>
                                                <select
                                                    id="duration"
                                                    name="duration"
                                                    required
                                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                                                    value={formData.duration}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select duration</option>
                                                    <option value="3-5">3-5 days</option>
                                                    <option value="6-8">6-8 days</option>
                                                    <option value="9-12">9-12 days</option>
                                                    <option value="13-15">13-15 days</option>
                                                    <option value="16+">16+ days</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="travelers" className="text-sm font-medium flex items-center gap-2">
                                                    <Users className="h-4 w-4" />
                                                    Number of Travelers *
                                                </label>
                                                <Input
                                                    id="travelers"
                                                    name="travelers"
                                                    type="number"
                                                    min="1"
                                                    required
                                                    placeholder="e.g., 2"
                                                    value={formData.travelers}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="budget" className="text-sm font-medium flex items-center gap-2">
                                                    <DollarSign className="h-4 w-4" />
                                                    Budget per Person (USD) *
                                                </label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    required
                                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="1000-2000">$1,000 - $2,000</option>
                                                    <option value="2000-3500">$2,000 - $3,500</option>
                                                    <option value="3500-5000">$3,500 - $5,000</option>
                                                    <option value="5000-7500">$5,000 - $7,500</option>
                                                    <option value="7500+">$7,500+</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="accommodation" className="text-sm font-medium">
                                                Accommodation Preference *
                                            </label>
                                            <select
                                                id="accommodation"
                                                name="accommodation"
                                                required
                                                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                                                value={formData.accommodation}
                                                onChange={handleChange}
                                            >
                                                <option value="">Select accommodation level</option>
                                                <option value="budget">Budget (Camping & Basic Lodges)</option>
                                                <option value="mid-range">Mid-Range (Tented Camps & Lodges)</option>
                                                <option value="luxury">Luxury (5-Star Lodges & Exclusive Camps)</option>
                                                <option value="mixed">Mixed (Combination)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="border-t pt-6" />

                                    {/* Special Requests */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Additional Information</h3>
                                        <div className="space-y-2">
                                            <label htmlFor="specialRequests" className="text-sm font-medium">
                                                Special Requests or Requirements
                                            </label>
                                            <Textarea
                                                id="specialRequests"
                                                name="specialRequests"
                                                placeholder="Tell us about dietary restrictions, accessibility needs, special occasions (honeymoon, anniversary, birthday), specific wildlife you'd like to see, or any other details that will help us create your perfect safari..."
                                                className="min-h-[150px]"
                                                value={formData.specialRequests}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full text-lg py-6 font-semibold"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>Processing...</>
                                        ) : (
                                            <>
                                                <Sparkles className="mr-2 h-5 w-5" />
                                                Get My Custom Quote
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-muted-foreground">
                                        By submitting this form, you agree to receive communications from Tanzania Wisdom Safaris. We respect your privacy and will never share your information.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <Card className="border-2">
                            <CardHeader>
                                <CardTitle className="text-lg">Need Help?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Our safari experts are here to help you plan the perfect adventure.
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                        <a href="tel:+255759333679" className="hover:text-primary transition-colors">
                                            +255 759 333 679
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                        <a href="mailto:info@tanzaniawisdomsafaris.com" className="hover:text-primary transition-colors break-all">
                                            info@tanzaniawisdomsafaris.com
                                        </a>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full" asChild>
                                    <a href="https://wa.me/255759333679" target="_blank" rel="noopener noreferrer">
                                        Chat on WhatsApp
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Why Choose Us */}
                        <Card className="border-2 bg-muted/30">
                            <CardHeader>
                                <CardTitle className="text-lg">Why Choose Us?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>Locally owned & operated</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>Expert guides with 10+ years experience</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>Tailor-made itineraries</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>24/7 support during your trip</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>Best price guarantee</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span>Ranked #1 on TripAdvisor</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default function RequestQuotePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <RequestQuoteContent />
        </Suspense>
    )
}
