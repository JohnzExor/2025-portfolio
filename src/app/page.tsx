import SectionAbout from "./section-about";
import SectionContact from "./section-contact";
import SectionHero from "./section-hero";
import SectionProjects from "./section-projects";
import SectionTech from "./section-tech";
import SectionTestimonials from "./section-testimonials";

const page = async () => {
  return (
    <main className="space-y-2 md:space-y-0 md:grid grid-cols-2 gap-3 mx-2 md:mx-0">
      <SectionHero />
      <SectionAbout />
      <SectionTech />
      <SectionTestimonials />
      <SectionProjects />
      <SectionContact />
    </main>
  );
};

export default page;
