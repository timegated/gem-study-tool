import request from 'requestretry';
import cheerio from 'cheerio';
import fs from 'fs';
import { grabLinks } from '../../utils/grabLinks';

const getNonItalic = async () => {
  try {
    const gems = [];
    const req = await request({
      url: 'https://www.gemdat.org/gemindex.php',
      json: true,
    });
    const $ = cheerio.load(req.body);
    const gemLinks = $('ul>li>a').get();
    grabLinks(gemLinks, gems);
    return gems;
  } catch (error) {
    console.error('Error inside getNonItalic', error);
  }
};

const getItalicGems = async () => {
  try {
    const italicGems = [];
    const req = await request({
      url: 'https://www.gemdat.org/gemindex.php',
      json: true,
    });
    const $ = cheerio.load(req.body);
    const gemLinksItalic = $('ul>li>i>a').get();
    grabLinks(gemLinksItalic, italicGems);
    return italicGems;
  } catch (error) {
    console.error('Error inside getItalicGems');
  }
};

const saveJSON = async (fileName, data) => {
  try {
    fs.writeFileSync(`${__dirname}/${fileName}`, JSON.stringify(await data));
  } catch (error) {
    console.error(error);
  }
};

console.log('Unresolved promise?', getNonItalic());

saveJSON('gemdata_ni.json', getNonItalic());
saveJSON('gemData_i.json', getItalicGems());
