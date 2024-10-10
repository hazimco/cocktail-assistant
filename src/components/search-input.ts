import { html, component, useState } from "haunted";

const SearchInput = ({ setData }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    const cocktails = await fetchCocktails(text);
    setData(cocktails);
  };

  const handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;

    setText(input.value.trim()); //trimming so that leading and trailing white spaces are not sent in fetch request
  };

  return html` <form @submit=${handleSubmit} class="container">
      <input placeholder="Search for a drink..." @input=${handleInput} />
      <button ?disabled=${!text}>Search</button>
    </form>
    ${style}`;
};

customElements.define("search-input", component(SearchInput));

// ################### styling ##############################

const style = html` <style>
  .container {
    display: flex;
  }
  input {
    padding: 6px;
  }
</style>`;

// ################### fetch logic ##############################

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const fetchCocktails = async (searchText: string) => {
  try {
    const response = await fetch(`${BASE_URL}${searchText}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log((error as Error).message);
  }
};
