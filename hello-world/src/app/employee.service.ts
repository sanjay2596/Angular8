import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
        {"id":1,"name":"Arif","age":234  },
        {"id":2,"name":"Shah","age":21  },
        {"id":3,"name":"irfan","age":41  },
        {"id":4,"name":"arfat","age":51  },
        {"id":5,"name":"arifeen","age":21  },
    ];
  }
}
