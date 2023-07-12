import { LightningElement, wire } from "lwc";
import queryAccountsByRevenue from "@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue";
export default class AccountFinder extends LightningElement {
  annualRevenue = null;
  @wire(queryAccountsByRevenue, {
    annualRevenue: "$annualRevenue"
  })
  accounts;
  handleChange(event) {
    this.annualRevenue = parseInt(event.detail.value, 10);
  }
  reset() {
    this.annualRevenue = null;
  }
}
