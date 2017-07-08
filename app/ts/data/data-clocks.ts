const moment = require('moment-timezone');

export class DataClock {
    public context = {
        clocksArr: [
            {
                id: '1',
                newDate: moment(),
            }
            , {
                id: '2',
                newDate: moment().tz('America/Los_Angeles'),
            }
            , {
                id: '3',
                newDate: moment().tz('America/Los_Angeles'),
            }
            , {
                id: '4',
                newDate: moment().tz('Australia/Sydney'),
            }
        ]
    };
}
