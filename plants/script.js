/*dropdown----------------*/
document.querySelector('.select-wrapper').addEventListener('click', function() {
    this.querySelector('.select').classList.toggle('open');
    if (this.querySelector('.select').classList.contains('open')){
      document.querySelector('.city').classList.remove('city-show');
    }
})
for (let option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.select').querySelector('.select-trigger span').textContent = this.textContent;
            this.closest('.select').querySelector('.select-trigger').classList.add('selected-city');
            

            var value =this.dataset.value;
            switch (value) {
              case 'Canandaigua':
                document.getElementById('city').textContent = 'Canandaigua, NY';
                document.getElementById('phone').textContent = '+1	585	393 0001';
                document.getElementById('adress').textContent = '151 Charlotte Street';
                break;
              case 'NY':
                document.getElementById('city').textContent = 'New York City';
                document.getElementById('phone').textContent = '+1	212	456 0002';
                document.getElementById('adress').textContent = '9 East 91st Street';
                break;
              case 'Yonkers':
                document.getElementById('city').textContent = 'Yonkers, NY';
                document.getElementById('phone').textContent = '+1	914	678 0003';
                document.getElementById('adress').textContent = '511 Warburton Ave';
                break;
              case 'Sherrill':
                document.getElementById('city').textContent = 'Sherrill, NY';
                document.getElementById('phone').textContent = '+1	315	908 0004';
                document.getElementById('adress').textContent = '14 WEST Noyes BLVD';
                break;
              default:
                
            }
        }
        document.querySelector('.city').classList.add('city-show');
    })
    option.addEventListener('mouseover', function() {
      this.nextSibling.classList.add('active-hr');})

    option.addEventListener('mouseout', function() {
      this.nextSibling.classList.remove('active-hr');
     
    })
}

console.log(`Task: https://github.com/rolling-scopes-school/tasks/blob/master/tasks/plants/plants-part1.md
2. Done 09.01.2023 / deadline 09.01.2023
3. Score: 220 / 300
- Вёрстка валидная (10/10)
- Вёрстка семантическая (2/20)
- Вёрстка соответствует макету(42/48)
-Требования к css (12/12)
- Интерактивность, реализуемая через css (18/20)`);

