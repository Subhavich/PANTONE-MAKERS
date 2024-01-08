// https://i.ytimg.com/vi/Gn9sWAR63ng/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDnS8Nq1Z5nX9DNzDxfLEwXc9QIzg
const imageContainer = document.querySelector(".container");
const card = document.querySelector(".card");
const xChanger = document.querySelector("#x-percent");
const yChanger = document.querySelector("#y-percent");
const sizeChanger = document.querySelector("#scale-percent");
const bgPosChanger = document.querySelector("#bgPosition");
const bgChanger = document.querySelector("form");
const line1 = document.querySelector("#line-1");
const line2 = document.querySelector("#line-2");
const line3 = document.querySelector("#line-3");
const cardTitle = document.querySelector("span");
const line1Input = document.querySelector("#line-1-input");
const line2Input = document.querySelector("#line-2-input");
const line3Input = document.querySelector("#line-3-input");
const cardTitleInput = document.querySelector("#hero-input");

// change pic src to form url
bgChanger.addEventListener("submit", (e) => {
  e.preventDefault();
  const newSrc = e.target[0].value;
  imageContainer.style.backgroundImage = `URL('${newSrc}')`;
});

// change position offset to range values
// (X)
xChanger.addEventListener("input", (e) => {
  const newPercent = e.target.value;
  card.style.left = `${newPercent}%`;
});
// (Y)
yChanger.addEventListener("input", (e) => {
  const newPercent = e.target.value;
  card.style.top = `${newPercent}%`;
});
//(scale)
sizeChanger.addEventListener("input", (e) => {
  const newFr = e.target.value;
  card.style.transform = `scale(${newFr})`;
});
// (bgPos)
bgPosChanger.addEventListener("change", (e) => {
  const newPos = e.target.value;
  imageContainer.style.backgroundPosition = newPos;
});

// change text to be like current input
// 1
line1Input.addEventListener("input", (e) => {
  line1.textContent = e.target.value;
});
// 2
line2Input.addEventListener("input", (e) => {
  line2.textContent = e.target.value;
});
// 3
line3Input.addEventListener("input", (e) => {
  line3.textContent = e.target.value;
});
// card title
cardTitleInput.addEventListener("input", (e) => {
  cardTitle.textContent = e.target.value;
});
