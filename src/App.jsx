import Button from "./components/Button/Button";

function App(){
  return (
    <dev>
      <h1>Hello World!. </h1>
      <h1>Hello World!. </h1>
      <Button
        buttonType = "submit"
        text = "primary"
        styleType = "primary"
      />


      <Button
        buttonType="button"
        text="secondary"
        styleType="secondary"
      />


      <Button
        buttonType = "button"
        text = "error"
        styleType = "error"
      />

    </dev>
  );
}

export default App;