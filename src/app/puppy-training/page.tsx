import ProgramPage from "@/components/ProgramPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puppy Training",
  description:
    "Age-appropriate puppy training for good habits, calm curiosity and a confident foundation.",
};

export default function PuppyTrainingPage() {
  return (
    <ProgramPage
      programmeNumber="02"
      tone="puppy"
      eyebrow="Puppy training"
      title="Give your puppy a confident first chapter."
      description="Early guidance that supports good habits, calm curiosity and a positive foundation for the road ahead."
      image="/images/puppy.jpeg"
      imageAlt="Puppy learning during a training session"
      imagePosition="center center"
      overviewTitle="Small lessons. A lasting difference."
      overview="Puppyhood moves quickly. Starting with simple, age-appropriate training gives you practical tools for the important early months, while helping your puppy learn how to explore the world with confidence."
      focusTitle="Early-life essentials"
      focusItems={[
        "Name recognition and calm attention",
        "Beginning recall and basic cues",
        "Positive social experiences",
        "Confidence in new environments",
        "Home routines that are easy to repeat",
      ]}
      closingTitle="Start their journey with intention."
      closingText="A short conversation is the best way to understand where your puppy is now and which foundations deserve attention first."
    />
  );
}
