import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Filter } from "lucide-react";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      title: "Forbes Business Council Summit",
      description: "With distinguished Forbes Council members at the annual global summit",
      category: "International",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      title: "Real Estate Excellence Forum",
      description: "Speaking at the Nigerian Real Estate Developers Summit 2023",
      category: "Speaking",
    },
    {
      src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      title: "Banking Partnership",
      description: "Strategic partnership signing with major Nigerian financial institution",
      category: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      title: "Rotary International Gala",
      description: "With fellow Rotarians at the District 9125 Annual Conference",
      category: "Humanitarian",
    },
    {
      src: "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&w=800&q=80",
      title: "University of Leeds Alumni",
      description: "Reunion with distinguished alumni from the Leeds Business School",
      category: "International",
    },
    {
      src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=800&q=80",
      title: "Ondo State Leadership Summit",
      description: "With state dignitaries discussing youth development initiatives",
      category: "Leadership",
    },
    {
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
      title: "Property Handover Ceremony",
      description: "Successful asset transfer with banking executives",
      category: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=800&q=80",
      title: "Youth Empowerment Conference",
      description: "Mentoring the next generation of Nigerian entrepreneurs",
      category: "Leadership",
    },
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      title: "ThisDay Media Feature",
      description: "Behind the scenes of the exclusive ThisDay interview",
      category: "Media",
    },
    {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      title: "Bi-Courtney Group Era",
      description: "With Dr. Wale Babalakin SAN during executive training years",
      category: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      title: "Corporate Strategy Session",
      description: "Bluemart Properties executive planning retreat",
      category: "Business",
    },
    {
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
      title: "Community Development Launch",
      description: "Inaugurating affordable housing initiative in Akure",
      category: "Humanitarian",
    },
  ];

  const categories = ["All", "International", "Business", "Leadership", "Humanitarian", "Media", "Speaking"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20" ref={ref}>
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-2 bg-primary/10 rounded-full">
              Moments of Excellence
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A visual journey through strategic partnerships, prestigious events, 
              and moments that define a decade of institutional leadership.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-10">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <div className="flex items-center gap-2 mr-4 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 sm:pb-32">
        <div className="container px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2 px-3 py-1 bg-primary/10 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-card border-border p-0 rounded-2xl overflow-hidden">
          {selectedImage && (
            <div>
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-3 bg-background/90 rounded-full text-foreground hover:bg-primary hover:text-primary-foreground transition-colors shadow-lg"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
                  {galleryItems.find(item => item.src === selectedImage.src)?.category}
                </span>
                <h3 className="font-serif text-2xl text-foreground mb-2">
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
