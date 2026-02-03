import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CredentialsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const credentials = [
    {
      title: 'Forbes Business Council Member',
      description:
        'Inducted in 2022, representing Nigerian real estate excellence on a global platform',
      featured: true,
      image: '/wale-tomtom-awards.jpg',
    },
    {
      title: 'CEO, Bluemart Realty Ltd',
      description:
        "Leading Nigeria's premier distressed and remedial property asset specialists since 2014",
      featured: true,
      image: '/waletom professional shoot image.jpeg',
    },
    {
      title: 'Distinguished Rotarian',
      description:
        'Active member of Rotary Club of Lagos, committed to humanitarian service',
      featured: false,
      image:
        '/waletom at the installation ceremony of rotaty district 9112 governor in vi, lagos.jpeg',
    },
    {
      title: 'Akure Native',
      description:
        'Born in Akure, Ondo State, championing quality leadership and sustainable development',
      featured: false,
      image: '/waletom with the oni of ife in the palace.jpeg',
    },
  ];

  const press = [
    {
      name: 'THISDAY',
      logo: (
        <svg viewBox='0 0 120 30' className='h-6 sm:h-8 w-auto'>
          <text
            x='0'
            y='24'
            className='fill-current font-bold text-xl tracking-tight'
            style={{ fontFamily: 'Georgia, serif' }}
          >
            THISDAY
          </text>
        </svg>
      ),
    },
    {
      name: 'Forbes',
      logo: (
        <svg viewBox='0 0 100 28' className='h-6 sm:h-7 w-auto'>
          <text
            x='0'
            y='22'
            className='fill-current'
            style={{
              fontFamily: 'Georgia, serif',
              fontWeight: '400',
              fontSize: '24px',
              letterSpacing: '1px',
            }}
          >
            Forbes
          </text>
        </svg>
      ),
    },
    {
      name: 'The Sun',
      logo: (
        <svg viewBox='0 0 100 35' className='h-7 sm:h-9 w-auto'>
          <circle cx='17' cy='17' r='12' className='fill-current opacity-90' />
          <text
            x='35'
            y='24'
            className='fill-current font-bold'
            style={{ fontFamily: 'Times New Roman, serif', fontSize: '20px' }}
          >
            The Sun
          </text>
        </svg>
      ),
    },
    {
      name: 'City People',
      logo: (
        <svg viewBox='0 0 140 30' className='h-6 sm:h-8 w-auto'>
          <text
            x='0'
            y='22'
            className='fill-current font-bold'
            style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '18px' }}
          >
            CITY PEOPLE
          </text>
        </svg>
      ),
    },
  ];

  return (
    <section
      id='credentials'
      className='relative py-24 sm:py-32 overflow-hidden'
      ref={containerRef}
    >
      {/* Gradient background */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background' />

      {/* Decorative elements */}
      <motion.div
        style={{ y }}
        className='absolute inset-0 pointer-events-none opacity-60'
      >
        <div className='absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]' />
        <div className='absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-[80px]' />
      </motion.div>

      <div className='container px-6 sm:px-8 lg:px-12 relative z-10' ref={ref}>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='mb-16'
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-4'
            >
              <span className='w-12 h-px bg-primary' />
              Recognition
            </motion.p>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground'>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='block'
              >
                Awards &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='block text-primary'
              >
                Credentials
              </motion.span>
            </h2>
          </motion.div>

          {/* Credentials Grid */}
          <div className='grid sm:grid-cols-2 gap-6 mb-20'>
            {credentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative overflow-hidden rounded-2xl ${
                  item.featured
                    ? 'bg-foreground text-background'
                    : 'bg-secondary/30 border border-border'
                }`}
              >
                {/* Image */}
                <div className='aspect-[16/9] overflow-hidden'>
                  <img
                    src={item.image}
                    alt={item.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                </div>

                {/* Content overlay */}
                <div className='relative p-6 lg:p-8'>
                  <h3
                    className={`text-xl lg:text-2xl font-medium mb-3 ${
                      item.featured
                        ? 'text-background'
                        : 'text-foreground group-hover:text-primary transition-colors'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={
                      item.featured
                        ? 'text-background/70 text-lg'
                        : 'text-muted-foreground text-lg'
                    }
                  >
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full ${
                    item.featured
                      ? 'bg-primary/20'
                      : 'bg-primary/5 opacity-0 group-hover:opacity-100'
                  } transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </div>

          {/* Press Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='py-12 px-8 rounded-3xl bg-secondary/20 border border-border/50'
          >
            <p className='text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10'>
              Featured In
            </p>
            <div className='flex flex-wrap justify-center items-center gap-12 sm:gap-16 lg:gap-24'>
              {press.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className='text-foreground/40 hover:text-foreground transition-all duration-500 cursor-default'
                  title={item.name}
                >
                  {item.logo}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-24 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center'
          >
            <div className='order-2 lg:order-1'>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-4'
              >
                <span className='w-12 h-px bg-primary' />
                Heritage
              </motion.p>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground mb-8 leading-[0.95]'>
                Rooted in Akure, Building for Tomorrow
              </h3>
              <p className='text-muted-foreground mb-6 leading-relaxed text-lg'>
                <span className='font-medium text-foreground'>
                  Akinwale Matthew Feyiyemi Abidakun
                </span>
                is a proud native of Akure, Ondo State. His journey from
                sociology studies at the University of Ilorin to international
                business at the University of Leeds has shaped his unique
                approach to real estate.
              </p>
              <p className='text-muted-foreground mb-6 leading-relaxed text-lg'>
                His nine-year executive mentorship under Dr. Wale Babalakin SAN
                at Bi-Courtney Group (2005–2014) forged the institutional
                expertise that today powers Bluemart Realty Ltd.
              </p>

              {/* Signature */}
              <div className='mt-8'>
                <p className='text-sm text-muted-foreground mb-2'>Signature</p>
                <div className='font-display text-2xl text-primary italic'>
                  Akinwale Abidakun
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='order-1 lg:order-2'
            >
              <div className='relative'>
                {/* Glow behind image */}
                <div className='absolute inset-0 scale-95 rounded-3xl bg-primary/20 blur-[40px]' />

                <div className='relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10'>
                  <div className='absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-white/5 z-10' />
                  <img
                    src='/wale-tomtom.jpg'
                    alt='Akinwale Abidakun'
                    className='w-full h-full object-cover object-top'
                    loading='lazy'
                  />
                </div>

                {/* Floating badge */}
                <div className='absolute -bottom-6 -left-6 glass-card px-6 py-4 shadow-xl'>
                  <p className='text-xs font-medium text-muted-foreground mb-1'>
                    Est.
                  </p>
                  <p className='text-xl font-semibold text-foreground'>2014</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
