"use strict";

var _requestretry = _interopRequireDefault(require("requestretry"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getProperties = (el, arr) => {
  return el.map(item => {
    arr.push({
      name: item.children[0].data
    });
  });
};

const getNonItalic = async () => {
  try {
    const gems = [];
    const req = await (0, _requestretry.default)({
      url: 'https://www.gemdat.org/gemindex.php',
      json: true
    });

    const $ = _cheerio.default.load(req.body);

    const gemLinks = $('ul>li>a').get();
    getProperties(gemLinks, gems); // console.log(gems);

    return gems;
  } catch (error) {
    console.error('Something bad happened with getNonItalic');
  }
};

const getItalicGems = async () => {
  try {
    const italicGems = [];
    const req = await (0, _requestretry.default)({
      url: 'https://www.gemdat.org/gemindex.php',
      json: true
    });

    const $ = _cheerio.default.load(req.body);

    const gemLinksItalic = $('ul>li>i>a').get();
    getProperties(gemLinksItalic, italicGems);
    console.log(italicGems);
    return italicGems;
  } catch (error) {
    console.error('Something bad happened with getItalicGems');
  }
};

const saveJSON = (fileName, data) => {
  _fs.default.writeFileSync(`${__dirname}/../data/${fileName}`, JSON.stringify(data));
};

saveJSON('gemdata_ni', getNonItalic());