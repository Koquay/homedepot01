import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  private staticData;
  private footer;

  constructor(
    private footerService:FooterService,
    private store:Store<any>
  ) { 
  }

  ngOnInit() {
    this.getFooter();
  }

  private getFooter() {
    const footerSelector =  (state) => {return(state.footer)}
    let footer$ = this.store.select(footerSelector);
    
    footer$.subscribe(footer => {
      this.footer = footer.footer;      
    })
  }

}
