import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
    category: string;
  } | null>(null);

  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    {
      src: "/wale-tomtom-awards.jpg",
      title: "Forbes Business Council Induction",
      description: "Wale Tomtom's induction into the prestigious Forbes Business Council in 2022",
      category: "International",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      title: "REDAN Real Estate Summit",
      description: "Speaking on distressed asset management at the Real Estate Developers Association of Nigeria conference",
      category: "Speaking",
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      title: "Banking Partnership Signing",
      description: "Strategic partnership signing with one of Nigeria's leading commercial banks for remedial asset disposition",
      category: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      title: "Rotary Club of Lagos Gala",
      description: "With fellow Rotarians at the District Annual Conference, championing humanitarian service",
      category: "Humanitarian",
    },
    {
      src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=800&q=80",
      title: "Leeds Business School Alumni",
      description: "Reunion with distinguished alumni from University of Leeds, where Wale earned his MSc in International Business Management",
      category: "International",
    },
    {
      src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80",
      title: "Ondo State Leadership Forum",
      description: "Advocating for quality leadership and development in Ondo State as a proud Akure native",
      category: "Leadership",
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      title: "Bluemart Property Handover",
      description: "Successful distressed asset transfer ceremony with Bluemart Realty Ltd team and banking executives",
      category: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      title: "Youth Entrepreneurship Mentorship",
      description: "Mentoring the next generation of Nigerian entrepreneurs and real estate professionals",
      category: "Leadership",
    },
  ];

  const categories = ["All", "International", "Business", "Leadership", "Humanitarian", "Speaking"];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero - Minimal */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20" ref={ref}>
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="label-minimal text-primary mb-6">Moments</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[0.95] mb-6">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A visual journey through strategic partnerships and moments 
              that define a decade of leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter - Minimal */}
      <section className="pb-12">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - Clean Masonry-like */}
      <section className="pb-24 sm:pb-32">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-secondary/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-colors duration-500 flex items-end">
                      <div className="p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/70 mb-1">
                          {item.category}
                        </p>
                        <h3 className="font-display text-lg text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-background border-border p-0 rounded-2xl overflow-hidden">
          {selectedImage && (
            <div>
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain bg-secondary/30"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-3 bg-background/90 rounded-full text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>
              <div className="p-8">
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                  {selectedImage.category}
                </p>
                <h3 className="text-2xl font-display text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
