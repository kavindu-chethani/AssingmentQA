const { error } = require("console");

class TestPage{

    constructor(page) {
    this.page = page;
    this.productCardLocator = '.related-product-card'; 
    this.signInButton = 'text=Sign in'; // eBay login
    this.usernameField = '#userid'; // eBay login username
    this.passwordField = '#pass';
    this.loginSubmit = '#signin-continue-btn';
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    await this.page.click(this.signInButton);
    await this.page.fill(this.usernameField, username);
    await this.page.click(this.loginSubmit);
    await this.page.fill(this.passwordField, password);
    await this.page.click('#sgnBt'); 
  }

  async navigateToProducts() {
    await this.page.click('text=Wallet'); 
  }

  async verifyRelatedProductsCount(expectedCount = 6) {
    const products = this.page.locator(this.productCardLocator);
    await expect(products).toHaveCount(expectedCount);
  }

}module.exports = TestPage