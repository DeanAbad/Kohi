document.addEventListener('DOMContentLoaded', function() {
    var dropdown_menu_element = document.querySelector("#dropdown_button");
    var dropdown_options = {
        coverTrigger: false,
    }
    M.Dropdown.init(dropdown_menu_element, dropdown_options);
});

// Initialize Sidenav with JQuery
$(document).ready(function() {
    $('#mobile_form').sidenav();
});