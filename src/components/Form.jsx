import { useState } from "react";

export function Form({HandleOnSubmit}) {
  return (
    <div>
      <form onSubmit={HandleOnSubmit}>
        <label>
          Tipo di immobile:
          <select>
            <option value="">Seleziona</option>
            <option value="villa">Villa</option>
            <option value="appartamento">Appartamento</option>
            <option value="attico">Attico</option>
          </select>
        </label>

        <label>
          Città:
          <input type="text" placeholder="Inserisci la città" />
        </label>

        <label>
          Numero di stanze:
          <input type="number" min="1" />
        </label>

        <label>
          Numero di bagni:
          <input type="number" min="1" />
        </label>

        <label>
          Posti letto:
          <input type="number" min="1" />
        </label>

        <label>
          Superficie minima (mq):
          <input type="number" min="0" />
        </label>

        <label>
          Superficie massima (mq):
          <input type="number" min="0" />
        </label>

        <label>
          Prezzo minimo (€):
          <input type="number" min="0" />
        </label>

        <label>
          Prezzo massimo (€):
          <input type="number" min="0" />
        </label>

        <label>
          Vista mare:
          <input type="checkbox" />
        </label>

        <label>
          Data di inserimento:
          <input type="date" />
        </label>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
