import { Clock } from "./clock";

export class HoursOfClock extends Clock {
    hours: any;
    constructor(currentTime: any) {
        super(currentTime);
    }
    getTime(): string {
        this.hours = this.time.format('HH');
        return this.hours;
    }
}