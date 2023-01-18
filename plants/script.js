/*dropdown----------------*/
document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
    document.querySelector('.arrow').classList.toggle('opened')
    if (this.querySelector('.select').classList.contains('open')){
      document.querySelector('.city').classList.remove('city-show');
    }
})

for (let option of document.querySelectorAll(".custom-option")) {

    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
          document.querySelector('.select-wrapper').classList.add('open')
          document.querySelector('.contacts img').classList.add('open')
          document.querySelector('.placeholder').classList.add('selected')
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
            this.closest('.select').querySelector('.select-trigger').classList.add('selected-city');
            document.querySelector('.arrow').classList.add('opened');
          
            var value =this.dataset.value;
            switch (value) {
              case 'Canandaigua':
                document.getElementById('city').textContent = 'Canandaigua, NY';
                document.getElementById('phone').textContent = '+1	585	393 0001';
                document.getElementById('address').textContent = '151 Charlotte Street';
                break;
              case 'NY':
                document.getElementById('city').textContent = 'New York City';
                document.getElementById('phone').textContent = '+1	212	456 0002';
                document.getElementById('address').textContent = '9 East 91st Street';
                break;
              case 'Yonkers':
                document.getElementById('city').textContent = 'Yonkers, NY';
                document.getElementById('phone').textContent = '+1	914	678 0003';
                document.getElementById('address').textContent = '511 Warburton Ave';
                break;
              case 'Sherrill':
                document.getElementById('city').textContent = 'Sherrill, NY';
                document.getElementById('phone').textContent = '+1	315	908 0004';
                document.getElementById('address').textContent = '14 WEST Noyes BLVD';
                break;
              default:
                
            }
        }
        document.querySelector('.city').classList.add('city-show');
    })

}

var options=document.querySelectorAll(".custom-option")
for (let i of options) {
  i.addEventListener('mouseover', function() {
  i.nextElementSibling.classList.add('active-hr');})

  i.addEventListener('mouseout', function() {
  i.nextElementSibling.classList.remove('active-hr');})
}


/*burger-menu--------------------------*/
let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('nav');
let menuPoints = document.querySelector('ul.nav');
let overlay=document.getElementById('blanket')
let closeBtn=document.querySelector('.close-icon img');
let liMenu=document.querySelectorAll('.menu-link');

function Overlay() {
  	menu.classList.toggle('active');
	menuPoints.classList.toggle('active');
	menuBtn.classList.toggle('active');
	overlay.classList.toggle('active');
}
overlay.addEventListener('click', function(){
  Overlay()
})
menuBtn.addEventListener('click', function(){
  Overlay()
})
closeBtn.addEventListener('click', function(){
  Overlay()
})
for(let k of liMenu){
k.addEventListener('click', function(){
  Overlay()
})}

console.log(`75/75
Вёрстка соответствует макету. Ширина экрана 768px +24
Вёрстка соответствует макету. Ширина экрана 380px +24
Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15
нет полосы прокрутки при ширине страницы от 1440рх до 380px +7
нет полосы прокрутки при ширине страницы от 380px до 320рх +8
На ширине экрана 380рх и меньше реализовано адаптивное меню +22
при ширине страницы 380рх панель навигации скрывается, появляется бургер-иконка +2
при нажатии на бургер-иконку плавно появляется адаптивное меню +4
адаптивное меню соответствует цветовой схеме макета +4
при нажатии на крестик адаптивное меню плавно скрывается уезжая за экран +4
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +4
при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна +4`)