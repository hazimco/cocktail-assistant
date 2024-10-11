import { html, component } from "haunted";

interface Props {
  ingredients: string[];
}

const ShoppingList = ({ ingredients }: Props) => {
  const handlePrint = () => {
    print(); //this opens the browser's print dialog.
    // Normally, the entire page is displayed in the print dialog, but
    // in the App component, I hide the app elements and display
    // another element that only contain the shopping list.
  };

  return html`<div class="container">
      <div class="top-container">
        <h2>Shopping List</h2>
        ${ingredients.length > 0
          ? html`<ul>
              ${ingredients.map((ingredient) => html`<li>${ingredient}</li>`)}
            </ul> `
          : ""}
      </div>
      <button @click=${handlePrint}>Print</button>
    </div>
    ${style}`;
};

customElements.define("shopping-list", component(ShoppingList));

// ################### styling ##############################

const style = html` <style>
  .container {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    min-height: 400px;
    max-height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top-container {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  h2 {
    align-self: center;
    margin: 0;
  }
  button {
    align-self: center;
    margin-top: 20px;
  }
</style>`;
