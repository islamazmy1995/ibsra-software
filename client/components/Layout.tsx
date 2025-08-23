import { Outlet } from "react-router-dom";
import { Navbar } from "./ui/Navbar";
import { Footer } from "./ui/footer";


export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50"> 
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}