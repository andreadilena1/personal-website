import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen px-6 py-12 bg-white pt-32">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Privacy Policy</h1>

      <p className="text-gray-700 mb-4">
        La presente informativa è resa ai sensi dell’art. 13 del Regolamento UE 2016/679 (GDPR).
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Titolare del trattamento</h2>
      <p className="text-gray-700">
        Il titolare del trattamento è <strong>Andrea Di Lena</strong>, residente in Italia. 
        Per qualsiasi informazione, è possibile contattare il titolare all’indirizzo email: <a href="mailto:andrea.dilena@elitesoftwarehouse.com" className="text-blue-600 underline">andrea.dilena@elitesoftwarehouse.com</a>.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Finalità del trattamento</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Gestione delle richieste di contatto inviate tramite il sito</li>
        <li>Comunicazioni relative a servizi o progetti</li>
        <li>Adempimenti fiscali e contrattuali</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Base giuridica</h2>
      <p className="text-gray-700">
        Il trattamento dei dati è lecito in quanto basato sul consenso dell’interessato e/o sull’esecuzione di obblighi contrattuali e precontrattuali.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Modalità di trattamento</h2>
      <p className="text-gray-700">
        I dati saranno trattati con strumenti informatici e conservati per il tempo strettamente necessario a raggiungere le finalità indicate.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Diritti dell’interessato</h2>
      <p className="text-gray-700">
        In ogni momento l’utente può esercitare i diritti previsti dagli articoli 15-22 del GDPR, tra cui:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Accesso ai propri dati</li>
        <li>Rettifica o cancellazione</li>
        <li>Limitazione o opposizione al trattamento</li>
        <li>Portabilità dei dati</li>
        <li>Reclamo al Garante per la protezione dei dati personali</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cookie e strumenti di tracciamento</h2>
      <p className="text-gray-700">
        Il sito potrebbe utilizzare cookie tecnici e, previo consenso, cookie analitici o di profilazione. Maggiori dettagli nella <a href="/cookie-policy" className="text-blue-600 underline">Cookie Policy</a>.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Ultimo aggiornamento: 15 giugno 2025
      </p>
    </section>
  );
}
