const puppeteer = require('puppeteer')

const getGemLinks = async (url) => {
  try {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url)

    const [el] = await page.$x('//*[@id="gdwrap"]/div[2]/div[1]/table/tbody/tr/td[1]/ul/li[1]/a')

    const href = await el.getProperty('href')
    const hrefTxt = await href.jsonValue()

    console.log({ hrefTxt })
    console.log(el)
    await browser.close()
  } catch (error) {
    console.error(error)
  }
}
getGemLinks('https://www.gemdat.org/gemindex.php')
