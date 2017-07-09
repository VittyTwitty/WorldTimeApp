const moment = require('moment-timezone');

export class DataClock {
    public context = {
        clocksArr: [
            {
                id: '1',
                newDate: moment(),
                description: 'Near the computer'
            }
            , {
                id: '2',
                newDate: moment().tz('America/Los_Angeles'),
                description: 'America/Los_Angeles'
            }
            , {
                id: '3',
                newDate: moment().tz("Europe/London"),
                description: 'Europe/London'
            }
            , {
                id: '4',
                newDate: moment().tz('Australia/Sydney'),
                description: 'Australia/Sydney'
            }
        ]
    };
}
