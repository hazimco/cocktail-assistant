import { html, component, useState } from "haunted";
import "./components/search-input";
import "./components/search-results";
import "./components/shopping-list";
import { Data } from "./types/types";

const App = () => {
  const [data, setData] = useState<Data | undefined>();
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleSetIngredients = (newIngredients: string[]) => {
    const updatedIngredients = [...ingredients, ...newIngredients];
    setIngredients(updatedIngredients);
  };

  return html` <div>
      <search-input .setData=${setData}></search-input>
      <div class="column-container">
        <search-results
          .data=${data}
          .setIngredients=${handleSetIngredients}
        ></search-results>
        <shopping-list .ingredients=${ingredients}></shopping-list>
      </div>
    </div>
    ${style}`;
};

customElements.define("my-app", component(App));

// ################### styling ##############################

const style = html` <style>
  .column-container {
    display: flex;
  }
</style>`;
