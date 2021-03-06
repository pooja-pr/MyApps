import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { UsersModel } from './login/users.model';

@Injectable()
export class AppService {
    user: any;

    get userObj(): any {
        this.user = JSON.parse(localStorage.getItem('user'));
        return this.user;
    }
    set userObj(value: any) {
        this.user = value;
        //this.userUpdatedFlag.next(true);
        localStorage.setItem('user', JSON.stringify(this.user));
    }
}
0