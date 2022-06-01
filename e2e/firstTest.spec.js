describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
     await device.reloadReactNative();
  });


  it('App should launch the home screen', async () => {
    // Home title should be visible
    await expect(element(by.id('homeTitle'))).toBeVisible();
  });
  it("Test 'Go to Store' button functionality", async () => {
    // 'Go to Store' button should be visible
    await expect(element(by.id('storeBtn'))).toBeVisible();
    // Tap on 'Go to Store' button
    await element(by.id('storeBtn')).tap();
    // It should navigate to store screen and validate store title is visible
    await expect(element(by.id('storeTitle'))).toBeVisible();
    // 'Go Back' button should be visible
    await expect(element(by.id('backBtn'))).toBeVisible();
    // Tap on 'Go Back' button
    await element(by.id('backBtn')).tap();
    // It should navigate to home screen and validate home title is visible
    await expect(element(by.id('homeTitle'))).toBeVisible();
  });
});
