// Once the page is loaded, hide the preloader and lower its z-index
document.addEventListener('DOMContentLoaded', function() {
    const preloader_element = document.getElementById("preloader_container");
    preloader_element.style.opacity = 0;
    preloader_element.style.zIndex = 0;
});

// Set indicators to false so that pagination is relevant
// Note: onCycleTo option returns current item in carousel
document.addEventListener('DOMContentLoaded', function() {
    var carousel_element = document.querySelector("#carousel_container");
    var carousel_options = {
        fullWidth: true
    };
    M.Carousel.init(carousel_element, carousel_options);
});

function next_item() {
    var carousel_element = document.querySelector("#carousel_container");
    var move_next = M.Carousel.getInstance(carousel_element);
    move_next.next(1);
    set_page_indicator_active(0);
}

function prev_item() {
    var carousel_element = document.querySelector("#carousel_container");
    var move_prev = M.Carousel.getInstance(carousel_element);
    move_prev.prev(1);
    set_page_indicator_active(1);
}

function set_item(this_item) {
    var carousel_element = document.querySelector("#carousel_container");
    var set_move = M.Carousel.getInstance(carousel_element);
    set_move.set(this_item);
    set_button_active(this_item);
}

// Carousel + Paginator Active Page Indicator - START
var counter = 1;

function set_page_indicator_active(this_item) {
    switch(this_item) {
        case 0:
            counter++;
            if(counter > 4) {
                counter = 1;
            }
            set_button_active(counter);
            break;
        case 1:
            counter--;
            
            if(counter < 1) {
                counter = 4;
            }
            set_button_active(counter);
            break;
        default:
            break;
    }
}

function set_button_active(this_active_button) {
    var item_1 = document.getElementById("item_1");
    var item_2 = document.getElementById("item_2");
    var item_3 = document.getElementById("item_3");
    var item_4 = document.getElementById("item_4");

    switch(this_active_button) {
        case 1:
            item_1.classList.add("active");

            item_2.classList.remove("active");
            item_3.classList.remove("active");
            item_4.classList.remove("active");
            break;
        case 2:
            item_2.classList.add("active");

            item_1.classList.remove("active");
            item_3.classList.remove("active");
            item_4.classList.remove("active");
            break;
        case 3:
            item_3.classList.add("active");

            item_1.classList.remove("active");
            item_2.classList.remove("active");
            item_4.classList.remove("active");
            break;
        case 4:
            item_4.classList.add("active");

            item_1.classList.remove("active");
            item_2.classList.remove("active");
            item_3.classList.remove("active");
            break;
        default:
            break;
    }
}
// Carousel + Paginator Active Page Indicator - END