"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grabLinks = void 0;

const grabLinks = (el, arr) => {
  return el.map(item => {
    arr.push({
      name: item.children[0].data,
      href: item.children[0].parent.attribs.href
    });
  });
};

exports.grabLinks = grabLinks;