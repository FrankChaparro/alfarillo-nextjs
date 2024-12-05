"use client";
import Card from "./components/Card";
import Typewriter from "typewriter-effect";
import Navbar from "./components/Navbar";

import Image from "next/image";


export default function Home() {
  return (
    <div className="">
      <section className="video-bg h-screen flex items-center justify-center ">
        <video autoPlay muted loop>
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col items-center space-y-4 text-white">
          <Navbar></Navbar>

          <Image
            src="/assets/logo.png"
            width={140}
            height={140}
            alt="Picture of the author"
            className=""
          />
          <h1 className=" font-semibold font-mono text-6xl ">
            ALFARILLO GROUP
          </h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Mas que un proyecto, una comunidad geologica")
                .pauseFor(2000)
                .start();
            }}
          />

          <div className="flex ">
            <a
              type="button"
              href="https://drive.google.com/drive/folders/1V8qsMPuGE94d2VbtdXHWXiywxdXNwNln?usp=sharing"
              className="text-white bg-sky-800 hover:bg-sky-600  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex items-center "
            >
             
              Cursos de Capacitacion - Solos para miembros
            </a>

            
          </div>
        </div>
      </section>

      <section className="bg-green-500 grid grid-cols-3 ">
        <Card
          title="¿Quienes somos ?"
          description="Somos un grupo de estudiantes ,
                        egresados y profesionales que
                        potenciamos nuestras
                        habilidades en el campo de las
                        geociencias, con el objetivo de
                        crecer tanto personal como
                        profesionalmente"
        ></Card>

        <div className=" h-80 bg-red-400 flex flex-col items-center justify-center">
          <img
            src="/assets/quienesSomos.jpg"
            alt="Picture of the author"
            className="object-fill h-full w-full "
          />
        </div>
        <Card
          title="Vision"
          description=" Ser una fuente de inspiración,
                        creando una red global de
                        colaboración donde el aprendizaje
                        continuo e innovación transformen
                        positivamente la industria minera"
        ></Card>
        <div className=" h-80 bg-red-400 flex flex-col items-center justify-center">
          <img
            src="/assets/vision.jpg"
            alt="Picture of the author"
            className="object-fill h-full w-full "
          />
        </div>
        <Card
          title="Mision"
          description=" Liderar el campo de las geociencias,
                        impulsando 
                        investigaciones
                        innovadoras de alto impacto que
                        contribuyan al desarrollo sostenible y
                        al crecimiento de la industria minera."
        ></Card>
        <div className=" h-80 bg-red-400 flex flex-col items-center justify-center">
          <img
            src="/assets/materiales.jpg"
            alt="Picture of the author"
            className="object-fill h-full w-full "
          />
        </div>
        <div className="p-10 h-80 bg-gray-800 flex flex-col  justify-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Objetivos
          </h5>

          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <ul>
              <li>Desarrollo de Talento y Tecnología</li>
              <li> Red de Colaboración y Crecimiento de Oportunidades</li>
              <li>Desarrollo de Competencias y Empoderamiento</li>
              <li>Optimización de Procesos y Gestión del Tiempo</li>
              <li>
                Fortalecimiento de la Presencia y Posicionamiento en el Mercado
              </li>
              <li>Fortalecimiento de la Confianza Institucional</li>
              <li>Potenciación de Habilidades y Adaptación al Cambio</li>
            </ul>
          </div>
        </div>
        <div className=" h-80 bg-red-400 flex flex-col items-center justify-center">
          <img
            src="/assets/competencia.jpg"
            alt="Picture of the author"
            className="object-fill h-full w-full "
          />
        </div>

        <Card title="Proyectos" description="descripcion ...."></Card>
      </section>

      <p className="bg-gray-800 w-full flex text-white justify-center text-sm italic">
        {" "}
        © 2024 Alfarillo Group. Todos los derechos reservados.
      </p>
    </div>
  );
}
