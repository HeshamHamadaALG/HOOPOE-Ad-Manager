import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Policy from "../views/Policy/Policy.jsx";
import Goal from "../views/Goal/Goal.jsx";
import Payment from "../views/Payment/Payment.jsx";
import Locations from "../views/Locations/Locations.jsx";
import Persona from "../views/Persona/Persona.jsx";
import Profile from "../views/Profile/Profile";

var dashRoutes = [
  { path: "/dashboard/persona", name: "Home Page", icon: "shopping_shop", component: Persona },
  { path: "/dashboard/profile", name: "My Profile", icon: "users_single-02", component: Profile },
  { path: "/dashboard/analytics", name: "Analytics", icon: "business_chart-bar-32", component: Dashboard },
  { path: "/dashboard/locations", name: "Locations", icon: "location_map-big", component: Locations },
  { path: "/dashboard/policy", name: "Policy", icon: "files_paper", component: Policy },
  { path: "/dashboard/goal", name: "Goal", icon: "transportation_air-baloon", component: Goal },
  { path: "/dashboard/payment", name: "Payment", icon: "business_money-coins", component: Payment },
  { redirect: true, path: "/dashboard/", pathTo: "/dashboard/persona", name: "Persona" }
];
export default dashRoutes;
