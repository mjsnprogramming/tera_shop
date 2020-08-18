


const ready = () => {

    const remove_button = document.querySelector('.remove_button');

    for (let i = 0; i < remove_button.length; i++) {
        let button = remove_button[i];
        button.addEventListener('click', remove_item);
    }

    let count_input = document.querySelector('.counter');
    for (let i = 0; i < count_input.length; i++) {
        let input = count_input[i];
        input.addEventListener('change', count_changed);
    }

    let add_button = document.querySelector('.submit');
    for (let i = 0; i < add_button; i++) {
        let button = add_button[i];
        button.addEventListener('click', addToCartClicked());
    }

    const purchased = document.querySelector('.purchase').addEventListener('click', purchaseClicked);



};

    const purchaseClicked = () => {
      let cart_items = document.querySelector('.cart-item');
      while(cart_items.hasChildNodes()) {
          cart_items.removeChild(cart_items.firstChild);
      }

      update_total();
    };

    const count_changed = (event) => {
        let input = event.target;

        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        update_total();
        };




const remove_item = (event) => {

        let button_clicked = event.target;
        button_clicked.parentElement.parentElement.remove();
        update_total();
};

const update_total = () => {
     let item_container = document.querySelector('#main_grid')[0];
     let cart_items = item_container.querySelector('.pictures');
     let total = 0;
     for (let i = 0; i < cart_items; i++) {
         let cart_item = cart_items[0];
         let price_element = cart_item.querySelector('.price');
         let count_element = cart_item.querySelector('.count')[0];
         let price = price_element.innerText.replace('$','');
         let count = count_element.value;

         total = total + (price * count);
     }
     total = Math.round(total * 100) / 100;
        document.querySelector('.cart_total_price')[0].innerText = '$' + total;
};


const addToCartClicked = (event) => {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let name = shopItem.querySelector('.name')[0].innerText;
    let price = shopItem.querySelector('.price')[0].innerText;
    let image = shopItem.querySelector('.image')[0].src;
    addItemToCart(name, price, image);
    update_total();
};

const addItemToCart = (name, price, image) => {

  let cartItems = document.querySelector('.cart-item')[0];
  let cartItemNames = cartItems.querySelector('.item-info');

  for (let i = 0; i < cartItemNames.length; i++) {
      if ( cartItemNames[i].innerText === name) {
          alert('This item is already added to the cart');
          return;
      }
  }

};

