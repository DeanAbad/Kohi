var special_events_list = document.getElementById("special_events_list");
var time_format_toggle_button = document.getElementById("time_format_toggle_button");
var special_events = [];
var special_event_string = '';
var time_format = false;

// Initialize Datepicker
document.addEventListener('DOMContentLoaded', function() {
    // Note: JavaScript counts months from 0 to 11.
    let event_dates = [
        new Date(2021, 11, 25).toDateString(),
        new Date(2021, 0, 1).toDateString()
    ];
    // Note: Other options were left as their default is just fine as they are.
    let date_options = {
        autoClose: false,
        format: 'mm/dd/yyyy',
        showDaysInNextAndPreviousMonths: true,
        showClearBtn: true,
        events: event_dates,

        onSelect() {
            if (date_options.events.includes(this.date.toDateString())) {
                if(this.date.toDateString() == 'Sat Dec 25 2021') {
                    special_events.push("Christmas Eve");

                    special_events.forEach(function(an_event) {
                        special_event_string = '<li><a href="#">' + an_event + '</a></li>';
                    });
                } else if(this.date.toDateString() == 'Sat Jan 1 2021') {
                    special_events.push("New Year's Eve");

                    special_events.forEach(function(an_event) {
                        special_event_string = '<li><a href="#">' + an_event + '</a></li>';
                    });
                }

                document.querySelector("#special_events_list").innerHTML = special_event_string;
            } else {
                document.querySelector("#special_events_list").innerHTML = '<li><a href="#">There are no events.</a></li>';
            }
        },

        parse() {}
    };
    let date_element = document.querySelector("#date_input_picker_field");
    M.Datepicker.init(date_element, date_options);
});

// Initialize Dropdown
document.addEventListener('DOMContentLoaded', function() {
    var events_info_element = document.querySelector("#special_events_dropdown");
    let events_list_options = {
        coverTrigger: false,
    };
    M.Dropdown.init(events_info_element, events_list_options);
})

// Initialize Timepicker
document.addEventListener('DOMContentLoaded', function() {
    var time_options = {
        showClearBtn: true,
        twelveHour: time_format,
    };
    let time_element = document.querySelector("#time_input_picker_field");
    M.Timepicker.init(time_element, time_options);
});

document.addEventListener('DOMContentLoaded', toggle_time_format);

time_format_toggle_button.addEventListener('click', toggle_time_format);

function toggle_time_format() {
    if(time_format == false) {
        time_format = true;
        var time_options = {
            twelveHour: time_format
        };
        let time_element = document.querySelector("#time_input_picker_field");
        M.Timepicker.init(time_element, time_options);
        time_format_toggle_button.innerHTML = '12-Hour Format';
    } else {
        time_format = false;
        var time_options = {
            twelveHour: time_format
        };
        let time_element = document.querySelector("#time_input_picker_field");
        M.Timepicker.init(time_element, time_options);
        time_format_toggle_button.innerHTML = '24-Hour Format';
    }
}