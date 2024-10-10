import { html, component } from "haunted";

const ResultItem = ({ drink }) => {
  return html`<div>${drink.strDrink}</div>
    ${style}`;
};

customElements.define("result-item", component(ResultItem));

// ################### styling ##############################

const style = html`<style></style>`;
