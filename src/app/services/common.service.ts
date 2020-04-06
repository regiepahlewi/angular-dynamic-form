import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISelectOptions } from '../interfaces/field';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpClient: HttpClient
  ) { }

  callHttpPost(url: string, payload: any) {
    return this.httpClient.post(url, payload);
  }

  getMonth(): ISelectOptions[] {
    const month: ISelectOptions[] = [
      { key: '01', value: 'January' },
      { key: '02', value: 'February' },
      { key: '03', value: 'March' },
      { key: '04', value: 'April' },
      { key: '05', value: 'May' },
      { key: '06', value: 'June' },
      { key: '07', value: 'July' },
      { key: '08', value: 'August' },
      { key: '09', value: 'September' },
      { key: '10', value: 'October' },
      { key: '11', value: 'November' },
      { key: '12', value: 'December' },
    ]
    return month;
  }

  getDay(): ISelectOptions[] {
    const day: ISelectOptions[] = [];

    for (let i = 1; i <= 31; i++) {
      if (i <= 9) {
        const addZero = '0' + i.toString();
        day.push({
          key: addZero,
          value: addZero
        });
      } else {
        day.push({
          key: i.toString(),
          value: i.toString()
        });
      }
    }

    return day;

  }

  getYear(interval: number): ISelectOptions[] {
    const year: ISelectOptions[] = [];
    const yearNow = new Date().getFullYear();
    const yearInterval = yearNow - interval;

    for (let i = yearInterval; i <= yearNow; i++) {
      year.push({
        key: i.toString(),
        value: i.toString()
      });
    }

    year.sort();

    return year;
  }
}
