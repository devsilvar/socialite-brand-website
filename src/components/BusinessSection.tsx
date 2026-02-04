import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const BusinessSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const services = [
    {
      title: 'Distressed Assets',
      description:
        'Expert acquisition and disposition of non-performing collateral from major financial institutions.',
      icon: '◆',
      image: '/waletom with the governor of ogun state mr dapo abiodun.jpeg',
    },
    {
      title: 'Bank Partnerships',
      description:
        'Direct relationships with commercial banks for exclusive access to remedial property portfolios.',
      icon: '◇',
      image: '/waletom with the popular tony elumelu at uba.jpeg',
    },
    {
      title: 'Due Diligence',
      description:
        'Comprehensive title verification and legal clearance ensuring secure transactions.',
      icon: '○',
      image:
        '/waltom recives an handshake form  the governor of lagos state.jpeg',
    },
    {
      title: 'Investment Advisory',
      description:
        'Strategic guidance for investors seeking below-market opportunities.',
      icon: '□',
      image: '/waletom with the oba of ife.jpeg',
    },
  ];

  const stats = [
    { value: '₦10B+', label: 'Assets Managed', icon: '◆' },
    { value: '500+', label: 'Transactions', icon: '◇' },
    { value: '25+', label: 'Bank Partners', icon: '○' },
    { value: '15+', label: 'Years Experience', icon: '□' },
  ];

  const benefits = [
    'Rapid liquidation of non-performing collateral',
    'Transparent reporting and compliance',
    'Nationwide operational capacity',
  ];

  return (
    <section
      id='business'
      className='relative py-24 sm:py-32 overflow-hidden'
      ref={containerRef}
    >
      {/* Background */}
      <div className='absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background' />

      <motion.div
        style={{ y }}
        className='absolute inset-0 opacity-50 pointer-events-none'
      >
        <div className='absolute top-1/4 left-0 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]' />
        <div className='absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[120px]' />
      </motion.div>

      <div className='container px-6 sm:px-8 lg:px-12 relative z-10' ref={ref}>
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className='max-w-4xl mb-16'
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-4'
            >
              <span className='w-12 h-px bg-primary' />
              Bluemart Realty Ltd
            </motion.p>
            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[0.95] mb-6'>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='block'
              >
                Institutional
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className='block text-primary'
              >
                Solutions
              </motion.span>
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-xl text-muted-foreground leading-relaxed max-w-2xl'
            >
              Nigeria's leading specialist in distressed and remedial property
              assets. We transform non-performing collateral into investment
              opportunities.
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='flex flex-wrap gap-8 py-8 mb-16 border-y border-border/50'
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className='flex items-center gap-4'
              >
                <span className='text-2xl text-primary'>{stat.icon}</span>
                <div>
                  <p className='text-3xl sm:text-4xl font-display font-medium text-foreground'>
                    {stat.value}
                  </p>
                  <p className='text-xs uppercase tracking-wider text-muted-foreground'>
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services Grid */}
          <div className='grid sm:grid-cols-2 gap-6 lg:gap-8 mb-20'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group relative overflow-hidden rounded-2xl'
              >
                {/* Image background */}
                <div className='absolute inset-0'>
                  <img
                    src={service.image}
                    alt={service.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-br from-background/70 via-background/30 to-transparent' />
                </div>

                {/* Content */}
                <div className='relative p-8 lg:p-10 h-full flex flex-col justify-end min-h-[300px]'>
                  <div className='flex items-start justify-between mb-4'>
                    <span className='text-4xl text-primary/80 font-display'>
                      {service.icon}
                    </span>
                    <span className='text-xs font-medium text-primary/60 tracking-wider bg-primary/10 px-3 py-1 rounded-full'>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className='text-xl lg:text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors'>
                    {service.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed text-sm'>
                    {service.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <motion.div className='absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
              </motion.div>
            ))}
          </div>

          {/* Investor CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='relative overflow-hidden rounded-3xl bg-foreground p-10 sm:p-16 lg:p-20'
          >
            {/* Background gradient */}
            <div
              className='absolute inset-0 opacity-30'
              style={{
                background:
                  'radial-gradient(circle at 20% 50%, hsl(38, 50%, 40%) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(38, 40%, 30%) 0%, transparent 50%)',
              }}
            />

            <div className='relative z-10 max-w-2xl'>
              <p className='text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-6 flex items-center gap-3'>
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                Private Access
              </p>
              <h3 className='text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-background mb-6 leading-[0.95]'>
                Investor Vault
              </h3>
              <p className='text-background/60 text-lg mb-10 leading-relaxed'>
                Access exclusive listings of bank-direct assets below market
                value. Foreclosed properties and remedial portfolios available
                only to registered investors.
              </p>

              <motion.a
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                href='/contact'
                className='group inline-flex items-center gap-4 bg-primary text-primary-foreground px-10 py-5 text-sm font-medium tracking-wide rounded-full hover:shadow-lg transition-all duration-300'
              >
                <span>Join Private List</span>
                <motion.svg
                  width='18'
                  height='18'
                  viewBox='0 0 16 16'
                  fill='none'
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path
                    d='M3 8h10M9 4l4 4-4 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </motion.svg>
              </motion.a>
            </div>

            {/* Decorative circles */}
            <div className='absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className='absolute top-1/4 right-1/4 w-80 h-80 border border-primary rounded-full'
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className='absolute bottom-1/4 right-1/3 w-60 h-60 border border-primary rounded-full'
              />
            </div>
          </motion.div>

          {/* B2B Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='mt-20 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start'
          >
            <div>
              <p className='text-sm font-medium uppercase tracking-[0.2em] text-primary mb-6 flex items-center gap-4'>
                <span className='w-12 h-px bg-primary' />
                For Institutions
              </p>
              <h3 className='text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground mb-8 leading-[0.95]'>
                Partner With Nigeria's Leading Asset Specialist
              </h3>
              <p className='text-muted-foreground mb-10 leading-relaxed text-lg'>
                Commercial banks seeking a trusted vendor for distressed
                property disposition find in Bluemart Realty Ltd a partner with
                institutional credibility.
              </p>

              {/* Image */}
              <motion.div
                initial={{ clipPath: 'inset(0 100% 0 0)' }}
                whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className='aspect-auto rounded-2xl overflow-hidden mb-10'
              >
                <img
                  src='/waletom professional phsotoshoot popularly used with blue backgound.jpeg'
                  alt='Bluemart Realty leadership'
                  className='w-full h-full object-cover object-top'
                />
              </motion.div>

              <ul className='space-y-5'>
                {benefits.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className='flex items-start gap-4 text-muted-foreground'
                  >
                    <span className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0' />
                    <span className='text-lg'>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='p-10 lg:p-12 bg-secondary/30 rounded-3xl'
            >
              <h4 className='text-2xl font-medium text-foreground mb-4'>
                Bank Enquiries
              </h4>
              <p className='text-muted-foreground mb-10 leading-relaxed text-lg'>
                For institutional partnerships and bulk asset disposition,
                schedule a confidential consultation.
              </p>
              <motion.a
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                href='/contact'
                className='group inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-foreground border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300'
              >
                <span>Request Consultation</span>
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
