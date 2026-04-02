import fotoProfilo from "../assets/myPhoto.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row px-6 py-12 bg-white items-center justify-center"
    >
      {/* Left side */}
      <div className="mb-8 md:w-2/4 space-y-6 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-blue-600">About Me</h2>

        <p className="text-gray-700 leading-relaxed">
        I am a Java backend developer with 2+ years of experience building REST APIs using Spring Boot and PostgreSQL.
        </p>

        <p className="text-gray-700 leading-relaxed">
        I have worked on microservices-based e-commerce systems and enterprise platforms, focusing on backend development, API design, and system integration.

        I am passionate about clean code, performance, and scalable architectures.

         
        </p>

        <p className="text-gray-700 leading-relaxed font-medium">
        Currently open to backend developer roles and remote opportunities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/CV_AndreaDiLena.pdf"
            download
            aria-label="Download Andrea Di Lena CV"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center text-sm font-medium"
          >
            Download CV
          </a>

          <a
            href="https://github.com/andreadilena1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Andrea Di Lena GitHub profile"
            className="inline-block border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition text-center text-sm font-medium"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-2/4 flex items-center justify-center mt-8 md:mt-0">
        <img
          src={fotoProfilo}
          alt="Andrea Di Lena"
          className="rounded-full shadow-md w-40 h-40 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
      </div>
    </section>
  );
}