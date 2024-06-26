const puppeteer = require('puppeteer');

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://pptr.dev/');

    // Hints:
    // Click search button

    const searchButton =  ".DocSearch-Button-Placeholder";
    await page.waitForSelector(searchButton);
    await page.click(searchButton);
   
    // // Type into search box
    await page.waitForSelector('.DocSearch-Input');
    await page.type('.DocSearch-Input', 'chipi chipi chapa chapa', {delay: 500});  

    // // Wait for search result
    // //select the section where the search result is docs
    // // Get the `Docs` result section
    // // Click on first result in `Docs` section
    const searchResult = "[id='docsearch-item-5']";
    await page.waitForSelector(searchResult);
    await page.click(searchResult);
   
   
    // Locate the title
    const textselector = await page.waitForSelector('.markdown h1:first-child');
    const text = await page.evaluate(textselector => textselector.textContent, textselector);
    // Print the title
    console.log(text);


    // Close the browser
    await browser.close();
})();