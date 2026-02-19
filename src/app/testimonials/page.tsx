"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const googleReviews = [
    {
        name: "Sophia Bailey",
        time: "1 week ago",
        text: "I had Claire come and host an aesthetics event for me in front of 400 guests. She was professional and captivating but above all she was herself, her energy kept everyone entertained and she was simply magnificent. Thank you so much xxx",
    },
    {
        name: "Dylan Rowan",
        time: "2 weeks ago",
        text: "I've been using Claire since November 2025 and she has been amazing, her work and advice and knowledge around social media is fantastic. Highly recommend ⭐️⭐️⭐️⭐️⭐️",
    },
    {
        name: "Steff Goldring",
        time: "3 months ago",
        text: "If you're looking for someone super professional, friendly and super knowledgeable then you have come to the right place!! I had a fantastic content day with Claire and the time absolutely whizzed by as we had so much fun. The value for money is incredible as you get so much to use on your social media platforms and I can't wait to see what a boost to my business this has. Claire is a fountain of knowledge and knows exactly what she's talking about, you can clearly see her passion for being a SMM in her attitude and how she knows her craft inside and out. I've now signed up for an engagement package and can't wait to see the results. Such a lovely human, thank you Claire",
    },
    {
        name: "Mel Kingdom-Andrews",
        time: "3 months ago",
        text: "⭐️⭐️⭐️⭐️⭐️ Filming content with Claire was such a fantastic experience! 🎥💫 She made the whole process so easy, fun, and professional from start to finish. Claire's creativity, direction, and support throughout the day were incredible — she really helped me feel relaxed and confident in front of the camera. The end result was amazing, and I couldn't recommend her highly enough! 💕",
    },
    {
        name: "Denise Francis",
        time: "3 months ago",
        text: "Claire is absolutely amazing at what she does. Our socials are now sleek and professional and we get so many compliments on them from our clients 😍 If you want to stand out from the crowd and grow your business then Claire is the one for you.",
    },
    {
        name: "Leanne Wilson",
        time: "3 months ago",
        text: "Outstanding Social Media Management & Marketing Expertise! Working with Claire at Miss PA, Your VA has been an absolute game-changer for our business. Her work is nothing short of exceptional — she consistently goes above and beyond in every aspect of her role. Claire's knowledge of the industry, systems, marketing strategy, and ever-changing social media algorithms is the best I've come across. She understands how to turn vision into measurable results — from generating leads and engagement to elevating our brand identity, professionalism, and overall impact within the industry. Her commitment, dedication, and genuine passion for her work are evident in everything she does. Claire and her team are worth their weight in gold — and by that I mean business! If you're looking for someone who truly gets it — who will treat your business as if it were her own — Claire is that person. I cannot recommend her highly enough!",
    },
    {
        name: "Myah Griffin",
        time: "7 months ago",
        text: "Claire is amazing at what she does and is such a lovely woman! Since working with Claire our social media has grown even bigger! She always is there to give advice too and tips on how to better our business! X",
    },
    {
        name: "Alex Martin",
        time: "11 months ago",
        text: "I've had so much fun working with Claire. She is a fountain of knowledge has bags of energy to match mine and I love that she's not scared to tell me as it is. I need this!",
    },
    {
        name: "Claire Chalk",
        time: "12 months ago",
        text: "I was lucky enough to win a social media audit with Claire and it was great and so helpful. For someone who is a bit of a dinosaur with all things tech Claire made it really easy to understand. I'm now hoping to invest in one of her packages as can see how valuable this would be.",
    },
    {
        name: "Lucy",
        time: "12 months ago",
        text: "I have only worked with Claire for a couple of months, but the difference she has made to my business and social media accounts has been amazing! I'm lucky enough to live close to Claire and she's always happy to grab a cuppa and walk me through everything I need. Claire's knowledge of all things social media is amazing and I wouldn't be without her! Claire is fun, thoughtful, and individualises her approach. I don't just see Claire as a social media manager but a friend too. If you're looking for someone to get your business off the ground or give it a boost then look no further. Claire is your gal 🩷",
    },
];

const GMB_URL = "https://www.google.com/maps/place/Miss+PA+Your+VA/@51.0811981,-4.906486,7z/data=!3m1!4b1!4m6!3m5!1s0x486d05b79782cb87:0x9e1bad3b4a01ac53!8m2!3d51.1074622!4d-2.267224!16s%2Fg%2F11qf_rmmbm?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D";

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );
}

function StarRow() {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
        </div>
    );
}

function Initials({ name }: { name: string }) {
    const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2);
    return (
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
            {initials}
        </div>
    );
}

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="What Our Clients"
                accentTitle="Say"
                subtitle="Honest feedback from clinics and businesses across Devon and the UK."
                currentPage="Testimonials"
            />

            {/* Google Reviews Grid */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        {/* Google Review Badge */}
                        <a href={GMB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-5 p-6 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group mb-12">
                            <div className="flex flex-col items-center gap-1.5">
                                <span className="text-2xl font-serif font-bold text-[#1A1A1A]">EXCELLENT</span>
                                <StarRow />
                                <span className="text-sm text-muted-foreground">Based on <strong>32 reviews</strong></span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-sm group-hover:bg-blue-100 transition-all">
                                <GoogleIcon className="w-5 h-5" />
                                Google
                                <ExternalLink size={12} />
                            </div>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {googleReviews.map((review, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 4) * 0.05 }}
                                className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-4">
                                        <Initials name={review.name} />
                                        <div>
                                            <p className="font-bold text-lg">{review.name}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{review.time}</p>
                                        </div>
                                    </div>
                                    <GoogleIcon className="w-6 h-6 opacity-40" />
                                </div>
                                <StarRow />
                                <p className="text-muted-foreground leading-relaxed mt-4 line-clamp-6 flex-grow">{review.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <a href={GMB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white border border-gray-200 font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-lg">
                            View All Reviews on Google
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
