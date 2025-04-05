import type { RouteConfig } from "@react-router/dev/routes";
import { index, route } from "@react-router/dev/routes";

export default [
  // React Router Address Book Tutorial routes
  index("routes/home.tsx"),
  route("contacts/:contactId", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),

  // MERN Stack Tutorial routes
  route("employees", "routes/record-list.tsx", { id: "record-list" }),
  route("employees/edit/:id", "routes/record.tsx", { id: "record-edit" }),
  route("employees/create", "routes/record.tsx", { id: "record-create" }),
] satisfies RouteConfig;
