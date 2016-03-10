import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service';
import {ScoreService} from './score.service';
import {Random} from './random';
import {BaseQuizComponent} from './base-quiz.component';

@Component({
    selector: 'flag-quiz',
    styleUrls: ['app/flag-quiz.component.css'],
    templateUrl: 'app/flag-quiz.component.html'
})

export class FlagQuizComponent extends BaseQuizComponent implements OnInit {

    constructor(protected _countryService: CountryService, protected _scoreService: ScoreService) {
        super(_countryService, _scoreService);
     }

    ngOnInit() {
        this.getCountries();
    }
}
