import { Injectable } from '@angular/core';
import { Sensordaten } from './sensordaten'

@Injectable({
  providedIn: 'root'
})
export class LuftdruckService {

  getMockSensordaten(dataCount: number): Sensordaten[] {
    let sensordaten: Sensordaten[] = [];

    let nowTicks = new Date().valueOf();
    const minute = 60 * 1000;
    const startDate = new Date(nowTicks - dataCount * minute);

    for (var i = 0; i < dataCount; i ++) {
      
      let date = new Date(startDate.valueOf() + i * minute);
      sensordaten.push( {
        timestamp: date,
        luftdruck: this.getRandomNumber(1015, 1022),
        temperatur: this.getRandomNumber(20, 23)
      });
    }

    return sensordaten;
  }

  private getRandomNumber(min, max) :number {
    var random = Math.random() * (+max - +min) + +min; 

    return random;
  }

  getSensordaten(): Sensordaten[] {
    return  [
      { timestamp: new Date("2019-12-03 08:45"), luftdruck: 1018.6, temperatur: 22 },
      { timestamp: new Date("2019-12-03 08:30"), luftdruck: 1018.6, temperatur: 22 },
      { timestamp: new Date("2019-12-03 08:15"), luftdruck: 1018.5, temperatur: 22 },
      { timestamp: new Date("2019-12-03 08:00"), luftdruck: 1018.5, temperatur: 22 },
      { timestamp: new Date("2019-12-03 07:45"), luftdruck: 1018.5, temperatur: 22 },
      { timestamp: new Date("2019-12-03 07:30"), luftdruck: 1018.4, temperatur: 22 },
      { timestamp: new Date("2019-12-03 07:15"), luftdruck: 1018.4, temperatur: 22 },
      { timestamp: new Date("2019-12-03 07:00"), luftdruck: 1018.4, temperatur: 22 },
      { timestamp: new Date("2019-12-03 06:45"), luftdruck: 1018.2, temperatur: 22 },
      { timestamp: new Date("2019-12-03 06:30"), luftdruck: 1018.2, temperatur: 22 },
      { timestamp: new Date("2019-12-03 06:15"), luftdruck: 1018.1, temperatur: 22 },
      { timestamp: new Date("2019-12-03 06:00"), luftdruck: 1018.3, temperatur: 22 },
      { timestamp: new Date("2019-12-03 05:45"), luftdruck: 1018.2, temperatur: 22 },
      { timestamp: new Date("2019-12-03 05:30"), luftdruck: 1018.4, temperatur: 22 },
      { timestamp: new Date("2019-12-03 05:15"), luftdruck: 1018.3, temperatur: 22 },
      { timestamp: new Date("2019-12-03 05:00"), luftdruck: 1018.1, temperatur: 22 },
      { timestamp: new Date("2019-12-03 04:45"), luftdruck: 1017.9, temperatur: 22 },
      { timestamp: new Date("2019-12-03 04:30"), luftdruck: 1017.9, temperatur: 22 },
      { timestamp: new Date("2019-12-03 04:15"), luftdruck: 1017.8, temperatur: 22 },
      { timestamp: new Date("2019-12-03 04:00"), luftdruck: 1017.8, temperatur: 22 },
      { timestamp: new Date("2019-12-03 03:45"), luftdruck: 1017.7, temperatur: 22 },
      { timestamp: new Date("2019-12-03 03:30"), luftdruck: 1017.7, temperatur: 22 },
      { timestamp: new Date("2019-12-03 03:15"), luftdruck: 1017.9, temperatur: 22 },
      { timestamp: new Date("2019-12-03 03:00"), luftdruck: 1017.8, temperatur: 22 },
      { timestamp: new Date("2019-12-03 02:45"), luftdruck: 1017.9, temperatur: 22 },
      { timestamp: new Date("2019-12-03 02:30"), luftdruck: 1017.7, temperatur: 22 },
      { timestamp: new Date("2019-12-03 02:15"), luftdruck: 1017.6, temperatur: 22 },
      { timestamp: new Date("2019-12-03 02:00"), luftdruck: 1017.7, temperatur: 22 },
      { timestamp: new Date("2019-12-03 01:45"), luftdruck: 1017.7, temperatur: 22 },
      { timestamp: new Date("2019-12-03 01:30"), luftdruck: 1017.8, temperatur: 22 },
      { timestamp: new Date("2019-12-03 01:15"), luftdruck: 1017.6, temperatur: 22 },
      { timestamp: new Date("2019-12-03 01:00"), luftdruck: 1017.5, temperatur: 22 },
      { timestamp: new Date("2019-12-03 00:45"), luftdruck: 1017.3, temperatur: 22 },
      { timestamp: new Date("2019-12-03 00:30"), luftdruck: 1017.4, temperatur: 22 },
      { timestamp: new Date("2019-12-03 00:15"), luftdruck: 1017.6, temperatur: 22 },
      { timestamp: new Date("2019-12-03 00:00"), luftdruck: 1017.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 23:45"), luftdruck: 1017.3, temperatur: 22 },
      { timestamp: new Date("2019-12-02 23:30"), luftdruck: 1017.6, temperatur: 22 },
      { timestamp: new Date("2019-12-02 23:15"), luftdruck: 1017.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 23:00"), luftdruck: 1017.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 22:45"), luftdruck: 1017.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 22:30"), luftdruck: 1017.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 22:15"), luftdruck: 1017.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 22:00"), luftdruck: 1016.8, temperatur: 22 },
      { timestamp: new Date("2019-12-02 21:45"), luftdruck: 1016.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 21:30"), luftdruck: 1016.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 21:15"), luftdruck: 1016.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 21:00"), luftdruck: 1016.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 20:45"), luftdruck: 1015.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 20:30"), luftdruck: 1016.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 20:15"), luftdruck: 1015.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 20:00"), luftdruck: 1015.8, temperatur: 22 },
      { timestamp: new Date("2019-12-02 19:45"), luftdruck: 1015.7, temperatur: 22 },
      { timestamp: new Date("2019-12-02 19:30"), luftdruck: 1015.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 19:15"), luftdruck: 1015.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 19:00"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 18:45"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 18:30"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 18:15"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 18:00"), luftdruck: 1014.8, temperatur: 22 },
      { timestamp: new Date("2019-12-02 17:45"), luftdruck: 1014.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 17:30"), luftdruck: 1014.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 17:15"), luftdruck: 1014.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 17:00"), luftdruck: 1014.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 16:45"), luftdruck: 1014.3, temperatur: 22 },
      { timestamp: new Date("2019-12-02 16:30"), luftdruck: 1014.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 16:15"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 16:00"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 15:45"), luftdruck: 1013.7, temperatur: 22 },
      { timestamp: new Date("2019-12-02 15:30"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-02 15:15"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 15:00"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 14:45"), luftdruck: 1013.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 14:30"), luftdruck: 1013.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 14:15"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 14:00"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-02 13:45"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 13:30"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 13:15"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 13:00"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 12:45"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 12:30"), luftdruck: 1013.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 12:15"), luftdruck: 1013.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 12:00"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 11:45"), luftdruck: 1013.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 11:30"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 11:15"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 11:00"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-02 10:45"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-02 10:30"), luftdruck: 1013.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 10:15"), luftdruck: 1013.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 10:00"), luftdruck: 1013.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 09:45"), luftdruck: 1012.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 09:30"), luftdruck: 1012.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 09:15"), luftdruck: 1012.8, temperatur: 22 },
      { timestamp: new Date("2019-12-02 09:00"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-02 08:45"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-02 08:30"), luftdruck: 1012.3, temperatur: 22 },
      { timestamp: new Date("2019-12-02 08:15"), luftdruck: 1012.3, temperatur: 22 },
      { timestamp: new Date("2019-12-02 08:00"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 07:45"), luftdruck: 1012.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 07:30"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 07:15"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 07:00"), luftdruck: 1012.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 06:45"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 06:30"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 06:15"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 06:00"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 05:45"), luftdruck: 1012.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 05:30"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 05:15"), luftdruck: 1012.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 05:00"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 04:45"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 04:30"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 04:15"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 04:00"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 03:45"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 03:30"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 03:15"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 03:00"), luftdruck: 1012.0, temperatur: 22 },
      { timestamp: new Date("2019-12-02 02:45"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 02:30"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 02:15"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 02:00"), luftdruck: 1012.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 01:45"), luftdruck: 1012.1, temperatur: 22 },
      { timestamp: new Date("2019-12-02 01:30"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 01:15"), luftdruck: 1011.7, temperatur: 22 },
      { timestamp: new Date("2019-12-02 01:00"), luftdruck: 1011.9, temperatur: 22 },
      { timestamp: new Date("2019-12-02 00:45"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 00:30"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-02 00:15"), luftdruck: 1012.3, temperatur: 22 },
      { timestamp: new Date("2019-12-02 00:00"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 23:45"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 23:30"), luftdruck: 1012.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 23:15"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 23:00"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 22:45"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 22:30"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 22:15"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 22:00"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 21:45"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 21:30"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 21:15"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 21:00"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 20:45"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 20:30"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 20:15"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 20:00"), luftdruck: 1012.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 19:45"), luftdruck: 1012.3, temperatur: 22 },
      { timestamp: new Date("2019-12-01 19:30"), luftdruck: 1012.3, temperatur: 22 },
      { timestamp: new Date("2019-12-01 19:15"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 19:00"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 18:45"), luftdruck: 1012.3, temperatur: 22 },
      { timestamp: new Date("2019-12-01 18:30"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 18:15"), luftdruck: 1012.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 18:00"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 17:45"), luftdruck: 1012.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 17:30"), luftdruck: 1012.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 17:15"), luftdruck: 1012.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 17:00"), luftdruck: 1012.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 16:45"), luftdruck: 1012.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 16:30"), luftdruck: 1012.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 16:15"), luftdruck: 1013.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 16:00"), luftdruck: 1013.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 15:45"), luftdruck: 1013.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 15:30"), luftdruck: 1012.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 15:15"), luftdruck: 1012.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 15:00"), luftdruck: 1012.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 14:45"), luftdruck: 1012.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 14:30"), luftdruck: 1012.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 14:15"), luftdruck: 1012.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 14:00"), luftdruck: 1012.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 13:45"), luftdruck: 1013.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 13:30"), luftdruck: 1013.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 13:15"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 13:00"), luftdruck: 1013.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 12:45"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 12:30"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 12:15"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 12:00"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 11:45"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 11:30"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 11:15"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 11:00"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 10:45"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 10:30"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 10:15"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 10:00"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 09:45"), luftdruck: 1014.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 09:30"), luftdruck: 1014.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 09:15"), luftdruck: 1014.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 09:00"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 08:45"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 08:30"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 08:15"), luftdruck: 1013.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 08:00"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 07:45"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 07:30"), luftdruck: 1013.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 07:15"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 07:00"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 06:45"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 06:30"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 06:15"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 06:00"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-12-01 05:45"), luftdruck: 1014.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 05:30"), luftdruck: 1014.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 05:15"), luftdruck: 1014.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 05:00"), luftdruck: 1014.4, temperatur: 22 },
      { timestamp: new Date("2019-12-01 04:45"), luftdruck: 1014.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 04:30"), luftdruck: 1014.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 04:15"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 04:00"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 03:45"), luftdruck: 1014.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 03:30"), luftdruck: 1014.5, temperatur: 22 },
      { timestamp: new Date("2019-12-01 03:15"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-12-01 03:00"), luftdruck: 1014.7, temperatur: 22 },
      { timestamp: new Date("2019-12-01 02:45"), luftdruck: 1014.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 02:30"), luftdruck: 1014.8, temperatur: 22 },
      { timestamp: new Date("2019-12-01 02:15"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-12-01 02:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 01:45"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 01:30"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 01:15"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 01:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-12-01 00:45"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 00:30"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 00:15"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-12-01 00:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 23:45"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 23:30"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-11-30 23:15"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 23:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 22:45"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 22:30"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 22:15"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 22:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 21:45"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 21:30"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 21:15"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 21:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 20:45"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 20:30"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 20:15"), luftdruck: 1015.2, temperatur: 22 },
      { timestamp: new Date("2019-11-30 20:00"), luftdruck: 1015.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 19:45"), luftdruck: 1015.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 19:30"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 19:15"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 19:00"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 18:45"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 18:30"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 18:15"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 18:00"), luftdruck: 1014.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 17:45"), luftdruck: 1014.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 17:30"), luftdruck: 1014.7, temperatur: 22 },
      { timestamp: new Date("2019-11-30 17:15"), luftdruck: 1014.7, temperatur: 22 },
      { timestamp: new Date("2019-11-30 17:00"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 16:45"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 16:30"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 16:15"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 16:00"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 15:45"), luftdruck: 1014.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 15:30"), luftdruck: 1014.4, temperatur: 22 },
      { timestamp: new Date("2019-11-30 15:15"), luftdruck: 1014.3, temperatur: 22 },
      { timestamp: new Date("2019-11-30 15:00"), luftdruck: 1014.3, temperatur: 22 },
      { timestamp: new Date("2019-11-30 14:45"), luftdruck: 1014.3, temperatur: 22 },
      { timestamp: new Date("2019-11-30 14:30"), luftdruck: 1014.2, temperatur: 22 },
      { timestamp: new Date("2019-11-30 14:15"), luftdruck: 1014.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 14:00"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 13:45"), luftdruck: 1014.0, temperatur: 22 },
      { timestamp: new Date("2019-11-30 13:30"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 13:15"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 13:00"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 12:45"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 12:30"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 12:15"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 12:00"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 11:45"), luftdruck: 1013.9, temperatur: 22 },
      { timestamp: new Date("2019-11-30 11:30"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 11:15"), luftdruck: 1013.7, temperatur: 22 },
      { timestamp: new Date("2019-11-30 11:00"), luftdruck: 1013.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 10:45"), luftdruck: 1013.7, temperatur: 22 },
      { timestamp: new Date("2019-11-30 10:30"), luftdruck: 1013.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 10:15"), luftdruck: 1013.5, temperatur: 22 },
      { timestamp: new Date("2019-11-30 10:00"), luftdruck: 1013.3, temperatur: 22 },
      { timestamp: new Date("2019-11-30 09:45"), luftdruck: 1013.1, temperatur: 22 },
      { timestamp: new Date("2019-11-30 09:30"), luftdruck: 1012.8, temperatur: 22 },
      { timestamp: new Date("2019-11-30 09:15"), luftdruck: 1012.6, temperatur: 22 },
      { timestamp: new Date("2019-11-30 09:00"), luftdruck: 1012.6, temperatur: 22 }
    ];
  }
}
