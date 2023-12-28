import * as LoginSelectors from "./components";
import { Selector, t } from "testcafe";

fixture(`Login Page`).page("https://verify-login.azurewebsites.net/");

//-----Test cases-----\\

test("Login on Criipto with Norsk Bank ID", async (t) => {
  await t
    .click(Selector("input"))
    .click(LoginSelectors.textSSN)
    .typeText(LoginSelectors.textSSN, "12108848055")
    .click(LoginSelectors.buttonNext)
    .click(LoginSelectors.buttonNextPasswordPart.withText("BankID with app"))
    .switchToIframe(Selector("iframe").withAttribute("title", "BankID"))
    .click(LoginSelectors.textOTP)
    .typeText(LoginSelectors.textOTP, "otp", {
      paste: true,
      replace: true,
    });
  console.log("OTP: " + (await LoginSelectors.textOTP.textContent));
  await t
    .click(LoginSelectors.buttonNextPasswordPart.withAttribute("title", "Next"))
    .click(LoginSelectors.textPassword)
    .typeText(LoginSelectors.textPassword, "qwer1234", {
      paste: true,
      replace: true,
    })
    .click(LoginSelectors.buttonNextPasswordPart.withAttribute("title", "Next"))
    .takeScreenshot();
});
