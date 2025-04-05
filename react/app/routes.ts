import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("contacts/:contactId", "routes/contact.tsx"),
    route("contacts/:contactId/edit", "routes/edit-contact.tsx"),
    route("employees", "routes/record-list.tsx", { id: "record-list" }),
    route("employees/edit/:id", "routes/record.tsx", { id: "record-edit" }),
    route("employees/create", "routes/record.tsx", { id: "record-create" }),
  ]),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
