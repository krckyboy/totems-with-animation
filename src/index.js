import "./styles.scss";

function totem({ totem, speed = 2000 }) {
  const contentContainer = totem.querySelector(".totem__content_wrapper");
  const itemHeight = contentContainer.querySelector(".totem__item")
    .clientHeight;

  const initialTranslateYValue =
    -contentContainer.clientHeight + itemHeight * 4;

  contentContainer.style.transform = `translateY(${initialTranslateYValue}px)`;

  let currentTranslateYValue;

  function animate() {
    currentTranslateYValue = +contentContainer.style.transform.replace(
      /[^\d.]/g,
      ""
    );

    if (currentTranslateYValue > 0) {
      const newValue = currentTranslateYValue - itemHeight;
      contentContainer.style.transform = `translateY(${-newValue}px)`;
    } else {
      contentContainer.style.transform = `translateY(${initialTranslateYValue}px)`;
    }
  }

  let updatePosition = setInterval(animate, speed);

  totem.addEventListener("mouseover", () => {
    clearInterval(updatePosition);
  });

  totem.addEventListener("mouseleave", () => {
    updatePosition = setInterval(animate, speed);
  });
}

totem({
  totem: document.querySelector(".totem")
});
