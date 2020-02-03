import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_PRODUCTS } from '../reducers/types';
import { BrandFilters } from './brand-filters';
import { MessageService } from '../shared/message/message.service';
import { AddToCartAction, CartActionTypes } from '../cart/cart.actions';
import { ProductsActionTypes, AddProductsAction } from './brand.actions';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private brandUrl = '/api/brand/';

  constructor(
    private httpClient: HttpClient,
    private store: Store<any>,
    private messageService:MessageService
  ) {

  }

  public filterProducts = (filters) => {
    const queryParams = this.createQueryParams(filters)

    return this.httpClient.get<{products:[], productCount:number}>(`${this.brandUrl}${queryParams}`).pipe(
      tap(productData => {
        this.store.dispatch(new AddProductsAction(productData.products))
  
        console.log('productData', productData)
        if(productData.products.length == 0) {
          this.messageService.sendInfo('No product found.')
        }
      
      }),
      catchError(error => {
        this.messageService.handleError(error);
        throw error;
      })    
      
    )
  }

  private createQueryParams(bFilters:BrandFilters) {
    const brandFilters = bFilters.brandFilter.brands.filter(filter => filter.checked === true);
        const brands = [];
    for(let brand of brandFilters) {
      brands.push(brand.name)
    }

    const priceFilters = bFilters.priceFilter.priceRange.filter(filter => filter.checked === true);
        const priceRanges = [];
    for(let priceRange of priceFilters) {
      priceRanges.push(priceRange.range)
    }

    let sortFilter = bFilters.sortFilters.filters.filter(filter => filter.checked == true);

    const filters = JSON.stringify({
      brands: brands,
      priceRanges: priceRanges,
      rating: bFilters.ratingFilter.rating,
      sortFilter: sortFilter[0],
      pageNo: bFilters.pageNo,
      pageSize: bFilters.pageSize,
    })

    const queryParams = `?filters=${filters}`;
    // console.log('queryParams', queryParams);
    return queryParams
  }

  public getProductsByBrand = (brand) => {
    return this.httpClient.get<[]>(`${this.brandUrl}${brand}`).pipe(
      tap(products => {
        this.store.dispatch(new AddProductsAction(products))     
      })
    )
  }

}
