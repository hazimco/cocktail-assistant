import { html, component } from "haunted";
import { Drink } from "../types/types";
import { StateUpdater } from "../types/hauntedTyped";

interface Props {
  drink: Drink;
  setIngredients: (newIngredients: string[]) => void;
  setToasterMessage: StateUpdater<string>;
}

const ResultItem = ({ drink, setIngredients, setToasterMessage }: Props) => {
  const {
    strDrinkThumb: thumbnail,
    strDrink: name,
    strInstructions: instructions,
  } = drink;

  const handleAdd = () => {
    const ingredients: string[] = [];
    for (const [key, value] of Object.entries(drink)) {
      if (key.includes("Ingredient") && value !== null) {
        ingredients.push(value);
      }
    }
    setToasterMessage("Ingredients added to shopping list.");
    setIngredients(ingredients);
  };

  return html`<div class="result-card">
      <div class="drink-info">
        <img src=${thumbnail || ""} />
        <div>
          <h2>${name}</h2>
          <p>${instructions}</p>
        </div>
      </div>
      <button @click=${handleAdd}>+</button>
    </div>
    ${style}`;
};

customElements.define("result-item", component(ResultItem));

// ################### styling ##############################

const style = html`<style>
  .result-card {
    display: flex;
    border: 1px solid #d9d9d9;
    border-radius: 10px;
    background-color: #fff3fa;
    padding: 10px;
    justify-content: space-between;
    gap: 1rem;
  }
  .drink-info {
    display: flex;
    gap: 1.2rem;
  }
  img {
    height: 100px;
    width: 100px;
    border-radius: 100%;
  }

  h2,
  p {
    margin: 0px;
  }
  button {
    padding: 16px;
    align-self: flex-end;
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
      width: 50px;
    }
  }
</style>`;
