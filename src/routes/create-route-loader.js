import loadable from "@loadable/component";
import { paramCase } from "change-case";

export const createRouteLoader = (key, loader, options = {}) =>
    loadable((props) => loader(paramCase(props[key])), {
        cacheKey: (props) => props[key],
        resolveComponent: (module, props) => module[props[key]],
        ...options,
    });
