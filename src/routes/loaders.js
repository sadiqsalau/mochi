import React from "react";
import {
    CenteredSpinner,
    FullScreenSpinner,
} from "@/components/spinner/spinner";

import { createRouteLoader } from "./create-route-loader";

// Layout
export const Layout = createRouteLoader(
    "layout",
    (layout) => import(`@/layouts/${layout}/${layout}.jsx`),
    {
        fallback: React.createElement(FullScreenSpinner),
    }
);

// Page
export const Page = createRouteLoader(
    "page",
    (page) => import(`@/pages/${page}/${page}.jsx`),
    {
        fallback: React.createElement(CenteredSpinner),
    }
);
