import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-50"
    >
      {/* HEADLINE */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
        Java Backend Developer specialized in Spring Boot and REST APIs
      </h1>

      {/* SUBHEADLINE  */}
      <h2 className="text-lg md:text-xl text-gray-700 max-w-2xl mb-4">
        I build scalable backend systems with authentication, business logic,
        and database integration.
      </h2>

      {/* VALUE */}
      <p className="text-gray-600 max-w-xl mb-8">
        I design and build REST APIs and backend services using Java, Spring
        Boot, and PostgreSQL.{" "}
      </p>

      <p className="text-gray-500 text-sm mb-8">
        Focused on backend development, API design, and scalable systems.
      </p>

      {/* CTA */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          to="/contact"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
        >
          Contact Me
        </Link>

        <Link
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-medium cursor-pointer"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
