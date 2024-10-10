import { html, component } from "haunted";
import "../components/result-item";
import { Data } from "../types/types";

const SearchResults = ({ data }: Data) => {
  if (!data) return;

  const { drinks } = data;

  if (!Array.isArray(drinks)) {
    return;
  }

  return html`<div>
      ${drinks.map(
        (drink) => html`<result-item .drink=${drink}></result-item>`
      )}
    </div>
    ${style}`;
};

customElements.define("search-results", component(SearchResults));

// ################### styling ##############################

const style = html`<style></style>`;
