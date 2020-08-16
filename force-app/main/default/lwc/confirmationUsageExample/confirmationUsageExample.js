import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class ConfirmationUsageExample extends LightningElement {
  async handleClick(event) {
    event.preventDefault();
    const confirmation = this.template.querySelector("c-confirmation-dialog");
    let confirmResult = await confirmation.confirm("The selectd record will be deleted. Do you wish to proceed?");
    if (confirmResult === true) {
      //delete record
      this.dispatchEvent(new ShowToastEvent({ message: "Record has been deleted", variant: "success" }));
    }
  }
}
