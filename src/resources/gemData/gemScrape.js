import request from 'requestretry';
import cheerio from 'cheerio';

const getGemData = async () => {
  const gems = [];

  const req = await request({
    url: 'https://www.gemdat.org/gemindex.php',
    json: true,
  });
  const $ = cheerio.load(req.body);
  const gemLinks = $('ul>li>a').get();
  gemLinks.map((el) => {
    gems.push({
      name: el.children[0].data,
      link: el.href,
    });
  });
  // console.log(gems);
};

getGemData();
