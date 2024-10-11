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
        <div class="right-container">
          <shopping-list .ingredients=${ingredients}></shopping-list>
          <my-toaster .message=${toasterMessage}></my-toaster>
        </div>
      </div>
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

    font-family: sans-serif;
    font-weight: 100;
  }
  .column-container {
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #f7fdff;
    padding: 10px;
    max-height: 90vh;
    display: flex;
    gap: 20px;
  }
  search-results {
    flex: 4;
    max-height: 100%;
    overflow-y: auto;
  }
  .right-container {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
</style>`;
