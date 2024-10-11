import { html, component } from "haunted";
import "../components/result-item";
import { Data } from "../types/types";
import { StateUpdater } from "../types/hauntedTyped";

interface Props {
  data: Data;
  setIngredients: (newIngredients: string[]) => void;
  setToasterMessage: StateUpdater<string>;
}

const SearchResults = ({ data, setIngredients, setToasterMessage }: Props) => {
  if (!data) return;

  const { drinks } = data;

  if (!Array.isArray(drinks)) {
    return;
  }

  return html`<div class="container">
      ${drinks.map(
        (drink) =>
          html`<result-item
            .drink=${drink}
            .setIngredients=${setIngredients}
            .setToasterMessage=${setToasterMessage}
          ></result-item>`
      )}
    </div>
    ${style}`;
};

customElements.define("search-results", component(SearchResults));

// ################### styling ##############################

const style = html`<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>`;
