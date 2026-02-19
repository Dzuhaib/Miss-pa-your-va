"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { Scale, CheckCircle2 } from "lucide-react";

export default function ContractTermsPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Terms &"
                accentTitle="Conditions"
                subtitle="The foundational agreement between Miss PA Your VA and our valued clients."
                currentPage="Terms & Conditions"
            />

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:italic prose-headings:font-bold prose-p:text-muted-foreground prose-p:italic prose-p:font-light prose-strong:text-foreground prose-li:text-muted-foreground prose-li:italic prose-li:font-light"
                    >
                        <div className="p-12 rounded-[4rem] bg-white border border-gray-100 shadow-sm mb-16">
                            <p className="text-xl leading-relaxed mb-0">
                                These Terms & Conditions (&quot;Agreement&quot;) set out the expectations and responsibilities between <span className="text-primary font-bold">Miss PA Your VA</span> (&quot;Service Provider&quot;) and you, the &quot;Client&quot;. By working with us, you agree to these terms.
                            </p>
                        </div>

                        <div className="space-y-24">
                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">1. Services</h2>
                                <p>Services and packages will be agreed in advance with each Client. These may include, but are not limited to, social media management, virtual assistant support, administration, creative tasks, marketing support, or project-based services. The scope of work will be tailored to the Client&apos;s needs and confirmed prior to commencement.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">2. Service Location</h2>
                                <p>Services are primarily delivered remotely from our offices. On occasion, and if agreed in advance, in-person support at the Client&apos;s location may be provided.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">3. Availability</h2>
                                <p>Support is generally available during business hours, with some flexibility for evenings or Saturdays where required. Services are not available on Sundays or during pre-agreed leave, with notice given in advance. The Service Provider does not work on UK bank holidays, unless the Client is subscribed to the Super Hero Package, which includes cover during these periods.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">4. Payments</h2>
                                <div className="space-y-4">
                                    {[
                                        "Services are invoiced at the agreed rate per package or project.",
                                        "Payments are due in advance of each month unless otherwise agreed.",
                                        "Late payments may incur fees.",
                                        "Standing orders are recommended to ensure timely payment.",
                                        "Discounts and referral offers may be applied at the discretion of Miss PA Your VA.",
                                        "As independent contractors, our team members are not entitled to company employee benefits.",
                                        "Missed payments will result in an immediate pause of services. Work will continue only once payment is made. Content missed during this time is forfeited and not owed."
                                    ].map((text, i) => (
                                        <div key={i} className="flex gap-4">
                                            <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                                            <span>{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">5. Term & Termination</h2>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>A minimum 3-month commitment applies to ongoing services unless otherwise agreed.</li>
                                    <li>Either party may terminate with 30 working days&apos; written notice after the initial term.</li>
                                    <li>Immediate termination may occur in the event of a breach of agreement.</li>
                                    <li>Any outstanding balances will be invoiced and payable immediately.</li>
                                </ul>
                                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">Early Termination Without Breach</h4>
                                    <p className="mb-0">Where the Client elects to terminate this Agreement before completion of the minimum term without breach, an early termination fee of up to 50% of the remaining contract value may apply, at the Service Provider&apos;s discretion.</p>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">6. Offboarding</h2>
                                <p>Offboarding is how we smoothly wrap things up when your contract comes to an end. Around 1–2 weeks before your end date, we&apos;ll begin winding down posting, scheduling, and engagement activity. At the end of the contract we will:</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>Log out of your accounts.</li>
                                    <li>Remove stored data and files securely.</li>
                                    <li>Provide final analytics and reports.</li>
                                    <li>Prepare handover notes to ensure you (or your next team) can continue without disruption.</li>
                                </ul>
                                <p className="font-bold text-foreground">This ensures a stress-free transition with a clear picture of performance and next steps.</p>

                                <div className="p-8 border-l-4 border-primary bg-gray-50">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">Delivery Measurement</h4>
                                    <p className="mb-0">Services are delivered and assessed on a weekly or monthly basis in accordance with the agreed package. There is no guarantee of daily posting, stories, engagement, or activity unless expressly stated in writing. &quot;Up to&quot; quantities represent maximum outputs, not minimum daily guarantees.</p>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">7. Refunds</h2>
                                <p>All payments made to Miss PA Your VA are non-refundable. As services and deliverables are classed as digital products and fall under the UK Digital Products Regulations protecting digital creators, the Client acknowledges that they are not entitled to a refund once work has commenced or digital assets have been delivered. Refunds will only be considered in exceptional circumstances and remain at the sole discretion of the business owner.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">8. Service Changes & Upgrades</h2>
                                <p>Clients may upgrade their package or add additional services at any time, with costs adjusted accordingly. Downgrades or reductions in service are not permitted mid-contract. Any requests to reduce or cancel services must follow the Termination notice period set out in Section 5.</p>
                                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">Exceptional Circumstances and Continuity of Service</h4>
                                    <p className="mb-0">While every effort is made to deliver services consistently and on time, the Service Provider reserves the right to adjust schedules or delivery temporarily in the event of illness, family emergency, bereavement, or other exceptional circumstances beyond reasonable control. Where possible, reasonable notice will be provided, and services will resume or be reasonably rebalanced once circumstances allow. Such temporary adjustments shall not constitute a breach of contract.</p>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">9. Revisions & Client Responsibilities</h2>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>The Client is responsible for providing accurate and timely information, content, and approvals required for the Services to be delivered.</li>
                                    <li>Delays caused by the Client (e.g., late content submission, lack of approvals, or missing information) may affect delivery timelines. Such delays are not the responsibility of Miss PA Your VA.</li>
                                    <li>Revisions are included within the scope of the agreed package or service. Additional revisions beyond the agreed scope may incur extra charges.</li>
                                    <li>Failure to provide required input may result in paused or limited service until outstanding items are received, without any adjustment to fees owed.</li>
                                </ul>
                                <div className="p-8 rounded-3xl bg-[#0F0F0F] text-white">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter italic text-primary">Client Communications and Conduct</h4>
                                    <p className="mb-0 text-white/60">The Client agrees to communicate in a professional and reasonable manner. Excessive, repetitive, or disruptive communication that materially interferes with service delivery may be addressed by the Service Provider and may require communication to be limited to scheduled check-ins or email correspondence only. Informal communications (including WhatsApp or voice notes) are for operational convenience and do not constitute contractual instructions or variations.</p>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">10. Confidentiality & Data Protection</h2>
                                <p>We respect the confidentiality of all Client information. No confidential or proprietary details (such as customer data, business strategies, or financials) will be disclosed during or after our work together. Upon termination, all Client-related materials will be securely returned or deleted, unless otherwise agreed.</p>
                                <div className="p-8 border-l-4 border-primary bg-gray-50">
                                    <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter italic">Client Account Access and Interference</h4>
                                    <p className="mb-0">Where the Client retains access to their social media accounts, the Service Provider cannot be held responsible for outcomes resulting from actions taken by the Client or any third party. Shared access limits the Service Provider&apos;s ability to control account behaviour, and liability for platform outcomes remains excluded.</p>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">11. Relationship of Parties</h2>
                                <p>Miss PA Your VA and its team operate as independent contractors, not employees. Clients are not responsible for providing benefits such as holiday pay, pensions, or health insurance.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">12. Work Product Ownership</h2>
                                <p>All deliverables, content, and materials created under the agreement are owned by the Client upon full payment. Where applicable, Miss PA Your VA may retain non-confidential examples for portfolio purposes unless otherwise requested by the Client.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">13. Liability</h2>
                                <p>We are not liable for delays or issues caused by circumstances outside of our control, including (but not limited to) social media platform outages, power failures, or lack of timely communication from the Client.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">14. Severability</h2>
                                <p>If any part of these Terms is found to be invalid or unenforceable, the remaining sections will remain in full effect.</p>
                            </section>

                            <section className="space-y-12">
                                <h2 className="text-4xl text-foreground">15. Packages, Hours & Scope of Work</h2>
                                <p>Each social media package includes a set number of hours dedicated to the Client&apos;s business each month. This time covers the agreed tasks and support within the chosen package.</p>

                                <ul className="list-disc pl-6 space-y-4">
                                    <li>Packages do not equate to full-time employment or unlimited availability.</li>
                                    <li>Additional hours requested outside of the agreed package will be invoiced separately at the standard VA rate of £35 per hour.</li>
                                    <li>Packages cover ongoing virtual support only. Additional services such as content creation days, strategy sessions, or 1:1 coaching are not included unless purchased separately as add-ons. Availability and pricing for these extras can be provided on request.</li>
                                </ul>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {[
                                        { name: "Basic Package", price: "£400/month", hours: "10 hours", details: "3 working days per week: ~2.5–3 hours per week, or ~50 minutes per working day." },
                                        { name: "Premium Package", price: "£550/month", hours: "15.5 hours", details: "4 working days per week: just under 4 hours per week, or ~50 minutes per working day." },
                                        { name: "Super Package", price: "£725/month", hours: "18.5 hours", details: "5 working days per week: ~4.5 hours per week, or just under 1 hour per working day." },
                                        { name: "Super Hero Package", price: "£995/month", hours: "32 hours", details: "5 working days per week: 1.5 per working day. Includes cover on UK bank holidays." }
                                    ].map((pkg, i) => (
                                        <div key={i} className="p-8 rounded-[3rem] bg-white border border-gray-100 shadow-sm">
                                            <h4 className="text-xl font-bold uppercase tracking-tighter italic text-primary">{pkg.name} — {pkg.price}</h4>
                                            <p className="mt-4 font-bold text-foreground">Approx. {pkg.hours} of support per month.</p>
                                            <p className="text-sm">{pkg.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">16. Content Creation Days</h2>
                                <p>Content creation days are booked as 5-hour sessions, with the date and time agreed in advance between the Client and the Service Provider.</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>The 5 hours cover filming, photography, and related creative support as agreed.</li>
                                    <li>If additional time is required beyond the allocated 5 hours, this will be invoiced at the standard hourly rate of £35 per hour.</li>
                                    <li>Any travel, venue hire, or additional expenses related to content days must be agreed and covered by the Client prior to the session.</li>
                                </ul>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">17. Virtual Assistant (VA) Support</h2>
                                <p>VA support can be booked either as part of a package or on a standalone basis.</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>Standalone VA services must be booked for a minimum of 2 hours per week.</li>
                                    <li>Time can also be booked in pre-agreed hourly blocks to suit the Client&apos;s requirements.</li>
                                    <li>Any unused hours within a block cannot be carried forward to the following week unless otherwise agreed in writing.</li>
                                    <li>Additional hours outside the agreed booking will be invoiced separately at the standard VA rate of £35 per hour.</li>
                                </ul>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">18. Website Services Disclaimer</h2>
                                <p>Miss PA Your VA may recommend independent freelancers for website design, development, or technical services. However, any website-related services are booked directly by the Client with the freelancer and are not provided by Miss PA Your VA.</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>All agreements, timelines, deliverables, and payments for website services are strictly between the Client and the freelancer.</li>
                                    <li>Miss PA Your VA accepts no liability for the quality, timing, implementation, or outcomes of any website work carried out by third parties.</li>
                                </ul>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">19. Third-Party Tools & Platforms</h2>
                                <p>Many services involve the use of third-party platforms (such as social media, scheduling tools, analytics dashboards, or design software). While every effort will be made to ensure smooth operation, Miss PA Your VA cannot be held responsible for outages, changes to platform policies, feature restrictions, or technical errors beyond our control.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">20. Subcontracting & Team Members</h2>
                                <p>Services may be carried out by team members or subcontractors working with Miss PA Your VA. All subcontractors are vetted and operate under confidentiality agreements. However, Clients agree that the Service Provider retains overall discretion in how tasks are allocated within the team.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">21. Changes to Contract</h2>
                                <p>Any changes to the agreed contract or scope of services must be provided with a minimum of one month&apos;s written notice. This notice period allows us to make the necessary updates to accounts, processes, or actions to ensure a smooth transition and continuity of service.</p>
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-4xl text-foreground">22. Annual Leave Policy</h2>
                                <p>At Miss PA Your VA, our team members are entitled to take time off, including annual leave, as we believe it is fair and essential for maintaining a healthy work–life balance. Any planned absence will not exceed five consecutive working days, and clients will always be given notice where relevant. During short periods of annual leave, work for client business pages will be pre-scheduled or appropriately covered to maintain continuity. While some tasks may be completed in advance or temporarily adjusted, we remain committed to ensuring your services run smoothly throughout any team member’s time off.</p>
                            </section>

                            <section className="p-12 rounded-[4rem] bg-primary text-white space-y-8">
                                <h2 className="text-4xl italic font-serif font-bold uppercase text-white">Digital Legal Context</h2>
                                <p className="text-white/80">Under UK Consumer Law, specifically Consumer Rights Act 2015 and Consumer Contracts Regulations 2013, consumers and businesses do not have an automatic right to a full refund once a digital service has started with their consent or digital content has been delivered.</p>
                                <p className="text-white/80">Once the client has received part of the agreed digital product — such as a content plan, strategy, or other creative assets — and work has demonstrably commenced, the law recognises that the provider has fulfilled part of the contract, and a full refund is not required.</p>
                                <p className="text-white/90 font-bold">Instead, any refund (if applicable) should be proportionate to the amount of work not yet completed — taking into account the time, planning, meetings, and digital materials already delivered.</p>
                            </section>
                        </div>
                    </motion.div>

                    <div className="mt-32 text-center">
                        <Scale className="text-primary/20 mx-auto mb-8" size={64} />
                        <p className="text-sm text-muted-foreground font-bold uppercase tracking-[0.4em]">Last Updated: February 2026</p>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
