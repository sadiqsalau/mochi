import { lazy } from "@loadable/component";
import { paramCase } from "change-case";

export const createRouteLoader = (key, loader) => {
  const map = new Map();
  const load = (item) =>
    map.get(item) ||
    map
      .set(
        item,
        lazy(() => loader(paramCase(item)).then((module) => module[item]))
      )
      .get(item);

  return ({ [key]: name, ...props }) => load(name).render(props);
};
