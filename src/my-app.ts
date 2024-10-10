import { html, component, useState } from "haunted";
import "./components/search-input";

const App = () => {
  const [data, setData] = useState();

  return html` <div>
    <search-input .setData=${setData}></search-input>
  </div>`;
};

customElements.define("my-app", component(App));
