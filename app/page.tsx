import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import Support from "./components/Support";
import About from "./components/About";
import Locations from "./components/Locations";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="Hero">
          <Hero />
        </section>

        <section id="Courses">
          <Courses />
        </section>

        <section id="Support">
          <Support />
        </section>

        <section id="About">
          <About />
        </section>

        <section id="Locations">
          <Locations />
        </section>

        <section id="ContactUs">
          <ContactUs />
        </section>
      </main>
    </>
  );
}
