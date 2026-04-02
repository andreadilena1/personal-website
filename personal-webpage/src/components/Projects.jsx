export default function Projects() {
    
  return (
    <section
      className="min-h-screen py-16 bg-gray-50 text-center"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {/* PROJECT 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Personal Portfolio Website
          </h3>

          <p className="text-gray-600 mb-4">
            Responsive personal portfolio built with React and Tailwind CSS.
            Includes project showcase, contact form with backend integration,
            and responsive design.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            React · Tailwind · REST API
          </p>

          <div className="flex gap-4">
            <a
              href="https://andreadilena1.github.io/personal-website/#/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/andreadilena1/personal-website"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View Code (GitHub)
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Car Fleet Management System
          </h3>

          <p className="text-gray-600 mb-4">
            Legacy backend system built with Spring MVC and H2 database.
            Includes core CRUD operations for vehicle management. Currently
            being refactored and migrated to Spring Boot architecture.
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Java · Spring MVC · H2 · REST APIs
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/andreadilena1/GestioneParcoAuto"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View Code (GitHub)
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Legacy project. Source code available on GitHub.
          </p>
        </div>

        {/* PROJECT 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Car Fleet Management System (Modern Backend)
          </h3>

          <p className="text-gray-600 mb-4">
            Backend REST API built with Spring Boot and PostgreSQL to manage
            vehicle fleets and user bookings.
          </p>

          <ul className="text-gray-600 text-sm mb-4 list-disc list-inside">
            <li>User registration and authentication</li>
            <li>Car availability management</li>
            <li>Booking system with business logic validation</li>
            <li>RESTful API design</li>
          </ul>

          <p className="text-sm text-gray-500 mb-4">
            Migration from legacy Spring MVC architecture
          </p>

          <p className="text-sm text-gray-500 mb-4">
            Java · Spring Boot · PostgreSQL · REST APIs
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/andreadilena1/NOME-REPO"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              View Code (GitHub)
            </a>
          </div>
          <div>
            <p className="text-xs text-gray-500 mt-2">
              No live demo available. The project can be run locally. See GitHub
              for setup instructions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* shift + alt + f = indentare codice su vscode*/
}
