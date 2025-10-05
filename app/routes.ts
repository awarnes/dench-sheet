import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  ...prefix("/dench-sheet/", [index("routes/home.tsx")]),
] satisfies RouteConfig;
