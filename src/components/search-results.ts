import { html, component } from "haunted";
import "../components/result-item";
import { Data } from "../types/types";

interface Props {
  data: Data;
  setIngredients: (newIngredients: string[]) => void;
}

const SearchResults = ({ data, setIngredients }: Props) => {
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
