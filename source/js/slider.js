const SLIDES = [
  {
    title: 'для мужчин',
    price: '2800₽',
    oldPrice: '3500₽',
  },

  {
    title: 'для женщин',
    price: '2265₽',
    oldPrice: '3285₽',
  },

  {
    title: 'для мальчиков',
    price: '1999₽',
    oldPrice: '2999₽',
  },

  {
    title: 'для девочек',
    price: '1375₽',
    oldPrice: '2395₽',
  }
];

const MAX_COUNT = 4;

const titleElement = document.querySelector('.services__title span');

const priceElement = document.querySelector('.services__price');

const oldPriceElement = document.querySelector('.services__old-price');

const buttonPrevElement = document.querySelector('.slider__button--prev');

const buttonNextElement = document.querySelector('.slider__button--next');

const sliderCurrentElemnet = document.querySelector('.slider__current');

let count = 1;

const setData = ( {title, price, oldPrice} ) => {
  titleElement.textContent = title;
  oldPriceElement.textContent = oldPrice;
  priceElement.textContent = price;
  sliderCurrentElemnet.textContent = count;
};

const isDisabledButton = () => {
  count === MAX_COUNT ?
  buttonNextElement.setAttribute('disabled', true) :
  buttonNextElement.removeAttribute('disabled', true);

  count === 1 ?
  buttonPrevElement.setAttribute('disabled', true) :
  buttonPrevElement.removeAttribute('disabled', true);
};

const setCount = (isAdd) => {
  if (isAdd) {
    count < MAX_COUNT ?
    count++ :
    buttonNextElement.setAttribute('disabled', true);
  } else {
    count > 1 ?
    count-- :
    buttonPrevElement.setAttribute('disabled', true);
  }
};

isDisabledButton();

buttonPrevElement.onclick = () => {
  setCount(false);
  setData(SLIDES[count - 1]);
  isDisabledButton();
}

buttonNextElement.onclick = () => {
  setCount(true);
  setData(SLIDES[count - 1]);
  isDisabledButton();
}
