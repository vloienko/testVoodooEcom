let selectWrapper = document.querySelectorAll('.select-wrapper');
const selectTextFirst = 'Practice / Institution*';
const selectTextSecond = 'Medical Profession*';
console.log(selectWrapper);

selectWrapper.forEach((element, index) => {
   element.querySelector('select').remove()
   element.insertAdjacentHTML('afterbegin', `
      <div class="select contact__form-input">
         <div class="select__header">
            <span class="select__current"></span>
            <div class="select__icon">
               <img src="img/arrow.svg" alt="">
            </div>
         </div>
         <div class="select__body">
            <div class="select__item">Option 1</div>
            <div class="select__item">Option 2</div>
            <div class="select__item">Option 3</div>
            <div class="select__item">Option 4</div>
            <div class="select__item">Option 5</div>
         </div>
      </div>`
   );

   if (index === 0) {
      element.querySelector('.select__current').innerHTML = selectTextFirst;
   }
   if (index === 1) {
      element.querySelector('.select__current').innerHTML = selectTextSecond;
   }
});


let select = function () {
   let selectHeader = document.querySelectorAll('.select__header');
   let selectItem = document.querySelectorAll('.select__item');
      
   selectHeader.forEach( item => {
      item.addEventListener('click', selectToggle)
   });

   selectItem.forEach( item => {
      item.addEventListener('click', selectChoose)
   });

   function selectToggle() {
      this.parentElement.classList.toggle('is-active');

   }

   function selectChoose() {
      let text = this.innerText,
         select = this.closest('.select'),
         currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');
   }

};

select();