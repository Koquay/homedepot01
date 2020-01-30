import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {
  private staticDb;

  constructor() {
    this.createDb();
  }

  public getStaticDb() {
    return of(this.staticDb);
  }

  private createDb() {
    this.staticDb = {
      brands: {
        title: 'SHOP BY BRAND',
        links: [
          'Amana',
          'Whirlpool',
          'Samsung',
          'Maytag',
          'Hotpoint',
          'Frigidaire',
          'LG',
          'GE',
          'KitchenAid',
          'Bosch',


        ]
      },
      refrigerators: {
        title: 'REFRIGERATORS',
        links: [
          'French Door Refrigerators',
          'Side by Side Refrigerators',
          'Top Freezer Refrigerators',
          'Mini Refrigerators',
          'Wine & Beverage Coolers',
          'Freezers & Ice Makers',
        ]
      },
      washers: {
        title: 'WASHERS',
        links: [
          'Top Load Washers',
          'Front Load Washers',
          'Laundry Centers',
        ]
      },
      ranges: {
        title: 'RANGES',
        links: [
          'Gas Ranges',
          'Electric Ranges',
        ]
      },

      kitchenAppliances: {
        title: 'Kitchen Appliances',
        appliances: [
          { name: 'Refrigerators', img: 'Samsung-smart-refrigerator.jpg' },
          { name: 'Ranges', img: 'ranges.png' },
          { name: 'Dishwashers', img: 'Bosch-L1-Dishwasher-304644783.jpg' },
          { name: 'Microwaves', img: 'microwaves.png' },
          { name: 'Appliance Packages', img: 'samsung-kitchen-appliance-package.png' },
          { name: 'Cooktops', img: '20f59954-2807-475a-a2c5-d7e4d1097931_1000.jpg' },
          { name: 'Wall Ovens', img: 'wall-ovens-2.png' },
          { name: 'Range Hoods', img: 'range-hoods.png' },
        ],

        mobileAppliances: [
          { name: 'Washers Dryers', img: 'washers-dryers.jpg' },
          { name: 'Refrigerators', img: 'refrigerators.jpg' },
          { name: 'Ranges', img: 'ranges.jpg' },
          { name: 'Dishwashers', img: 'Bosch-L1-Dishwasher-304644783.jpg' },
          { name: 'Microwaves', img: 'microwaves.jpg' },
          { name: 'Cooktops', img: 'cooktops.jpg' },
          { name: 'Wall Ovens', img: 'wall-ovens.jpg' },
          { name: 'Range Hoods', img: 'range-hoods.jpg' },
          { name: 'Freezers Ice Makers', img: 'freezers-icemakers.jpg' },
          { name: 'Small Appliances', img: 'small-appliances.jpg' },
          
        ],

        mobileBanners: ['12%20months%20financing.png', 'protection%20plans.png'],        
      },

      laundryAppliances: {
        title: 'Laundry Appliances',
        categories: ['Washers', 'Dryers', 'Laundry Pairs'],
        image: 'samsung-laundry-pairs-lead.png',
        bannerImages: ['HB-12-Mo-Finance-299-or-more.png', 'HD-protection-plan.jpg']
      },

      smallKitchenAppliances: {
        title: 'Small Kitchen Appliances',
        appliances: [
          {
            name: 'Blenders',
            image: 'Thumbnail-Blender.png'
          },
          {
            name: 'Coffee Espresso',
            image: 'Thumbnail-Coffee-Espresso.png'
          },
          {
            name: 'Toasters',
            image: 'Thumbnail-Toaster.png'
          },
          {
            name: 'Mixers',
            image: 'Thumbnail-Mixer.png'
          },
          {
            name: 'Cookers',
            image: 'Thumbnail-Cooker.png'
          },
          {
            name: 'Food Process',
            image: 'Thumbnail-Food-Processor.png'
          },
          {
            name: 'Air Fryers',
            image: 'Thumbnail-Air-Fryer.png'
          },
          {
            name: 'Deep Fryers',
            image: 'Thumbnail-Deep-Fryer.png'
          },
          {
            name: 'Electric Skillets Indoor Grills',
            image: 'Thumbnail-Electric-Skillets-Grills.png'
          },
          {
            name: 'Food Warmers',
            image: 'Thumbnail-Food-Warmer.png'
          },
          {
            name: 'Electric Kettles',
            image: 'Thumbnail-Electric-Kettle.jpg'
          },
          {
            name: 'Dessert Makers',
            image: 'Thumbnail-Dessert-Maker.png'
          },
          
        ]
      },
      topApplianceBrands: {
        title: 'Top Appliance Brands',
        brands: [
          {
            image: 'whirlpool-appliances-logo.png'
          },
          {
            image: 'LG-appliances-logo.png'
          },
          {
            image: 'samsung-appliances-logo.png'
          },
          {
            image: 'GE-appliances-logo.png'
          },
          {
            image: 'frigidaire-brand-appliance-logo.jpg'
          },
          {
            image: 'kitchen-aid-appliances-logo.png'
          },
          {
            image: 'maytag-appliances-logo.png'
          },
          {
            image: 'amana-appliances-logo.png'
          },
          {
            image: 'hotpoint-appliances-logo.png'
          },
          {
            image: 'Bosch-appliances-logo.png'
          },
          {
            image: 'GE-CAFE-appliance-logo.jpg'
          },
          {
            image: 'Keurig-Logo.jpg'
          },          
        ]
      },

      greatAppliances: {
        title: 'Life Gets Easier With Great Appliances',
        paragraphs:[ 'Revitalize your home with state-of-the-art appliances to keep your home running smoothly. We offer a vast selection of home appliances that’ll make your everyday tasks easier. Let the washing machine do the laundry and the kitchen appliances do the cooking. Keep the dust and pet dander off your floors with a new vacuum. ',
        'Consider upgrading your microwave if you haven’t in a while. Look for helpful features like a sensor, which turns off the microwave when the food is done. If you are short on counter space, try an under-the-cabinet microwave.',
        'Before you buy any major appliance, make sure you have the right amount of space allotted for it. Refrigerators, for example, typically need to fit into a specific amount of space in the kitchen. Measure first, buy second. Make sure your appliance fits!',
        'Buy appliances online with confidence. You can always go into your local Home Depot Store to see for yourself if the appliance you’re looking for is the one you want. The Home Depot Protection Plan is available for your peace of mind, as well. To be sure we’re in your budget, look for our valuable Appliance Offers for household appliance savings.', ]       
      }

    }
  }
}
