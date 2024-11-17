"use client"
import Card from "./components/Card";
import Typewriter from 'typewriter-effect';
import Navbar from './components/Navbar'
import Icon from '@mdi/react';

import {
  mdiWhatsapp,
}
  from '@mdi/js';



export default function Home() {
  
  return (
    <div className="">
      <section className="video-bg h-screen flex items-center justify-center ">
        
        <video autoPlay muted loop >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex flex-col items-center space-y-4 text-white">
        <Navbar></Navbar>
          <h1 className=" font-semibold font-mono text-6xl ">ALFARILLO GROUP</h1>
          <Typewriter
                    onInit={typewriter => {
                      typewriter
                        .typeString('Mas que un proyecto, una comunidad geologica')
                        .pauseFor(2000)
                        .start();
                    }}
                  />
          <a
            type="button"
            href="https://chat.whatsapp.com/FPSGh5fPjuwANiS1cgHRKG"
            className="text-white bg-green-600 hover:bg-green-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 flex items-center "
          >
            <Icon path={mdiWhatsapp} size={0.9} className="mr-2" />
            WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-green-500 grid grid-cols-3 ">
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <div className=" h-80 bg-red-400 flex flex-col items-center justify-center" >
         
        <img
            src="/assets/test.jpg"
            alt="Picture of the author"
            className="object-fill h-full w-full "
          />
        </div>
        <Card
        
          title="Objetivo"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
        <Card
          title="Vision"
          description="descripcion ...."
          buttonText="enviar"
        ></Card>
      </section>
      <p className="bg-gray-800 w-full flex text-white justify-center text-sm italic" > © 2024 Alfarillo Group. Todos los derechos reservados.</p>
    </div>
  );
}
