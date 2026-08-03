import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obedience Training",
  description:
    "Tailored obedience training for advanced goals, everyday control and responsible support with challenging behaviour.",
};

export default function ObediencePage() {
  return (
    <ProgramPage
      programmeNumber="01"
      tone="obedience"
      eyebrow="Obedience training"
      title="Obedience training for every level of ambition."
      description="From advanced competition preparation to stronger everyday control and support with challenging behaviour, training is tailored to the dog and the owner’s goals."
      image="/images/obedience.jpeg"
      imageAlt=""
      imagePosition="center center"
      overviewTitle="Clear training for different owners and different goals."
      overview="Obedience training is not one programme for every dog. Le Danjoli works with breeders, handlers, experienced owners and everyday dog owners, shaping the training around the standard of obedience and level of support each dog-and-owner team needs."
      focusTitle="What strong obedience can build"
      focusItems={[
        "Better communication and handler confidence",
        "Reliable obedience around everyday distractions",
        "Practical control for home, walks and public spaces",
        "Structured preparation for higher standards of training",
        "Safer management strategies for difficult behaviour",
      ]}
      pathways={[
        {
          title: "Advanced obedience, certifications & shows",
          description:
            "For breeders, handlers and owners aiming for a higher obedience standard. Training can support preparation for certifications, evaluations, dog shows and competitions, with focused work toward the requirements of each goal.",
        },
        {
          title: "Advanced everyday obedience",
          description:
            "For owners who want dependable obedience beyond basic at-home training. The focus is on better control, communication and confidence in the situations that come up in everyday life.",
        },
        {
          title: "Reactive & aggressive dogs",
          description:
            "For owners managing reactive, difficult or aggressive behaviour. Training focuses on improving control, addressing unwanted behaviour and giving the owner safer, more confident management tools. Each dog is assessed individually, with no unrealistic promises of a complete cure.",
        },
      ]}
      closingTitle="Find the right obedience path for your dog."
      closingText="Use the enquiry page to share your dog’s age, experience and the goals you would like to work toward."
    />
  );
}
