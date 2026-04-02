import React, { useState } from "react";
import clsx from "clsx";
import { format } from "date-fns";
import { Link } from "react-router-dom";

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
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    if (isLoading) return;

    e.preventDefault();

    setFormError(false);
    setFormSuccess(false);
    setShowSuccess(false);
    setShowError(false);
    setFormErrors({});

    const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    let formErrorsLocal = {};

    // VALIDATION
    if (!form.name) {
      formErrorsLocal.name = "Please enter your name.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!form.email) {
      formErrorsLocal.email = "Please enter your email.";
    } else if (!emailPattern.test(form.email)) {
      formErrorsLocal.email = "Please enter a valid email address.";
    }

    if (!form.acceptPrivacy) {
      formErrorsLocal.acceptPrivacy =
        "You must accept the privacy policy to continue.";
    }

    // SHOW ERRORS
    if (Object.keys(formErrorsLocal).length > 0) {
      setFormErrors(formErrorsLocal);
      setFormError(true);
      setShowError(true);

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
        message: form.message || "No message provided",
        acceptPrivacy: form.acceptPrivacy,
        submitDate: formattedDate,
      };

      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

      const response = await fetch(`${apiUrl}/api/email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        console.log("Email sent successfully ✅ , I will reply shortly.");

        setForm({
          name: "",
          email: "",
          message: "",
          acceptPrivacy: false,
        });

        setTimeout(() => {
          setFormSuccess(true);
          setShowSuccess(true);

          setTimeout(() => {
            setShowSuccess(false);
            setTimeout(() => setFormSuccess(false), 500);
          }, 6000);
        }, 2000);
      } else {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
    } catch (error) {
      console.error("Error while sending:", error);
      setFormError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-2">Contact Me</h2>

      <p className="text-gray-700 text-center max-w-xl mb-2">
        I typically respond within 24 hours.
      </p>

      <p className="text-gray-700 text-center max-w-xl mb-4">
        If you would like to get in touch for collaborations, job opportunities,
        or just to say hello, feel free to reach out:
      </p>

      <a
        href="mailto:a.dilena@elitesoftwarehouse.com"
        className="text-blue-600 hover:underline text-sm text-center block mb-8"
      >
        a.dilena@elitesoftwarehouse.com
      </a>

      <p className="text-gray-700 text-center max-w-xl mb-8">
        Or fill out the form below. I will get back to you as soon as possible.
      </p>

      {/* SUCCESS MESSAGE */}
      {formSuccess && (
        <div
          className={clsx(
            "mb-6 px-4 py-2 bg-green-100 border border-green-400 text-green-700 rounded text-center transition-opacity duration-500",
            showSuccess ? "opacity-100" : "opacity-0",
          )}
        >
          ✔ Message sent successfully. I will get back to you as soon as
          possible.
        </div>
      )}

      {/* ERROR MESSAGE */}
      {formError && (
        <div
          className={clsx(
            "mb-6 px-4 py-2 bg-red-100 border border-red-400 text-red-700 rounded text-center transition-opacity duration-500",
            showError ? "opacity-100" : "opacity-0",
          )}
        >
          ❗ Something went wrong. Please check your inputs and try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        {/* NAME */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            className={clsx(
              "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500",
              formErrors.name && "border-red-500",
            )}
            placeholder="Your name"
          />
          {formErrors.name && (
            <span className="text-red-500 text-sm">{formErrors.name}</span>
          )}
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            className={clsx(
              "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500",
              formErrors.email && "border-red-500",
            )}
            placeholder="example@email.com"
          />
          {formErrors.email && (
            <span className="text-red-500 text-sm">{formErrors.email}</span>
          )}
        </div>

        {/* MESSAGE */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message (optional)
          </label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your message..."
          />
        </div>

        {/* PRIVACY */}
        <div className="flex items-start">
          <input
            type="checkbox"
            name="acceptPrivacy"
            checked={form.acceptPrivacy}
            onChange={handleChange}
            disabled={isLoading}
            className="mt-1 mr-2"
          />
          <span className="text-sm text-gray-700">
            I agree to the{" "}
            <Link to="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </Link>{" "}
            *
          </span>
        </div>

        {formErrors.acceptPrivacy && (
          <span className="text-red-500 text-sm block">
            {formErrors.acceptPrivacy}
          </span>
        )}

        {/* BUTTON */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:bg-gray-400"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
}
