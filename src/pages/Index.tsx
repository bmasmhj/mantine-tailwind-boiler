import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import Home from "./Home/Index";
import '../styles/index.scss'
export default function MainPage() {
  const routes = [
    { path: '/', component: <Home />},
    { path: '/logs', component: <>Logs</> },
    { path: '/events', component: <>Events</> },
    { path: '/account', component: <>Account</> },
    { path: '/security', component: <>Security</> },
    { path : '/messages' , component: <>Messages</>},
    { path: '/settings', component: <>Settings</> },
  ]
  return (
     <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.component}
        />
      ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
