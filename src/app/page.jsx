// src/app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from "../components/Home";

export default function HomePage() {
  return (
    <div >
      <Header />
      <div className="">
        <Home />
      </div>
      <Footer />
    </div>
  );
}