"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Globe, ShoppingCart, Zap, TrendingUp, Monitor, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export default function WebsitesEcommercePage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Websites &"
                accentTitle="eCommerce"
                subtitle="Beautiful WordPress Website Design and eCommerce Development in Devon."
                parents={[{ name: "Services", href: "/services" }]}
                currentPage="Websites & eCommerce"
            />

            {/* Intro Content */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                Professional <span className="text-primary italic">WordPress</span> Solutions.
                            </h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed italic">
                                <p>
                                    As a creative partner of a specialist WordPress development team based in North Devon, we offer complete website design and eCommerce solutions tailored to your business needs.
                                </p>
                                <p>
                                    Whether you need a sleek brochure site to showcase your services or a robust eCommerce platform to sell your products, we provide user-friendly, high-performing websites built on trusted technology.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                "Bespoke Website Design",
                                "WordPress Development",
                                "eCommerce Solutions (WooCommerce)",
                                "Mobile Responsive Design",
                                "SEO Optimised Structure",
                                "Ongoing Maintenance & Support"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="font-bold text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance & Growth — Dark Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6">Performance & <span className="text-primary italic">Growth</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Performance Driven",
                                desc: "We focus on speed, security, and user experience, ensuring your website not only looks great but performs exceptionally for every visitor.",
                                icon: Zap
                            },
                            {
                                title: "eCommerce Expertise",
                                desc: "From simple product pages to complex subscription models, we build shopping experiences that convert visitors into loyal customers.",
                                icon: ShoppingCart
                            },
                            {
                                title: "Trusted Technology",
                                desc: "Built on <a href='https://wordpress.org' target='_blank' class='text-primary hover:underline'>WordPress</a>, the world's most popular CMS, giving you full control over your content with an easy-to-use interface.",
                                icon: ShieldCheck
                            },
                            {
                                title: "Digital Growth",
                                desc: "Your website is more than just a digital business card; it's a tool for growth. We integrate SEO and analytics to help you scale.",
                                icon: TrendingUp
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 hover:border-primary/50 transition-all group"
                            >
                                <div className="w-20 h-20 rounded-[2rem] bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                                <p className="text-xl text-white/50 leading-relaxed italic font-light" dangerouslySetInnerHTML={{ __html: item.desc }} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="relative p-12 md:p-20 rounded-[5rem] bg-white border border-gray-100 shadow-2xl flex flex-col md:flex-row items-center gap-12 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                        <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl ring-8 ring-gray-50 shrink-0">
                            <Image src="/assets/images/founder.jpg" alt="Claire" fill className="object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">&quot;Let&apos;s build your digital home.&quot;</h3>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                Working with our development partners, we ensure your website is the perfect reflection of your brand. Contact us today to discuss your project.
                            </p>
                            <Link href="/contact" className="btn-premium px-12 py-5 group">
                                DISCUSS YOUR PROJECT
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
