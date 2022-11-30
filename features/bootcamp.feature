@wip
Feature: Test the newegg.com website

    Background: I am at the home page and I close the banner

        Given I am on the Home page
        And I close the banner

    @searchingForProduct
    Scenario: Search bar

        When I enter the word "Windows" in the search bar
        Then I click the search button
        * I check that at least one item appears

    @navigationToHomePage
    Scenario: Internet shop logo button

        When I open "Today's Best Deals" tab
        Then I click on the Internet shop logo
        * I check that the main page opens