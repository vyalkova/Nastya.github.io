ymaps.ready(init);

var myMap;

var iron = [];
var marg = [];
var chrom = [];
var alum = [];
var surma = [];
var stron = [];

var placemarks = [iron, marg, chrom, alum, surma,stron ];

function init() {
    myMap = new ymaps.Map("map", {
        center: [41.20, 74.00],
        zoom: 6,
        type: 'yandex#hybrid'
    });
    myMap.behaviors.enable('scrollZoom');
    myMap.controls.add('zoomControl', {
        float: 'none',
        position: {
            right: 40,
            top: 5
        }
    });

    var data = loadGeoData();
    for (var i=0; i < data.length; i++) {
        var row_data = data[i];

        var type = row_data[0];        
		var x = Number(row_data[10]);
		var y = Number(row_data[9]);
		var text = row_data[0];
        var size = Number(row_data[7]) * 10;
        
        var placemark = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		},{
			iconContent: 'goold',
			preset: 'twirl#cinemaIcon',
			iconImageSize: [size, size],
            		iconImageOffset: [-size/2, -size/2],
		visible: false,
		});
		var placemark1 = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		},{
			iconContent: 'gooldP',
			preset: 'twirl#tireIcon',
			iconImageSize: [size, size],
            		iconImageOffset: [-size/2, -size/2],
		visible: false,
		});
		var placemark2 = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		},{
			iconContent: 'gooldP',
			preset: 'twirl#bowlingIcon',
			iconImageSize: [size, size],
            		iconImageOffset: [-size/2, -size/2],
		visible: false,
		});
		var placemark3 = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		},{
			iconContent: 'gooldP',
			preset: 'twirl#metroMoscowIcon',
			iconImageSize: [size, size],
            		iconImageOffset: [-size/2, -size/2],
		visible: false,
		});
		var placemark4 = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		},{
			iconContent: 'gooldP',
			preset: 'twirl#campingIcon',
			iconImageSize: [size, size],
            		iconImageOffset: [-size/2, -size/2],
		visible: false,
		});
		var placemark5 = new ymaps.Placemark([x, y], {
			content: text,
			balloonContent: text + " тут!"
		},{
			iconContent: 'gooldP',
			preset: 'twirl#shipIcon',
			iconImageSize: [size, size],
            		iconImageOffset: [-size/2, -size/2],
		visible: false,
		});
		

	if (type == 'Железо') {
            iron.push(placemark);
        } 
        else if (type == 'Марганец') {
            marg.push(placemark1);
        }
        else if (type == 'Хром') {
            chrom.push(placemark2);
	} else if (type == 'Алюминий') {
            alum.push(placemark3);			
	} else if (type == 'Cурьма') {
            surma.push(placemark4);
	} else if (type == 'Стронций') {
            stron.push(placemark5);
        } 
    }
        putPlacemarksOnMap();
    var iron_button = new ymaps.control.Button('Железо');
    var marg_button = new ymaps.control.Button('Марганец');
    var chrom_button = new ymaps.control.Button('Хром');
    var alum_button = new ymaps.control.Button('Алюминий');
    var surma_button = new ymaps.control.Button('Сурьма');
    var stron_button = new ymaps.control.Button('Стронций');
    

    var typeControls = new ymaps.control.Group({
            items: [iron_button, marg_button, chrom_button,  alum_button, surma_button, stron_button]

        }, {
            position: { left: 40 }
    });

    iron_button.events.add(['select'], function (e) {
        showGroup(gold);
    });
    iron_button.events.add(['deselect'], function (e) {
        hideGroup(gold);
    });
   marg_button.events.add(['select'], function (e) {
        showGroup(goldp);
    });
    marg_button.events.add(['deselect'], function (e) {
        hideGroup(goldp);
    });
    chrom_button.events.add(['select'], function (e) {
        showGroup(goldPM);
    });
    chrom_button.events.add(['deselect'], function (e) {
        hideGroup(goldPM);
    });
    alum_button.events.add(['select'], function (e) {
        showGroup(goldCuprum);
    });
    alum_button.events.add(['deselect'], function (e) {
        hideGroup(goldCuprum);
    });
    surma_button.events.add(['select'], function (e) {
        showGroup(goldSUrma);
    });
    surma_button.events.add(['deselect'], function (e) {
        hideGroup(goldSUrma);
    });
    stron_button.events.add(['select'], function (e) {
        showGroup(goldRTyt);
    });
    stron_button.events.add(['deselect'], function (e) {
        hideGroup(goldRTyt);
    });
    
    myMap.controls.add(typeControls);
}


function showGroup(group) {
    myMap.setCenter([41.20, 74.00], 6, { duration: 1000 });
    for (var i = 0; i < group.length; i++) {
        group[i].options.set({ visible: true });
    }
}

function hideGroup(group) {
    for (var i = 0; i < group.length; i++) {
        group[i].options.set({ visible: false });
    }
}


function putPlacemarksOnMap() {
    for (var i = 0; i < placemarks.length; i++) {
        for (var j = 0; j < placemarks[i].length; j++) {
            myMap.geoObjects.add(placemarks[i][j]);
        }        
    }
};



function loadGeoData() {
var data = [["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "Мелкое", "3", "", "76.03", "42.67", "13584715", "4726292", "4", "76.03", "42.67", "76.03", "42.67", "Кеминский район", "/icon/Fe04.png", "76_129_Nijni_Kemin.txt", "129", "", "", "Чуйская область", "", "42.67", "Перспективы объекта незначительные. <br>Изученность ограничена поисками в 1966г  <br>Район освоен,  рельеф среднегорный (2050-2100м).  <br><br>кат.Р1 -  22.5 млн.т,  Fe - 35.9 %  <br><br>Зона разломов в экзоконтакте гранитов О3-S1 с известняками и сланцами I-O2. В известняках 4 линзовидные залежи магнетита,  в сланцах - 1 жила.  <br>Суммарная длина рудных тел - 360м,  средняя мощность - 10м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "75.9", "42.3", "13574216", "4685435", "4", "75.9", "42.3", "75.9", "42.3", "Кочкорский район", "/icon/Fe04.png", "77_41_Ortotokoi.txt", "41", "", "", "Нарынская область", "", "42.3", "Перспективы ограничены.  <br>В 1951г пройдено 8 канав, 6 шурфов,  отобрано 11 бороздовых проб.  <br><br>Район экономически освоен.  <br><br>Выс.отм. 1950м.  <br>кат.Р1 -  0.036 млн.т,  Fe - 50.9 %  <br><br>скарнированная зона экзоконтакта диоритов О1 с известняками PR1.  <br>5 штокообразных залежей магнетита размером до 2.0х3.5м. Длина полосы залежей 250м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "57", "Мелкое", "3", "", "72.22", "41.35", "13267051", "4583264", "", "72.22", "41.35", "72.22", "41.35", "Аксыйский район", "/icon/Fe04.png", "78_224_Narynskoe.txt", "224", "", "", "Джалал-Абадская область", "", "41.35", "Экономические условия благоприятные. Район хорошо освоен. Выс.отм. 800-1100 м.  Рядом добывается уголь (Таш-Кумыр).  <br><br>кат.С2 -  8 млн.т Fe - 36.9 %  <br><br>В угленосной толще J многочисленные (до 100) горизонты глин и песчаников,  содержащих на 5-20% от своей массы конкреции и линзы сидеритов размером до 0.5-3.0 м в длину и 0.3 м по мощности.  <br><br>Ширина толщи > 200 м, длина - 6 км."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "Мелкое", "3", "", "74.18", "41.6", "13431915", "4607613", "", "74.18", "41.6", "74.18", "41.6", "Жумгальский район", "/icon/Fe04.png", "79_67_Tabylgaty.txt", "67", "", "", "Нарынская область", "", "41.6", "Месторождение перспективное, но недоизучено. Норно-технические условия благоприятные. Выс.отм. 1350 м.  <br><br>кат.Р2 -  40 млн.т  <br>Fe - 38 %  <br>ТiО2 - 0.14-0.16 %  <br><br>Пласт гематитовой руды в основании верхней подсвиты чемандинской свиты карбона.  <br><br>Длина пласта 3250м,  мощность 25.0 м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "мелкое", "3", "", "74.4", "41.34", "13449773", "4577847", "4", "74.37", "41.34", "74.37", "41.34", "Тогуз-Тороуский район", "/icon/Fe04.png", "80_241_Kugantor.txt", "241", "", "", "Джалал-Абадская область", "", "41.33", "Перспективы объекта ограничены. Месторождение недоизучено. горно-технические условия неблагоприятные. Выс.отм. 3000м.  <br><br>кат.Р1 -  2.7 млн.т  <br>Fe - 48 %  <br>Тi - до 0.4 %  <br>Mn - 0.2 %  <br>V - 0.03 %  <br><br>Полоса магнетитовых скарнов в экзоконтакте интрузии гранит-порфиров С3? с конгломератами D2-3 и известняками С1-2.  <br>Главная залежь имеет штокообразную форму, протяженность > 100м, ширину 10-70м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "75.4", "41.93", "13533175", "4644391", "", "75.4", "41.93", "75.4", "41.93", "Кочкорский район", "/icon/Fe04.png", "81_106_Kalmak-Ashu.txt", "106", "", "", "Нарынская область", "", "41.93", "месторождение мало перспективное ввиду малых запасов.  <br>Предварительная разведка в 1941г (канавы,  бороздовые пробы). <br>горно-экономические условия неблагоприятные. Выс.отм. 3600-3700 м.  <br><br>кат.С2 -  0.22 млн.т  <br>Fe - 51 %  <br>Тi - 0.42 %  <br><br>Линзовидные магнетитовые тела на контакте интрузии габбро С2 с известняками С1.  <br>Суммарная длина рудных тел ~ 200 м, мощность ~ 20 м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "55", "Среднее", "2", "", "76.2", "41.72", "13599863", "4620945", "", "76.2", "41.72", "76.2", "41.72", "Тянь-Шаньский район", "/icon/Fe04.png", "82_138_Baidulinskoe.txt", "138", "", "", "Нарынская область", "", "41.72", "Месторождение перспективное. Трудная доступность, выс. отм. 3600-3900 м.  <br><br>Поиски в 1965г (канавы, бороздовое опробование).  <br><br>кат.Р1 -  210.672 млн.т  <br>Fe - 48 % <br><br>Полоса согласных кварц-гематитовых тел, приуроченных к толще серицит-хлоритовых сланцев (филлитов) PZ1(?). <br>Длина полосы -12км, мощность 35м. <br><br>На  восточном фланге руды гематит-магнетитовые."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "56", "Крупное", "1", "", "76.82", "41.5", "13651691", "4597778", "", "76.82", "41.5", "76.82", "41.5", "Тянь-Шаньский район", "/icon/Fe04.png", "83_206_Dzhetymskoe.txt", "206", "", "", "Нарынская область", "", "41.5", "Объект самый крупный в республике. Его исследование ограничено поисково-оценочной стадией с помощью канав - 1960 г.  <br>Наиболее значим участок Дангы (50% запасов Fe).  <br>Условия работы довольно сложные. Район не освоен. Выс.отм. 2250-3800м. <br><br>кат.С2 -  1710.33 мл <br>кат.С2 -  1710.33 млн.т  <br><br>Fe - 31.7 %  <br>Тi - до 0.25 %  <br>Р - до 0.8 %  <br>V - 0.02 %  <br>Ni - 0.01 %  <br><br>Полоса магнетит-гематитовых линзо- и пластообразных суб-согласных тел среди филлитов венда.  <br>Многие сотни рудных тел в полосе длиной 40 км.  <br>Длина рудных линз 10-1790 м (ср.- 300 м), мощн. 0.5-85 м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "58", "Мелкое", "3", "", "71", "41.37", "13164522", "4572439", "", "71", "41.22", "71", "41.22", "Ала-Букинский район", "/icon/Fe04.png", "84_264_Gava.txt", "264", "", "", "Джалал-Абадская область", "1", "41.22", "Перспективы незначительные. Район экономически освоен. Выс.отм. 1750-1950м.  База для малого предприятия.  <br><br>Кат.С1+С2 балансовые - 0.25 млн.т <br>забалансовые - 0.749 млн.т.  <br>Всего: С1+С2 - 0.999 млн.т  <br><br>Балансовые руды - 52.7%.  <br>Забалансовые - 36.8 %  <br>Среднее содержание 38.8 %  <br><br>Полоса скарнов и магнетитового оруденения вблизи контакта известняков С1 и эффузивов С2.  <br>Длина зоны 1000м, мощность 150 м."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "73.94", "41.18", "13410688.65", "4560980.61", "4", "73.94", "41.18", "73.94", "41.18", "Тогуз-Тороуский район", "/icon/Fe04.png", "85_300_Oi-Kaiyn.txt", "300", "", "", "Джалал-Абадская область", "", "41.18", "На глубину месторождение не изучено.  <br>Район освоен. Выс.отм. 1900-2500 м.  <br><br>Кат.С2 - 0.45 млн.т <br><br>Fe - 31 %  <br><br>скарны с линзой магнетита (250х8м) на контакте гранитов Р2 и известняков С1."],
["Железо", "Черные металлы", "Металлы", "Рудные", "Проявление", "59", "Мелкое", "3", "", "71.38", "39.98", "13191042", "4434027", "", "71.35", "39.98", "71.35", "39.98", "Кадамжайский район", "/icon/Fe04.png", "86_105_Nadir.txt", "105", "", "", "Баткенская область", "", "39.98", "Имеет перспективы увеличения за счет глубины.  <br><br>Поисково-оценочные работы в 50-х годах: канавы (1300м3), шурфы (44п.м), скважины (3830п.м).  <br><br>Район экономически благоприятный (выс.отм. 2000-2300м).  <br><br>Кат.С1+С2 - 1.2 млн.т,  в т.ч. <br>балансов. - 0.89 млн.т <br>забалансовые - 0.3 млн.т <br><br>Fe - 42 %,  в т.ч. для балансов. 44.6%, для забалансовых - 29.9% <br>Mn- 2.11 %  <br>Ni - 0.05 %  <br>Тi - 0.3 %  <br>V - 0.04 %  <br><br>Две полосы оруденения в северном и южном контактах габбро-гипербазитовой расслоенной субпластовой интрузии Є-О2.  <br>Пласты имеют протяженность: северный - 4км, южный - 3.5 км, мощность соответственно 2-10 и 2-15 м."],
["Железо, ванадий, титан", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "60", "Крупное", "1", "", "72.65", "42.38", "13306465", "4696975", "4", "72.65", "42.38", "72.65", "42.38", "Таласский район", "/icon/Fe041.png", "87_125_Bala-Chichkan.txt", "125", "", "", "Таласская область", "", "42.38", "Месторождение не изучено даже на поверхности. Ранее (1968 1987гг) работы были ограничены только поисковыми маршрутами и отбором единичных и штуфных проб.  <br><br>Район осваивается и доступен. Выс.отм. 2000-3000 м.  <br><br>кат.Р1+Р2+Р3  <br>Fe2O3-11007 млн.т  <br>V2O3 - 4025 тыс.т <br>TiO2 - 237.3 млн.т  <br>Fe2O3-17.7%  <br>V2O3 - 0.08%  <br>TiO2-3.54%  <br>Au - до 0.15г/т  <br><br>Рудоносное субгоризонтальное пироксенитовое тело (площадь 2км2,  толщина до 150м) среди габбро-гипербазитовой интрузии О1, прорывающей известняково-сланцевую толщу R2. Титано-магнетитовое оруденение занимает 1-20% объема интрузии."],
["Марганец", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "72.17", "41.54", "13263473", "4601913", "", "72.22", "41.54", "72.22", "41.54", "Аксыйский район", "/icon/Mn.png", "88_191_KaraDjilga.txt", "191", "", "", "Джалал-Абадская область", "", "41.52", "Есть перспектива на глубину и фланги.  <br><br>Поиски в 1950г (канавы-1160м3, шурфы-1240 п.м.).  <br><br>горно-технические условия благоприятные,  выс.отм. 1150-1300 м.  <br><br>кат.Р2 - 0.25 млн.т  <br>Mn - 14.4 %  <br>Fe - 38-46 %  <br>Pb - до 0.14%  <br>Cu - до 0.6 %  <br>Au - до 5.6г/т  <br><br>Пласт пиролюзита в основании толщи известняков D2. Оруденение прослеживается на 100м  при мощности пласта ~ 26м."],
["Марганец", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "76.6", "41.55", "13633495", "4602974", "4", "76.6", "41.55", "76.6", "41.55", "Тянь-Шаньский район", "/icon/Mn.png", "89_199_Archalu.txt", "199", "", "", "Нарынская область", "", "41.55", "Самостоятельных перспектив не имеет. <br><br>Объект недоизучен.  <br>В 1983г поисково-оценочные работы были ограничены малыми объемами канав (640м3) и бороздового опробования. <br><br>кат.Р1 - <br>Mn-0.21 млн.т <br>Fe - 2.8 млн.т  <br><br>Mn - 10 %, Fe - 20 %  <br><br>Пласт углисто-кремнистых сланцев I - О1 с конкрециями и линзами, обогащенными железом и марганцем.  <br>Длина пласта 1400 м, мощность - 100м."],
["Марганец", "Черные металлы", "Металлы", "Рудные", "Проявление", "", "Среднее", "2", "", "76.73", "41.55", "13644620", "4603188", "", "76.73", "41.55", "76.73", "41.55", "Тянь-Шаньский район", "/icon/Mn.png", "90_205_Djakbolot.txt", "205", "", "", "Нарынская область", "", "41.55", "Перспективы ограничены. <br><br>Выполнены поиски при геологической съемке масштаба 1:50000  1979-83гг  <br><br>горно-экономические условия неблагоприятные, выс.отм. 3300-3550 м.  <br><br>кат.Р1 -  14.5 млн.т  <br>Mn - 8.08 % <br>Р - 0.08 %  <br><br>Железо-марганцевые руды среди гематито-кремнистых сланцев джакболотской свиты V.  <br>Мощность их 250-300м, длина - 2.2км."],
["Марганец", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "Мелкое", "3", "", "77.68", "41.67", "13723486", "4618176", "4", "77.68", "41.67", "77.68", "41.67", "Джети-Огузский район", "/icon/Mn.png", "91_239_Shorgosui.txt", "239", "", "", "Иссык-Кульская область", "", "41.67", "Месторождение слабо изучено (общие поиски м-ба 1:20000  1957г).  <br><br>горно-технические условия сложные.  <br><br>кат.Р2 -  2.73 млн.т  <br>Mn - 8.1 %, Fe - от 6.8 % до 28.9 %  <br><br>Три пласта полосчатых кремнистых сланцев Є-О2, содержащих тонкие линзовидные прослои гематита и магнетита.  <br>Основной пласт имеет длину 3 км  среднюю ширину 70-300м."],
["Марганец", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "73.33", "41.22", "13360230", "4566056", "", "73.33", "41.22", "73.33", "41.22", "Сузакский район", "/icon/Mn.png", "92_298_Kara-Alma.txt", "298", "", "", "Джалал-Абадская область", "", "41.22", "кат.С1+С2- 0.029 млн.т, в т.ч.  <br>кат.С1- 0.0115 млн.т  <br>кат.С2 - 0.0175 млн.т  <br><br>Mn - 6 %  <br><br>Пласт марганцовистых кварцевых песчаников в толще К2.  <br>Длина ~ 800м  ср.мощность - 3.5м."],
["Хром", "Черные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "Мелкое", "3", "", "72.43", "40.12", "13281179", "4445721", "", "72.43", "40.12", "72.43", "40.12", "Ноокатский район", "/icon/Cr.png", "93_135_Djeiran.txt", "135", "", "", "Ошская область", "", "40.12", "Перспективы незначительные.  <br><br>В 1965г геологическая съемка м-ба 1:25000.  <br><br>Район освоен,  выс.отм. 2960-3000 м.  <br><br>кат.Р1 - 0.366 млн.т  <br>Cr - 18.3 %  <br><br>Диагоналтная (СВ) зона (4км х 50км) катаклаза и серпентинизации интрузии пироксенитов Є-D2. В ней разрозненные рудные тела с густой вкрапленностью хромшпинелидов размером 10-15х0.5-1.5м."],
["Хром", "Черные металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "73.57", "39.75", "13377153", "4402831", "", "73.57", "39.75", "73.57", "39.75", "Алайский район", "/icon/Cr.png", "94_196_Stas-2.txt", "196", "", "", "Ошская область", "", "39.75", "Перспективы не ясны. <br><br>В 1969г геологическая съемка м-ба 1:50000 с малым (53м3) объемом канав.  <br><br>Район высокогорный (3800м),  труднодоступный.  <br><br>кат.Р2 - Сr -0.024млн.т <br>Cr - до 50 %  <br>Ni - 0.22 %  <br>Co - 0.055 %  <br>Hg - 0.01 % <br><br>Зона дробления, анкеритизации и хромитовой минерализации в эффузивах D длиной более 100м и мощностью 20м."],
["Алюминий (бокситы)", "Цветные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "72.52", "41.36", "13292321", "4588055", "4", "72.49", "41.36", "72.49", "41.36", "Ноокенский район", "/icon/Al04.png", "95_231_Sarybeyin.txt", "231", "", "", "Джалал-Абадская область", "", "41.4", "Бесперспективное.  <br>Поиски с поверхности 1936 и 1942гг (канавы, шурфы, бороздовые пробы).  <br><br>Среднегорная зона (до 2500м),  освоенный район.  <br><br>на 01.01.1995г Кат.Р2:  <br>Al2O3- 72.1 тыс.т <br>Al2O3-24.06%  <br>SiO2-26.56%  <br><br>Модуль - 0.9 <br><br>Бокситоносный горизонт в составе предъюрской коры выветривания, содержащей линзы бокситов и аллитов размером 400 х 1.5м"],
["Алюминий (бокситы)", "Цветные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "72.5", "41.31", "13290606", "4576987", "", "72.48", "41.31", "72.48", "41.31", "Ноокенский район", "/icon/Al04.png", "96_291_Mailisu.txt", "291", "", "", "Джалал-Абадская область", "", "41.3", "Бесперспективное.  <br>Поиски с поверхности в 1936 и 1942гг (канавы, шурфы, бороздовые пробы).  <br><br>Среднегорная зона (до 2500м), освоенный район.  <br><br>на 01.01.1995г кат.С2:  <br>Al2O3- 104.5 тыс.т  <br>Al2O3-24.06-39.96 %  <br>сред. - 34.75%  <br>SiO2-11.52%  <br>Модуль-3.02 <br><br>Бокситоносный горизонт в составе предъюрской коры выветривания, содержащей линзы бокситов и аллитов размером до 800 х 2 х 160м."],
["Алюминий (бокситы)", "Цветные металлы", "Металлы", "Рудные", "Проявление", "66", "", "0", "", "70.8", "39.97", "13141109", "4434364", "", "70.8", "39.97", "70.8", "39.97", "Баткенский район", "/icon/Al04.png", "105_145_Akshagylskoe.txt", "145", "", "", "Баткенская область", "", "39.97", "Изучено только с поверхности в 1963-1966гг (канавы,  шурфы, бороздовые пробы).  <br><br>Низкогорная зона (1100-1900м),  освоенный район  <br><br>на 01.01.1995г кат.Р1 + Р2:  Al2O3 - 217.7 тыс.т <br><br>Al2O3-39.33-76.32% (сред.- 46.03%)  <br>SiO2 - 2.2-42.26 %  <br><br>Al2O3/SiO2 - 4.3-8.8  <br><br>Более 50 мелких карстовых гнезд и линз бокситов, аллитов, сиенитов (20-85 х 0.8-6.5м) в составе боксиноносного горизонта на известняках С2."],
["Алюминий (бокситы)", "Цветные металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "70.53", "39.8", "13117386", "4416958", "", "70.53", "39.8", "70.53", "39.8", "Баткенский район", "/icon/Al04.png", "106_210_Varukh(Bedek).txt", "210", "", "", "Баткенская область", "", "39.8", "Неизученное на глубину месторождение с бедными рудами.  <br><br>Низкогорная зона (до 2000м), хорошо освоенный район.  <br><br>на 01.01.1976г кат.Р1- от 17 до 100млн.т  <br><br>Al2O3-26-35%  <br>SiO2 - 35-40% <br>модуль: 0.74-0.57  <br><br>Бокситоносный горизонт (10км х 7-30м), залегающий в толще известняков С2m.  <br>2 наиболее крупных тела бокситов и бокситовых пород имеют размеры 2.5км х 5-14м и 650м х 8.5м -13м."],
["Алюминий (бокситы)", "Цветные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "71.1", "39.97", "13166751", "4433198", "", "71.1", "39.97", "71.1", "39.97", "Баткенский район", "/icon/Al04.png", "107_156_Sokh.txt", "156", "", "", "Баткенская область", "", "39.97", "Низкосортные кремнистые железистые аллиты.  <br>Бесперспективное. <br>Поисково-оценочные работы 1966г, 1971г (канавы, бороздовые пробы).  <br><br>Низкогорная зона, освоенный район.  <br><br>на 01.01.1995г кат.Р1- Al2O3-333.6 тыс.т  <br>Al2O3-24.8-42.5%,  сред.- 33.36%  <br>SiO2 - 18.72-49.5%,  сред.-38.31%  <br>модуль-0.87  <br><br>Бокситы и аллитовые мелкие карстовые гнезда и пластовые линзы в бокситоносном горизонте известняков С1-2. Размеры горизонта 3км х 3.65-27.4м."],
["Алюминий (бокситы)", "Цветные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "73.22", "39.98", "13347671", "4429280", "4", "73.22", "39.98", "73.22", "39.98", "Кара-Суйский район", "/icon/Al04.png", "108_183_Zagara.txt", "183", "", "", "Ошская область", "", "39.98", "Бесперспективное.  <br><br>Поиски с поверхности в 1970-1972гг (канавы, бороздовые пробы).  <br><br>Высокогорная зона (3300-3600м), не освоенный район.  <br><br>на 01.01.1995г кат.Р1- Al2O3-96.5 тыс.т <br>Al2O3-21.91-39.98%,  сред.- 30.94% <br>модуль - 1.0  <br><br>Предъюрская кора выветривания, вмещающая стратифицированные линзы аллитов и бокситоподобных пород (300-3200м х 8м)."],
["Алюминий (нефелиновые сиениты)", "Цветные металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "76.03", "40.98", "13586963", "4539317", "", "76.03", "40.98", "76.03", "40.98", "Ат-Башинский район", "/icon/Al04.png", "109_258_Surteke.txt", "258", "", "", "Нарынская область", "", "40.98", "Слабо изученное месторождение с невыясненными перспективами.  <br>Приледниковая зона (4000м),  неосвоенный район.  <br><br>на 01.01.1964г кат.Р2: Al2O3-7 млн.т <br><br>Нефелиновые сиениты: Al2O3 - 18.4 - 21.7%, <br>силик.модуль 2.5  <br>уртиты:  Al2O3 - 25.73%  <br>SiO2 - 47.99%  <br><br>Массив щелочных нефелиновых трахитоидных сиенитов (S=22км2), прорванный двумя дайкообразными телами уртитов  мощностью 4-100м."],
["Алюминий (нефелиновые сиениты)", "Цветные металлы", "Металлы", "Рудные", "Коренное месторождение", "61", "Среднее", "2", "", "71.08", "39.78", "13164432", "4412895", "", "71.08", "39.78", "71.08", "39.78", "Баткенский район", "/icon/Al04.png", "110_230_Zardalekskoe.txt", "230", "", "", "Баткенская область", "", "39.78", "Весьма перспективное месторождение с неизученной технологией извлечения алюминия. <br>Высокогорная зона (2800-3200м), хорошо освоенный район.  <br>Поисково-оценочные работы 1961-62гг (канавы, шурфы, бороздовые пробы)  <br><br>На 01.01.1964г  <br>кат.С1+С2: Al2O3-151.4 млн.т  <br>кат.Р1-49.1млн.т  <br>С1+С2+Р1-200.5млн.т  <br><br>Al2O3 - 20.32-24.60%  <br>SiO2 - 48.95-55.53%  <br>Fe2O3-0.49-3.43%  <br>Na2O+K2O/ Al2O3=0.8-1.0  <br><br>Штокообразные (1100-1200м х 600-1000м) и дайкообразные (650-2200 х 50-200м) тела рудоносных щелочных нефелиновых сиенитов Р2-Т1 в составе многофазного массива нефелиновых сиенитов Р2-Т1."],
["Алюминий (нефелиновые сиениты)", "Цветные металлы", "Металлы", "Рудные", "Коренное месторождение", "", "Крупное", "1", "", "71.25", "39.77", "13177941", "4393771", "", "71.25", "39.62", "71.25", "39.62", "Баткенский район", "/icon/Al04.png", "111_284_Khodjaachan.txt", "284", "", "", "Баткенская область", "1", "39.62", "Перспективное  неизученное  труднодоступное месторождение.  <br>Общие поиски и съемка  1992г  <br><br>кат.Р2- 3млрд. т Al2O3  <br><br>Среднее содержание:  <br>SiO2 -56.25%  <br>Al2O3 -23.39%  <br>FeO - 1.8%  <br>Na2O+K2O-14.94%  <br>кремн.модуль-4.23  <br>щелоч.модуль-0.63  <br>нефелин- 12-48%  <br><br>Северо-восточная часть массива нефелиновых сиенитов Р2-Т1  площадью ~ 10 км2."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "71.18", "41.5", "13181288", "4603223", "", "71.18", "41.5", "71.18", "41.5", "Ала-Букинский район", "/icon/SbPM.png", "698__Archasuu II.txt", "", "", "", "Джалал-Абадская область", "", "41.5", "Бесперспективное.<br>Низкогорная зона (1500-1700м). <br>Поиски с поверхности и на глубину  1948-54  1975гг (канавы, скважины). <br><br>Нет сведений <br><br>Sb - 4.44% <br>Pb -до 0.13% <br>Zn -0.05-3.7%  <br>Ag - 7.2-42.6г/т <br>Au - до 2г/т <br><br>2 линзы (7х2.5м) джаспероидов с буланжерит-антимонитовым оруденением на пологом контакте мраморов и перекрывающих кристаллических сланцев PZ1."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "74.73", "41.67", "13477791", "4614730", "4", "74.73", "41.67", "74.73", "41.67", "Жумгальский район", "/icon/SbPM.png", "699__Takson-teke.txt", "", "", "", "Нарынская область", "", "41.67", "Бесперспективное.<br>Высокогорная зона (3700м). <br>Поиски с поверхности 1947-57гг <br><br>Нет сведений <br><br>Sb -0.1-1% <br>Сu - 0.39% <br>Pb - 2.12% <br>Ag - до 0.1г/т <br>As - до 1% <br><br>Баритовая жила (2х0.2м) в известняках С1, содержащая вкрапленность куприта и блеклых руд."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "74.02", "41.58", "13417999", "4605906", "4", "74.02", "41.58", "74.02", "41.58", "Тогуз-Тороуский район", "/icon/SbPM.png", "700__Bochasai.txt", "", "", "", "Джалал-Абадская область", "", "41.58", "Бесперспективное.<br>Среднегорная зона (2600м). <br>Поиски с поверхности 1965-68гг (канавы). <br><br>Нет сведений <br><br>Sb -0.3% <br>Сu - 0.7% <br>As - 0.1% <br><br>9 минерализованных крутопадающих зон (500х1.5м) в известняках С2, несущих блеклорудную минерализацию."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "76.35", "41.63", "13612491", "4611873", "", "76.36", "41.63", "76.36", "41.63", "Тянь-Шаньский район", "/icon/SbPM.png", "701__Bugulter.txt", "", "", "", "Нарынская область", "", "41.63", "Перспективы не определились. <br>Высокогорная зона (4000м), слабо освоенный район.<br>Поиски, оценка, доизучение с поверхности  1938-44гг, 1956-58гг,  1979-82гг (канавы). <br><br>На  01.01.1962г кат. <br>С1:  Sb -2.144тыс.т <br>Pb - 1.84тыс.т <br>Ag - 14.3т <br>As - 438т <br><br>Sb -0.6-11.5% <br>Pb - 0.03-11.7% <br>Sn -до 0.5% <br>Bi - до 0.12% <br>Ag -до 200г/т <br>Au -до 1.3г/т <br>As-0.32-1.05% <br><br>Экзоскарновое магнетит-полисульфидное (джемсонитовое) рудное тело (300х2-6мх100м) в известняках D3."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "77.02", "41.38", "13668693", "4585189", "4", "77.02", "41.38", "77.02", "41.38", "Ат-Башинский район", "/icon/SbPM.png", "702__Dungurame II.txt", "", "", "", "Нарынская область", "", "41.38", "Бесперспективное.<br>Высокогорная зона (4000м), неосвоенный район.<br>Поисковые работы с поверхности  1963г <br><br>Нет сведений <br><br>Sb -0.4% Cu - 0.15% <br><br>Блеклорудно-полисульфидная минерализованная зона (>170м2) с неустановленными параметрами среди известняков D1-2"],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "74.35", "40.28", "13444601", "4444615", "4", "74.35", "40.13", "74.35", "40.13", "Кара-Кулджинский район", "/icon/SbPM.png", "703__Lesnoe.txt", "", "", "", "Ошская область", "1", "40.13", "Самостоятельных перспектив не имеет. Макроиндикатор скрытого оруденения. <br>Высокогорная зона (3100-3700м). <br>Поиски с поверхности  1974-77гг (канавы, единичные штольни). <br><br>Нет сведений <br><br>Sb -0.12-8.73% (1.54%) <br>Au - до 3г/т <br>Ag- 2-50г/т <br><br>Крутопадающая минерализованная зона (800х2.5мх550м) с полисульфидно-джемсонитовым оруденением в песчано-сланцевых толщах D1-2."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "72.3", "39.98", "13269362", "4431250", "4", "72.3", "39.98", "72.3", "39.98", "Ноокатский район", "/icon/SbPM.png", "704__Kok-Deve.txt", "", "", "", "Ошская область", "", "39.98", "Бесперспективное.<br>Высокогорная зона (2900-3100м) <br>Поиски с поверхности  1967 -88гг (канавы, шурфы). <br><br>На  01.01.1995г кат. Р1: Sb - 67.5т <br><br>Sb -0.08-1.2% (0.89%) <br>Pb -0.2->1% <br>Ag- 100г/т и > <br><br>Крутопадающие линзообразные тела (20х1.2-3.3м) с кварц-сульфо-антимонитовым оруденением среди известняков С2  под сланцевым экраном С2 и S1-2."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Коренное месторождение", "", "", "0", "", "72.38", "39.97", "13276426", "4429187", "4", "72.38", "39.97", "72.38", "39.97", "Ноокатский район", "/icon/SbPM.png", "705__Gezart Levoberegjnyi.txt", "", "", "", "Ошская область", "", "39.97", "Бесперспективное.<br>Высокогорная зона (3500м). <br>Поиски с поверхности. 1984-91гг (пробы бороздовые). <br><br>Нет сведений <br><br>Sb -0.1-5.7% <br>Au- 1.9-4.5г/т <br>Ag -113-118г/т <br>Pb - 0.7-1% <br>As - до 1% <br><br>Зоны брекчирования в известняках С2, вмещающие лентообразные залежи кварц-полисульфидно-антимонитовых руд (ширина-1-50м  мощн. 0.1-5м)."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "72.72", "39.95", "13304863", "4426553", "4", "72.72", "39.95", "72.72", "39.95", "Чон-Алайский район", "/icon/SbPM.png", "706__Tamdykol.txt", "", "", "", "Ошская область", "", "39.95", "Бесперспективное. <br>Поиски с поверхности (канавы). <br><br>Нет сведений <br><br>Sb -0.1% <br>Au-0.1г/т  <br><br>Кварцевая жила с антимонит-полисульфидной минерализацией (350х1-1.2м) в гранодиоритах Р1."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "72.7", "39.7", "13302724", "4398827", "4", "72.7", "39.7", "72.7", "39.7", "Чон-Алайский район", "/icon/SbPM.png", "707__Koktotok.txt", "", "", "", "Ошская область", "", "39.7", "Бесперспективное.<br>Высокогорная зона (3100-3400м), освоенный район. <br>Поиски с поверхности  1979-84гг  (канавы, шурфы, штольни). <br>Прогнозные ресурсы не подсчитывались <br><br>Sb -0.11-3.5% <br>Zn -0.1-3.55% <br>Ag - 9-124г/т<br>Au-0.01-0.9г/т <br>As - до 0.3% <br>Pb - до 3.15% <br><br>5 крутопадающих минерализованных зон (200-350мх0.2-5м) с анкерит-кварц-сульфо-антимонит - антимонитовым оруденением в карбонатно-терригенной(олистостромовой) толще С3."],
["Сурьма, полиметаллы", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "72.72", "39.7", "13304154", "4398791", "", "72.72", "39.7", "72.72", "39.7", "Чон-Алайский район", "/icon/SbPM.png", "708__Yukos.txt", "", "", "", "Ошская область", "", "39.7", "Бесперспективное.<br>Высокогорная зона (3300-3600м), освоенный район. <br>Поиски с поверхности  1981-84гг  (канавы). <br><br>Не подсчитывались <br><br>Sb -0.07-2.06% (0.75%) <br>Zn - 0.02-1% <br>Pb - до 0.12% <br><br>Крутопадающая зона (200х2м) с анкерит-кварц-полисульфидно-антимонитовой минерализацией во флишоидных толщах С3."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "70.47", "41.58", "13121916", "4615377", "4", "70.47", "41.58", "70.47", "41.58", "Чаткальский район", "/icon/Sn04.png", "709__Barkrauk.txt", "", "", "", "Джалал-Абадская область", "", "41.58", "Перспективы не ясны. <br>Геолсъемка м-ба 1:50000 - 1966-68гг,  горно-технические условия затруднительные. Выс. 2680м. <br><br><br>Кат Р1  <br>Sr - 24тыс.т <br>Сu - 0.03тыс.т  <br>Sr - 0.2%<br>Au - до 10г/т <br>Сu - 0.025% <br>Sn - 0.001% <br><br>Зона разлома (2кмх40м) с кварц-анкеритовым оруденением среди гранодиоритов С3."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "72.92", "40.95", "13324578", "4537192", "4", "72.92", "40.95", "72.92", "40.95", "Сузакский район", "/icon/Sn04.png", "710__Turpakbelskoe.txt", "", "", "", "Джалал-Абадская область", "", "40.95", "Возможно увеличение запасов. <br>Объект изучался в 1956 -58гг, район освоен. Условия работ благоприятные. Выс. 850-1020м. <br><br>Кат С1  SrО - 36.6тыс.т  <br><br>SrО - 8.70%  <br><br>Горизонты, линзы и желваки целестина среди песчано-глинистых,  гипсоносных толщ К2. Суммарная длина 3-х рудных тел 6500м при средней мощности 3.13м."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "72.82", "41.03", "13315972", "4529977.07", "", "72.84", "40.88", "72.84", "40.88", "Сузакский район", "/icon/Sn04.png", "711__Changyrtashskoe.txt", "", "", "", "Джалал-Абадская область", "1", "40.88", "Объект имеет ценность вместе с другими месторождениями Сузакской группы. <br>Район освоен. Условия благоприятные. Выс. 700-900м. <br><br><br>Кат Р1  SrО - 0.824тыс.т  <br><br>SrО - 8.24%  <br><br>Пограничная зона К2-P1, где сконцентрирована масса микрослоев и линз целестина. Длина зоны 650м, мощн. 3.45м."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "72.87", "41.03", "13320187", "4529888", "", "72.87", "40.88", "72.87", "40.88", "Сузакский район", "/icon/Sn04.png", "712__Kyzyl-Yar-Suzak.txt", "", "", "", "Джалал-Абадская область", "1", "40.88", "Возможно увеличение запасов в 1.5-2 раза. <br>Район экономически освоен. Условия благоприятные. Выс. 860-980м. <br><br>Кат С1  SrО - 51.1тыс.т <br><br>SrО - 9.14%  <br><br>Целестиновые горизонты (пропластки), составляющие пласт (3560х1.23м) среди терригенно-карбонатных пород К2-Р2."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "72.82", "40.87", "13315926", "4528142", "", "72.83", "40.87", "72.83", "40.87", "Сузакский район", "/icon/Sn04.png", "713__Kara-Daryinskoe.txt", "", "", "", "Джалал-Абадская область", "", "40.87", "Перспективы неясны из-за низкой изученности. Зона (пласт) прослежена на 20км и контролирует размещение нескольких месторождений. Выс. 700-800м. <br><br><br>Кат Р1  SrО - 20.96тыс.т  <br><br>SrО - 10.75%  <br><br>Пласт целестина (2600мх 0.25м) среди пестроцветных толщ К1-2. Отмечаются и линзовидные рудные тела длиной от 20-80 до 130м, мощности до 0.7м."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "73.03", "41.1", "13334777", "4553624", "", "73.03", "41.1", "73.03", "41.1", "Сузакский район", "/icon/Sn04.png", "714__Achi-Suu.txt", "", "", "", "Джалал-Абадская область", "", "41.1", "Перспективы объекта невелики. Он известен с 1957 г,  изучался в м-бе 1:50000 с применением канав. <br>Выс. 1100м. <br><br><br>Кат Р1  5тыс.т  <br><br>SrО - до 45%,  во вмещающих породах  SrО - до 1.77% <br><br>Слой желваков целестина мощн. 0.2м, длиной 1км, приуроченный к песчаникам и глинам К2. Размер желваков 5х10см."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "", "0", "", "73.15", "40.85", "13343991", "4525643", "", "73.15", "40.85", "73.15", "40.85", "Сузакский район", "/icon/Sn04.png", "715__Tashlak.txt", "", "", "", "Джалал-Абадская область", "", "40.85", "Ресурсы ограничены. <br>Известно с 1957г Выс. 1100м. <br><br>Кат Р2  6 тыс.т  <br><br>SrО - 31.86%  <br><br>Целестиновое оруденение в песчано -глинистых толщах К1-2, состоящее из мелких (5-10см) желваков бурого цвета. Длина слоя 1570м  мощн. 0.2м."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Коренное месторождение", "", "Среднее", "2", "", "70.45", "40.03", "13111569", "4443240", "", "70.45", "40.03", "70.45", "40.03", "Баткенский район", "/icon/Sn04.png", "716__Djidabulakskoe.txt", "", "", "", "Баткенская область", "", "40.03", "Возможно увеличение ресурсов. Известно с 1917г <br>Изучалось в 1955г (1100м3 канав)  в 1956-57гг -(канавы - 3250м3, шурфы-85 п.м, штольни - 430п.м, скважины - 1000п.м). Выс. 1470м. <br><br><br>Кат Р1 512.8 тыс.т  <br><br>SrО - 4.91%  <br><br>Продуктивные горизонты среди пестроцветных песчаников и глин К2. <br>Длина пластообразных рудных тел 600 м, мощность 2.1 м."],
["Стронций", "Редкие металлы", "Металлы", "Рудные", "Проявление", "", "Мелкое", "3", "", "70.87", "40.13", "13147668", "4452611", "", "70.87", "40.13", "70.87", "40.13", "Баткенский район", "/icon/Sn04.png", "717__Karabakskoe.txt", "", "", "", "Баткенская область", "", "40.13", "Перспективы незначительны. <br>Известен с 1955года. В 1956г -  предварительная разведка, в 1957-58гг -  детальная (40 канав, 7 шурфов, 11 уклонов, 4 буровые скважины). Выс. 890м. <br><br>Кат В+С1 - 23.5тыс.т <br>Кат. С2 - 93.7тыс.т . <br>Итого: 117.2тыс.т .<br><br>SrО - 6.15%  <br><br>Рудный пласт среди пестроцветных сланцев и песчаников К. Длина пласта 1650м,  мощность 2.12м."],
];
	return data;	
}
