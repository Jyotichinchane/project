let vegetablesElement=document.querySelector('.Vegitables');

let innerHTML='';
photos.forEach(item=>{
  innerHTML+=`
  <div class="photos">
  <div>
  <img class="item_image" src="${item.item_imge}" alt="" height="280px" width="280px" >
  <div class="rating">
      ${item.rating.stars}⭐|${item.rating.noOfReviews}
  </div>
  <div class="item_name">${item.item_name} </div>
  <div class="company_name">${item.company_name}</div>
  <div class="price">
      <span class="current_price">Rs ${item.curent_price}</span>
      <span class="Original_price">Rs ${item.original_price}</span>
      <span class="Discount">(${item.discount}% OFF)</span>
  </div>
  <button class="add_cart">Add to cart</button>
  </div>


  <div>
  <img src="C:\Users\LENOVO\Desktop\nursaryyyy\images\brinjal.png" alt="" height="280px" width="280px">
  <div class="rating">
      4.5⭐|1.4k
  </div>
  <div class="item_name">Chilli </div>
  <div class="company_name">megha</div>
  <div class="price">
      <span class="current_price">Rs 300</span>
      <span class="Original_price">Rs 500</span>
      <span class="Discount">(40% OFF)</span>
  </div>
  <button class="add_cart">Add to cart</button>
  </div>


  <div>
  <img src="C:\Users\LENOVO\Desktop\nursaryyyy\images\flower1.png" alt="" height="280px" width="280px">
  <div class="rating">
      4.5⭐|1.4k
  </div>
  <div class="item_name">Chilli </div>
  <div class="company_name">megha</div>
  <div class="price">
      <span class="current_price">Rs 300</span>
      <span class="Original_price">Rs 500</span>
      <span class="Discount">(40% OFF)</span>
  </div>
  <button class="add_cart">Add to cart</button>
  </div>


  <div>
  <img src="C:\Users\LENOVO\Desktop\nursaryyyy\images\tomato.png" alt="" height="280px" width="280px">
  <div class="rating">
      4.5⭐|1.4k
  </div>
  <div class="item_name">Chilli </div>
  <div class="company_name">megha</div>
  <div class="price">
      <span class="current_price">Rs 300</span>
      <span class="Original_price">Rs 500</span>
      <span class="Discount">(40% OFF)</span>
  </div>
  <button class="add_cart">Add to cart</button>
  </div>
</div>`
});


vegetablesElement.innerHTML=innerHTML;