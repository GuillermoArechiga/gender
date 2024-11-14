import React from 'react';

function App() {
  return (
    <div
      className="overflow-auto bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* Image over background */}
      <img
        src="/confetti.png"
        alt="Confetti"
        className="absolute top-0 left-0 right-0 w-full h-auto "
      />

      {/* Content over the background */}
      <div className="w-full absolute top-36 md:top-60 left-1/2 transform -translate-x-1/2">
        <p className="font-ephesis text-8xl  text-center ">Niño o Niña</p>
        <p className="font-funnel-display text-3xl font-bold text-yellow-700 w-full text-center px-4 mt-4">
          Queremos que seas parte de este momento tan especial de nestras vidas.{" "}
          <br /> Acompanaños a la revelacion de genero de nuestro bebe.
        </p>
        <p className="text-center text-5xl font-ephesis font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-pink-500 p-1">
          ¿Lo descubrimos juntos?
        </p>{" "}
        <div className="flex w-full text-center text-3xl font-bold mt-6 font-funnel-display text-yellow-700">
          {/* Left Column */}
          <div className="w-1/2 flex flex-col text-center">
            <div>Domingo</div>
            <div className="text-8xl">15</div>
            <div>Diciembre</div>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex items-center justify-center text-center text-7xl">
            <div>7 pm</div>
          </div>
        </div>
        <p className="font-funnel-display text-1xl text-center font-bold mt-12">
          Privada Otate #, Colonia Arenal, Tampico, Tamaulipas
        </p>
        {/* Map Image Below Date and Time */}
        <div className="flex justify-center mt-2 mx-2 shadow-xl">
          <a
            href="https://maps.app.goo.gl/xZ2icZfR4NDrNP2j7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/map.png"
              alt="Location Map"
              className="w-full rounded-lg shadow-lg"
            />
          </a>
        </div>
        <div className="flex w-full text-center text-1xl font-bold mt-6 font-funnel-display mb-10">
          {/* Left Column */}
          <div className="w-1/2 flex flex-col text-center">
            <img
              src="/girl.png"
              alt="Location Map"
              className="w-3/4 rounded-lg shadow-lg mx-auto"
            />
            <p className="text-pink-700 mt-4">Team Niña: </p>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex flex-col text-center">
            <img
              src="/boy.png"
              alt="Location Map"
              className="w-3/4 rounded-lg shadow-lg mx-auto"
            />
            <p className="text-blue-700 mt-4">Team Niño: </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
