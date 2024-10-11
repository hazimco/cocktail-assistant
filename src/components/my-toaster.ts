import { html, component } from "haunted";

interface Props {
  message: string;
}

const Toaster = ({ message }: Props) => {
  if (!message) return;

  return html`<div class="container">${message}</div>
    ${style}`;
};

customElements.define("my-toaster", component(Toaster));

// ################### styling ##############################

const style = html`<style>
  .container {
    background-color: white;
    border: 1px dotted;
    margin-top: 20px;
    padding: 30px;
  }
</style>`;
