import { IMedlem } from './medlem';
import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedlemService {
    private _medlemmerUrl = 'api/medlemmer/medlem.json';

    constructor(private _http: Http){}

    getMedlemmer(): Observable<IMedlem[]> {
        return this._http.get(this._medlemmerUrl)
            .map((response: Response) => <IMedlem[]>response.json())
            .do(data => console.log("Alle: " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}