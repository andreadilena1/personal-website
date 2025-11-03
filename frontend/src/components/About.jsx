import fotoProfilo from "../assets/myPhoto.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row px-6 py-12 bg-gray-50 items-center justify-center"
    >
      {/* Box sinistro */}
      <div className="mb-8 md:w-2/4 space-y-4 pl-12 md:translate-x-8">
        <h2 className="text-3xl font-bold text-blue-600">About</h2>
        <p className=" text-gray-700 leading-relaxed">
          Sono Andrea, Full Stack Developer con oltre 2 anni di esperienza in
          Java, Spring Boot e React. Aiuto aziende e professionisti a migliorare
          i processi aziendali attraverso soluzioni tecnologiche moderne. Ho
          lavorato su progetti e-commerce a microservizi e attività di supporto
          tecnico tramite ServiceNow. Sono appassionato di problem solving e
          innovazione.
        </p>
        <br></br>
        <p className="text-gray-700 flex">
          Disponibile il mio CV in formato PDF.
        </p>
        <div>
          <a href="/personal-website/CV_AndreaDiLena.pdf" download
            className="inline-block mt-1 ml-6 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
            Download
          </a>
        </div>
        <br></br>
        <p className="text-gray-700 mt-4">
          Dai un’occhiata ai miei progetti su{" "}
          <a href="https://github.com/andreadilena1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline">
            GitHub
          </a>
          .
        </p>
      </div>

      {/* Box destro */}
      <div className="md:w-2/4 flex flex-col items-center justify-center">
        {/* Qui puoi inserire un'immagine personale */}
        <img
          src={fotoProfilo}
          alt="Andrea"
          className="rounded-full shadow-md w-40 h-40 object-cover transition-transform duration-300 hover:scale-110 hover:shadow-blue-400 hover:shadow-lg"
        />
      </div>
    </section>
  );
}
