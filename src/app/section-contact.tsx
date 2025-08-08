import { FaPhone } from "react-icons/fa6";
import ContactForm from "./contact-form";
import SectionContainer from "./section-container";

const SectionContact = () => {
  return (
    <SectionContainer icon={FaPhone} name="Contact" id="contact">
      <div className="bg-background p-4 rounded-2xl space-y-4">
        <h1 className="text-4xl">Contact Me</h1>
        <ContactForm />
      </div>
    </SectionContainer>
  );
};

export default SectionContact;
