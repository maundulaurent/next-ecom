// src/app/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div >
      <Header />
      <div className="py-8">
          This is my body
      </div>
      <Footer />
    </div>
  );
}