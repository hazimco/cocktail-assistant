import { html, component } from "haunted";

const App = () => {
  return html` <h1>Hello World</h1> `;
};

customElements.define("my-app", component(App));
