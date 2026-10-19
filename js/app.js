const PHONE = "77000000000";
const PHONE_PRETTY = "+7 700 000-00-00";

const PHOTOS = {
  hero: "assets/img/hero.jpg",
  camaro: "assets/img/camaro.jpg",
  mustang: "assets/img/mustang.jpg",
  challenger: "assets/img/challenger.jpg",
  night: "assets/img/night.jpg",
  truck: "assets/img/truck.jpg",
  jeep: "assets/img/jeep.jpg",
  suv: "assets/img/suv.jpg",
  parts: "assets/img/parts.jpg",
  engine: "assets/img/engine.jpg",
  warehouse: "assets/img/warehouse.jpg",
};

const SLIDES = [PHOTOS.hero, PHOTOS.mustang, PHOTOS.challenger, PHOTOS.jeep];

const PARTS = [
  ["bumper", "Бампер"],
  ["lights", "Фары"],
  ["trunk", "Багажник"],
  ["hood", "Капот"],
  ["engine", "Двигатель"],
  ["fender", "Крыло"],
  ["door", "Дверь"],
  ["grille", "Решётка радиатора"],
  ["mirror", "Зеркало"],
  ["brakes", "Тормозные диски"],
  ["radiator", "Радиатор"],
  ["suspension", "Подвеска"],
  ["glass", "Стекло"],
  ["gearbox", "Коробка"],
  ["alternator", "Генератор"],
  ["starter", "Стартер"],
];

const BRANDS = [
  {
    id: "chevrolet",
    name: "Chevrolet",
    tag: "Спорткары, пикапы и внедорожники GM",
    photo: PHOTOS.camaro,
    models: [
      ["camaro", "Camaro", 2010, 2023],
      ["tahoe", "Tahoe", 2015, 2024],
      ["silverado", "Silverado", 2014, 2024],
      ["corvette", "Corvette", 2014, 2024],
      ["malibu", "Malibu", 2016, 2023],
      ["equinox", "Equinox", 2018, 2024],
    ],
  },
  {
    id: "dodge",
    name: "Dodge",
    tag: "Маслкары и семейные Dodge",
    photo: PHOTOS.challenger,
    models: [
      ["challenger", "Challenger", 2008, 2023],
      ["charger", "Charger", 2011, 2023],
      ["durango", "Durango", 2011, 2024],
      ["journey", "Journey", 2011, 2020],
      ["grand-caravan", "Grand Caravan", 2008, 2020],
      ["viper", "Viper", 2013, 2017],
    ],
  },
  {
    id: "ford",
    name: "Ford",
    tag: "Mustang, пикапы F-серии и кроссоверы",
    photo: PHOTOS.mustang,
    models: [
      ["mustang", "Mustang", 2015, 2023],
      ["f150", "F-150", 2015, 2024],
      ["explorer", "Explorer", 2011, 2024],
      ["bronco", "Bronco", 2021, 2024],
      ["edge", "Edge", 2015, 2023],
      ["raptor", "Raptor", 2017, 2024],
    ],
  },
  {
    id: "ram",
    name: "RAM",
    tag: "Пикапы для работы и бездорожья",
    photo: PHOTOS.truck,
    models: [
      ["1500", "1500", 2019, 2024],
      ["trx", "1500 TRX", 2021, 2024],
      ["2500", "2500", 2019, 2024],
      ["3500", "3500", 2019, 2024],
    ],
  },
  {
    id: "jeep",
    name: "Jeep",
    tag: "Внедорожники для бездорожья и трассы",
    photo: PHOTOS.jeep,
    models: [
      ["grand-cherokee", "Grand Cherokee", 2011, 2023],
      ["wrangler", "Wrangler", 2018, 2024],
      ["cherokee", "Cherokee", 2014, 2023],
      ["gladiator", "Gladiator", 2020, 2024],
      ["compass", "Compass", 2017, 2024],
      ["trackhawk", "Trackhawk", 2018, 2021],
    ],
  },
  {
    id: "cadillac",
    name: "Cadillac",
    tag: "Полноразмерные внедорожники и седаны",
    photo: PHOTOS.suv,
    models: [
      ["escalade", "Escalade", 2015, 2024],
      ["xt5", "XT5", 2017, 2024],
      ["xt6", "XT6", 2020, 2024],
      ["ct5", "CT5", 2020, 2024],
    ],
  },
  {
    id: "gmc",
    name: "GMC",
    tag: "Пикапы и большие внедорожники",
    photo: PHOTOS.truck,
    models: [
      ["sierra", "Sierra", 2014, 2024],
      ["yukon", "Yukon", 2015, 2024],
      ["canyon", "Canyon", 2015, 2024],
      ["acadia", "Acadia", 2017, 2024],
    ],
  },
  {
    id: "chrysler",
    name: "Chrysler",
    tag: "Седаны и семейные минивэны",
    photo: PHOTOS.mustang,
    models: [
      ["300", "300", 2011, 2023],
      ["pacifica", "Pacifica", 2017, 2024],
      ["voyager", "Voyager", 2020, 2024],
    ],
  },
  {
    id: "lincoln",
    name: "Lincoln",
    tag: "Кроссоверы и представительские SUV",
    photo: PHOTOS.suv,
    models: [
      ["navigator", "Navigator", 2018, 2024],
      ["aviator", "Aviator", 2020, 2024],
      ["nautilus", "Nautilus", 2019, 2024],
      ["corsair", "Corsair", 2020, 2024],
    ],
  },
  {
    id: "tesla",
    name: "Tesla",
    tag: "Электрические седаны и кроссоверы",
    photo: PHOTOS.suv,
    models: [
      ["model-3", "Model 3", 2017, 2024],
      ["model-y", "Model Y", 2020, 2024],
      ["model-s", "Model S", 2016, 2024],
      ["model-x", "Model X", 2016, 2024],
    ],
  },
];

const OFFERS = [
  ["chevrolet", "camaro", "popular", "Популярное"],
  ["dodge", "challenger", "hit", "Хит"],
  ["ford", "mustang", "new", "Новое"],
  ["ram", "trx", "popular", "Популярное"],
  ["jeep", "grand-cherokee", "", ""],
  ["cadillac", "escalade", "", ""],
];

const REGIONS = {
  kz: {
    days: "14–21 день",
    place: "до Алматы",
    lead: "Chevrolet, Ford, Dodge, RAM, Jeep, Cadillac. Оригинал и аналог, доставка по Казахстану и России.",
    ship: "Доставка по КЗ и РФ",
    caption: "14–21 день",
    note: "в среднем от заказа до выдачи в Алматы",
    stepTitle: "Выдача в Алматы",
    stepText: "Самовывоз со склада или доставка по Казахстану транспортной компанией.",
    stepTime: "1–4 дня",
  },
  ru: {
    days: "18–28 дней",
    place: "до Москвы",
    lead: "Chevrolet, Ford, Dodge, RAM, Jeep, Cadillac. Оригинал и аналог, доставка по России и Казахстану.",
    ship: "Доставка по КЗ и РФ",
    caption: "18–28 дней",
    note: "в среднем от заказа до выдачи в Москве",
    stepTitle: "Выдача в Москве",
    stepText: "Самовывоз со склада или доставка по России транспортной компанией.",
    stepTime: "2–5 дней",
  },
  eu: {
    days: "21–35 дней",
    place: "по Европе",
    lead: "Chevrolet, Ford, Dodge, RAM, Jeep, Cadillac. Оригинал и аналог, доставка по Европе.",
    ship: "Доставка по Европе",
    caption: "21–35 дней",
    note: "в среднем от заказа до доставки по Европе",
    stepTitle: "Доставка по Европе",
    stepText: "Отправляем транспортной компанией. Срок зависит от города.",
    stepTime: "3–7 дней",
  },
};

const state = {
  region: localStorage.getItem("usparts-region") || "kz",
  brand: "chevrolet",
  favs: new Set(JSON.parse(localStorage.getItem("usparts-favs") || "[]")),
  slide: 0,
  lastFocus: null,
};

const $ = (sel) => document.querySelector(sel);
const icon = {
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4.2-2.8 7.4-7 9-4.2-1.6-7-4.8-7-9V6z"/></svg>',
  box: '<svg viewBox="0 0 24 24"><path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M3 8v8l9 4 9-4V8"/><path d="M12 12v8"/></svg>',
  truck: '<svg viewBox="0 0 24 24"><path d="M3 7h11v8H3z"/><path d="M14 10h4l3 3v2h-7z"/><circle cx="7" cy="17.5" r="1.5"/><circle cx="17" cy="17.5" r="1.5"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M12 3.2A8.8 8.8 0 0 0 4.4 16.3L3.2 21l4.8-1.2A8.8 8.8 0 1 0 12 3.2zm4.7 12.4c-.2.6-1.1 1-1.8 1.1-.5.1-1.1.1-3.5-.7-2.9-1-4.8-4-4.9-4.2-.2-.2-1.3-1.7-1.3-3.2s.8-2.3 1.1-2.6c.3-.3.6-.4.9-.4h.6c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.2.1.3 0 .5-.1.2-.2.3-.3.5l-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1.2.1 1.5.7 1.8.8.2.1.4.2.4.3.1.3 0 .8-.2 1.1z"/></svg>',
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

function brandById(id) {
  return BRANDS.find((brand) => brand.id === id);
}

function modelById(brand, modelId) {
  return brand?.models.find((model) => model[0] === modelId);
}

function modelObj(row) {
  return { id: row[0], name: row[1], from: row[2], to: row[3] };
}

function yearsLabel(model) {
  return `${model.from}–${model.to}`;
}

function carTitle(brand, model) {
  return `${brand.name} ${model.name}`;
}

function favKey(brandId, modelId) {
  return `${brandId}/${modelId}`;
}

function region() {
  return REGIONS[state.region] || REGIONS.kz;
}

function saveFavs() {
  localStorage.setItem("usparts-favs", JSON.stringify([...state.favs]));
}

function waLink(text) {
  const msg = text || "Здравствуйте! Нужны запчасти из США.";
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

function tgLink(text) {
  const msg = text || "Здравствуйте! Нужны запчасти из США.";
  return `https://t.me/share/url?text=${encodeURIComponent(msg)}`;
}

function messageFrom(data) {
  return [
    "Здравствуйте! Нужны запчасти из США.",
    `Авто: ${data.car}`,
    `Деталь: ${data.part}`,
    `Имя: ${data.name}`,
    `Телефон: ${data.phone}`,
  ].join("\n");
}

function setLinks(text) {
  const href = waLink(text);
  const tg = tgLink(text);
  ["headWa", "ctaWa", "footWa", "okWa"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.href = href;
  });
  ["ctaTg", "footTg"].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.href = tg;
  });
}

function fillYears(model, selected) {
  const select = $("#q-year");
  const current = selected || select.value;
  select.innerHTML = "";
  for (let year = model.to; year >= model.from; year -= 1) {
    const option = document.createElement("option");
    option.value = String(year);
    option.textContent = String(year);
    select.append(option);
  }
  if ([...select.options].some((option) => option.value === String(current))) {
    select.value = String(current);
  }
}

function fillModels(brand, modelId) {
  const select = $("#q-model");
  select.innerHTML = brand.models
    .map((row) => {
      const model = modelObj(row);
      return `<option value="${model.id}">${esc(model.name)}</option>`;
    })
    .join("");
  if (modelId && brand.models.some((row) => row[0] === modelId)) select.value = modelId;
  const model = modelObj(brand.models.find((row) => row[0] === select.value));
  fillYears(model);
}

function fillBrands() {
  const select = $("#q-brand");
  select.innerHTML = BRANDS.map((brand) => `<option value="${brand.id}">${esc(brand.name)}</option>`).join("");
  select.value = "chevrolet";
  fillModels(brandById("chevrolet"), "camaro");
  $("#q-year").value = "2023";
}

function renderRegion() {
  const data = region();
  $("#statDays").textContent = data.days;
  $("#statPlace").textContent = data.place;
  $("#heroLead").textContent = data.lead;
  $("#shipCaption").textContent = data.caption;
  $("#shipNote").textContent = data.note;
  document.querySelectorAll(".regions button").forEach((button) => {
    button.classList.toggle("on", button.dataset.region === state.region);
  });
  $("#steps").innerHTML = [
    ["Подбор по каталогу", "Сверяем деталь по марке, модели и году, присылаем две цены.", "30 минут"],
    ["Выкуп в США", "Заказываем у дилера или на складе и присылаем фото детали до отправки.", "1–3 дня"],
    ["Авиа или море", "Мелкое летит самолётом, кузовное и тяжёлое идёт контейнером.", "10–16 дней"],
    [data.stepTitle, data.stepText, data.stepTime],
  ]
    .map(
      (step, index) => `
      <li>
        <span class="step-n">${index + 1}</span>
        <div>
          <h3>${step[0]}</h3>
          <p>${step[1]}</p>
          <span class="time">${step[2]}</span>
        </div>
      </li>`
    )
    .join("");
  localStorage.setItem("usparts-region", state.region);
}

function offerCard(brandId, modelId, badge, badgeLabel) {
  const brand = brandById(brandId);
  const model = modelObj(modelById(brand, modelId));
  const key = favKey(brandId, modelId);
  const loved = state.favs.has(key);
  const ship = region().ship;
  return `
    <article class="offer">
      <div class="offer-photo">
        <img src="${brand.photo}" alt="${esc(carTitle(brand, model))}">
        ${badge ? `<span class="badge ${badge}">${badgeLabel}</span>` : ""}
        <button class="heart ${loved ? "on" : ""}" type="button" data-action="fav" data-brand="${brandId}" data-model="${modelId}" aria-label="В избранное" aria-pressed="${loved}">${icon.heart}</button>
      </div>
      <div class="offer-body">
        <div class="brand-kicker">${esc(brand.name)}</div>
        <h3>${esc(carTitle(brand, model))}</h3>
        <p class="desc">Автозапчасти на ${esc(carTitle(brand, model))} от ${model.from} по ${model.to} года</p>
        <ul class="meta">
          <li>${icon.shield} Оригинал / аналог</li>
          <li>${icon.truck} ${ship}</li>
          <li>${icon.gear} Гарантия на запчасти</li>
        </ul>
        <div class="offer-actions">
          <button class="btn btn-gold" type="button" data-action="quote" data-brand="${brandId}" data-model="${modelId}">Узнать цены →</button>
          <a class="btn btn-ghost" href="#/model/${brandId}/${modelId}">К объявлению →</a>
        </div>
      </div>
    </article>`;
}

function renderOffers() {
  $("#offerGrid").innerHTML = OFFERS.map((row) => offerCard(...row)).join("");
}

function renderCatalog() {
  const current = brandById(state.brand) || BRANDS[0];
  state.brand = current.id;
  $("#brandList").innerHTML = BRANDS.map((brand) => {
    const count = brand.models.length;
    const word = count === 1 ? "модель" : count < 5 ? "модели" : "моделей";
    return `<button class="brand-btn ${brand.id === current.id ? "on" : ""}" type="button" data-action="brand" data-brand="${brand.id}">
      <span>${esc(brand.name)}</span><small>${count} ${word}</small>
    </button>`;
  }).join("");
  $("#catalogPanel").innerHTML = `
    <img src="${current.photo}" alt="${esc(current.name)}">
    <div class="panel-body">
      <div class="brand-kicker">${esc(current.name)}</div>
      <h3>${esc(current.name)}</h3>
      <p class="sub">${esc(current.tag)}</p>
      <div class="chips">
        ${current.models
          .map((row) => {
            const model = modelObj(row);
            return `<button class="chip" type="button" data-action="open" data-brand="${current.id}" data-model="${model.id}"><b>${esc(model.name)}</b><span>${yearsLabel(model)}</span></button>`;
          })
          .join("")}
      </div>
      <button class="btn btn-gold" type="button" data-action="quote" data-brand="${current.id}">Узнать цены на ${esc(current.name)} →</button>
    </div>`;
}

function renderChrome() {
  const names = BRANDS.map((brand) => `<span>${esc(brand.name.toUpperCase())}</span>`).join("");
  $("#marquee").innerHTML = names + names;
  $("#footerBrands").innerHTML = BRANDS.slice(0, 6)
    .map((brand) => `<a href="#/catalog" data-brand-link="${brand.id}">${esc(brand.name)}</a>`)
    .join("");
  $("#heroDots").innerHTML = SLIDES.map(
    (_, index) => `<button type="button" class="${index === state.slide ? "on" : ""}" data-action="slide" data-slide="${index}" aria-label="Кадр ${index + 1}"></button>`
  ).join("");
  const hero = $("#heroImg");
  hero.src = SLIDES[state.slide];
}

function galleryOf(brand) {
  return [brand.photo, PHOTOS.night, PHOTOS.engine, PHOTOS.parts];
}

function renderDetail(brandId, modelId) {
  const brand = brandById(brandId);
  const row = modelById(brand, modelId);
  const view = $("#detail");
  if (!brand || !row) {
    view.hidden = false;
    $("#home").hidden = true;
    view.innerHTML = `<div class="detail-wrap"><p>Такой модели нет в каталоге.</p><a href="#/catalog">В каталог</a></div>`;
    return;
  }
  const model = modelObj(row);
  const photos = galleryOf(brand);
  const key = favKey(brand.id, model.id);
  const loved = state.favs.has(key);
  const ship = region().ship;
  const chips = PARTS.map(([id, label], index) => {
    const text = `${label} на ${brand.name} ${model.name}`;
    const hidden = index >= 6 ? " hidden" : "";
    const extra = index >= 6 ? ' data-extra="1"' : "";
    return `<button type="button" data-action="quote" data-brand="${brand.id}" data-model="${model.id}" data-part="${esc(text)}"${extra}${hidden}>${esc(text)}</button>`;
  }).join("");
  const others = OFFERS.filter((item) => item[0] !== brand.id || item[1] !== model.id).slice(0, 2);
  view.innerHTML = `
    <div class="detail-wrap">
      <button class="back" type="button" data-action="home">← Все объявления</button>
      <div class="detail-grid">
        <div class="gallery">
          <div class="gal-main">
            <img id="galImg" src="${photos[0]}" alt="${esc(carTitle(brand, model))}">
            <div class="verified">${icon.shield} Проверенное качество</div>
            <button class="heart ${loved ? "on" : ""}" type="button" data-action="fav" data-brand="${brand.id}" data-model="${model.id}" aria-label="В избранное" aria-pressed="${loved}">${icon.heart}</button>
            <div class="gal-count" id="galCount">1 / ${photos.length}</div>
          </div>
          <div class="thumbs">
            ${photos
              .map(
                (src, index) => `<button type="button" class="${index === 0 ? "on" : ""}" data-action="gal" data-index="${index}" aria-label="Фото ${index + 1}"><img src="${src}" alt=""></button>`
              )
              .join("")}
          </div>
        </div>
        <div>
          <div class="brand-kicker">${esc(brand.name)}</div>
          <h1>Автозапчасти на ${esc(carTitle(brand, model))} ${yearsLabel(model)}</h1>
          <div class="features">
            <div class="feature">${icon.shield} Оригинал и аналоги<span>Оба варианта в одной смете</span></div>
            <div class="feature">${icon.box} В наличии и под заказ<span>Склад в США и заказ дилеру</span></div>
            <div class="feature">${icon.truck} ${ship}<span>${region().days}</span></div>
          </div>
          <p class="prose">Запчасти на ${esc(carTitle(brand, model))} от ${model.from} года до ${model.to} года. В наличии и под заказ. Отправка во все регионы Казахстана и России.</p>
          <div class="keys" id="keys">${chips}</div>
          <button class="text-link" type="button" data-action="expand" id="expandBtn">Развернуть все</button>
          <div class="contact-box">
            <h3>Связаться с нами</h3>
            <p class="sub">Уточните наличие, цену и сроки доставки</p>
            <div class="contact-row">
              <a class="btn btn-wa" id="detailWa" target="_blank" rel="noopener" href="${waLink(`Здравствуйте! Интересуют запчасти на ${carTitle(brand, model)}.`)}">${icon.wa} WhatsApp</a>
              <a class="btn btn-tg" target="_blank" rel="noopener" href="${tgLink(`Здравствуйте! Интересуют запчасти на ${carTitle(brand, model)}.`)}">Telegram</a>
              <a class="btn btn-ghost" href="tel:+${PHONE}">Позвонить</a>
            </div>
          </div>
        </div>
      </div>
      <div class="related">
        <h2>Другие объявления</h2>
        <div class="offer-grid">${others.map((row) => offerCard(...row)).join("")}</div>
      </div>
    </div>`;
  view.dataset.photos = JSON.stringify(photos);
  document.title = `US PARTS — ${carTitle(brand, model)}`;
}

function showHome() {
  $("#home").hidden = false;
  $("#detail").hidden = true;
  document.title = "US PARTS — запчасти на американские авто из США";
}

function showDetail(brandId, modelId) {
  $("#home").hidden = true;
  $("#detail").hidden = false;
  renderDetail(brandId, modelId);
  window.scrollTo(0, 0);
}

function openModal(id) {
  state.lastFocus = document.activeElement;
  const modal = document.getElementById(id);
  modal.hidden = false;
  document.body.classList.add("lock");
  const focusable = modal.querySelector("input, button");
  focusable?.focus();
}

function closeModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.hidden = true;
  });
  document.body.classList.remove("lock");
  state.lastFocus?.focus?.();
}

function openQuote({ brandId, modelId, year, part }) {
  const brand = brandById(brandId);
  let car = brand ? brand.name : "";
  const sameCar = $("#q-brand").value === brandId && (!modelId || $("#q-model").value === modelId);
  if (brand && modelId) {
    const model = modelObj(modelById(brand, modelId));
    let picked = model.to;
    const candidate = Number(year);
    if (sameCar && candidate >= model.from && candidate <= model.to) picked = candidate;
    car = `${carTitle(brand, model)} ${picked}`;
  }
  $("#m-car").value = car;
  $("#m-part").value = part || (sameCar ? $("#q-part").value : "") || "";
  openModal("quoteModal");
  if (!$("#m-part").value) $("#m-part").focus();
}

function readForm(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  data.car = (data.car || "").trim();
  data.part = (data.part || "").trim();
  data.name = (data.name || "").trim();
  data.phone = (data.phone || "").trim();
  return data;
}

function validPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
}

function submitQuote(form) {
  const data = readForm(form);
  if (!data.car || !data.part || !data.name || !validPhone(data.phone)) {
    form.reportValidity();
    if (!validPhone(data.phone)) form.phone.setCustomValidity("Укажите телефон, чтобы менеджер мог ответить");
    form.reportValidity();
    form.phone.setCustomValidity("");
    return;
  }
  const text = messageFrom(data);
  setLinks(text);
  form.reset();
  closeModals();
  openModal("successModal");
}

function route() {
  closeModals();
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  $("#nav").classList.remove("open");
  $(".burger")?.setAttribute("aria-expanded", "false");
  document.querySelectorAll(".nav a").forEach((link) => {
    const key = link.getAttribute("href").replace("#/", "");
    link.classList.toggle("active", key === parts[0]);
  });
  if (parts[0] === "model" && parts[1] && parts[2]) {
    showDetail(parts[1], parts[2]);
    return;
  }
  showHome();
  const anchors = {
    catalog: "#catalog",
    offers: "#offers",
    delivery: "#delivery",
    quality: "#quality",
    contacts: "#contacts",
  };
  const anchor = anchors[parts[0]];
  if (anchor) {
    requestAnimationFrame(() => $(anchor)?.scrollIntoView({ behavior: "smooth" }));
  }
}

function tickSlide() {
  state.slide = (state.slide + 1) % SLIDES.length;
  renderChrome();
}

document.body.addEventListener("click", (event) => {
  const node = event.target.closest("[data-action], [data-brand-link]");
  if (!node) return;
  if (node.dataset.brandLink) {
    state.brand = node.dataset.brandLink;
    renderCatalog();
    return;
  }
  const action = node.dataset.action;
  if (action === "menu") {
    const open = $("#nav").classList.toggle("open");
    node.setAttribute("aria-expanded", String(open));
  }
  if (action === "region") {
    state.region = node.dataset.region;
    renderRegion();
    renderOffers();
    if (!$("#detail").hidden) route();
  }
  if (action === "brand") {
    state.brand = node.dataset.brand;
    renderCatalog();
    if (location.hash !== "#/catalog") location.hash = "#/catalog";
  }
  if (action === "open") {
    location.hash = `#/model/${node.dataset.brand}/${node.dataset.model}`;
  }
  if (action === "quote") {
    openQuote({
      brandId: node.dataset.brand,
      modelId: node.dataset.model,
      part: node.dataset.part,
      year: $("#q-year")?.value,
    });
  }
  if (action === "fav") {
    event.preventDefault();
    const key = favKey(node.dataset.brand, node.dataset.model);
    if (state.favs.has(key)) state.favs.delete(key);
    else state.favs.add(key);
    saveFavs();
    renderOffers();
    if (!$("#detail").hidden) route();
  }
  if (action === "slide") {
    state.slide = Number(node.dataset.slide);
    renderChrome();
  }
  if (action === "gal") {
    const photos = JSON.parse($("#detail").dataset.photos || "[]");
    const index = Number(node.dataset.index);
    $("#galImg").src = photos[index];
    $("#galCount").textContent = `${index + 1} / ${photos.length}`;
    document.querySelectorAll(".thumbs button").forEach((button, buttonIndex) => {
      button.classList.toggle("on", buttonIndex === index);
    });
  }
  if (action === "expand") {
    const hidden = $("#keys").querySelector("[data-extra]").hidden;
    $("#keys").querySelectorAll("[data-extra]").forEach((chip) => {
      chip.hidden = !hidden;
    });
    node.textContent = hidden ? "Свернуть" : "Развернуть все";
  }
  if (action === "privacy") openModal("privacyModal");
  if (action === "close") closeModals();
  if (action === "home") {
    location.hash = "#/offers";
  }
});

$("#q-brand").addEventListener("change", () => {
  fillModels(brandById($("#q-brand").value));
});
$("#q-model").addEventListener("change", () => {
  const brand = brandById($("#q-brand").value);
  const model = modelObj(modelById(brand, $("#q-model").value));
  fillYears(model, model.to);
});
$("#heroForm").addEventListener("submit", (event) => {
  event.preventDefault();
  openQuote({
    brandId: $("#q-brand").value,
    modelId: $("#q-model").value,
    year: $("#q-year").value,
    part: $("#q-part").value.trim(),
  });
});
$("#ctaForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuote(event.currentTarget);
});
$("#quoteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuote(event.currentTarget);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModals();
});
window.addEventListener("hashchange", route);

fillBrands();
renderChrome();
renderRegion();
renderOffers();
renderCatalog();
setLinks();
route();

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  setInterval(tickSlide, 7000);
}
