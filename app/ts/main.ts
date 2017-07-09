import { DataClock } from "./data/data-clocks";
import jQuery = require('jquery');
import { analogClockTick } from "./clock.function";

let clockContext: DataClock = new DataClock();

let time = clockContext.context.clocksArr[0].newDate;

var source = $("#clock-template").html();
var template = Handlebars.compile(source);


let context = clockContext.context;
var html = template(context);

document.getElementById('listClocks').innerHTML = html;

analogClockTick();


