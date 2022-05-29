describe('Example', () => {
  before(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show hello screen after tap', async () => {
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
