export const onboardingImages = Object.values(
  import.meta.glob("@/assets/images/onboarding/*.png", {
    eager: true,
    as: "url",
  })
);

export const onboarding = [
  {
    title: "connect with friends!",
    text: "Sed ut perspiciatis unde omnis iste rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
    image: onboardingImages[0],
  },
  {
    title: "get in touch instantly",
    text: "Eaque ipsa quae abed ut perspiciatis unde omnis iste rem aperiam, eaque ipsa quae ab illo inventore verita.",
    image: onboardingImages[1],
  },
  {
    title: "many platforms, one chat",
    text: "Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae. Isterem aperiam, eaque ab illo.",
    image: onboardingImages[2],
  },
];
