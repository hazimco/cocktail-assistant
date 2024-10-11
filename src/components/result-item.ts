import { html, component } from "haunted";
import { Drink } from "../types/types";

interface Props {
  drink: Drink;
}

const ResultItem = ({ drink }: Props) => {
  const {
    strDrinkThumb: thumbnail,
    strDrink: name,
    strInstructions: instructions,
  } = drink;

  return html`<div class="result-card">
      <div class="drink-info">
        <img src=${thumbnail || ""} />
        <div>
          <h2>${name}</h2>
          <p>${instructions}</p>
        </div>
      </div>
      <button>+</button>
    </div>
    ${style}`;
};

customElements.define("result-item", component(ResultItem));

// ################### styling ##############################

const style = html`<style>
  .result-card {
    display: flex;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px;
    justify-content: space-between;
    gap: 20px;
  }
  .drink-info {
    display: flex;
    gap: 30px;
  }
  img {
    height: 100px;
  }
  h2,
  p {
    margin: 0px;
  }
  button {
    padding: 16px;
    align-self: flex-end;
  }
</style>`;
