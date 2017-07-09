import { DataClock } from "./data/data-clocks";
import { HoursOfClock } from "./partials/hours";
import { MinutesOfClock } from "./partials/minutes";
import { SecondsOfClock } from "./partials/seconds";

var d3 = require("d3");

let clockContext: DataClock = new DataClock();
let context = clockContext.context;
console.log(clockContext);

/**
 * Calculate, settings, draw svg 
 */
export function analogClockTick() {
    var w = 150
    var h = 150
    var cx = w / 2
    var cy = h / 2
    var margin = 4
    var r = w / 2 - margin

    var classId = 0;
    
    /**
     * Pass array of data
     */
    context.clocksArr.forEach(function (val, i: number) {
        if (classId <= i) {
            classId = i;
        } else {
            return;
        }
        console.log(classId);

        var svg = d3.selectAll('.chart_' + classId).append("svg")
            .attr("class", "clock")
            .attr("width", w)
            .attr("height", h);

        var circle = svg.append("circle")
            .attr("class", "inner_circle")
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("r", 5);

        makeClockFace();

        /**
         * Create hands from dataset
         */
        svg.selectAll("line.hand")
            .data(getTimeOfDay())
            .enter()
            .append("line")
            .attr("class", function (d: any) { return d[0] + " hand" })
            .attr("x1", cx)
            .attr("y1", function (d: any) { return cy + handBackLength(d) })
            .attr("x2", cx)
            .attr("y2", function (d: any) { return r - handLength(d) })
            .attr("transform", rotationTransform);



        /**
         * Update hand positions once per second
         */
        setInterval(updateHands, 1000);

        /**
         * Teak settings
         */
        function makeClockFace() {
            var hourTickLength = Math.round(r * 0.2)
            var minuteTickLength = Math.round(r * 0.075)
            for (var i = 0; i < 60; ++i) {
                var tickLength, tickClass
                if ((i % 5) == 0) {
                    tickLength = hourTickLength
                    tickClass = "hourtick"
                }
                else {
                    tickLength = minuteTickLength
                    tickClass = "minutetick"
                }
                svg.append("line")
                    .attr("class", tickClass + " face")
                    .attr("x1", cx)
                    .attr("y1", margin)
                    .attr("x2", cx)
                    .attr("y2", margin + tickLength)
                    .attr("transform", "rotate(" + i * 6 + "," + cx + "," + cy + ")")


            }
        };

        /**
         * Get data from DataClock for update
         */
        function getTimeOfDay() {

            let clockContext: DataClock = new DataClock();

            var hr = +(new HoursOfClock(clockContext.context.clocksArr[i].newDate).getTime());
            var min = +(new MinutesOfClock(clockContext.context.clocksArr[i].newDate).getTime());
            var sec = +(new SecondsOfClock(clockContext.context.clocksArr[i].newDate).getTime());
            return [
                ["hour", hr],
                ["minute", min],
                ["second", sec]
            ]
        };

        /**
         * Setting arrows and figures
         */
        function handLength(d: any) {
            if (d[0] == "hour")
                return Math.round(0.65 * r)
            else
                return Math.round(0.90 * r)
        };

        function handBackLength(d: any) {
            if (d[0] == "second")
                return Math.round(0.18 * r)
            else
                return Math.round(0.10 * r)
        };

        function rotationTransform(d: any) {
            var angle
            if (d[0] == "hour")
                angle = (d[1] % 12) * 30
            else
                angle = d[1] * 6
            return "rotate(" + angle + "," + cx + "," + cy + ")"
        };

        function updateHands() {
            svg.selectAll("line.hand")
                .data(getTimeOfDay())
                .transition()
                .attr("transform", rotationTransform)
        };

        var circle = svg.append("circle")
            .attr("class", "inner_circle")
            .attr("cx", cx)
            .attr("cy", cy)
            .attr("r", 5);

    })
};