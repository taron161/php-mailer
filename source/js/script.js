/* в этот файл добавляет скрипты*/
const SLIDES = [
  {
    slide: document.querySelectorAll('.slide')[0],
    title: 'Декаф Флэт Уайт',
    text: 'Свежесваренный кофе без кофеина из Эфиопии с натуральным фермерским молоком — то, что нужно для расслабления после тяжёлого рабочего дня',
    price: '225₽',
    oldPrice: '295₽',
    bgColor: '#f3ebe1'
  },

  {
    slide: document.querySelectorAll('.slide')[1],
    title: 'Лавандовый Латте',
    text: 'Невероятное сочетание перуанской высокогорной арабики с молоком ламы и лавандовым сиропом унесёт вас прямо на вершину Радужных гор',
    price: '265₽',
    oldPrice: '285₽',
    bgColor: '#eae6fc'
  },

  {
    slide: document.querySelectorAll('.slide')[2],
    title: 'Тройной Эспрессо',
    text: 'Мощнее укола адреналина, чернее самой тёмной ночи, этот тройной эспрессо из Колумбии покажет вам, что такое настоящая бодрость',
    price: '375₽',
    oldPrice: '395₽',
    bgColor: '#e5e6e8'
  }
];

const MAX_COUNT = 3;

const hero = document.querySelector('.hero');

const container = document.querySelector('.slider__container');

const title = document.querySelector('.hero__title');

const text = document.querySelector('.hero__text');

const oldPrice = document.querySelector('.order__old-price');

const price = document.querySelector('.order__new-price');

const buttonPrev = document.querySelector('.slider-button-prev');

const buttonNext = document.querySelector('.slider-button-next');

const sliderPagination = document.querySelector('.slider-pagination');

const sliderPaginationButtons = sliderPagination.querySelectorAll('.slider-pagination__button');

const sliderPaginationCurrent = sliderPagination.querySelector('.slider-pagination__button--current');

let count = 1;

const setData = (i) => {
  container.innerHTML = '';
  const slide = SLIDES[i].slide.content.cloneNode(true);
  container.append(slide);
  hero.style.backgroundColor = SLIDES[i].bgColor;

  title.textContent = SLIDES[i].title;
  text.textContent = SLIDES[i].text;
  oldPrice.textContent = SLIDES[i].oldPrice;
  price.textContent = SLIDES[i].price;
};

const isDisabledButton = () => {
  count === MAX_COUNT ?
  buttonNext.setAttribute('disabled', true) :
  buttonNext.removeAttribute('disabled', true);

  count === 1 ?
  buttonPrev.setAttribute('disabled', true) :
  buttonPrev.removeAttribute('disabled', true);
};

const setCount = (isAdd) => {
  if (isAdd) {
    count < MAX_COUNT ?
    count++ :
    buttonNext.setAttribute('disabled', true);
  } else {
    count > 1 ?
    count-- :
    buttonPrev.setAttribute('disabled', true);
  }
};

isDisabledButton();

const setCurrentSlide = (current) => {
  sliderPaginationButtons.forEach((item) => item.classList.remove('slider-pagination__button--current'));
  current.classList.add('slider-pagination__button--current');
};

buttonPrev.onclick = () => {
  setCount(false);
  setData(count - 1);
  isDisabledButton();
}

buttonNext.onclick = () => {
  setCount(true);
  setData(count - 1);
  isDisabledButton();
}

sliderPagination.addEventListener('click', (evt) => {
  if (evt.target.closest('.slider-pagination__button')) {
    evt.preventDefault();
    count = evt.target.dataset.index;
    setData(count - 1);
    isDisabledButton();
    setCurrentSlide(evt.target);
  }
})


const toggleButton = document.querySelector('.js-toggle-button');
const menu = document.querySelector('.main-navigation');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('main-navigation--closed');
  toggleButton.classList.toggle('js-toggle-button--opened')
})

