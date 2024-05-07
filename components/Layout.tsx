import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <main className="max-w-4xl mx-auto mt-16 antialiased">{children}</main>
      <Footer />
    </div>
  );
};
