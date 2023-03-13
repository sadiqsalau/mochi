export const userImages = Object.values(
  import.meta.glob("@/assets/images/users/*.png", {
    eager: true,
    import: "default",
    query: {
      w: "80",
      h: "80",
    },
  })
);
