import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export default [
  layout( "routes/admin/admin_layout.tsx", [
    route("Dashboard", "routes/admin/Dashboard.tsx"),
    route("all_users", "routes/admin/all_users.tsx"),
  ]),
] satisfies RouteConfig;
