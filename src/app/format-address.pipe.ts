import { Pipe, PipeTransform } from '@angular/core';

interface AddressModel {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

@Pipe({ name: 'formatAddressPipe' })
export class FormatAddressPipe implements PipeTransform {
  transform(addr: AddressModel) {
    return (
      addr.address1 +
      ',' +
      addr.address2 +
      ',' +
      addr.city +
      ',' +
      addr.state +
      ',' +
      addr.state +
      ',' +
      addr.zip +
      ',' +
      addr.country
    );
  }
}
