import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [submitted, setSubmitted] = useState(false);

  const contactDetails = [
    {
      icon: Phone,
      label: 'Direct Line',
      value: '+234 803 456 7890',
      href: 'tel:+2348034567890',
      description: 'Available Mon-Fri, 9AM-6PM WAT',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@bluemartproperties.com',
      href: 'mailto:info@bluemartproperties.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      label: 'Office',
      value: 'Lagos, Nigeria',
      description: 'Victoria Island Business District',
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon - Fri: 9AM - 6PM',
      description: 'Weekend by appointment only',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className='min-h-screen bg-background'>
      <Navigation />

      {/* Hero */}
      <section className='pt-32 sm:pt-40 pb-16 sm:pb-20'>
        <div className='container px-6 sm:px-8 lg:px-12'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-6'
            >
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[1.1] mb-6'
            >
              Let's Discuss{' '}
              <span className='text-gradient-gold'>Opportunities</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='text-lg text-muted-foreground max-w-2xl mx-auto'
            >
              Whether you're an investor seeking below-market assets or a
              financial institution requiring property solutions, I'm here to
              help.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section ref={ref} className='pb-24 sm:pb-32'>
        <div className='container px-6 sm:px-8 lg:px-12'>
          <div className='max-w-7xl mx-auto'>
            <div className='grid lg:grid-cols-5 gap-12 lg:gap-16'>
              {/* Contact Info Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className='lg:col-span-2'
              >
                <h2 className='text-2xl font-display font-medium text-foreground mb-8'>
                  Contact Information
                </h2>

                <div className='space-y-8 mb-12'>
                  {contactDetails.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                      className='flex gap-4'
                    >
                      <div className='w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0'>
                        <item.icon size={20} className='text-primary' />
                      </div>
                      <div>
                        <p className='text-xs uppercase tracking-wider text-muted-foreground mb-1'>
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className='text-lg font-medium text-foreground hover:text-primary transition-colors'
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className='text-lg font-medium text-foreground'>
                            {item.value}
                          </p>
                        )}
                        <p className='text-sm text-muted-foreground mt-1'>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Form Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className='lg:col-span-3'
              >
                <div className='bg-card rounded-3xl border border-border p-8 sm:p-10 lg:p-12'>
                  <h2 className='text-2xl font-display font-medium text-foreground mb-2'>
                    Send a Message
                  </h2>
                  <p className='text-muted-foreground mb-8'>
                    Fill out the form below and I'll get back to you shortly.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className='flex flex-col items-center justify-center py-16 text-center'
                    >
                      <div className='w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6'>
                        <CheckCircle size={32} className='text-primary' />
                      </div>
                      <h3 className='text-xl font-display font-medium text-foreground mb-2'>
                        Message Sent!
                      </h3>
                      <p className='text-muted-foreground'>
                        Thank you for reaching out. We'll be in touch soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                      <div className='grid sm:grid-cols-2 gap-5'>
                        <div>
                          <label className='text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2'>
                            Full Name
                          </label>
                          <input
                            type='text'
                            required
                            className='w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all text-sm'
                            placeholder='Your full name'
                          />
                        </div>
                        <div>
                          <label className='text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2'>
                            Email Address
                          </label>
                          <input
                            type='email'
                            required
                            className='w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all text-sm'
                            placeholder='your@email.com'
                          />
                        </div>
                      </div>

                      <div className='grid sm:grid-cols-2 gap-5'>
                        <div>
                          <label className='text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2'>
                            Phone Number
                          </label>
                          <input
                            type='tel'
                            className='w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all text-sm'
                            placeholder='+234 800 000 0000'
                          />
                        </div>
                        <div>
                          <label className='text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2'>
                            Inquiry Type
                          </label>
                          <select
                            required
                            className='w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all text-sm appearance-none cursor-pointer'
                          >
                            <option value=''>Select type</option>
                            <option value='investor'>Investment Inquiry</option>
                            <option value='institution'>
                              Institutional Partnership
                            </option>
                            <option value='media'>Media Request</option>
                            <option value='speaking'>
                              Speaking Engagement
                            </option>
                            <option value='other'>Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className='text-xs font-medium uppercase tracking-wider text-muted-foreground block mb-2'>
                          Your Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          className='w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary/20 focus:outline-none transition-all resize-none text-sm'
                          placeholder='Tell me about your project or inquiry...'
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01, y: -2 }}
                        whileTap={{ scale: 0.99 }}
                        type='submit'
                        className='w-full inline-flex items-center justify-center gap-3 bg-foreground text-background py-4 text-sm font-medium tracking-wide rounded-xl hover:bg-primary transition-all duration-300'
                      >
                        <span>Send Message</span>
                        <Send size={16} />
                      </motion.button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
