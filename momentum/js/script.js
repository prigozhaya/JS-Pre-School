const timer = document.getElementById("time");
const сalendar = document.getElementById("date");
const salutation = document.getElementById("greeting");
const greetings = document.querySelector(".greeting-container");
const options = { weekday: "long", month: "long", day: "numeric" };
const name = document.getElementById("name");
const city = document.getElementById("city");
const imageSource = document.getElementsByName('image-source');
const language = document.getElementById("language");
const modules = document.getElementById("modules");
const imgSource = document.getElementById("img-source");
const weatherLable = document.getElementById("weather-lable");
const timerLable = document.getElementById("timer-lable");
const playerLable = document.getElementById("player-lable");
const quotesLable = document.getElementById("quotes-lable");
const greetingsLable = document.getElementById("greetings-lable");
const сalendarLable = document.getElementById("сalendar-lable");
const GitHub = document.getElementById("GitHub");
const Unsplash = document.getElementById("Unsplash");
const Flickr = document.getElementById("Flickr");
const refreshImg = document.getElementById("refresh-img");
const tag = document.getElementById("tag");
const weatherModul = document.getElementById("weather-modul");
const timerModul = document.getElementById("timer-modul");
const playerModul = document.getElementById("player-modul");
const quotesModul = document.getElementById("quotes-modul");
const greetingsModul = document.getElementById("greetings-modul");
const сalendarModul = document.getElementById("сalendar-modul");
const allSettings = document.querySelector(".all-settings");
const weather = document.querySelector(".weather");
const input = document.querySelector(".name");
const error = document.querySelector(".weather-error");
const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const settingsImg = document.querySelector(".settings-img");
const quote = document.querySelector(".quote");
const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
const player = document.querySelector(".player");
const playPrev = document.querySelector(".play-prev");
const play = document.querySelector(".play");
const playNext = document.querySelector(".play-next");
const sound = document.querySelector(".sound");
const audio = document.querySelector(".audio");
const track = document.querySelector(".track");
const playItem = document.querySelectorAll(".play-item");
const plaprogressContaineryer = document.querySelector(".progress-container");
const volumePgressContaineryer = document.querySelector(".volume.progress-container");
const progressBar = document.querySelector(".progress-bar");
const volumeProgressBar = document.querySelector(".volume.progress-bar");
const playList = document.querySelector(".play-list");
const audioTime = document.querySelector(".audio-time");
const langCheckbox = document.querySelector(".lang-checkbox");
const date = new Date();
let translations={};
const translation={
  "en":{
      "morningGreeting":"Good morning",
      "afternoonGreeting":"Good afternoon",
      "eveningGreeting":"Good evening",
      "nightGreeting":"Good night",
      "placeholder": "[Enter name]",
      "error404_1": "Error! city",
      "error404_2": "not found",
      "error400": "Error! nothing entered",
      "wind": "Wind speed:",
      "wind_metric": "m/s",
      "humidity": "Humidity:",
      "city_placeholder": "[Enter city]",
      "music_play": "Now playing",
      "language": "Language",
      "modules": "Modules",
      "image_source": "Image source",
      "weather": "Weather",
      "time": "Time",
      "player": "Audio player",
      "quotes": "Quotes",
      "greetings": "Greetings",
      "calendar_day": "Сalendar day",
      "tag": " tag",
      "refresh": "Refresh"
      
  },
  "be":{
      "morningGreeting":"Добрай раніцы",
      "afternoonGreeting":"Добры дзень",
      "eveningGreeting":"Добры вечар",
      "nightGreeting":"Дабранач",
      "placeholder": "[Ваше імя]",
      "error404_1": "Памылка! Горад",
      "error404_2": "не знойдзены",
      "error400": "Памылка! нічога не ўведзена",
      "wind": "Хуткасць ветру:",
      "wind_metric": "м/с",
      "humidity": "Вільготнасць:",
      "city_placeholder": "[Увядзіце горад]",
      "music_play": "Iграе",
      "language": "Мова",
      "modules": "Модулі",
      "image_source": "Крыніца карцінак",
      "weather": "Надвор'е",
      "time": "Час",
      "player": "Аўдыё плэер",
      "quotes": "Цытаты",
      "greetings": "Прывітанне",
      "calendar_day": "Каляндарны дзень",
      "tag": " тэг",
      "refresh": "Абнавіць"
  }
};

const songs = [
  "Boom Bap Flick",
  "Deck The Halls",
  "Here it Comes",
  "Ice & Fire",
];
let songIndex = 0;
let isPlay = false;

//before unload-----------------------------------------------------------------------------------------------------------------------------------
if (localStorage.getItem("city") === null) {
  city.value = langCheckbox.checked === false?"Минск":"London";
  setLocalStorage();
}

langCheckbox.checked = localStorage.getItem("lang")==="false" ? false:true;
weatherModul.checked = localStorage.getItem("weatherModul")==="false" ? false:true;
timerModul.checked = localStorage.getItem("timerModul")==="false" ? false:true;
playerModul.checked = localStorage.getItem("playerModul")==="false" ? false:true;
quotesModul.checked = localStorage.getItem("quotesModul")==="false" ? false:true;
greetingsModul.checked = localStorage.getItem("greetingsModul")==="false" ? false:true;
сalendarModul.checked = localStorage.getItem("сalendarModul")==="false" ? false:true;


if(langCheckbox.checked === false){
  city.value = localStorage.getItem("city").length > 0 ? localStorage.getItem("city"): "Минск";
}else{
  city.value = localStorage.getItem("city").length > 0 ? localStorage.getItem("city"): "London";
}
name.value = localStorage.getItem("name");
tag.value = localStorage.getItem("tag");


//placeholder--------------------------------------------------------------------------------------------------------------------------------------
function setPlaceholder(){
let currentLang = langCheckbox.checked === false ? 'be' : 'en';
const condition = localStorage.getItem("name").length <= 0 ? translation[currentLang].placeholder: "";
input.placeholder = condition; 
}
setPlaceholder()

input.addEventListener("keydown", (e) => {
  setPlaceholder()
});

//local storage-------------------------------------------------------------------------------------------------------------------------------------
function setLocalStorage() {
  localStorage.setItem("name", name.value);
  localStorage.setItem("city", city.value);
  localStorage.setItem("tag", tag.value);
  localStorage.setItem("lang", langCheckbox.checked );
  localStorage.setItem("weatherModul", weatherModul.checked );
  localStorage.setItem("timerModul", timerModul.checked );
  localStorage.setItem("playerModul", playerModul.checked );
  localStorage.setItem("quotesModul", quotesModul.checked );
  localStorage.setItem("greetingsModul", greetingsModul.checked );
  localStorage.setItem("сalendarModul", сalendarModul.checked );
    for (var i = 0; i < imageSource.length; i++) {
    imageSource[i].onclick = function() {
    localStorage.setItem('Radio', this.value);
    }
}
}

window.addEventListener("beforeunload", setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  }
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  }
  if (localStorage.getItem("tag")) {
    tag.value = localStorage.getItem("tag");
  }
 
  langCheckbox.checked = localStorage.getItem("lang")==="false" ? false:true;
  weatherModul.checked = localStorage.getItem("weatherModul")==="false" ? false:true;
  timerModul.checked = localStorage.getItem("timerModul")==="false" ? false:true;
  playerModul.checked = localStorage.getItem("playerModul")==="false" ? false:true;
  quotesModul.checked = localStorage.getItem("quotesModul")==="false" ? false:true;
  greetingsModul.checked = localStorage.getItem("greetingsModul")==="false" ? false:true;
  сalendarModul.checked = localStorage.getItem("сalendarModul")==="false" ? false:true;
  if (localStorage.getItem('Radio')) {
    let Radio = localStorage.getItem('Radio');
    document.querySelector('input[name="image-source"][value="' + Radio + '"]').setAttribute('checked', 'checked');
  }
}

window.addEventListener("load", getLocalStorage);

//BG-------------------------------------------------------------------------------------------------------------------------------------------------
function dayTime(){
  let timeOfDay='';
  if (date.getHours() >= 6 && date.getHours() < 12) {
    timeOfDay='morning';
  } else if (date.getHours() >= 12 && date.getHours() < 18) {
    timeOfDay='afternoon';
  } else if (date.getHours() >= 18 && date.getHours() < 24) {
    timeOfDay='evening';
  } else if (date.getHours() >= 0 && date.getHours() < 6) {
    timeOfDay='night';
  }
  return timeOfDay;
}

function getRandomImage() {
  let int =
    Math.floor(Math.random() * (Math.floor(20) - Math.ceil(1) + 1)) +
    Math.ceil(1);
  return int <= 9 ? `0${int}` : `${int}`;
}

async function getUnsplashImage() {
  let timeOfDay = dayTime();
  let url='';
 
  
  if(tag.value === ''){
  url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=9y_hGxeuAkNE2Wm6iQuQCvdQGSFD-ZMySsF--ZZZtPM`;
  
}else{
   url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag.value}&client_id=9y_hGxeuAkNE2Wm6iQuQCvdQGSFD-ZMySsF--ZZZtPM`;
} 

if(Unsplash.checked === true){
  tag.disabled = false;
const res = await fetch(url);
  const data = await res.json();
  console.log(data.urls.regular)
  ChangeBG(data.urls.regular);
  }
 }

 async function getFlickrImage() {
  let timeOfDay = dayTime();
  let url='';
  let int = Math.floor(Math.random() * (Math.floor(99) - Math.ceil(1) + 1)) + Math.ceil(1);
  
 
  if(tag.value === ''){
  url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=50318e4e352a7eef1b0a606ec94740c0&tags=${timeOfDay}&extras=url_l&format=json&nojsoncallback=1`;
  
}else{
   url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=50318e4e352a7eef1b0a606ec94740c0&tags=${tag.value}&extras=url_l&format=json&nojsoncallback=1`;
} 

if(Flickr.checked === true){ 
  tag.disabled = false;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.photos.photo[int].url_l)
  ChangeBG(data.photos.photo[int].url_l);
  }
 }

 function getGitHubImage() {
  let timeOfDay = dayTime();
  let url = "";
  let img=getRandomImage();
  

  url = `https://raw.githubusercontent.com/prigozhaya/stage1-tasks/assets/images/${timeOfDay}/${img}.webp`;
  if(GitHub.checked === true){ 
  tag.disabled = true;
  ChangeBG(url)
  }

 }

function ChangeBG(url) {

  const bg = new Image();
  bg.src = url;
  bg.onload = () => {
    body.style.backgroundImage = `url(${url})`;
  };
}

window.addEventListener("load", (e) => {
  getFlickrImage();
  getUnsplashImage();
  getGitHubImage();
});

refreshImg.addEventListener("click", (e) => {
  getFlickrImage();
  getUnsplashImage();
  getGitHubImage();
});

GitHub.addEventListener("change", getGitHubImage);
Flickr.addEventListener("change", getFlickrImage);
Unsplash.addEventListener("change", getUnsplashImage);

//slider-------------------------------------------------------------------
function getSlideNext() {
  let nextSlide = "";
  let timeOfDay = dayTime();
  let slide = body.style.backgroundImage.toString().slice(-9).slice(0, 2);
  let url = "";

  if(GitHub.checked === true){
  nextSlide = +slide + 1 <= 9 ? `0${+slide + 1}` : `${+slide + 1}`;
  if (+slide + 1 > 20) {
    nextSlide = `01`;
  }

  url = `https://raw.githubusercontent.com/prigozhaya/stage1-tasks/assets/images/${timeOfDay}/${nextSlide}.webp`;
  
  ChangeBG(url)
  }
}
function getSlidePrev() {
  let nextSlide = "";
  let timeOfDay = dayTime();
  let slide = body.style.backgroundImage.toString().slice(-9).slice(0, 2);
  let url = "";

  if(GitHub.checked === true){
  nextSlide = +slide - 1 <= 9 ? `0${+slide - 1}` : `${+slide - 1}`;
  
  if (+slide - 1 < 1) {
    nextSlide = `20`;
  }

  url = `https://raw.githubusercontent.com/prigozhaya/stage1-tasks/assets/images/${timeOfDay}/${nextSlide}.webp`;
  
  ChangeBG(url)
}
}

slideNext.addEventListener("click", (e) => {
  getFlickrImage();
  getUnsplashImage();
  getSlideNext();
});

slidePrev.addEventListener("click", (e) => {
  getFlickrImage();
  getUnsplashImage();
  getSlidePrev();
});

//tr------------------------------------------------------------------------

function changeTranslation() {
currentLang = langCheckbox.checked === false ? 'be' : 'en';
let quotes = currentLang==='be'?"js/quotes.json":"js/quotes-en.json";

if(city.value==="Минск" || city.value==="London"){
  city.value = langCheckbox.checked === false?"Минск":"London";
}

language.textContent=translation[currentLang].language;
modules.textContent=translation[currentLang].modules;
imgSource.textContent=translation[currentLang].image_source;
weatherLable.textContent=translation[currentLang].weather;
timerLable.textContent=translation[currentLang].time;
playerLable.textContent=translation[currentLang].player;
quotesLable.textContent=translation[currentLang].quotes;
greetingsLable.textContent=translation[currentLang].greetings;
сalendarLable.textContent=translation[currentLang].calendar_day;
tag.placeholder = translation[currentLang].tag; 
refreshImg.value = translation[currentLang].refresh; 

  
setPlaceholder();
 getQuotes(quotes);
 showGreeting();
 showDate();
 setCityPlaceholder();
 loadMetaAudio(songs[songIndex]);
 getWeather()
 configureModules()
}
changeTranslation()

langCheckbox.addEventListener("change", changeTranslation);


//settings------------------------------------------------------------------------------------------------------------------------------------------------
function changeSettings(){
  settingsImg.classList.toggle("active");
  allSettings.classList.toggle("hide");
}
settingsImg.addEventListener("click", changeSettings);

//modules------------------------------------------------

function configureModules(){
  if(weatherModul.checked===true){
    weather.classList.remove("hide");
  }else{
    weather.classList.add("hide");
  }

  if(timerModul.checked===true){
    timer.classList.remove("hide");
  }else{
  timer.classList.add("hide");
  }

  if(playerModul.checked===true){
    player.classList.remove("hide");
  }else{
    player.classList.add("hide");
  }

  if(quotesModul.checked===true){
    quotes.classList.remove("hide");
  }else{
    quotes.classList.add("hide");
  }

  if(greetingsModul.checked===true){
    greetings.classList.remove("hide");
  }else{
    greetings.classList.add("hide");
  }

  if(сalendarModul.checked===true){
    сalendar.classList.remove("hide");
  }else{
    сalendar.classList.add("hide");
  }

}

weatherModul.addEventListener("change",configureModules);
timerModul.addEventListener("change",configureModules);
playerModul.addEventListener("change",configureModules);
quotesModul.addEventListener("change",configureModules);
greetingsModul.addEventListener("change",configureModules);
сalendarModul.addEventListener("change",configureModules);


//date---------------------------------------------------------------------------------------------------------------------------------------------
function showDate() {
  var timeNow = new Date();
  var dateNow = new Date();
  let currentLang = langCheckbox.checked === false ? 'be' : 'en';

  var today = dateNow.toLocaleDateString(currentLang, options);
  var now = timeNow.toLocaleTimeString("en-GB");
  let day = today.split(" ");
  let data = translate(
    day[0],
    dateNow.toLocaleDateString("be-BE", { day: "numeric" }),
    day[2]
  );

  timer.innerHTML = now;
  сalendar.innerHTML = currentLang==='be'?`${data}`:today;

  setTimeout(showDate, 1000);
}


//hello---------------------------------------------------------------------------------------------------------------------------------------------
function showGreeting() {
  var datehour = new Date();
  let greeting = "";
  currentLang = langCheckbox.checked === false ? 'be' : 'en';

  if (datehour.getHours() >= 6 && datehour.getHours() < 12) {
    greeting = translation[currentLang].morningGreeting;
  } else if (datehour.getHours() >= 12 && datehour.getHours() < 18) {
    greeting = translation[currentLang].afternoonGreeting;
  } else if (datehour.getHours() >= 18 && datehour.getHours() < 24) {
    greeting = translation[currentLang].eveningGreeting;
  } else if (datehour.getHours() >= 0 && datehour.getHours() < 6) {
    greeting = translation[currentLang].nightGreeting;
  }
  salutation.innerHTML = greeting;
  setTimeout(showGreeting, 1000);
}


//wather-------------------------------------------------------------------------------------------------------------------------------------------------
async function getWeather() {
  let currentLang = langCheckbox.checked === false ? 'be' : 'en';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("city")}&lang=${currentLang}&appid=a45bf86d52338536b6a7ee9114be016f&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  
  if (data.cod == 404) {
    error.textContent = `${translation[currentLang].error404_1} ${localStorage.getItem("city")} ${translation[currentLang].error404_2}`;
    weatherIcon.style.display = `none`;
    weatherDescription.textContent = ``;
    temperature.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;

  }else if(data.cod == 400){
    weatherIcon.style.display = `none`;
    error.textContent = `${translation[currentLang].error400}`;
    weatherDescription.textContent = ``;
    temperature.textContent = ``;
    wind.textContent = ``;
    humidity.textContent = ``;

  }else{
    error.textContent = ``;
    weatherIcon.style.display = `block`;
    weatherIcon.className = 'weather-icon owf'
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C ${data.weather[0].description}`;
    wind.textContent = `${translation[currentLang].wind} ${Math.floor(data.wind.speed)} ${translation[currentLang].wind_metric}`;
    humidity.textContent = `${translation[currentLang].humidity} ${data.main.humidity}%`;
  }
}

function setCityPlaceholder(){
  let currentLang = langCheckbox.checked === false ? 'be' : 'en';
  setLocalStorage();
  
  const cityCondition = localStorage.getItem("city").length > 0 ? "" : translation[currentLang].city_placeholder;
  city.placeholder = cityCondition;

  getWeather();
}

city.addEventListener("blur", (e) => {
  setCityPlaceholder()
});


//quotes-----------------------------------------------------------------------------------------------------------------------------------------------------------
async function getQuotes(quotes) {
  const res = await fetch(quotes);
  const data = await res.json();
  let i = Math.floor(Math.random() * (Math.floor(data.length - 1) + 1));

  if (data[i].text === quote.textContent) {
    quote.textContent = `${data[i + 1].text}`;
    author.textContent = `${data[i + 1].author}`;
  } else {
    quote.textContent = `${data[i].text}`;
    author.textContent = `${data[i].author}`;
  }
}

changeQuote.addEventListener("click", () => {
currentLang = langCheckbox.checked === false ? 'be' : 'en';
let quotes = langCheckbox.checked === false?"js/quotes.json":"js/quotes-en.json";
getQuotes(quotes);
});

//audiopleer--------------------------------------------------------------------------------------------------------------------------------------------



function loadMetaAudio(song) {
  let currentLang = langCheckbox.checked === false ? 'be' : 'en';
  
  track.innerHTML = `${translation[currentLang].music_play}: ${song}`;
  audio.src = `assets/audio/${song}.mp3`;
}
loadMetaAudio(songs[songIndex]);

function playAudio() {
  if (isPlay === false) {
    audio.play();
    isPlay = true;
    play.classList.add("pause");
  } else {
    audio.pause();
    isPlay = false;
    play.classList.remove("pause");
  }
}

function playNextAudio() {
  playItem[songIndex].classList.remove("item-active");

  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  isPlay = !isPlay;
  loadMetaAudio(songs[songIndex]);
  playAudio();
  playItem[songIndex].classList.add("item-active");
}
function playPrevAudio() {
  playItem[songIndex].classList.remove("item-active");

  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }

  isPlay = !isPlay;
  loadMetaAudio(songs[songIndex]);
  playAudio();
  playItem[songIndex].classList.add("item-active");
}

play.addEventListener("click", () => {
  playAudio();
});

playNext.addEventListener("click", () => {
  playNextAudio();
});

playPrev.addEventListener("click", () => {
  playPrevAudio();
});

//autoswitch----------------------------------------------------
function switchTrack(e) {
  const { duration, currentTime } = e.srcElement;
  if (currentTime === duration) {
    playNextAudio();
  }
}

audio.addEventListener("timeupdate", switchTrack);

//progress bar----------------------------------------
function updateProgressBar(e) {
  const { duration, currentTime } = e.srcElement;
  const progress = (currentTime / duration) * 100;
  let min = `${Math.trunc(currentTime / 60)}`;
  let sec =
    Math.trunc(currentTime) < 10
      ? `0${Math.floor(currentTime)}`
      : `${Math.floor(currentTime)}`;
  let minDuration = `${Math.trunc(duration / 60)}`;
  let secDuration =
    Math.trunc(duration) < 10
      ? `0${Math.floor(duration)}`
      : `${Math.floor(duration)}`;

  if (Math.trunc(currentTime) > 59) {
    sec =
      currentTime - Math.trunc(currentTime / 60) * 60 < 10
        ? `0${Math.trunc(currentTime - Math.trunc(currentTime / 60) * 60)}`
        : `${Math.trunc(currentTime - Math.trunc(currentTime / 60) * 60)}`;
  }

  if (Math.trunc(duration) > 59) {
    secDuration =
      duration - Math.trunc(duration / 60) * 60 < 10
        ? `0${Math.trunc(duration - Math.trunc(duration / 60) * 60)}`
        : `${Math.trunc(duration - Math.trunc(duration / 60) * 60)}`;
  }

  if (secDuration === "NaN") {
    secDuration = "00";
    minDuration = "0";
  }

  progressBar.style.width = `${progress}%`;
  audioTime.innerHTML = `${min}:${sec} / ${minDuration}:${secDuration}`;
}

audio.addEventListener("timeupdate", updateProgressBar);

function rewindTrack(e) {
  const barWidth = this.clientWidth;
  const barClickX = e.offsetX;
  const audioDuration = audio.duration;
  audio.currentTime = (barClickX / barWidth) * audioDuration;
}

plaprogressContaineryer.addEventListener("click", rewindTrack);

//volume---------------------------------------------------------
audio.volume = 0.5;
volumeProgressBar.style.width = `50%`;
function controlVolume(e) {
  const barWidth = this.clientWidth;
  const barClickX = e.offsetX;
  const audioVolume = audio.volume;
  audio.volume = barClickX / barWidth;
  volumeProgressBar.style.width = `${(barClickX / barWidth) * 100}%`;
}

volumePgressContaineryer.addEventListener("click", controlVolume);

function muteSound() {
  if (audio.volume > 0) {
    audio.volume = 0;
    sound.style.backgroundImage = `url("../assets/svg/charm_sound-mute.svg")`;
  } else {
    let barWidth = volumeProgressBar.clientWidth;
    let containeryerWidth = volumePgressContaineryer.clientWidth;
    audio.volume = barWidth / containeryerWidth;
    sound.style.backgroundImage = `url("../assets/svg/charm_sound-up.svg")`;
  }
}

sound.addEventListener("click", muteSound);

//select track---------------------------------

for (let item of playItem) {
  item.addEventListener("click", function () {
    if (item.classList.contains("item-active")) {
      item.classList.toggle("pause-item");
      console.log();
      playAudio();
    } else {
      for (let i of playItem) {
        i.classList.remove("item-active");
        sound.style.backgroundImage = `url("../assets/svg/charm_sound-up.svg")`;
      }
      this.classList.add("item-active");

      for (let i = 0; i < playItem.length; i++) {
        if (playItem[i].classList.contains("item-active")) {
          loadMetaAudio(songs[i]);
          audio.play();
          isPlay = true;
          play.classList.add("pause");
          songIndex = i;
        }
      }
    }
  });
}
//translate--------------------------------------------------------------------------------------------------------------------------------------------
function translate(weekday, day, month) {
  switch (weekday) {
    case "понедельник,":
      weekday = "Панядзелак";
      break;
    case "вторник,":
      weekday = "Аўторак";
      break;
    case "среда,":
      weekday = "Серада";
      break;
    case "четверг,":
      weekday = "Чацвер";
      break;
    case "пятница,":
      weekday = "Пятніца";
      break;
    case "суббота,":
      weekday = "Субота";
      break;
    case "воскресенье,":
      weekday = "Нядзеля";
      break;
  }
  switch (month) {
    case "января":
      month = "Студзеня";

      break;
    case "февраля":
      month = "Лютага";
      break;
    case "марта":
      month = "Сакавіка";
      break;
    case "апреля":
      month = "Красавіка";
      break;
    case "мая":
      month = "Мая";
      break;
    case "июня":
      month = "Чэрвеня";
      break;
    case "июля":
      month = "Ліпеня";
      break;
    case "августа":
      month = "Жніўня";
      break;
    case "сентября":
      month = "Верасеня";
      break;
    case "октября":
      month = "Кастрычніка";
      break;
    case "ноября":
      month = "Лістапада";
      break;
    case "декабря":
      month = "Снежаня";
      break;
  }
  return `${weekday}, ${day} ${month}`;
}

console.log("Если город установлен по умолчанию при переключении языка он тоже меняеется на город по умолчанию для другого языка")