import { html, component } from "haunted";

interface Props {
  message: string;
}

const Toaster = ({ message }: Props) => {
  return html`<div>${message}</div>`;
};

customElements.define("my-toaster", component(Toaster));

// ################### styling ##############################

const style = html`<style></style>`;
