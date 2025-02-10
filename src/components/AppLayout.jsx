import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
