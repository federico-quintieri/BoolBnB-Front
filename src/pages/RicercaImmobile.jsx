import { Form } from "../components/Form";
import { useGlobalContext } from "../components/GlobalContext";

export function RicercaImmobile() {
  // Callback da passare all'OnSubmit che fa chiamata GET
  const HandleOnSubmitGet = (event) => {
    event.preventDefault();
    console.log("Hai inviato il form dalla pagina di ricerca avanzata");
    // In questa funzione devo gestire la chiamata Get
  };

  return (
    <div>
      <Form HandleOnSubmit={HandleOnSubmitGet} />
      <p>{useGlobalContext()}</p>
    </div>
  );
}
