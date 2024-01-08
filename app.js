// https://i.ytimg.com/vi/Gn9sWAR63ng/oardefault.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDnS8Nq1Z5nX9DNzDxfLEwXc9QIzg
const imageContainer = document.querySelector(".container");
const card = document.querySelector(".card");
const xChanger = document.querySelector("#x-percent");
const yChanger = document.querySelector("#y-percent");
const sizeChanger = document.querySelector("#scale-percent");
const bgPosChanger = document.querySelector("#bgPosition");
const bgChanger = document.querySelector("form");
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
