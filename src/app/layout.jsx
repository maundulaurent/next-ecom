// src/app/layout.jsx
import './globals.css'; // Import global styles (Tailwind included)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">        
        <main className="flex-grow">{children}</main>        
      </body>
    </html>
  );
}