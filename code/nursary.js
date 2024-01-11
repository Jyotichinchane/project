

let bagItems=[];
onLoad();
function onLoad(){
    let bagItemsstr=localStorage.getItem('bagItems');
    bagItems=bagItemsstr ? JSON.parse(bagItemsstr):[];
    displayItemOnHomePage();
    displayBagcount();
}
function addToBag(itemId){
   bagItems.push(itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   displayBagcount();
}

function displayBagcount(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
        bagItemCountElement.style.visibility='visible';
        bagItemCountElement.innerText=bagItems.length;
    }else{
        bagItemCountElement.style.visibility='hidden';
    }
}

function displayItemOnHomePage(){
let itemscontainersElement=document.querySelector('.items-containers');
if(!itemscontainersElement){
    return;
}

let innerHTML='';
items.forEach(item => {
innerHTML +=`
<div class="item-containers">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars}⭐ | ${item.rating.noOfReviews} 
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">${item.current_price}</span>
        <span class="original price">${item.original_price}</span>
        <span class="discount">${item.discount_percentage}% OFF</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
</div>`
});
itemscontainersElement.innerHTML=innerHTML;
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



