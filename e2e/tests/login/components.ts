import { Selector } from "testcafe";

//Login BankID buttons
export const buttonNext = Selector("button");
export const buttonNextPasswordPart = Selector("button");

//Textbox
export const textSSN = Selector("input");
export const textOTP = Selector("input");
export const textPassword = Selector("div")
  .withAttribute("class", "wrp")
  .find("input");
