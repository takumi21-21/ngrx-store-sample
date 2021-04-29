import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer, featureName } from '../common/store/count/count.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({ [featureName]: counterReducer }),
    StoreDevtoolsModule.instrument()
  ],
  exports: [
    CounterComponent
  ]
})
export class CounterModule { }
