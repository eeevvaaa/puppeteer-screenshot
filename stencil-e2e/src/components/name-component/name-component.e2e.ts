import { newE2EPage } from '@stencil/core/testing';

describe('name-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<name-component></name-component>');
    const element = await page.find('name-component');
    expect(element).not.toBeNull();
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<name-component></name-component>');
    const element = await page.find('name-component');
    element.setProperty('name', 'Oliver');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`My name is Oliver`);
  });

  it('should compare screenshots', async () => {
    const page = await newE2EPage();

    await page.setContent('<name-component></name-component>');
    const element = await page.find('name-component');
    expect(element).not.toBeNull();

    const results = await page.compareScreenshot();

    expect(results).toMatchScreenshot({ allowableMismatchedPixels: 100 });

    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 });
  });
});
