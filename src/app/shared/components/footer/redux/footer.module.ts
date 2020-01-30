import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { FooterState } from './footer.state';
import { FooterReducer } from './footer.reducer';

const reducers: ActionReducerMap<FooterState> = {
  footer:FooterReducer
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('footer', reducers)
  ]
})
export class FooterModule { }
