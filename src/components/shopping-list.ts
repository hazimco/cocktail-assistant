import { html, component } from "haunted";

const ShoppingList = () => {
  return html`<div class="container">
      <h2>Shopping List</h2>
      <button>Print</button>
    </div>
    ${style}`;
};

customElements.define("shopping-list", component(ShoppingList));

// ################### styling ##############################

const style = html` <style>
  .container {
    border: 1px solid gray;
    border-radius: 10px;
  }
</style>`;
