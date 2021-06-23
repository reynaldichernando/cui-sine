import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const build_restaurant_item = (name, description, picture, city, rating) => {
    let item_template = document.getElementById('restaurant-item-template')
    let restaurant_item = item_template.cloneNode(true);

    restaurant_item.removeAttribute('id');
    restaurant_item.className = 'restaurant-item';

    restaurant_item.querySelector('.title a').innerHTML = name;
    restaurant_item.querySelector('.description').innerHTML = description.substr(0, 200)+'...';
    restaurant_item.querySelector('.picture').src = picture;
    restaurant_item.querySelector('.picture').alt = name;
    restaurant_item.querySelector('.city').innerHTML = city;
    restaurant_item.querySelector('.rating').innerHTML = rating;

    return restaurant_item
}

window.addEventListener('load', () => {
    const json_data = require('./../DATA.json');
    let restaurants = json_data.restaurants;

    restaurants.forEach(r => {
        let restaurant_list = document.querySelector('#restaurant-list');
        restaurant_list.append(build_restaurant_item(r.name, r.description, r.pictureId, r.city, r.rating))
    });

    document.querySelector('#year').innerHTML = new Date().getUTCFullYear();

    const hamburgerButtonElement = document.querySelector("#hamburger");
    const multiplicationButtonElement = document.querySelector('#multiplication');
    const overlayElement = document.querySelector('#overlay');
    const drawerElement = document.querySelector('nav');

    hamburgerButtonElement.addEventListener("click", event => {
        drawerElement.classList.toggle("open");
        overlayElement.classList.toggle('open');
        event.stopPropagation();
    });
    
    overlayElement.addEventListener('click', event => {
        overlayElement.classList.toggle('open');
        drawerElement.classList.toggle("open");
        event.stopPropagation();
    })

    multiplicationButtonElement.addEventListener('click', event => {
        overlayElement.classList.toggle('open');
        drawerElement.classList.toggle("open");
        event.stopPropagation();
    })

})