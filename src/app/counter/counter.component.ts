import { CountState } from './../common/store/count/count.reducer';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectCount } from '../common/store/count/count.selector';
import * as CounterAction from '../common/store/count/count.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  public count$ = this.store.pipe(select(selectCount));

  constructor(
    private store: Store<CountState>
  ) { }

  ngOnInit(): void {
  }

  title = 'ngrx-store-sample';
  count = 0;

  public increment(): void {
    console.log('res');
    this.store.dispatch(CounterAction.increment());
  }

  public decrement(): void {
    this.store.dispatch(CounterAction.decrement());
  }

  public reset(): void {
    this.store.dispatch(CounterAction.reset());
  }

}
