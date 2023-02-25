import { createRouteLoader } from "./create-route-loader";

export const Page = createRouteLoader("page", (page) =>
  import(`../pages/${page}/${page}.jsx`)
);
