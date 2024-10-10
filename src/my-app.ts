import { html, component, useState } from "haunted";
import "./components/search-input";
import "./components/search-results";
import { Data } from "./types/types";

const App = () => {
  const [data, setData] = useState<Data | undefined>();

  return html` <div>
    <search-input .setData=${setData}></search-input>
    <search-results .data=${data}></search-results>
  </div>`;
};

customElements.define("my-app", component(App));
