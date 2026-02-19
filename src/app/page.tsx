import Hero from "@/components/Hero";
import AboutPreview from "@/components/About";
import Services from "@/components/Services";
import BlogPreview from "@/components/BlogPreview";
import Showcase from "@/components/Showcase";
import CTASection from "@/components/CTASection";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScrollVelocity
        texts={['Social Media Specialists', 'Business Growth']}
        velocity={50}
        className="text-primary"
      />
      <AboutPreview />
      <Services />
      <ScrollVelocity
        texts={['Luxury Visuals', 'Exceptional Support']}
        velocity={30}
        className="text-primary"
      />
      <Showcase />
      <BlogPreview />
      <CTASection />
    </main>
  );
}
