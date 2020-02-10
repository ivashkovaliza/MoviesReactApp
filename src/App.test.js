const puppeteer = require('puppeteer');

let page;
let browser;
const currentWidth = document.documentElement.clientWidth;
const currentHeight = document.documentElement.clientHeight;

describe('User can interact with movies app', () => {
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250
    });

    page = await browser.newPage();

    page.emulate({
      viewport: {
        width: currentWidth,
        height: currentHeight
      },
      userAgent: ''
    });
  });

  afterAll(() => {
    browser.close();
  });

  test('User can search movies', async () => {
    await page.goto('http://localhost:9000/');
    await page.waitForSelector('.h1');
    await page.waitForSelector('.search__field');
    await page.waitForSelector('.search__btn');
    await page.click("input[name=movie]");
    await page.type("input[name=movie]", 'space');
    await page.click(".search__btn");
    await page.waitForSelector('.movie__item');
  }, 1600000);

  test('User can select movie', async () => {
    await page.goto('http://localhost:9000/search/movies?sortBy=release_date');
    await page.waitForSelector('.movie__item');
    await page.click(".movie__item");
    await page.waitForSelector('.movie');
  }, 1600000);
});
