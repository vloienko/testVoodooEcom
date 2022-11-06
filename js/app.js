let selectWrapper = document.querySelectorAll('.select-wrapper');
const selectTextFirst = 'Practice / Institution*';
const selectTextSecond = 'Medical Profession*';
const selectTextThird = 'Type of Inquiry*';
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
   if (index === 2) {
      element.querySelector('.select__current').innerHTML = selectTextThird;
   }
});


let select = function () {
   let selectHeader = document.querySelectorAll('.select__header');
   let selectItem = document.querySelectorAll('.select__item');

   selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
   });

   selectItem.forEach(item => {
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


function initMap() {
   var pos = { lat: 43.452410, lng: -80.512278 };
   var opt = {
      center: pos,
      zoom: 15,
      disableDefaultUI: true,
      styles: [
         {
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#ebe3cd"
               }
            ]
         },
         {
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#523735"
               }
            ]
         },
         {
            "elementType": "labels.text.stroke",
            "stylers": [
               {
                  "color": "#f5f1e6"
               }
            ]
         },
         {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
               {
                  "color": "#c9b2a6"
               }
            ]
         },
         {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.stroke",
            "stylers": [
               {
                  "color": "#dcd2be"
               }
            ]
         },
         {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#ae9e90"
               }
            ]
         },
         {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#dfd2ae"
               }
            ]
         },
         {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#dfd2ae"
               }
            ]
         },
         {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#93817c"
               }
            ]
         },
         {
            "featureType": "poi.business",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
               {
                  "color": "#a5b076"
               }
            ]
         },
         {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#447530"
               }
            ]
         },
         {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#f5f1e6"
               }
            ]
         },
         {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#fdfcf8"
               }
            ]
         },
         {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#f8c967"
               }
            ]
         },
         {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
               {
                  "color": "#e9bc62"
               }
            ]
         },
         {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#e98d58"
               }
            ]
         },
         {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry.stroke",
            "stylers": [
               {
                  "color": "#db8555"
               }
            ]
         },
         {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#806b63"
               }
            ]
         },
         {
            "featureType": "transit",
            "stylers": [
               {
                  "visibility": "off"
               }
            ]
         },
         {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#dfd2ae"
               }
            ]
         },
         {
            "featureType": "transit.line",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#8f7d77"
               }
            ]
         },
         {
            "featureType": "transit.line",
            "elementType": "labels.text.stroke",
            "stylers": [
               {
                  "color": "#ebe3cd"
               }
            ]
         },
         {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
               {
                  "color": "#dfd2ae"
               }
            ]
         },
         {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
               {
                  "color": "#b9d3c2"
               }
            ]
         },
         {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
               {
                  "color": "#92998d"
               }
            ]
         }
      ]
   };

   var map = new google.maps.Map(document.getElementById("map"), opt);

   var marker = new google.maps.Marker({
      position: pos,
      map: map,
      icon: './img/location.svg',
   });

   var info = new google.maps.InfoWindow({
      content:
         ` <div class="contact-maps">
            <h6 class="contact-maps__title">Voodoo</h6>
            <p class="contact-maps__adress">137 Glasgow St., Unit 115 <br> Kitchener, ON N2G 4X8 <br> Ukraine</p>
            <div class="contact-maps__item">
               <a class="contact-maps__link" href="tel:18004809597">
                  <img src="./img/phone.svg" alt="">
                  <p>1-800-480-9597</p>
               </a>
               <a class="contact-maps__link" href="mailto:info@voodoo.com">
                  <img src="./img/mail.svg" alt="">
                  <p>info@voodoo.com</p>
               </a>
            </div>
         </div>
      `
   });

   marker.addListener("click", function () {
      info.open(map, marker);
   });
}