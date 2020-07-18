const gemContainer = document.querySelector('.gems__container');
const gemNames = ['Appatite', 'Ruby', 'Diamond', 'Emerald', 'Sapphire'];

// simulate API call
function generateGemCards (num, text) {
  if (num <= 0) return
  const gemCard = document.createElement('div')
  gemCard.className = 'gem__card'
  gemCard.innerHTML = `<a href='#!' class='gem__link'>${gemNames[Math.floor(Math.random() * gemNames.length)]}</a>`
  gemContainer.appendChild(gemCard)
  // eslint-disable-next-line
  return generateGemCards(num - 1, text)
};


// setTimeout(() => {
//   generateGemCards(20, 'Appatite')
// }, 2000);
