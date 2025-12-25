import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageGallery } from "@/components/sections/ImageGallery";

export default function ManyaraPage() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/destinations/lake-manyara/lake-manyara-1.webp")' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                <div className="relative z-10 container max-w-7xl mx-auto px-4">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-blue-600">Lake Manyara</Badge>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            Tree-Climbing Lions & Pink Flamingos
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            Famous for its unique tree-climbing lions and vast flocks of flamingos painting the lake shores pink.
                        </p>
                        <Button size="lg" asChild><Link href="/contact">Visit Lake Manyara</Link></Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-serif font-bold mb-6">Unique Wildlife Behavior</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Lake Manyara is one of the few places in Africa where you can see lions lounging in acacia trees - a behavior unique to this park.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                The alkaline lake attracts thousands of flamingos, creating a stunning pink spectacle against the blue waters.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/destinations/lake-manyara/lake-manyara-1.webp" alt="Flamingos in Lake Manyara" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <ImageGallery
                title="Lake Manyara Gallery"
                description="Experience the highlights of this emerald gem, from tree-climbing lions to vast flamingo flocks."
                images={[
                    { src: "/images/destinations/lake-manyara/lake-manyara-2.webp", alt: "Manyara Lions", caption: "Famous tree-climbing lions" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-3.webp", alt: "Manyara Flamingos", caption: "Pink flamingos on the lake" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-4.webp", alt: "Manyara Elephants", caption: "Elephants in the groundwater forest" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-5.webp", alt: "Manyara Hippo Pool", caption: "Hippos in the wetland areas" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-6.webp", alt: "Manyara Baboons", caption: "Large troops of baboons" },
                    { src: "/images/destinations/lake-manyara/lake-manyara-7.webp", alt: "Manyara Canopy", caption: "Lush groundwater forest views" },
                ]}
            />

            <section className="py-24 bg-muted/30">
                <div className="container max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-serif font-bold mb-6">Discover Lake Manyara</h2>
                    <p className="text-xl text-muted-foreground mb-10">Perfect for day trips or as part of northern circuit safaris</p>
                    <Button size="lg" asChild><Link href="/contact">Get Quote</Link></Button>
                </div>
            </section>
        </div>
    );
}
