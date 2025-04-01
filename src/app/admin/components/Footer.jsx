export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Machcom. All rights reserved.
        </p>
      </footer>
    );
  }