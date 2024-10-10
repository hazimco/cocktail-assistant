import { html, component } from "haunted";
import "../components/result-item";

const SearchResults = ({ data }) => {
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
