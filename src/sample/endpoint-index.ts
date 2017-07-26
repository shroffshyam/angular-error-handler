import { users } from './data';
import {RequestMethod} from '@angular/http';
export const endPointIndex =
  [
    {
      'name': 'GET users Response',
      'method': RequestMethod.Get,
      'regex': /.*\/api\/uers/,
      'value': users
    }
  ];