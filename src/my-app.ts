import { html, component } from "haunted";
import "./components/search-input";

const App = () => {
  return html` <div>
    <search-input></search-input>
  </div>`;
};

customElements.define("my-app", component(App));
