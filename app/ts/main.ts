import { DataClock } from "./data/data-clocks";
import jQuery = require('jquery');
import { analogClockTick } from "./clock.function";

let clockContext: DataClock = new DataClock();

let time = clockContext.context.clocksArr[0].newDate;

let source = $("#clock-template").html();
let template = Handlebars.compile(source);


let context = clockContext.context;
let html = template(context);

document.getElementById('listClocks').innerHTML = html;

analogClockTick();


