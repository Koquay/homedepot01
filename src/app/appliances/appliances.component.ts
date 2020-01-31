import { Component, OnInit } from '@angular/core';
import { AppliancesService } from './appliances.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.scss']
})
export class AppliancesComponent implements OnInit {
  private staticDb;
  private appliances;

  constructor(
    private appliancesService:AppliancesService,
    private store:Store<any>
  ) { }

  ngOnInit() {
    this.getAppliancesState();
  }

  private getAppliancesState() {
    const appliancesSelector =  (state) => {return(state.appliances)}
    let appliances$ = this.store.select(appliancesSelector);
    
    appliances$.subscribe(appliances => {
      this.appliances = appliances;
      console.log('appliances', this.appliances)      
    })
  }

}
