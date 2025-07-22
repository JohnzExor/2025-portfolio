import { Separator } from "@/components/ui/separator";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { links, socials } from "./data";

const Footer = () => {
  return (
    <footer className="space-y-4 md:space-y-0 rounded-2xl p-10 md:grid grid-cols-6 bg-background/80 backdrop-blur-lg border border-background/20 mb-4">
      <div className="col-span-2 w-2/3">
        <div>
          <h1 className="font-bold mb-4 text-xl text-primary">Johnzyll.</h1>
          <p className="text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div>
        <h1 className="font-bold mb-4">Quick Links</h1>
        <ul className="space-y-2 text-muted-foreground">
          {links.map(({ link, name }, index) => (
            <li key={index}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold mb-4">Get in Touch</h1>
        <ul className="space-y-2 text-muted-foreground">
          <li>
            <Link
              href="mailto:jimenojohnzyll@gmail.com"
              className="flex items-center gap-2"
            >
              <Mail size={20} className=" shrink-0" />
              <span>jimenojohnzyll@gmail.com</span>
            </Link>
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={20} className=" shrink-0" />
            <span>Puerto Princesa City, Palawan, Philippines</span>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold mb-4">Connect</h1>
        <ul className="space-y-2 text-muted-foreground">
          {socials.map(({ link, name }, index) => (
            <li key={index}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-6 mt-6">
        <Separator className="w-full" />
        <div className=" md:flex justify-between text-sm text-muted-foreground pt-8">
          <span>© 2025 Johnzyll Jimeno | Portfolio. All rights reserved.</span>
          <ul className="md:flex items-center gap-4">
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
