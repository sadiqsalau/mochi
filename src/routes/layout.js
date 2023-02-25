import { createRouteLoader } from "./create-route-loader";

export const Layout = createRouteLoader("layout", (layout) =>
  import(`../layouts/${layout}/${layout}.jsx`)
);
