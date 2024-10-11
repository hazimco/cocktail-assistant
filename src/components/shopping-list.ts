import { html, component } from "haunted";

interface Props {
  ingredients: string[];
}

const ShoppingList = ({ ingredients }: Props) => {
  const handlePrint = () => {
    print(); //hmm.. this includes the whole page, not just the shopping list
  };

  return html`<div class="container">
      <h2>Shopping List</h2>
      <ul>
        ${ingredients.map((ingredient) => html`<li>${ingredient}</li>`)}
      </ul>
      ${ingredients.length > 0
        ? html`<button @click=${handlePrint}>Print</button>`
        : ""}
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
