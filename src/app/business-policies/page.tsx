"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Clock, PlusCircle, AlertCircle, RefreshCcw, FileText, Settings } from "lucide-react";

const policies = [
    {
        title: "Booking Slots",
        icon: Clock,
        content: "Content design and content filming slots will not be held without payment being made in advance."
    },
    {
        title: "Turnaround",
        icon: RefreshCcw,
        content: "Content design and content filming will be provided in set timescales as agreed. Payment for emergency or rushed requested work will be applied."
    },
    {
        title: "Additional Work",
        icon: PlusCircle,
        content: "Additional filming and editing work, outside of social media packages will be invoiced. Non-payment will result in media being kept until payment made."
    },
    {
        title: "Late Payment",
        icon: AlertCircle,
        content: "Payments are required in line with payment terms on invoices, any late payments outside of terms will be charged and follow up action will commence."
    },
    {
        title: "Refunds",
        icon: RefreshCcw,
        content: "The cost of content design and content filming will not be refunded in full, after it has been created and delivered to the client. Any refunds are entirely at the discretion of Miss PA Your VA."
    },
    {
        title: "Content Agreements",
        icon: FileText,
        content: "If a contract or content plan agreement is in place, this is legally binding and must be fulfilled by both parties – me as the server and you as the receiving client. These are usually put in place for 3 months."
    },
    {
        title: "Amendments",
        icon: Settings,
        content: "Amendments can be asked for and I will happily help, however turnaround for these amendments will be 1-3 working days as time is scheduled in advance."
    }
];

export default function BusinessPoliciesPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Business"
                accentTitle="Policies"
                subtitle="Clear guidelines to ensure a smooth and professional working relationship."
                currentPage="Business Policies"
            />

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {policies.map((policy, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <policy.icon size={28} />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-2xl font-serif font-bold italic tracking-tight uppercase">{policy.title}</h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed font-light italic">
                                            {policy.content}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 p-12 rounded-[4rem] bg-[#0F0F0F] text-white relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                        <ShieldCheck className="text-primary mx-auto mb-8" size={48} />
                        <h3 className="text-3xl font-serif font-bold mb-4 italic uppercase">Professional Commitment</h3>
                        <p className="text-white/60 font-light italic leading-relaxed max-w-2xl mx-auto">
                            By booking our services, you acknowledge and agree to these policies. We are committed to providing exceptional service and appreciate your cooperation in maintaining these standards.
                        </p>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
