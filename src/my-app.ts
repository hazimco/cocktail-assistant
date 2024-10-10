import { html, component, useState } from "haunted";
import "./components/search-input";
import "./components/search-results";

const App = () => {
  const [data, setData] = useState();

  return html` <div>
    <search-input .setData=${setData}></search-input>
    <search-results .data=${data}></search-results>
  </div>`;
};

customElements.define("my-app", component(App));
