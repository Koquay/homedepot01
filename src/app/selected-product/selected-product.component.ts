import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { ADD_TO_CART } from '../reducers/types';
import { AddToCartAction } from '../cart/cart.actions';
import { MessageService } from '../shared/message/message.service';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.scss']
})
export class SelectedProductComponent implements OnInit {
  private product;
  private currentImage;
  private displayImages;
  private modalImage;
  private isBlack;
  private isWhite;
  private isSteel;
  private selectionColor;
  private dimensions;
  private details;
  private productDimension1;
  private productDimension2;
  private productDetail1;
  private productDetail2;

  constructor(
    private store: Store<any>,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private messageService:MessageService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  private getProduct = () => {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    const productSelector =  (state) => {return(state.brand)}
  
    let brand2$ = this.store.select(productSelector);

    brand2$.subscribe(brand => {
      console.log('brand2', brand)
      this.product = brand.products.find(product => product._id == id)

      if (this.product) {
        localStorage.setItem('product', JSON.stringify(this.product));
      } else {
        this.product = JSON.parse(localStorage.getItem('product'));
      }

      this.setProductAttributes();
    })
  }

  private setProductAttributes() {
    this.currentImage = this.product.image[0];
    this.displayImages = this.product.image;
    this.setupProductDimensions();
    this.setupProductDetails();
  }


  private addToCart() {
    this.store.dispatch(new AddToCartAction(this.product, 1, ADD_TO_CART))

    this.messageService.sendInfo('Item added to your cart.')

    const cartSelector =  (state) => {return(state.cart)}
    let cart$ = this.store.select(cartSelector);

    cart$.subscribe(cart => {
      localStorage.setItem('cart', JSON.stringify(cart));      
    })
  }

  private setImage(image) {
    this.currentImage = image;
  }

  private setProductChoice(color: string) {
    switch (color) {
      case 'Black':
        this.displayImages = this.product.images.black;
        this.isBlack = true
        this.isSteel = false;
        this.isWhite = false;
        break;
      case 'Stainless Steel':
        this.displayImages = this.product.images.stainless;
        this.isBlack = false
        this.isSteel = true;
        this.isWhite = false;
        break;
      case 'White':
        this.displayImages = this.product.images.white;
        this.isBlack = false
        this.isSteel = false;
        this.isWhite = true;
        break;
    }

    this.selectionColor = color;
    this.currentImage = this.displayImages[0];
  }

  private setModalImage(image) {
    this.modalImage = image;
  }

  private setupProductDimensions() {
    let dimensions = this.product.specifications.dimensions;
    let split = Math.ceil(dimensions.length / 2);
    this.productDimension1 = dimensions.slice(0, split);
    this.productDimension2 = dimensions.slice(split);

  }

  private setupProductDetails() {
    let details = this.product.specifications.details;
    let split = Math.ceil(details.length / 2);
    this.productDetail1 = details.slice(0, split);
    this.productDetail2 = details.slice(split);
    
  }

}
