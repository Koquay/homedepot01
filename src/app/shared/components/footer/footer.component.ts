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
    // this.getStaticData();    
    this.getFooter();
  }

  private getFooter() {
    let footer$ = this.store.select('footer');
    
    footer$.subscribe(footer => {
      this.footer = footer.footer;      
    })
  }

  private getStaticData = () => {
    this.footerService.getStaticData().subscribe(data => {
      this.staticData = data;
    })        
  }

}
