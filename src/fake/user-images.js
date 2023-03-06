export const userImages = Object.values(
  import.meta.glob("@/assets/images/users/*.png", {
    eager: true,
    as: "url",
  })
);
