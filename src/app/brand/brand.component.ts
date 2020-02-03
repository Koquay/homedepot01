import { Component, OnInit } from '@angular/core';
import { BrandService } from './brand.service';
import { ActivatedRoute } from '@angular/router';
import { BrandFilters } from './brand-filters';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  private products;
  private productCount;
  private brand;
  private brandLocalDb
  private brandFilters:BrandFilters;
  private pages = [];
  private numberOfPages;

  constructor(
    private brandService:BrandService,
    private activatedRoute:ActivatedRoute,
    private store:Store<any>
  ) {
    this.brandFilters = new BrandFilters();
   }

  ngOnInit() {
    this.getProductsByBrand();
  }

  private getProductsByBrand = () => {
    this.brand = this.activatedRoute.snapshot.paramMap.get('brand');
    let  brandFilter = this.brandFilters.brandFilter.brands.find(filter => filter.name === this.brand)    
    if(brandFilter) {
      brandFilter.checked = true;
    }    
    this.filterProducts();    
  }

  private filterProducts = () => {
    this.brandService.filterProducts(this.brandFilters).subscribe(productData => {
      this.products = productData.products;
      this.productCount = productData.productCount;      
      this.numberOfPages = Math.ceil(this.productCount / this.brandFilters.pageSize);
      this.pages = [];
      for(let i = 1; i <= this.numberOfPages; i++) {
        this.pages.push(i);
      }      
    })
  }

  private resetPageNoAndFilterProducts = () => {
    this.brandFilters.pageNo = 1;
    this.filterProducts();
  }

  private getPage(pageNo) {
    this.brandFilters.pageNo = pageNo;
    this.filterProducts();
  }

  private getPageByDirection(direction) {
    if(direction === '»') {
      if(this.brandFilters.pageNo < this.numberOfPages) {
        ++this.brandFilters.pageNo;
        this.filterProducts();
      }
    } else if(direction === '«') {
      if(this.brandFilters.pageNo > 1) {
        --this.brandFilters.pageNo;
        this.filterProducts();
      }
    } 
  }

  private sortProductsBy(value) {
    for(let filter of this.brandFilters.sortFilters.filters) {
      if(filter.id == value) {
        filter.checked = true;
      } else {
        filter.checked = false;
      }      
    }

    this.filterProducts();
  }
}
