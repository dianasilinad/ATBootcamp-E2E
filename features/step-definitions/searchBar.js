const { Given, When, Then } = require('@wdio/cucumber-framework');

When(`I open "Today's Best Deals" tab`,async () => {
    const trendingBanner = await $("#trendingBanner_720202 > span")
    trendingBanner.click()
    
});
Then('I click on the Internet shop logo', async () => {
    const shopLogo = await $("#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a");
    shopLogo.click()
});
Then('I check that the main page opens', async () => {
    await expect(browser).toHaveUrl('https://www.newegg.com/')
});
