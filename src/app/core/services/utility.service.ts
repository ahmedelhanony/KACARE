import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DATEFORMAT } from 'src/app/Shared/utils/enums';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  public isEditableField(fields: any[], fieldName: any) {
    if (fields) {
      var result = fields.filter((item) => item.fieldName == fieldName);
      if (!result || !result[0]) return true;
      else if (result[0] && result[0].editable) return true;
      else return false;
    }
    return true;
  }

  public isVisibleField(fields: any[], fieldName: any) {
    if (fields) {
      var result = fields.filter((item) => item.fieldName == fieldName);
      if (!result || !result[0]) return true;
      else if (result[0] && result[0].visible) return true;
      else return false;
    }
    return true;
  }

  public getPattern(fields: any[], fieldName: any) {
    if (fields) {
      var result = fields.filter((item) => item.fieldName == fieldName);
      if (result[0] && result[0].pattern) return result[0].pattern;
      else return '';
    }
    return '';
  }

  public isRequiredField(fields: any[], fieldName: any) {
    if (fields) {
      var result = fields.filter((item) => item.fieldName == fieldName);
      if (result[0] && result[0].required) return true;
      else return false;
    }
    return false;
  }

  public getEnumOptions(enumObj: any) {
    var Options = Object.keys(enumObj);
    Options = Options.slice(Options.length / 2);
    return Options;
  }

  getEnumList(
    enumType: any,
    enumValueLt: number = 0,
    enumValueGt: number = 1000000
  ) {
    let items: any[] = [];

    for (let key in enumType) {
      var isValueProperty =
        parseInt(key, 10) >= 0 &&
        parseInt(key, 10) >= enumValueLt &&
        parseInt(key, 10) <= enumValueGt;

      if (!isValueProperty) continue;
    }
    return items;
  }

  public calendarArabicLocale: any = {
    firstDayOfWeek: 1,
    dayNames: [
      'الاحد',
      'الأثنين',
      'الثلاثاء',
      'الاربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    dayNamesShort: [
      'الاحد',
      'الأثنين',
      'الثلاثاء',
      'الاربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    dayNamesMin: [
      'الاحد',
      'الأثنين',
      'الثلاثاء',
      'الاربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'ابريل',
      'مايو',
      'يونيو',
      'يوليو',
      'اغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    monthNamesShort: [
      'يناير',
      'فبراير',
      'مارس',
      'ابريل',
      'مايو',
      'يونيو',
      'يوليو',
      'اغسطس',
      'سبتمبر',
      'أكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    clear: 'مسح',
  };

  public calendarEnglishLocale: any = {
    firstDayOfWeek: 1,
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    clear: 'Clear',
  };

  convertToApiDate(
    value: Date,
    isDateTime: boolean = true,
    isUtc: boolean = true
  ) {
    if (!value) return value;

    var valDate = moment(value, DATEFORMAT.dateWithTime);

    if (isDateTime) {
      if (isUtc === true) {
        var valDate = moment.utc(value, DATEFORMAT.dateWithTime);
        return valDate.format(DATEFORMAT.apiDateWithTime);
      } else {
        return valDate.format(DATEFORMAT.apiDate);
      }
    }
    var result = valDate.format(DATEFORMAT.apiDate);
    return result;
  }

  convertToLocalDate(value: any, isDateTime: boolean = true) {
    if (!value) return value;

    var gmtDateTime = moment.utc(
      moment(value).format('YYYY-MM-DD HH:mm:ss'),
      'YYYY-MM-DD HH:mm:ss'
    );

    if (isDateTime === true)
      return gmtDateTime.local().format(DATEFORMAT.dateWithTime);

    return gmtDateTime.local().format(DATEFORMAT.date);
  }

  getDateDiffrenceDays(startDate: any, endDate: any) {
    var startDateValue = moment(startDate, DATEFORMAT.date);
    var endDateValue = moment(endDate, DATEFORMAT.date);
    var diff = startDateValue.diff(endDateValue, 'days');

    return diff;
  }

  getItemByIndex(index : any, list: any[]) {
    var item = null;
    if (index != null)
      if (list && list.length > 0) {
        var item = list.find(function (element) {
          return element && element.id
            ? element.id.toString() === index.toString()
            : element.value
            ? element.value.toString() === index.toString()
            : null;
        });
      }

    return item;
  }

  setWithExpiry(key:any, value:any, ttl:any) {
    const now = new Date();
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = {
      value: value,
      //the expiry time, calculated by adding the TTL value in milliseconds to the current millisecond time.
      expiry: now.getTime() + ttl,
    };
    //convert the item to a JSON string
    localStorage.setItem(key, JSON.stringify(item));
  }

  getWithExpiry(key : any) {
    const itemStr = localStorage.getItem(key);
    // if the item doesn't exist, return null
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    // compare the expiry time of the item with the current time
    if (now.getTime() > item.expiry) {
      // If the item is expired, delete the item from storage
      // and return null
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  removeKey(key : any) {
    const itemstr = localStorage.getItem(key);
    if (!itemstr) return;
    else localStorage.removeItem(key);
  }

  getPatchArray(model:any) {
    let patcharray : any = [];
    let index = 0;
    Object.keys(model).forEach((innerkey) => {
      patcharray[index] = {};
      patcharray[index]['op'] = 'replace';
      patcharray[index]['path'] = innerkey;
      patcharray[index]['value'] = model[innerkey];
      index++;
    });
  }
}
