import { Form } from "../components/Form";

export function CreaImmobile() {
  // Callback da passare all'OnSubmit che fa chiamata POST
  const HandleOnSubmitGet = (event) => {
    event.preventDefault();
    console.log("Hai inviato il form dalla pagina di inserimento immobile");
    // In questa funzione devo gestire la chiamata POST
  };

  return (
    <div>
      <Form HandleOnSubmit={HandleOnSubmitGet} />
    </div>
  );
}
