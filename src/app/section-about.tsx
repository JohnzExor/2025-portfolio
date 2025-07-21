import { User } from "lucide-react";

const SectionAbout = () => {
  return (
    <section
      id="about"
      className="p-2 md:p-4 rounded-3xl bg-background/50 backdrop-blur-lg border border-background/20 space-y-2 md:space-y-4"
    >
      <div className="flex items-center gap-2 bg-background px-4 py-3 rounded-2xl w-fit text-primary">
        <User />
        <span>About me</span>
      </div>

      <div className="bg-background p-4 rounded-2xl space-y-4">
        <h1 className="text-2xl">So who am I?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
};

export default SectionAbout;
