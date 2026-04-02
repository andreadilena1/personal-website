import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-center text-sm text-gray-500 py-6">
      
      <p className="mb-2">
        © {new Date().getFullYear()} Andrea Di Lena. All rights reserved.
      </p>

      <div className="flex justify-center gap-4 text-blue-600">
        <Link to="/privacy-policy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="/cookie-policy" className="hover:underline">
          Cookie Policy
        </Link>
      </div>
      
    </footer>
  );
}