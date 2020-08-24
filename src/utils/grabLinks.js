export const grabLinks = (el, arr) => {
  return el.map((item) => {
    arr.push({
      name: item.children[0].data,
      href: item.children[0].parent.attribs.href,
    });
  });
};
