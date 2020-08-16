import { LightningElement, api } from "lwc";

export default class ConfirmationDialog extends LightningElement {
  @api confirmLabel = "Yes";
  @api cancelLabel = "No";

  @api title = "Confirm";

  _resolve;
  _reject;
  showDialog = false;
  _defaultMessage = "Do you wish to proceed?";
  _userMessage;

  get message() {
    return this._userMessage || this._defaultMessage;
  }

  handleConfirm() {
    this.showDialog = false;
    this._userMessage = null;
    this._resolve && this._resolve(true);
  }

  handleCancel() {
    this.showDialog = false;
    this._userMessage = null;
    this._resolve && this._resolve(false);
  }

  @api
  confirm(message) {
    this._userMessage = message;
    this.showDialog = true;
    return new Promise((resolve, reject) => {
      this._resolve = resolve;
      this._reject = reject;
    });
  }
}
