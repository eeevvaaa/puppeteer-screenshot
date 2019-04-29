const puppeteer = require('puppeteer');

const takeScreenshot = async () => {
	// launching browser instance
	const browser = await puppeteer.launch();
	// creating a new page
	const page = await browser.newPage();
	// options for screeshot function
	const options = {
		path: 'images/ts-about.png',
		fullPage: true
	};
	// navigate to an URL
	// because both page elements return a promise, we need to add await
	await page.goto('https://truckstop.com/company/about/');
	// path is required or the image would not be saved
	await page.screenshot(options);
	await browser.close();
};

takeScreenshot();
