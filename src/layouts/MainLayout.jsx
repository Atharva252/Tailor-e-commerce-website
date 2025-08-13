import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen px-0">{children}</main>
      <Footer />
    </>
  );
}
