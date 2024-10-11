import { html, component, useState } from "haunted";
import "./components/search-input";
import "./components/search-results";
import "./components/shopping-list";
import "./components/my-toaster";
import { Data } from "./types/types";

const App = () => {
  const [data, setData] = useState<Data | undefined>();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [toasterMessage, setToasterMessage] = useState<string>("");

  const handleSetIngredients = (newIngredients: string[]) => {
    const updatedIngredients = new Set([...ingredients, ...newIngredients]);

    setIngredients([...updatedIngredients]);
  };

  return html` <div class="container">
      <search-input
        .setData=${setData}
        .setToasterMessage=${setToasterMessage}
      ></search-input>
      <div class="column-container">
        <search-results
          .data=${data}
          .setIngredients=${handleSetIngredients}
          .setToasterMessage=${setToasterMessage}
        ></search-results>
        <shopping-list .ingredients=${ingredients}></shopping-list>
      </div>
      <my-toaster .message=${toasterMessage}></my-toaster>
    </div>
    ${style}`;
};

customElements.define("my-app", component(App));

// ################### styling ##############################

const style = html` <style>
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 10px;

    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .column-container {
    display: flex;
  }
</style>`;
