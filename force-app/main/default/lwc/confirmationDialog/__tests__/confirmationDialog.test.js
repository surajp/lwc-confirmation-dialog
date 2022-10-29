import { createElement } from "lwc";
import ConfirmationDialog from "c/confirmationDialog";

describe("c-confirmation-dialog", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("component is rendered when confirm method is called", async () => {
    const element = createElement("c-confirmation-dialog", {
      is: ConfirmationDialog
    });
    document.body.appendChild(element);
    let card = element.shadowRoot.querySelector("lightning-card");
    expect(card).toBe(null);
    element.confirm("");
    await Promise.resolve("wait for dialog to be rendered after setting prop to true");
    let newCard = element.shadowRoot.querySelector("lightning-card");
    expect(newCard).not.toBeNull();
  });

  it("cancel makes the confirmation dialog disappear", async () => {
    const element = createElement("c-confirmation-dialog", {
      is: ConfirmationDialog
    });
    document.body.appendChild(element);
    let card = element.shadowRoot.querySelector("lightning-card");

    let confirm = element.confirm("");
    await Promise.resolve("wait for dialog to be rendered after setting prop to true");
    card = element.shadowRoot.querySelector("lightning-card");
    expect(card).not.toBeNull();
    let cancelBtn = element.shadowRoot.querySelector("lightning-button[data-name='cancel']");
    cancelBtn.click();
    await Promise.resolve("wait for component re-render");
    card = element.shadowRoot.querySelector("lightning-card");
    expect(card).toBeNull();
    let result = await confirm;
    expect(result).toBe(false);
  });

  it("confirm button makes the confirmation dialog disappear", async () => {
    const element = createElement("c-confirmation-dialog", {
      is: ConfirmationDialog
    });
    document.body.appendChild(element);
    let card = element.shadowRoot.querySelector("lightning-card");

    let confirm = element.confirm("");
    await Promise.resolve("wait for dialog to be rendered after setting prop to true");
    card = element.shadowRoot.querySelector("lightning-card");
    expect(card).not.toBeNull();
    let confirmBtn = element.shadowRoot.querySelector("lightning-button[data-name='confirm']");
    confirmBtn.click();
    await Promise.resolve("wait for component re-render");
    card = element.shadowRoot.querySelector("lightning-card");
    expect(card).toBeNull();
    let result = await confirm;
    expect(result).toBe(true);
  });

  it("The message passed should be rendered in the component", async () => {
    const message = "This is a sample message";
    const element = createElement("c-confirmation-dialog", {
      is: ConfirmationDialog
    });
    document.body.appendChild(element);
    let card = element.shadowRoot.querySelector("lightning-card");

    let confirm = element.confirm(message);
    await Promise.resolve("wait for dialog to be rendered after setting prop to true");
    const messageContainer = element.shadowRoot.querySelector("[data-name='message']");
    expect(messageContainer.textContent).toBe(message);
  });
});
