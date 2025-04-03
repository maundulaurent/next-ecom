// src/app/layout.jsx
"use client";
import { useState, useEffect } from "react";
import './globals.css'; // Import global styles (Tailwind included)
// import '../css/euclid-circular-a-font.css'; // Add custom font CSS
// import '../css/style.css'; // Add additional styles
import { ModalProvider } from './context/QuickViewModalContext'; // Quick view context
import { CartModalProvider } from './context/CartSidebarModalContext'; // Cart context
import { ReduxProvider } from '../redux/provider'; // Redux provider
import { PreviewSliderProvider } from './context/PreviewSliderContext'; // Preview slider context
import QuickViewModal from '../components/Common/QuickViewModal'; // Quick view modal
import CartSidebarModal from '../components/Common/CartSidebarModal'; // Cart sidebar modal
import PreviewSliderModal from '../components/Common/PreviewSlider'; // Preview slider modal
import ScrollToTop from '../components/Common/ScrollToTop'; // Scroll to top button
import PreLoader from '../components/Common/PreLoader'; // Preloader component

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Simulate loading delay
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="flex flex-col min-h-screen">
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ReduxProvider>
              <CartModalProvider>
                <ModalProvider>
                  <PreviewSliderProvider>
                    <main className="flex-grow">{children}</main>
                    <QuickViewModal />
                    <CartSidebarModal />
                    <PreviewSliderModal />
                  </PreviewSliderProvider>
                </ModalProvider>
              </CartModalProvider>
            </ReduxProvider>
            <ScrollToTop />
          </>
        )}
      </body>
    </html>
  );
}