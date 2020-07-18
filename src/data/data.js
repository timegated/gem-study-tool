import puppeteer from 'puppeteer'

export const getGemLinks = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto('https://www.gemdat.org/gemindex.php')
    await page.waitForSelector('li')

    const links = await page.evaluate(() => {
      const aLinks = document.querySelectorAll('li>a')
      return aLinks
    })
    console.log(JSON.stringify(links))
    await browser.close()
  } catch (error) {
    console.error(error)
  }
}
