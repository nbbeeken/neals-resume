//@ts-check
const puppeteer = require('puppeteer');
const path = require('path');

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const pathToIndex = path.resolve(__dirname, 'dist', 'index.html');
    const indexFile = `file://${pathToIndex}`;

    await page.goto(indexFile, { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'resume.pdf', format: 'Letter' });
    await browser.close();
}

main()
.then(() => console.log('done.'))
.catch(e => console.error(e));
