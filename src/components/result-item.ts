import { html, component } from "haunted";
import { Drink } from "../types/types";

interface Props {
  drink: Drink;
}

const ResultItem = ({ drink }: Props) => {
  return html`<div>${drink.strDrink}</div>
    ${style}`;
};

customElements.define("result-item", component(ResultItem));

// ################### styling ##############################

const style = html`<style></style>`;
