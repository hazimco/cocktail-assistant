import { html, component, useState } from "haunted";
import "./components/search-input";
import "./components/search-results";
import "./components/shopping-list";
import { Data } from "./types/types";

const App = () => {
  const [data, setData] = useState<Data | undefined>();

  return html` <div>
      <search-input .setData=${setData}></search-input>
      <div class="column-container">
        <search-results .data=${data}></search-results>
        <shopping-list></shopping-list>
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
