import React from 'react';
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <section id='privacy-policy' className="min-h-screen px-6 py-8 bg-white">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        This Privacy Policy explains how <strong>Andrea Di Lena</strong> ("we", "our", "us") collects, uses, and protects your personal data in compliance with the EU General Data Protection Regulation (GDPR) and applicable privacy laws.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Data Controller</h2>
      <p className="text-gray-700">
        The data controller is <strong>Andrea Di Lena</strong>, based in Italy. For any inquiries, you can contact the data controller by email: <a href="mailto:a.dilena@elitesoftwarehouse.com" className="text-blue-600 underline">a.dilena@elitesoftwarehouse.com</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Purpose of Data Processing</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Managing contact requests submitted via the website</li>
        <li>Communicating about services, projects, or updates</li>
        <li>Fulfilling legal, fiscal, and contractual obligations</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Legal Basis for Processing</h2>
      <p className="text-gray-700">
        Data processing is lawful based on the user's consent and/or the execution of contractual or pre-contractual obligations, as well as compliance with legal obligations.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Data Processing Methods</h2>
      <p className="text-gray-700">
        Personal data is processed using IT and organizational tools, and is stored only for the time strictly necessary to achieve the purposes indicated above.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">User Rights</h2>
      <p className="text-gray-700">
        You can exercise your rights under Articles 15-22 of the GDPR at any time, including:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Access your personal data</li>
        <li>Request correction or deletion</li>
        <li>Request restriction of processing or object</li>
        <li>Data portability</li>
        <li>Lodge a complaint with the relevant Data Protection Authority</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cookies and Tracking Tools</h2>
      <p className="text-gray-700">
        This website may use technical cookies and, with your consent, analytical or profiling cookies. For more details, see our <Link to="/cookie-policy" className="text-blue-600 underline">Cookie Policy</Link>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Data Security</h2>
      <p className="text-gray-700">
        We implement appropriate technical and organizational measures to protect personal data against unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Changes to this Policy</h2>
      <p className="text-gray-700">
        This Privacy Policy may be updated from time to time. Any changes will be published on this page, with the “Last updated” date revised accordingly.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: March 26, 2026
      </p>
    </section>
  );
}