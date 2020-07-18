const gemContainer = document.querySelector(".gems__container");
let gems = document.createElement("h1");



function generateGems (num, html) {
  if (num <= 0) {
    return
  }
  console.log(num)
  gems.textContent = html;
  console.log(gems)
  const child = gemContainer.appendChild(gems);
  return generateGems(num - 1, html, child);
}

generateGems(10, "Appatite");