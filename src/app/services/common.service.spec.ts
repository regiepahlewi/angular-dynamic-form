import { TestBed } from '@angular/core/testing';
import { CommonService } from './common.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { WebAddressConstant } from '../constants/webaddress.constants';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler
      ]
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('date shouble be 31 length', () => {
    expect(service.getDay()[0].key).toEqual('01');
    expect(service.getDay()[8].key).toEqual('09');
    expect(service.getDay().length).toEqual(31);
  });

  it('year shouble be 2003-2020', () => {
    const interval = 17;
    const yearNow = new Date().getFullYear();
    const yearInterval = yearNow - interval;
    expect(service.getYear(interval)[0].key).toEqual(yearInterval.toString());
    expect(service.getYear(interval)[17].key).toEqual(yearNow.toString());
  });

  it('Call http client', () => {

    const dummyPosts = {
      firstName: 'Naifa',
      lastName: 'Shazia',
      dob: '2018/05/18',
      gender: 1,
      email: 'naifa10@gmail.com',
      mobileNumber: '+6285691580504'
    };

    service.callHttpPost(WebAddressConstant.REGISTRATION_SAVE, dummyPosts).subscribe((data: any) => {
      expect(data.data.message).toBe('Data has been added successfully');
    });
  });

});
