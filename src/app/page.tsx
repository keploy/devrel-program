"use client"
import Content from "@/components/Content";
import Header from "@/components/Header";
import Hero from "@/components/hero";
import Intro from "@/components/Intro";
import Join from "@/components/Join";
import NewsletterSignup from "@/components/Newsletter";
import Testimonial from "@/components/Testimonials";
import { useDarkMode } from "@/components/utils/DarkModeContext";

export default function Home() {
  const { darkMode } = useDarkMode(); // Access the dark mode state
  return (
    <div className={`${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-neutral-100 text-gray-700'}`}>
        <Header />
        <Hero />
        <Intro />
        <Content />
        <Testimonial />
        <Join />
        <NewsletterSignup />
      </div>
  );
}
