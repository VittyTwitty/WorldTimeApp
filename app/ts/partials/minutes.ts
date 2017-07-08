import { Clock } from "./clock";

export class MinutesOfClock extends Clock {
    minutes: any;
    constructor(currentTime: any) {
        super(currentTime);
    }
    getTime(): string {
        this.minutes = this.time.format('mm');
        return this.minutes;
    }
}