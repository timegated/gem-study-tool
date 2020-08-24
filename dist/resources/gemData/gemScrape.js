"use strict";

var _requestretry = _interopRequireDefault(require("requestretry"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getProperties = (el, arr) => {
  return el.map(item => {
    console.log(item.children[0].parent.attribs.href); // console.log(item.children[0].href);

    arr.push({
      name: item.children[0].data,
      href: item.children[0].parent.attribs.href
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
    getProperties(gemLinks, gems);
    return gems;
  } catch (error) {
    console.error('Error inside getNonItalic', error);
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
    return italicGems;
  } catch (error) {
    console.error('Error inside getItalicGems');
  }
};

const saveJSON = async (fileName, data) => {
  try {
    _fs.default.writeFileSync(`${__dirname}/${fileName}`, JSON.stringify(await data));
  } catch (error) {
    console.error(error);
  }
};

console.log('Unresolved promise?', getNonItalic());
saveJSON('gemdata_ni.json', getNonItalic());
saveJSON('gemData_i.json', getItalicGems());