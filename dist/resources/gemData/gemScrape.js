"use strict";

var _requestretry = _interopRequireDefault(require("requestretry"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getGemData = async () => {
  const gems = [];
  const req = await (0, _requestretry.default)({
    url: 'https://www.gemdat.org/gemindex.php',
    json: true
  });

  const $ = _cheerio.default.load(req.body);

  const gemLinks = $('ul>li>a').get();
  console.log(gemLinks.children[0]);
  gemLinks.map(el => {
    gems.push({
      name: el.children[0].data,
      link: el.href
    });
  }); // console.log(gems);
};

getGemData();