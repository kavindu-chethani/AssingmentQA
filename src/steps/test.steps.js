const { Given, When, Then } = require("@cucumber/cucumber");
const TestPage = require("../pages/test.page");

let testPage = new TestPage();

Given(/^Navigate to: "(.*)"$/, async function (url) {
  page = this.page; 
  testPage = new TestPage(page);
  await testPage.goto(url);
});

Given(/^Login to the web portal$/, async function () {
  await testPage.login('testuser@email.com', 'password123'); //sample data
});

When(/^Navigate to the products page$/, async function () {
  await testPage.navigateToProducts();
});

Then(/^Verify that (\d+) products are displayed$/, async function (count) {
  await testPage.verifyRelatedProductsCount(Number(count));
});

