import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Phrase } from "../phrase/index";

test('render content', ()=>{
const content = {
  id:2,
  name: "Nueva frase"
}

  const component = render(<Phrase id={content.id} name={content.name}/>)

  component.getByText("Nueva frase")
})

