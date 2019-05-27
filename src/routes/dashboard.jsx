import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Policy from "../views/Policy/Policy.jsx";
import Assets from "../views/Assets/Assets.jsx";
import Goal from "../views/Goal/Goal.jsx";
import Payment from "../views/Payment/Payment.jsx";
import Locations from "../views/Locations/Locations.jsx";
import Persona from "../views/Persona/Persona.jsx";

var dashRoutes = [
  { path: "/dashboard", name: "Analytics", icon: "business_chart-bar-32", component: Dashboard },
  { path: "/locations", name: "Locations", icon: "location_map-big", component: Locations },
  { path: "/assets", name: "Assets", icon: "design_image", component: Assets },
  { path: "/policy", name: "Policy", icon: "files_paper", component: Policy },
  { path: "/persona", name: "Persona", icon: "users_single-02", component: Persona },
  { path: "/goal", name: "Goal", icon: "transportation_air-baloon", component: Goal },
  { path: "/payment", name: "Payment", icon: "business_money-coins", component: Payment },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
