import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main>
      <section id='hero'><Hero /></section>  <section id='about'><About /></section> <section id='experience'><Experience /></section> <section id='skills'><Skills /></section> <section id='projects'><Projects /></section> <section id='education'><Education /></section>  <section id='contact'><Contact /></section>  <section id='footer'><Footer /></section>
    </main>
  );
}
