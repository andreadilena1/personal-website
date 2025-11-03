import React, { useState } from "react";
import clsx from "clsx"; // Aggiungi questa libreria per gestire dinamicamente le classi
import { format } from "date-fns";

export default function Contacts() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    acceptPrivacy: false,
    submitDate: "",
  });
  const [formSuccess, setFormSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    if (isLoading) return;

    e.preventDefault();

    // Reset degli stati
    setFormError(false);
    setFormSuccess(false);
    setShowSuccess(false);
    setShowError(false);
    setFormErrors({});

    // Aggiungi la data di invio
    const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    let formErrors = {}; // Inizializza gli errori

    // Validazione campi
    if (!form.name) {
      formErrors.name = "Il nome è obbligatorio.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email) {
      formErrors.email = "L'email è obbligatoria.";
    } else if (!emailPattern.test(form.email)) {
      formErrors.email = "Formato email non valido.";
    }

    if (!form.acceptPrivacy) {
      formErrors.acceptPrivacy = "Devi accettare la privacy policy.";
    }

    // Se ci sono errori, mostralo
    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
      setFormError(true);
      setShowError(true);

      // Dissolvenza errore dopo 4 secondi
      setTimeout(() => {
        setShowError(false);
        setTimeout(() => setFormError(false), 500);
      }, 4000);
      return;
    }

    setIsLoading(true);

    try {
      const requestData = {
        name: form.name,
        email: form.email,
        message: form.message,
        acceptPrivacy: form.acceptPrivacy,
        submitDate: formattedDate,
      };

      // Chiamata al backend per inviare l'email
      const response = await fetch("https://personal-website-pgmz.onrender.com/api/email", {//"http://localhost:8080/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log("Email inviata correttamente ✅");
        setForm({ name: "", email: "", message: "", acceptPrivacy: false });
    
        // Mostra il messaggio di successo dopo 2 secondi
        setTimeout(() => {
            setFormSuccess(true);
            setShowSuccess(true);
    
            // Dissolvenza in uscita dopo 4 secondi
            setTimeout(() => {
                setShowSuccess(false);
                setTimeout(() => setFormSuccess(false), 500);
            }, 6000);
        }, 2000); // ritardo prima di mostrare il messaggio
      } else {
        const errorText = await response.text();
        throw new Error(`Errore HTTP ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Errore durante l'invio:", error);
      setFormError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white pt-32"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-2">Contattami</h2>
      <p className="text-gray-700 text-center max-w-xl mb-4">
        Se desideri metterti in contatto con me per collaborazioni, richieste o
        semplicemente fare due chiacchiere, scrivimi a:
      </p>
      <a
        href="mailto:a.dilena@elitesoftwarehouse.com"
        className="text-blue-600 hover:underline text-sm text-center block mb-8"
      >
        a.dilena@elitesoftwarehouse.com
      </a>
      <p className="text-gray-700 text-center max-w-xl mb-8">
        Oppure compila il modulo sottostante. Ti risponderò appena possibile.
      </p>

      {formSuccess && (
        <div
          className={clsx(
            "mb-6 px-4 py-2 bg-green-100 border border-green-400 text-green-700 rounded text-center transition-opacity duration-500 ease-in-out",
            showSuccess ? "opacity-100" : "opacity-0"
          )}
        >
          ✅ Messaggio inviato con successo! Ti risponderò al più presto.
        </div>
      )}

      {/*
      {formSuccess && (
        <div className="mb-6 px-4 py-2 bg-green-100 border border-green-400 text-green-700 rounded text-center transition-all duration-300 ease-in-out opacity-100">
          ✅ Messaggio inviato con successo! Ti risponderò al più presto.
        </div>
      )}
      */}

      {formError && (
        <div
          className={clsx(
            "mb-6 px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded text-center transition-opacity duration-500 ease-in-out",
            showError ? "opacity-100" : "opacity-0"
          )}
        >
          ❗ Errore durante l'invio. Verifica che tutti i campi obbligatori
          siano compilati e riprova.
        </div>
      )}

      {/*
      {formError && (
        <div className="mb-6 px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded text-center transition-all duration-300 ease-in-out opacity-100">
          ❗ Errore durante l'invio. Verifica che tutti i campi obbligatori siano compilati e riprova.
        </div>
      )}
      */}

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700">
            Nome *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            className={clsx(
              "mt-1 block w-full rounded-md border-gray-300 shadow-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100",
              formErrors.name && "border-red-500"
            )}
            placeholder="Il tuo nome"
          />
          {formErrors.name && (
            <span className="text-red-500 text-sm">{formErrors.name}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            className={clsx(
              "mt-1 block w-full rounded-md border-gray-300 shadow-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100",
              formErrors.email && "border-red-500"
            )}
            placeholder="esempio@email.com"
          />
          {formErrors.email && (
            <span className="text-red-500 text-sm">{formErrors.email}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Messaggio
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm px-2 py-1 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
            placeholder="Scrivi un messaggio (opzionale)"/>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            name="acceptPrivacy"
            id="acceptPrivacy"
            checked={form.acceptPrivacy}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-1 mr-2"
            required
          />
          <label htmlFor="acceptPrivacy" className="text-sm text-gray-700">
            Accetto la{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Privacy Policy
            </a>{" "}
            *
          </label>
          {formErrors.acceptPrivacy && (
            <span className="text-red-500 text-sm">
              {formErrors.acceptPrivacy}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isLoading ? "Invio in corso..." : "Invia"}
        </button>
      </form>
    </section>
  );
}
