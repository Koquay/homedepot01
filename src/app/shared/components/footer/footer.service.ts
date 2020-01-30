import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FooterState } from './redux/footer.state';
import { Footer } from './redux/footer';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private staticData;
  private footer$: Observable<Footer>

  constructor(
    private store:Store<FooterState>
  ) {
    this.createDb();
  }

  public  getStaticData() {
    console.log('store', this.store)

    this.store.select((state) => {
      return state.footer;
    }
  ).subscribe(footer => {
    console.log('footer$', footer)
  })
  

    console.log('footer$', this.footer$)

    // this.footer$.subscribe(footer => {
    //   console.log('footer$', footer)
    // })

    return of(this.staticData);
  }

  private createDb() {
    this.staticData = {
      customerService: {
        title: 'Customer Service',
        links: [
          "Check Order Status",
          "Pay Your Credit Card",
          "Order Cancellation",
          "Returns",
          "Shipping & Delivery",
          "Product Recalls",
          "Help & FAQs"
        ],
      },
      resources: {
        title: 'Resources',
        links: [
          "Specials & Offers",
          "DIY Projects & Ideas",
          "Truck & Tool Rental",
          "Home Services",
          "Moving Supplies & Rentals",
          "Real Estate Floor Plan Services",
          "Protection Plans",
          "Rebate Center",
          "Gift Cards",
        ],
      },
      aboutUs: {
        title: 'About Us',
        links: [
          "Careers",
          "Corporate Information",
          "Digital Newsroom",
          "Home Depot Foundation",
          "Investor Relations",
          "Government Customers",
          "Suppliers & Providers",
          "Affiliate Program",
          "Eco Options",
          "Corporate Responsibility",
        ],
      }
    }
  }
}
