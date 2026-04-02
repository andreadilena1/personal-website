import React from 'react';

export default function CookiePolicy() {
  return (
    <section id='cookie-policy' className="min-h-screen px-6 py-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Cookie Policy</h1>

      <p className="text-gray-700 mb-4">
        This Cookie Policy explains how <strong>Andrea Di Lena</strong> ("we", "our", "us") uses cookies and similar technologies on this website in compliance with the EU General Data Protection Regulation (GDPR) and applicable privacy laws.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What are cookies?</h2>
      <p className="text-gray-700">
        Cookies are small text files that are stored on your device when you visit a website. They help improve your browsing experience, remember your preferences, and collect statistical information about website usage.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Types of cookies we use</h2>
      <p className="text-gray-700 mb-2">
        Our website uses the following types of cookies:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>Technical cookies:</strong> necessary for the proper functioning of the website.</li>
        <li><strong>Analytical cookies (anonymized):</strong> used to gather aggregated information on user visits and behavior to improve the site experience.</li>
        <li><strong>Profiling cookies (if applicable):</strong> used to deliver personalized content or advertising based on your interests.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">User consent</h2>
      <p className="text-gray-700">
        By continuing to browse this site, you consent to the use of cookies. You can manage or disable cookies at any time via your browser settings. Disabling certain cookies may affect the functionality of the website.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Managing cookies</h2>
      <p className="text-gray-700">
        You can configure your browser to accept or reject cookies, delete cookies that are already stored, or receive a notification before a cookie is stored. Instructions for managing cookies vary depending on the browser used.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Third-party cookies</h2>
      <p className="text-gray-700">
        This site may include third-party services (e.g., videos, maps, fonts, analytics) that may set cookies on your device. For more details, refer to the privacy policies of the respective service providers.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Changes to this policy</h2>
      <p className="text-gray-700">
        We may update this Cookie Policy from time to time. Any changes will be reflected on this page with an updated "Last updated" date.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: March 26, 2026
      </p>
    </section>
  );
}