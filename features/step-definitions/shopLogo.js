const { Given, When, Then } = require('@wdio/cucumber-framework');

When('I enter the word "Windows" in the search bar',async () => {
    const searchBar = await $("[title~=Search]");
    searchBar.addValue('Windows');
    
});
Then('I click the search button', async () => {
    const searchButton = await $(".header2021-search-button");
    searchButton.click();
});
Then('I check that at least one item appears', async () => {
    const someItem = await $("#item_cell_32-351-756_1_0 > div");
    someItem.isDisplayed();
});