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
    // International
    {
      src: "/waletom in paris.jpeg",
      title: "Paris Business Engagement",
      description: "High-level business discussions during a strategic visit to Paris, France",
      category: "International",
    },
    {
      src: "/waletom in rfrance.jpeg",
      title: "France Visit",
      description: "Key meetings and networking opportunities in the heart of France",
      category: "International",
    },
    {
      src: "/waletom in a foregn country with acasual cloth chlling.jpeg",
      title: "International Casual",
      description: "Relaxed moments during an international trip, showcasing global connections",
      category: "International",
    },
    {
      src: "/Nighout in the city of France.jpeg",
      title: "Evening in France",
      description: "An elegant evening reception in one of France's finest cities",
      category: "International",
    },
    // Business & Leadership
    {
      src: "/waletom with a standing picture with aliko dnagote.jpeg",
      title: "Meeting Aliko Dangote",
      description: "Strategic discussions with Aliko Dangote, President of the Dangote Group",
      category: "Business",
    },
    {
      src: "/waletom with the popular tony elumelu at uba.jpeg",
      title: "Tony Elumelu, UBA",
      description: "Engaging with Tony Elumelu, Founder of the Tony Elumelu Foundation at United Bank for Africa",
      category: "Business",
    },
    {
      src: "/waletomtom with the ceo of bua abdul raman rabiu shaking hands at an event.jpeg",
      title: "BUA Group CEO",
      description: "Courtesies exchanged with Abdul Raman Rabiu, CEO of BUA Group",
      category: "Business",
    },
    {
      src: "/waltom recives an handshake form  the governor of lagos state.jpeg",
      title: "Lagos State Governor",
      description: "Honored to receive a warm handshake from the Governor of Lagos State",
      category: "Leadership",
    },
    {
      src: "/waletom taking a snapshot with seyi tinubu recives a handshake from him.jpeg",
      title: "Seyi Tinubu",
      description: "A memorable moment with Seyi Tinubu, sharing insights and experiences",
      category: "Leadership",
    },
    {
      src: "/waletom with the governor of ogun state mr dapo abiodun.jpeg",
      title: "Ogun State Governor",
      description: "Discussion with His Excellency Dapo Abiodun, Governor of Ogun State",
      category: "Leadership",
    },
    {
      src: "/waltom group pciture in the house of aliko dangote with oni of ife, dangote, givernors and comissioners.jpeg",
      title: "Dangote House Gathering",
      description: "A historic gathering at Aliko Dangote's residence with the Ooni of Ife, distinguished governors, and prominent officials",
      category: "Leadership",
    },
    // Royal & Traditional
    {
      src: "/waletom with the oni of ife in the palace.jpeg",
      title: "Ooni of Ife's Palace",
      description: "A respectful visit to His Imperial Majesty, the Ooni of Ife at his royal palace",
      category: "Royal",
    },
    {
      src: "/waletom in a palace big beautiful location and wearing traditional attires.jpeg",
      title: "Traditional Attire",
      description: "Honoring heritage in a magnificent palace setting wearing traditional Nigerian attire",
      category: "Royal",
    },
    {
      src: "/waletom with the oba of ife.jpeg",
      title: "Oba of Ife",
      description: "Honored to be in the presence of the traditional ruler, the Oba of Ife",
      category: "Royal",
    },
    // Education & Professional Development
    {
      src: "/waletom at graduation day in lagos business school ceremony.jpeg",
      title: "LBS Graduation",
      description: "Celebrating academic excellence at Lagos Business School graduation ceremony",
      category: "Education",
    },
    {
      src: "/waletom at lagos business school photoshoot.jpeg",
      title: "LBS Professional Session",
      description: "Formal portraits captured during the Lagos Business School executive program",
      category: "Education",
    },
    {
      src: "/waletom lagos business school photoshoot.jpeg",
      title: "LBS Alumni",
      description: "Alumni professional photoshoot celebrating continued learning and growth",
      category: "Education",
    },
    {
      src: "/waletom at the rotary leadership institute reciving acertificate.jpeg",
      title: "Rotary Leadership Institute",
      description: "Receiving certificate of completion from the prestigious Rotary Leadership Institute",
      category: "Education",
    },
    // Awards & Recognition
    {
      src: "/wale-tomtom-awards.jpg",
      title: "Forbes Business Council",
      description: "Proud induction into the Forbes Business Council in 2022, joining elite global business leaders",
      category: "Awards",
    },
    {
      src: "/waletom with an award in albert ogunde studio.jpeg",
      title: "Award Recognition",
      description: "Receiving a prestigious award at the renowned Albert Ogunde Studio",
      category: "Awards",
    },
    // Rotary & Humanitarian
    {
      src: "/waletom at the installation ceremony of rotaty district 9112 governor in vi, lagos.jpeg",
      title: "Rotary District 9112",
      description: "Participating in the installation ceremony of the Rotary District 9112 Governor in Victoria Island, Lagos",
      category: "Humanitarian",
    },
    // Government & Official
    {
      src: "/waletom at National assembly.jpeg",
      title: "National Assembly",
      description: "Official legislative engagement at Nigeria's National Assembly",
      category: "Official",
    },
    {
      src: "/waletom-sitting-in-national-assembly-on-an-official-visit.jpeg",
      title: "Assembly Official Visit",
      description: "Representing at the National Assembly during an official visit",
      category: "Official",
    },
    // Press & Media
    {
      src: "/waletom feutures in the guardian newspapper.jpeg",
      title: "The Guardian Newspaper Feature",
      description: "Full-page feature in The Guardian Newspaper highlighting Bluemart Realty's innovative real estate solutions and Wale Tomtom's entrepreneurial journey",
      category: "Press",
    },
    {
      src: "/waletom at the headcover of ovaition magazine headline.jpeg",
      title: "Ovation Magazine Cover",
      description: "Featured as the cover headline story of Ovation Magazine",
      category: "Press",
    },
    // Cultural & Events
    {
      src: "/Ecobank art and cultural exhibition 2024.jpeg",
      title: "Ecobank Art Exhibition 2024",
      description: "Gracing the Ecobank Art and Cultural Exhibition 2024 in Victoria Island",
      category: "Cultural",
    },
    {
      src: "/waletom-Live-at Ecobank Art  cultural exhibition, 2024 at VI.jpeg",
      title: "Ecobank Live",
      description: "Live performance and cultural showcase at the Ecobank Art Exhibition 2024",
      category: "Cultural",
    },
    {
      src: "/waletom-as-a-special-guest-inan-event-in-abuja.jpeg",
      title: "Abuja Special Guest",
      description: "Honored as special guest at a distinguished event in Nigeria's capital, Abuja",
      category: "Cultural",
    },
    // Social & Entertainment
    {
      src: "/waletom at a socilite event with mr bob dee.jpeg",
      title: "Mr. Bob Dee Event",
      description: "A high-profile social gathering with media mogul Mr. Bob Dee",
      category: "Social",
    },
    {
      src: "/waletom with a popular fuji star.jpeg",
      title: "Fuji Music Icon",
      description: "In the company of a celebrated Fuji music star at a special occasion",
      category: "Social",
    },
    {
      src: "/waletom with another scocilite both in white in a fine scene at an event.jpeg",
      title: "Elegant Gathering",
      description: "An upscale social event with distinguished guests in an elegant setting",
      category: "Social",
    },
    {
      src: "/waletom with dele momodu taking a picture both s tanidng besides themselves.jpeg",
      title: "Dele Momodu",
      description: "Capturing moments with Chief Dele Momodu, renowned businessman and entertainment icon",
      category: "Social",
    },
    {
      src: "/waletom sitting beside otedola and taking a pciture in a nighlife party scene.jpeg",
      title: "Femi Otedola",
      description: "Network with billionaire businessman Femi Otedola at an exclusive evening event",
      category: "Social",
    },
    {
      src: "/waletomtom at a scoailite event standing at the right of three people who are guests too.jpeg",
      title: "Socialite Event",
      description: "Standing alongside distinguished guests at an exclusive socialite gathering",
      category: "Social",
    },
    {
      src: "/waletomtom at erelu event standing beside another guest.jpeg",
      title: "Erelu's Event",
      description: "Honored to attend an event hosted by the Erelu alongside esteemed guests",
      category: "Social",
    },
    {
      src: "/LR waleTomtom, Alara of Ilara, Epe, Chief Dele Momodu and Opetuyi in a group picture.jpeg",
      title: "Dignitaries Gathering",
      description: "A memorable group photo with the Alara of Ilara, Epe, Chief Dele Momodu, and distinguished guests",
      category: "Social",
    },
    {
      src: "/wale tom posing with big oltical leadersi.jpeg",
      title: "Political Leaders",
      description: "Engaging with prominent political leaders at a significant gathering",
      category: "Leadership",
    },
    {
      src: "/sittting in front of a staduim.jpeg",
      title: "Stadium Visit",
      description: "A memorable visit to a major stadium, capturing the moment",
      category: "Social",
    },
    // Professional
    {
      src: "/wale-tomtom.jpg",
      title: "Professional Portrait",
      description: "A distinguished professional portrait capturing executive presence",
      category: "Professional",
    },
    {
      src: "/waletom professional phsotoshoot popularly used with blue backgound.jpeg",
      title: "Executive Studio Portrait",
      description: "A polished studio portrait with signature blue background, perfect for professional profiles",
      category: "Professional",
    },
    {
      src: "/waletom posing in suit siiting down for a professional photoshoot.jpeg",
      title: "Executive Suit Portrait",
      description: "Commanding presence in a tailored suit during a formal executive photoshoot",
      category: "Professional",
    },
    {
      src: "/waletom siiting down while in a suite taking a snpashot for a pofessional photoshoot.jpeg",
      title: "Seated Executive",
      description: "A composed seated portrait capturing leadership and sophistication",
      category: "Professional",
    },
    {
      src: "/waletom professional shoot image.jpeg",
      title: "Executive Portrait",
      description: "A polished executive portrait reflecting leadership and professionalism",
      category: "Professional",
    },
  ];

  const categories = ["All", "International", "Business", "Leadership", "Royal", "Education", "Awards", "Humanitarian", "Official", "Press", "Cultural", "Social", "Professional"];

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
                  initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedImage(item)}
                  className="group cursor-pointer overflow-hidden rounded-xl bg-secondary/30"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
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
