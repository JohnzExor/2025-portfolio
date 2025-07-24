import { FaPhone } from "react-icons/fa6";
import ContactForm from "./contact-form";

const SectionContact = () => {
  return (
    <section
      id="contact"
      className="p-2 md:p-4 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 md:space-y-4"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <FaPhone size={20} />
        <span>Contact</span>
      </div>
      <div className="bg-background p-4 rounded-2xl space-y-4">
        <h1 className="text-4xl">Contact Me</h1>
        <ContactForm />
      </div>
    </section>
  );
};

export default SectionContact;
