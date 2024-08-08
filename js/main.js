const burger_btn = document.querySelector('.burger');
const nav = document.querySelector('.header__top-row');
burger_btn.onclick = function () {
    burger_btn.classList.toggle("active");
    nav.classList.toggle("nav-mobile");
    document.body.classList.toggle("no-scroll");
}

/* PhoneMask */
mask("[data-tel-input]");

/* Удяляем +, если ничего не ввели*/
const phoneInputs = document.querySelectorAll('[data-tel-input]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == "+") input.value = "";
    });

    input.addEventListener('blur', () => {
        if (input.value == "+") input.value = "";
    });
});

/* Yandex API MAP */
ymaps.ready(init);

function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.943543, 30.338928], // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark([59.943543, 30.338928], {
        balloonContent: `
				<div class="balloon">
					<div class="balloon__address">Наб. реки Фонтанки 10-15</div>
					<div class="balloon__contacts">
						<a href="tel:+78121234567">+8 (812) 123-45-67</a>
					</div>
				</div>
			`,
    }, {
        iconLayout: 'default#image',
        iconImageHref: './img/map/location-pin.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
    });

    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип

    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    myMap.geoObjects.add(myPlacemark);
}



