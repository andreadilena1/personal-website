import React from 'react';

export default function CookiePolicy() {
  return (
    <section className="min-h-screen px-6 py-12 bg-white pt-32">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Cookie Policy</h1>

      <p className="text-gray-700 mb-4">
        La presente informativa è resa ai sensi dell’art. 13 del Regolamento (UE) 2016/679 (GDPR) e in conformità con il Provvedimento del Garante per la protezione dei dati personali n. 231 del 10 giugno 2021.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cosa sono i cookie</h2>
      <p className="text-gray-700">
        I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell’utente al momento della visita. Vengono utilizzati per migliorare l’esperienza di navigazione, ricordare preferenze o raccogliere dati statistici.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Tipologie di cookie utilizzati</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><strong>Cookie tecnici</strong>: essenziali per il corretto funzionamento del sito.</li>
        <li><strong>Cookie analitici (anonimizzati)</strong>: utilizzati per raccogliere informazioni in forma aggregata sul numero di utenti e su come visitano il sito.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Gestione dei cookie</h2>
      <p className="text-gray-700">
        È possibile gestire le preferenze relative ai cookie direttamente dal browser, ad esempio impedendo l’installazione di cookie di terze parti o cancellando quelli già salvati.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Cookie di terze parti</h2>
      <p className="text-gray-700">
        Questo sito potrebbe incorporare servizi di terze parti (es. video, mappe, font) che potrebbero impostare cookie tecnici o analitici. Per maggiori informazioni, si rimanda alle relative informative dei fornitori.
      </p>

      <p className="text-sm text-gray-500 mt-12">
        Ultimo aggiornamento: 15 giugno 2025
      </p>
    </section>
  );
}
