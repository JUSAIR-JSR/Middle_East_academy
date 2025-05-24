import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Support from "../components/Support";
import About from "../components/About";
import Locations from "../components/Locations";
import ContactUs from "../components/ContactUs";
import Posters from "../components/Poster";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <section id="hero">
          <Hero />
        </section>

        <section id="posters" className="scroll-mt-16">
          <Posters />
        </section>

        <section id="courses" className="scroll-mt-16">
          <Courses />
        </section>

        <section id="support" className="scroll-mt-16">
          <Support />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>

        <section id="locations" className="scroll-mt-16">
          <Locations />
        </section>

        <section id="contact" className="scroll-mt-16">
          <ContactUs />
        </section>
      </main>
    </>
  );
}