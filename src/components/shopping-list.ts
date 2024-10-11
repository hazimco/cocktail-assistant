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
      ${ingredients.length > 0
        ? html`<ul>
              ${ingredients.map((ingredient) => html`<li>${ingredient}</li>`)}
            </ul>
            <button @click=${handlePrint}>Print</button> `
        : ""}
    </div>
    ${style}`;
};

customElements.define("shopping-list", component(ShoppingList));

// ################### styling ##############################

const style = html` <style>
  .container {
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
    padding: 5px;
    min-height: 400px;
    max-height: 400px;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
  }
  h2 {
    align-self: center;
    margin: 0;
  }
  button {
    align-self: center;
  }
</style>`;
