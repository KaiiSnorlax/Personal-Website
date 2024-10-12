const svg = document.getElementById("triangles");

const rightEyePupil = document.getElementById("eyeRight");
const leftEyePupil = document.getElementById("eyeLeft");
const rightEyeElem = document.getElementById("eyeRightBoundary");
const leftEyeElem = document.getElementById("eyeLeftBoundary");

let rightEyeBoundary = {
  x:
    rightEyeElem.getBoundingClientRect().x +
    rightEyeElem.getBoundingClientRect().width / 2,
  y:
    rightEyeElem.getBoundingClientRect().y +
    rightEyeElem.getBoundingClientRect().height / 2,
};
let leftEyeBoundary = {
  x:
    leftEyeElem.getBoundingClientRect().x +
    leftEyeElem.getBoundingClientRect().width / 2,
  y:
    leftEyeElem.getBoundingClientRect().y +
    leftEyeElem.getBoundingClientRect().height / 2,
};

addEventListener("resize", (event) => {
  rightEyeBoundary = {
    x:
      rightEyeElem.getBoundingClientRect().x +
      rightEyeElem.getBoundingClientRect().width / 2,
    y:
      rightEyeElem.getBoundingClientRect().y +
      rightEyeElem.getBoundingClientRect().height / 2,
  };
  leftEyeBoundary = {
    x:
      leftEyeElem.getBoundingClientRect().x +
      leftEyeElem.getBoundingClientRect().width / 2,
    y:
      leftEyeElem.getBoundingClientRect().y +
      leftEyeElem.getBoundingClientRect().height / 2,
  };
  console.log(ahahha);
});

document.addEventListener("mousemove", (event) => {
  const mouseCoords = { x: event.clientX, y: event.clientY };
  const rightEyeToMouse = magnitude({
    x: mouseCoords.x - rightEyeBoundary.x,
    y: mouseCoords.y - rightEyeBoundary.y,
  });
  const leftEyeToMouse = magnitude({
    x: mouseCoords.x - leftEyeBoundary.x,
    y: mouseCoords.y - leftEyeBoundary.y,
  });

  const rightEyeTranslate = {
    x:
      (mouseCoords.x - rightEyeBoundary.x) *
      Math.min(1, 40 / (2 * rightEyeToMouse)),
    y:
      (mouseCoords.y - rightEyeBoundary.y) *
      Math.min(1, 10 / (2 * rightEyeToMouse)),
  };
  const leftEyeTranslate = {
    x:
      (mouseCoords.x - leftEyeBoundary.x) *
      Math.min(1, 40 / (2 * leftEyeToMouse)),
    y:
      (mouseCoords.y - leftEyeBoundary.y) *
      Math.min(1, 10 / (2 * leftEyeToMouse)),
  };

  console.log(leftEyeBoundary);
  console.log(mouseCoords);
  rightEyePupil.style.transform = `translate(${rightEyeTranslate.x}px, ${rightEyeTranslate.y}px)`;
  leftEyePupil.style.transform = `translate(${leftEyeTranslate.x}px, ${leftEyeTranslate.y}px)`;
});

function magnitude(point) {
  return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
}
