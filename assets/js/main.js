// Слайдер с фото отправок
new Swiper('.storage__slider', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  autoHeight: false,
  slidesPerView: 8,
  slidesPerColumn: 2,
  spaceBetween: 20,
  centeredSlidesBounds: true,

  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   spaceBetween: 20,
    //   slidesPerView: 2,
    //   slidesPerColumn: 3,
    // },

    600: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerColumn: 3,
    },

    800: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },

    1550: {
      slidesPerView: 5,
    },

    1650: {
      slidesPerView: 6,
    },
  },
});

// Увеличение фото в слайдере при клике
$('.storage__img').click(function () {
  $(this).toggleClass('storage__img--active');
  $('.field').toggleClass('show');
});

$('.field').click(function () {
  $(this).removeClass('show');
  $('.storage__img').removeClass('storage__img--active');
});

// Попап
$('.open-popup').click(function (e) {
  e.preventDefault();
  $('.popup__wrapper').fadeIn(300);
});

$('.popup__close').click(function () {
  $('.popup__wrapper').fadeOut(300);
});

// Увеличение картинки

$('.expenses__popup').click(function (e) {
  e.preventDefault();
  $('.expenses__zoom-wrapper').fadeIn(150);
});

$('.expenses__close').click(function () {
  $('.expenses__zoom-wrapper').fadeOut(150);
});

// Меню

// $('.menu__btn').click(function (e) {
//   e.preventDefault();
//   $('.menu').toggleClass('menu--show');
//   $('.menu__btn').toggleClass('menu__btn--close');
//   $('.header__wrapper').toggleClass('header__wrapper--fixed');
//   $('.menu__wrapper').toggleClass('menu__wrapper--show');
//   $('.header').toggleClass('header--padding');
// });

// Кнопка смотреть далее

// 1 карточка
$('#showMore-1').click(function () {
  $('.steps__item--forhidden-1').removeClass('steps__item--mobile');
  $(this).addClass('steps__more--hidden');
  $(this).removeClass('steps__more--1');
  $('#hideMore-1').removeClass('steps__more--hidden');
});

$('#hideMore-1').click(function () {
  $('.steps__item--forhidden-1').addClass('steps__item--mobile');
  $(this).addClass('steps__more--hidden');
  $('#showMore-1').removeClass('steps__more--hidden');
  $('#showMore-1').addClass('steps__more--1');
});

// 2 карточка
$('#showMore-2').click(function () {
  $('.steps__item--forhidden-2').removeClass('steps__item--mobile');
  $(this).addClass('steps__more--hidden');
  $(this).removeClass('steps__more--2');
  $('#hideMore-2').removeClass('steps__more--hidden');
});

$('#hideMore-2').click(function () {
  $('.steps__item--forhidden-2').addClass('steps__item--mobile');
  $(this).addClass('steps__more--hidden');
  $('#showMore-2').removeClass('steps__more--hidden');
  $('#showMore-2').addClass('steps__more--2');
});

// 3 карточка
$('#showMore').click(function () {
  $('.steps__item--forhidden').removeClass('steps__item--hidden');
  $('.steps__item--forhidden-3').removeClass('steps__item--mobile');
  $(this).addClass('steps__more--hidden');
  $('#hideMore').removeClass('steps__more--hidden');
});

$('#hideMore').click(function () {
  $('.steps__item--forhidden').addClass('steps__item--hidden');
  $('.steps__item--forhidden-3').addClass('steps__item--mobile');
  $(this).addClass('steps__more--hidden');
  $('#showMore').removeClass('steps__more--hidden');
});

$(document).ready(function () {
  activateTips();
  // Слайдер
  var block1 = document.querySelector('.facts__card--left');
  var block2 = document.querySelector('.facts__card--center');
  var block3 = document.querySelector('.facts__card--right');
  var block4 = document.querySelector('.facts__card--extra-1');
  var block5 = document.querySelector('.facts__card--extra-2');

  var blockText1 = block1.querySelector('.facts__info');
  var blockText2 = block2.querySelector('.facts__info');
  var blockText3 = block3.querySelector('.facts__info');
  var blockText4 = block4.querySelector('.facts__info');
  var blockText5 = block5.querySelector('.facts__info');

  var blockHeader1 = block1.querySelector('.facts__name');
  var blockHeader2 = block2.querySelector('.facts__name');
  var blockHeader3 = block3.querySelector('.facts__name');
  var blockHeader4 = block4.querySelector('.facts__name');
  var blockHeader5 = block5.querySelector('.facts__name');

  $('#slider1Right').click(function () {
    var tempText = blockText1.innerHTML;
    blockText1.innerHTML = blockText2.innerHTML;
    blockText2.innerHTML = blockText3.innerHTML;
    blockText3.innerHTML = blockText4.innerHTML;
    blockText4.innerHTML = blockText5.innerHTML;
    blockText5.innerHTML = tempText;

    var tempHeader = blockHeader1.innerHTML;
    var tempHeaderClass = $(blockHeader1).attr('class');

    blockHeader1.innerHTML = blockHeader2.innerHTML;
    $(blockHeader1).attr('class', $(blockHeader2).attr('class'));

    blockHeader2.innerHTML = blockHeader3.innerHTML;
    $(blockHeader2).attr('class', $(blockHeader3).attr('class'));

    blockHeader3.innerHTML = blockHeader4.innerHTML;
    $(blockHeader3).attr('class', $(blockHeader4).attr('class'));

    blockHeader4.innerHTML = blockHeader5.innerHTML;
    $(blockHeader4).attr('class', $(blockHeader5).attr('class'));

    blockHeader5.innerHTML = tempHeader;
    $(blockHeader5).attr('class', tempHeaderClass);

    tippy('#check', {
      content:
        'Сборные перевозки — это перевозки мелкогабаритных грузов различных заказчиков в одном направлении на одном транспортном средстве. То есть в нашем транспортной средстве или контейнере, кроме вашего груза поедет груз других клиентов, тем самым, при таком коллективном кворкинге, стоимость доставки снижается многократно!',
      zIndex: 9999,
      touch: true,
      theme: 'light',
    });

    tippy('#contract', {
      content:
        'Растаможка на контракт брокера — это комплексная услуга, освобождающая заказчика от личного участия во всех разрешительно-финансовых операциях по ввозу импортных товаров в Россию. Вам не придется открывать валютные счета и оформлять паспорт сделки, взаимодействовать с таможенными инспекторами и выполнять очень много ответственной работы, требующей специальные навыки. Официальным получателем товаров выступает наша компания. Оплата поставщику, подготовка документации и оформление таможенных формальностей будут выполнены специалистами нашей компании. В итоге вы получите закупленный в Китае товар с полным комплектом сопроводительных документов. <br> <br> Более подробная схема нашего взаимодействия рассписана на сайте, так выглядит краткий вариант <br> <br> 1. Вы переводите нам деньги за товар, мы его выкуаем у поставщика, доставляем, делаем таможенную очистку <br> <br> 2. Вы получаете товар купленный в нашей компании, с закрывающими документами и таможжеными декларациями',
      allowHTML: true,
      maxWidth: 700,
      theme: 'light',
    });
  });

  $('#slider1Left').click(function () {
    var tempText = blockText5.innerHTML;
    blockText5.innerHTML = blockText4.innerHTML;
    blockText4.innerHTML = blockText3.innerHTML;
    blockText3.innerHTML = blockText2.innerHTML;
    blockText2.innerHTML = blockText1.innerHTML;
    blockText1.innerHTML = tempText;

    var tempHeader = blockHeader5.innerHTML;
    var tempHeaderClass = $(blockHeader5).attr('class');

    blockHeader5.innerHTML = blockHeader4.innerHTML;
    $(blockHeader5).attr('class', $(blockHeader4).attr('class'));

    blockHeader4.innerHTML = blockHeader3.innerHTML;
    $(blockHeader4).attr('class', $(blockHeader3).attr('class'));

    blockHeader3.innerHTML = blockHeader2.innerHTML;
    $(blockHeader3).attr('class', $(blockHeader2).attr('class'));

    blockHeader2.innerHTML = blockHeader1.innerHTML;
    $(blockHeader2).attr('class', $(blockHeader1).attr('class'));

    blockHeader1.innerHTML = tempHeader;
    $(blockHeader1).attr('class', tempHeaderClass);

    tippy('#check', {
      content:
        'Сборные перевозки — это перевозки мелкогабаритных грузов различных заказчиков в одном направлении на одном транспортном средстве. То есть в нашем транспортной средстве или контейнере, кроме вашего груза поедет груз других клиентов, тем самым, при таком коллективном кворкинге, стоимость доставки снижается многократно!',
      zIndex: 9999,
      touch: true,
      theme: 'light',
    });

    tippy('#contract', {
      content:
        'Растаможка на контракт брокера — это комплексная услуга, освобождающая заказчика от личного участия во всех разрешительно-финансовых операциях по ввозу импортных товаров в Россию. Вам не придется открывать валютные счета и оформлять паспорт сделки, взаимодействовать с таможенными инспекторами и выполнять очень много ответственной работы, требующей специальные навыки. Официальным получателем товаров выступает наша компания. Оплата поставщику, подготовка документации и оформление таможенных формальностей будут выполнены специалистами нашей компании. В итоге вы получите закупленный в Китае товар с полным комплектом сопроводительных документов. <br> <br> Более подробная схема нашего взаимодействия рассписана на сайте, так выглядит краткий вариант <br> <br> 1. Вы переводите нам деньги за товар, мы его выкуаем у поставщика, доставляем, делаем таможенную очистку <br> <br> 2. Вы получаете товар купленный в нашей компании, с закрывающими документами и таможжеными декларациями',
      allowHTML: true,
      maxWidth: 700,
      theme: 'light',
    });
  });

  // Слайдер калькулятора
  var slider2Amount = document.querySelectorAll('.calculator__card').length;
  var slider2Current = 0;

  $('#slider2Left').click(function () {
    slider2Current = slideLeft(slider2Current, slider2Amount);
    document.querySelectorAll('.calculator__card').forEach(function (el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('.calculator__card')[slider2Current].style.display = 'flex';
  });

  $('#slider2Right').click(function () {
    slider2Current = slideRight(slider2Current, slider2Amount);
    document.querySelectorAll('.calculator__card').forEach(function (el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('.calculator__card')[slider2Current].style.display = 'flex';
  });

  function slideRight(current, max, step = 1) {
    let next = current + step;
    if (next >= max) next = 0;
    return next;
  }

  function slideLeft(current, max, step = 1) {
    let next = current - step;
    if (current == 0) next = max - 1;
    return next;
  }

  // слайдер картинок

  var slider3Amount = document.querySelectorAll('.expenses__slide').length;
  var slider3Current = 0;

  $('#slider3Left').click(function () {
    slider3Current = slideLeft(slider3Current, slider3Amount);
    document.querySelectorAll('.expenses__slide').forEach(function (el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('.expenses__slide')[slider3Current].style.display = 'flex';
  });

  $('#slider3Right').click(function () {
    slider3Current = slideRight(slider3Current, slider3Amount);
    document.querySelectorAll('.expenses__slide').forEach(function (el) {
      el.style.display = 'none';
    });
    document.querySelectorAll('.expenses__slide')[slider3Current].style.display = 'flex';
  });

  function slideRight(current, max, step = 1) {
    let next = current + step;
    if (next >= max) next = 0;
    return next;
  }

  function slideLeft(current, max, step = 1) {
    let next = current - step;
    if (current == 0) next = max - 1;
    return next;
  }

  // Отправка данных формы
  // [document.getElementById('form1')].forEach((form) => form.addEventListener('submit', (e) => {
  //   e.preventDefault();

  //   var productEl = form.querySelector('.form-product');
  //   var personEl = form.querySelector('.form-name');
  //   var phoneEl = form.querySelector('.form-phone');

  //   var subject = '';

  //   if ((productEl && !productEl.value) || !personEl.value || phoneEl.value.includes('_')) {
  //     alert('Заполните все поля');
  //     return;
  //   }

  //   if (productEl) {
  //     subject = `Новое сообщение на товар "${productEl.value}"`;
  //   } else {
  //     subject = `Запрос обратного звонка`;
  //   }

  //   var text = `Имя: ${personEl.value}\r\n Телефон: ${phoneEl.value}`;

  //   fetch(`/mail.php?subject=${subject}&message=${text}`).then(() => {
  //     alert('Сообщение отправлено');
  //     personEl.value = '';
  //     phoneEl.value = '';
  //     if (productEl) {
  //       productEl.value = '';
  //     }
  //   });
  // }))

  // $('#form2Button').click(function () {
  //   var form = document.querySelector('#form2');
  //   var person = form.querySelector('.price__input--person').value;
  //   var phone = form.querySelector('.price__input--phone').value;

  //   var subject = `Запрос обратного звонка`;
  //   var text = `Имя: ${person}\r\n Телефон: ${phone}`;

  //   fetch(`/mail.php?subject=${subject}&message=${text}`).then(() => {
  //     alert('Сообщение отправлено');
  //   });
  // });

  // Слайдер для фактов 2.0

  // $('.cases__slider').slick({
  //   arrows: true,
  //   centerMode: true,
  //   centerPadding: '60px',
  //   infinite: false,
  //   variableWidth: true,
  // });

  // document.querySelectorAll('.cases__info').forEach((item) => {
  //   item.setAttribute('data-content', item.innerHTML);
  //   if (item.textContent.length > 54) {
  //     item.textContent = item.textContent.slice(0, 53) + '…';

  //     const more = item.parentNode.querySelector('.cases__more')
  //     more.classList.remove('cases__more--hidden');
  //     more.addEventListener('click', () => {
  //       const opened = more.getAttribute('data-opened') === 'true';
  //       if (!opened) {
  //         more.innerHTML = 'Скрыть';
  //         more.setAttribute('data-opened', true);
  //         more.classList.add('cases__more--active');
  //         item.innerHTML = item.getAttribute('data-content');
  //         item.classList.add('cases__info--opened');
  //         item.parentNode.classList.add('cases__slide--opened');
  //         activateTips();
  //       } else {
  //         more.innerHTML = 'Показать';
  //         more.setAttribute('data-opened', false);
  //         more.classList.remove('cases__more--active');
  //         item.textContent = item.textContent.slice(0, 53) + '…';
  //         item.classList.remove('cases__info--opened');
  //         item.parentNode.classList.remove('cases__slide--opened');
  //         activateTips();
  //       }
  //     });
  //   }
  // })
});

// Тултипы
function activateTips() {
  tippy('#letter', {
    theme: 'light',
    content:
      'Под отказным письмом понимается официальный документ, который выдается аккредитованными организациями компаниям коммерческого сектора экономики о том, что тот или иной товар или услуга не нуждаются в декларировании и сертификации.',
  });

  tippy('#decloration', {
    theme: 'light',
    content:
      'Декларация о соответствии — документ, в котором производитель удостоверяет, что поставляемая им продукция соответствует требованиям нормативных документов.',
  });

  tippy('#certificate', {
    theme: 'light',
    content:
      'Сертификат соответствия на продукцию – это официальный документ, которым компетентные государственные органы подтверждают безопасность продукции, и ее согласованность со стандартами, установленными техническими регламентами или ГОСТом',
  });

  tippy('#example', {
    content: '<img src="/assets/example.jpg"></img>',
    allowHTML: true,
    theme: 'light-border',
  });

  tippy('#check', {
    content:
      'Сборные перевозки — это перевозки мелкогабаритных грузов различных заказчиков в одном направлении на одном транспортном средстве. То есть в нашем транспортной средстве или контейнере, кроме вашего груза поедет груз других клиентов, тем самым, при таком коллективном кворкинге, стоимость доставки снижается многократно!',
    zIndex: 9999,
    touch: true,
    width: 500,
    theme: 'light',
  });

  tippy('#contract', {
    content:
      'Растаможка на контракт брокера — это комплексная услуга, освобождающая заказчика от личного участия во всех разрешительно-финансовых операциях по ввозу импортных товаров в Россию. Вам не придется открывать валютные счета и оформлять паспорт сделки, взаимодействовать с таможенными инспекторами и выполнять очень много ответственной работы, требующей специальные навыки. Официальным получателем товаров выступает наша компания. Оплата поставщику, подготовка документации и оформление таможенных формальностей будут выполнены специалистами нашей компании. В итоге вы получите закупленный в Китае товар с полным комплектом сопроводительных документов. <br> <br> Более подробная схема нашего взаимодействия рассписана на сайте, так выглядит краткий вариант <br> <br> 1. Вы переводите нам деньги за товар, мы его выкуаем у поставщика, доставляем, делаем таможенную очистку <br> <br> 2. Вы получаете товар купленный в нашей компании, с закрывающими документами и таможжеными декларациями',
    allowHTML: true,
    touch: true,
    maxWidth: 700,
    theme: 'light',
  });
}

// Маска для телефона
var element1 = document.getElementById('phone1');
var element2 = document.getElementById('phone2');
var element3 = document.getElementById('phone3');
var maskOptions = {
  mask: '+{7} (000) 000-00-00',
  lazy: false,
};
var mask1 = IMask(element1, maskOptions);
var mask2 = IMask(element2, maskOptions);
var mask2 = IMask(element3, maskOptions);

activateTips();

const quiz = {
  index: 1,
  progress: 0,
  next: [
    {
      index: 2,
      progress: 50,
      next: {
        index: 6,
        last: true,
      },
    },
    {
      index: 3,
      progress: 33,
      next: [
        {
          index: 5,
          progress: 66,
          next: {
            index: 6,
            last: true,
          },
        },
        {
          index: 5,
          progress: 66,
          next: {
            index: 6,
            last: true,
          },
        },
      ],
    },
    {
      index: 4,
      progress: 50,
      next: [
        {
          index: 2,
          progress: 75,
          next: {
            index: 6,
            last: true,
          },
        },
        {
          index: 7,
          progress: 75,
          next: {
            index: 6,
            last: true,
          },
        },
      ],
    },
  ],
};

let currentQuizData = quiz;

function toggleBlock(block) {
  document.querySelectorAll('.quiz__content').forEach((item) => (item.style.display = 'none'));
  block.style.display = 'block';
}

const quizBlock1 = document.querySelector('.quiz__content[data-index="1"]');
const quizBlock2 = document.querySelector('.quiz__content[data-index="2"]');
const quizBlock3 = document.querySelector('.quiz__content[data-index="3"]');
const quizBlock4 = document.querySelector('.quiz__content[data-index="4"]');
const quizBlock5 = document.querySelector('.quiz__content[data-index="5"]');
const quizBlock6 = document.querySelector('.quiz__content[data-index="6"]');
const quizBlock7 = document.querySelector('.quiz__content[data-index="7"]');

const blocks = [quizBlock1, quizBlock2, quizBlock3, quizBlock4, quizBlock5, quizBlock6, quizBlock7];

const backButton = document.querySelector('.quiz__button--back');
const nextButton = document.querySelector('.quiz__button--next');

let data = [];
let path = [];
let files = [];

nextButton.addEventListener('click', () => {
  if (currentQuizData.last) {
    return;
  }

  const radioBlock = document.querySelector(`input[name="quiz${currentQuizData.index}"]:checked`);
  if (radioBlock) {
    const value = parseInt(radioBlock.value);

    const questionText = document.getElementById(`quizQuestion${currentQuizData.index}`).innerText;
    data.push(`<h3>${questionText}:</h3> 
      ${radioBlock.parentNode.querySelector('label').innerText}`);

    toggleBlock(blocks[currentQuizData.next[value].index - 1]);
    currentQuizData = currentQuizData.next[value];
    path.push(value);
  } else {
    if (currentQuizData.index === 2) {
      const name = quizBlock2.querySelector('.quiz__input--user').value;
      const email = quizBlock2.querySelector('.quiz__input--email').value;
      const product = quizBlock2.querySelector('.quiz__input--product').value;
      const cost = quizBlock2.querySelector('.quiz__input--cost').value;
      const volume = quizBlock2.querySelector('.quiz__input--volume').value;
      const phone = quizBlock2.querySelector('.quiz__input--phone').value;
      const _files = quizBlock2.querySelector('.quiz__input--file').files;

      if (!email || !validateEmail(email) || !phone || !validatePhone(phone)) {
        alert('Заполните все обязательные поля');
        return;
      }

      const questionText = document.getElementById(`quizQuestion${currentQuizData.index}`).innerText;
      data.push(`<h3>${questionText}:</h3>
        <b>Имя</b> - ${name}<br /> 
        <b>Почта</b> - ${email}<br />
        <b>Товар</b> - ${product}<br />
        <b>Цена</b> - ${cost}<br />
        <b>Кол-во</b> - ${volume}<br />
        <b>Телефон</b> - ${phone}`);

      files = _files;

      toggleBlock(blocks[currentQuizData.next.index - 1]);
      currentQuizData = currentQuizData.next;
    } else if (currentQuizData.index === 5) {
      const name = quizBlock5.querySelector('.quiz__input--user').value;
      const email = quizBlock5.querySelector('.quiz__input--email').value;
      const product = quizBlock5.querySelector('.quiz__input--product').value;
      const phone = quizBlock5.querySelector('.quiz__input--phone').value;
      const _files = quizBlock5.querySelector('.quiz__input--file').files;

      if (!email || !validateEmail(email) || !phone || !validatePhone(phone)) {
        alert('Заполните все обязательные поля');
        return;
      }

      const questionText = document.getElementById(`quizQuestion${currentQuizData.index}`).innerText;
      data.push(`<h3>${questionText}:</h3>
      <b>Имя</b> - ${name}<br /> 
      <b>Почта</b> - ${email}<br />
      <b>Товар</b> - ${product}<br />
      <b>Телефон</b> - ${phone}`);

      files = _files;

      toggleBlock(blocks[currentQuizData.next.index - 1]);
      currentQuizData = currentQuizData.next;
    } else if (currentQuizData.index === 7) {
      const phone = quizBlock7.querySelector('.quiz__input--phone').value;

      if (!phone || !validatePhone(phone)) {
        alert('Введите номер телефона');
        return;
      }

      const questionText = document.getElementById(`quizQuestion${currentQuizData.index}`).innerText;
      data.push(`<h3>${questionText}:</h3>
      <b>Телефон</b> - ${phone}`);

      toggleBlock(blocks[currentQuizData.next.index - 1]);
      currentQuizData = currentQuizData.next;
    }
  }

  let progress = currentQuizData.progress;

  if (currentQuizData.last) {
    let d = new Date();
    let datestring = d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
    let subject = `Результаты опроса ${datestring}`;
    let text = '';

    data.forEach((item) => {
      text += `${item}\r\n`;
    });

    let formData = new FormData();
    formData.append('subject', subject);
    formData.append('text', text);
    formData.append('file', files[0]);

    fetch('/mail.php', {
      body: formData,
      method: 'post',
    });

    nextButton.style.display = 'none';
    navigationBlock.classList.add('quiz__navigation--final');
    infoBlock.classList.add('quiz__info--final');

    progress = 100;
  }

  document.querySelector('.quiz__bar-fill').style.width = `${progress}%`;
  document.querySelectorAll('.quiz__bar-text-value').forEach((item) => (item.innerHTML = `${progress}%`));
});

const navigationBlock = document.querySelector('.quiz__navigation');
const infoBlock = document.querySelector('.quiz__info');

backButton.addEventListener('click', () => {
  if (!path.length) {
    return;
  }

  if (currentQuizData.last) {
    nextButton.style.display = 'block';
    navigationBlock.classList.remove('quiz__navigation--final');
    infoBlock.classList.remove('quiz__info--final');

    path = [];
    data = [];
    currentQuizData = quiz;
    toggleBlock(blocks[currentQuizData.index - 1]);

    document.querySelector('.quiz__bar-fill').style.width = `0`;
    document.querySelectorAll('.quiz__bar-text-value').forEach((item) => (item.innerHTML = `0%`));

    return;
  }

  document.querySelectorAll('.quiz__input').forEach((item) => (item.value = ''));

  path.pop();
  data.pop();
  currentQuizData = quiz;
  path.forEach((i) => {
    currentQuizData = currentQuizData.next[i];
  });
  toggleBlock(blocks[currentQuizData.index - 1]);

  document.querySelector('.quiz__bar-fill').style.width = `${currentQuizData.progress}%`;
  document.querySelectorAll('.quiz__bar-text-value').forEach((item) => (item.innerHTML = `${currentQuizData.progress}%`));
});

document.querySelector('.hero__button').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.poll').scrollIntoView({ block: 'end', behavior: 'smooth' });
});

document.querySelector('.price__button').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.poll').scrollIntoView({ block: 'end', behavior: 'smooth' });
});

document.querySelector('.calculator__button').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.poll').scrollIntoView({ block: 'end', behavior: 'smooth' });
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const validatePhone = (phone) => {
  return !phone.includes('_');
};
