Feature: Verify Wallet Page

@regression @TC_001
Scenario: Verify that the prodcuts are displayed in the main page
Given Navigate to: "https://www.ebay.com"
And Login to the web portal
When Navigate to the products page
Then Verify that 6 products are displayed