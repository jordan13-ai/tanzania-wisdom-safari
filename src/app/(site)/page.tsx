import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { SafariActivities } from "@/components/sections/SafariActivities";
import { IconicDestinations } from "@/components/sections/IconicDestinations";
import { TravelerReviews } from "@/components/sections/TravelerReviews";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <FeaturedTours />
      <SafariActivities />
      <IconicDestinations />
      <TravelerReviews />

      {/* Enhanced Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container max-w-5xl mx-auto px-4 relative z-10">
          {/* Trust Badge */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <CheckCircle className="mr-2 h-4 w-4" />
              Trusted by 500+ Adventurers
            </Badge>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-foreground text-center">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-10 text-muted-foreground text-center max-w-3xl mx-auto">
            Join hundreds of satisfied travelers who've experienced the magic of Tanzania with us.
            Get a personalized itinerary and quote within 24 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all" asChild>
              <Link href="/request-quote">
                <Calendar className="mr-2 h-5 w-5" />
                Get Free Custom Quote
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2" asChild>
              <Link href="/safaris">
                View All Safaris
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">24hrs</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Locally Owned</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
