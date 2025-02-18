// Importo componenti per creare HomePage
import { CardList } from "../components/CardList";
import { useState } from "react";

// Input di partenza
const inpStart = "";

export function Homepage() {
  const [input, setInput] = useState(inpStart);

  // Callback HandleOnChange
  const HandleOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Trova il tuo immobile ideale</h1>
      <form className="bg-white shadow-md rounded-lg p-4 flex items-center gap-2 w-full">
        <label className="text-gray-700 font-medium flex-1">
          Cerca immobile
          <input
            className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Inserisci città"
            type="text"
            onChange={HandleOnChange}
            value={input}
          />
        </label>
      </form>
      <div className="mt-6 flex justify-center w-full">
        <CardList />
      </div>
    </div>
  );
}
