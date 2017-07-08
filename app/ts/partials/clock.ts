import moment = require('moment');

export class Clock {
    time: any;
    constructor(private currentTime: any) {
        this.time = currentTime;
    }
    getTime(): string {
        return this.time;
    }
}
