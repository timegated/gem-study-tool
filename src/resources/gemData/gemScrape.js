import request from 'requestretry';
import cheerio from 'cheerio';

const getGemData = async () => {
  const gems = [];
  const gemItalics = [];

  const req = await request({
    url: 'https://www.gemdat.org/gemindex.php',
    json: true,
  });
  const $ = cheerio.load(req.body);
  const gemLinks = $('ul>li>a').get();
  const gemLinksItalic = $('ul>li>i>a').get();
  gemLinks.map((el) => {
    gems.push({
      name: el.children[0].data,
      link: el.href,
    });
  });
  gemLinksItalic.map((el) => {
    gemItalics.push({
      name: el.children[0].data,
    });
  });
  console.log(gems);
  console.log(gemItalics);
};

getGemData();
