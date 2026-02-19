"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-foreground">
                            Marketing & Virtual Assistant Team for <br />
                            <span className="text-primary italic">beauty businesses in Devon</span>
                        </h1>

                        <h3 className="text-xl font-bold text-primary mb-8 tracking-widest uppercase">What are you looking for?</h3>

                        <p className="text-xl font-bold text-foreground mb-8 leading-relaxed">
                            Helping business owners free their time so that they can focus on growing their business and making more money
                        </p>

                        <div className="space-y-6 text-muted-foreground text-lg mb-10 leading-relaxed">
                            <p>
                                At Miss PA Your VA, we&apos;re more than a virtual assistant service in Devon — we&apos;re your go-to partner for <Link href="/services/social-media-manager" className="text-primary font-bold hover:underline">managing your socials</Link>, content creation, marketing projects, and appointment setting.
                            </p>
                            <p>
                                Running a business means juggling a hundred moving parts. That&apos;s where we step in. As your dedicated business support and marketing specialists, we take care of the behind-the-scenes work so you can focus on winning clients and increasing your income.
                            </p>
                            <p>
                                Unlike agencies that push one-size-fits-all packages, Miss PA Your VA provides tailored business support that feels like an extension of your own team.
                            </p>
                        </div>

                        <Link href="/about" className="btn-premium group">
                            Find out more
                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-2 border-primary/5">
                            <Image
                                src="/assets/images/founder.jpg"
                                alt="Marketing for beauty businesses in Devon"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full flex flex-col items-center justify-center -rotate-12 border-8 border-white shadow-2xl text-white">
                            <p className="text-4xl font-bold">17+</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-center px-4">Years Professional Experience</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
