import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manwork & Protection Training",
  description:
    "Controlled manwork and protection training for suitable dogs, built on obedience, handler guidance and responsible development.",
};

export default function ProtectionTrainingPage() {
  return (
    <ProgramPage
      programmeNumber="03"
      tone="protection"
      eyebrow="Manwork & protection training"
      title="Structured manwork and protection training."
      description="A controlled, considered programme for suitable dogs, built on strong obedience, handler guidance and responsible development."
      image="/images/protection.jpeg"
      imageAlt=""
      imagePosition="center center"
      overviewTitle="Control, structure and suitability come first."
      overview="Manwork and protection training are specialist paths. Every dog is approached through an honest assessment of temperament, drive and obedience foundation. Training is structured and controlled, with clear handler involvement throughout."
      focusTitle="The essential foundations"
      focusItems={[
        "Temperament and suitability assessment",
        "Solid obedience and handler control",
        "Clear commands and responsible handling",
        "Controlled protection work for suitable dogs",
        "Progression appropriate to the individual dog",
      ]}
      pathways={[
        {
          title: "Competition & certification training",
          description:
            "For breeders, handlers and owners preparing a dog for manwork-related certifications, evaluations, shows or competitions. The training is shaped around the relevant standard, while maintaining control and clear handler communication.",
        },
        {
          title: "Personal protection training",
          description:
            "For owners who want to develop a suitable dog for personal or property protection. The focus is on controlled protection work, reliable obedience, handler control and teaching the dog to respond appropriately to commands—not uncontrolled aggression.",
        },
      ]}
      closingTitle="Discuss the right manwork path for your dog."
      closingText="Use the enquiry page to tell us about your dog’s background and the kind of structured training you are considering."
    />
  );
}
