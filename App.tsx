
import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Gallery4 } from "@/components/ui/gallery4";
import { InfiniteTextMarquee } from "@/components/ui/infinite-text-marquee";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { CheckCircle2, ShieldCheck, ArrowRight, Star } from "lucide-react";

export default function App() {
  
  // Transformed services into Gallery4 items format with images
  const servicesGalleryItems = [
    {
      id: "lifecycle",
      title: "Employee Lifecycle Management",
      description: "Onboarding Support, Documentation, Performance & Appraisal Management, Notice & Exit Management.",
      href: "#",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
    },
    {
      id: "payroll",
      title: "Payroll Management Services",
      description: "Monthly Payroll Processing, Bonus & Incentives, Gratuity & Leave Encashment, Analytics & Reporting.",
      href: "#",
      image: "https://images.unsplash.com/photo-1554224155-984067941b71?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: "statutory",
      title: "Statutory Compliance",
      description: "PF & ESIC Registration, LWF & Professional Tax Compliance, TDS Calculation & Form 16.",
      href: "#",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "labour",
      title: "Labour Law Compliance",
      description: "CLRA Registration, Shop & Establishment Act, Industrial Establishment Compliance, Returns Filing.",
      href: "#",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop"
    },
    {
      id: "leave",
      title: "Leave & Attendance",
      description: "Leave Policy Drafting, Biometric Integration Support, Leave Encashment Calculation.",
      href: "#",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop"
    },
    {
      id: "policy",
      title: "HR Policy Development",
      description: "Code of Conduct, POSH Policy, Remote Work Policies, Employee Handbooks.",
      href: "#",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const benefits = [
    "100% Statutory Compliance",
    "Audit-Ready Documentation",
    "End-to-End HR Outsourcing",
    "Data Confidentiality",
    "Expert Compliance Support",
    "Cost-Effective HR Solutions"
  ];

  const whoWeServeItems = [
    {
      id: "startups",
      title: "Startups",
      description: "Agile HR frameworks designed for rapid growth and scaling teams.",
      href: "#",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
    },
    {
      id: "msme",
      title: "MSMEs",
      description: "Cost-effective compliance and payroll solutions tailored for small to medium enterprises.",
      href: "#",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "manufacturing",
      title: "Manufacturing Units",
      description: "Robust labour law compliance and workforce management for factories and plants.",
      href: "#",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "it",
      title: "IT Companies",
      description: "Modern employee engagement and policy structures for the tech sector.",
      href: "#",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "service",
      title: "Service Companies",
      description: "Streamlined payroll and operations for service-based businesses.",
      href: "#",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  // Helper for dot pattern
  const dotPattern = (color: string) => ({
    backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
    backgroundSize: '16px 16px',
  });

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans bg-neutral-950 text-white relative">
      {/* Global Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-0" 
        style={dotPattern('rgba(255, 255, 255, 0.2)')} 
      />

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="w-56 overflow-hidden">
              <InfiniteTextMarquee 
                text="NH Associates" 
                link="#"
                fontSize="1.25rem" 
                speed={20} 
                textColor="rgb(129 140 248)" 
                hoverColor="white"
                tooltipText="Experts"
                className="w-full"
              />
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-indigo-400 hover:text-white transition-colors duration-200 font-medium text-sm px-4 py-2 hover:bg-white/5 rounded-md"
              >
                Services
              </a>
              <a 
                href="#why-us" 
                onClick={(e) => scrollToSection(e, 'why-us')}
                className="text-indigo-400 hover:text-white transition-colors duration-200 font-medium text-sm px-4 py-2 hover:bg-white/5 rounded-md"
              >
                Why us?
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => scrollToSection(e, 'portfolio')}
                className="text-indigo-400 hover:text-white transition-colors duration-200 font-medium text-sm px-4 py-2 hover:bg-white/5 rounded-md"
              >
                Portfolio
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <HeroHighlight containerClassName="h-[90vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-center px-4 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 text-indigo-300 text-sm font-medium mb-6 border border-indigo-500/20">
              <ShieldCheck className="w-4 h-4" />
              100% Compliant Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Complete HR & <br />
              <Highlight className="text-white text-2xl md:text-4xl lg:text-5xl">Compliance Solutions</Highlight>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              From Onboarding to Offboarding – We Manage It All. Focus on growth while we handle people operations with precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GradientButton className="text-lg">Get Started</GradientButton>
            </div>
          </motion.div>
        </HeroHighlight>

        {/* Comprehensive Services (Gallery Style) */}
        <div id="services" className="bg-neutral-900 border-y border-white/5 scroll-mt-20">
          <Gallery4 
            title="Our Comprehensive Services"
            description="We provide end-to-end HR, Payroll, and Statutory Compliance services tailored to your needs."
            items={servicesGalleryItems}
          />
        </div>

        {/* Why Choose Us */}
        <section id="why-us" className="py-24 relative overflow-hidden bg-neutral-950 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose NH Associates?</h2>
              <p className="text-lg text-neutral-400 mb-12 max-w-2xl">
                We ensure your business stays compliant and your workforce remains happy with our expert-led solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 shadow-sm hover:shadow-md transition-all hover:border-indigo-500/30"
                  >
                    <div className="bg-indigo-900/50 p-3 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-indigo-400" />
                    </div>
                    <span className="font-medium text-lg text-neutral-200 text-left">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve - Gallery Carousel */}
        <div id="portfolio" className="bg-neutral-900 border-y border-white/5 scroll-mt-20">
          <Gallery4 
            title="Who We Serve" 
            description="Whether you are a startup, MSME, or a large enterprise, we have tailored solutions for your industry needs."
            items={whoWeServeItems}
          />
        </div>

        {/* Footer */}
        <footer className="bg-neutral-950 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-indigo-400">NH Associates</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Your trusted partner for end-to-end HR outsourcing and statutory compliance. Focus on growing your business — we’ll manage your workforce.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
                <ul className="space-y-4 text-neutral-400">
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Payroll Management</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Statutory Compliance</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">Employee Lifecycle</a></li>
                  <li><a href="#" className="hover:text-indigo-400 transition-colors">HR Policy Development</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-6 text-white">Get in Touch</h4>
                <p className="text-neutral-400 mb-6">
                  Ready to transform your HR operations? Let's discuss how we can help your business grow.
                </p>
                <div className="flex items-center gap-2 text-indigo-400">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-medium">Premium HR Solutions</span>
                </div>
              </div>
            </div>
            <div className="border-t border-neutral-900 pt-8 text-center text-neutral-500 text-sm">
              © {new Date().getFullYear()} NH Associates. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
