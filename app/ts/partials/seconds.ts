import { Clock } from "./clock";

export class SecondsOfClock extends Clock {
    seconds: any;
    constructor(currentTime: any) {
        super(currentTime);
    }
    getTime(): string {
        this.seconds = this.time.format('ss');
        return this.seconds;
    }
}