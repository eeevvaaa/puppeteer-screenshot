import { newE2EPage } from '@stencil/core/testing';

describe('index', () => {
  it('should render a header', async () => {
    const page = await newE2EPage();
    await page.setContent(`<h1></h1>`);
    const el = await page.find('h1');
    expect(el).not.toBeNull();
  });

  it('should render a component', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-component></mycomponent>');
    const el = await page.find('my-component');
    expect(el).not.toBeNull();
  });
});
