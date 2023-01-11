import { Pizza } from './pizza.js';

window.addEventListener("DOMContentLoaded", function(){
    
    let Pizza1 = new Pizza("Veggie", "tomates", "fromage", "legumes");
    let Pizza2 = new Pizza("Meattie", "tomates", "fromage", "viande");
    let Pizza3 = new Pizza ("Fishie", "tomates", "fromage", "poisson");
     console.log(Pizza1);
     console.log(Pizza2);
     console.log(Pizza3);
});
