import "./styles.scss";

const totem = document.querySelector(".totem");
const contentContainer = totem.querySelector(".totem__content_wrapper");
const itemHeight = contentContainer.querySelector(".totem__item").clientHeight;

const numberOfVisibleItems = 4;
const initialTranslateYValue =
  -contentContainer.clientHeight + itemHeight * numberOfVisibleItems;

contentContainer.style.transform = `translateY(${initialTranslateYValue}px)`;

const updatePosition = setInterval(() => {
  const currentTranslateYValue = +contentContainer.style.transform.replace(
    /[^\d.]/g,
    ""
  );

  if (currentTranslateYValue > 0) {
    const newValue = currentTranslateYValue - itemHeight;
    contentContainer.style.transform = `translateY(${-newValue}px)`;
  } else {
    contentContainer.style.transform = `translateY(${initialTranslateYValue}px)`;
  }
}, 2000);
