export class BrandFilters {
    public brandFilter;
    public priceFilter;
    public ratingFilter;
    public pageNo: number = 1;
    public pageSize: number = 4;
    public sortFilters;
    private pageSizeOptions = [5, 10, 15];

    constructor() {
        this.create();
    }

    private create() {
        this.brandFilter = {
            title: 'Brands',
            brands: [
                { name: 'Amana', checked: false },
                { name: 'Whirlpool', checked: false },
                { name: 'Frigidaire', checked: false },
                { name: 'GE', checked: false },
                { name: 'Samsung', checked: false },
                { name: 'Cuissinart', checked: false },
                { name: 'Broan', checked: false },
                { name: 'Maytag', checked: false },
                { name: 'Premiere', checked: false },
                { name: 'Hoover', checked: false },
                { name: 'Paragon', checked: false },
                { name: 'Darby', checked: false },
                { name: 'Bunn', checked: false },
                { name: 'SABA', checked: false },
                { name: 'Elite', checked: false },
                { name: 'NuTone', checked: false },
            ]
        }

        this.priceFilter = {
            title: 'Price',
            priceRange: [
                { range: { low: 100, high: 200 }, label: '$100 - $200', checked: false },
                { range: { low: 200, high: 300 }, label: '$200 - $300', checked: false },
                { range: { low: 300, high: 400 }, label: '$300 - $400', checked: false },
                { range: { low: 400, high: 500 }, label: '$400 - $500', checked: false },
                { range: { low: 500, high: 600 }, label: '$500 - $600', checked: false },
                { range: { low: 600, high: 700 }, label: '$600 - $700', checked: false },
                { range: { low: 700, high: 800 }, label: '$700 - $800', checked: false },
                { range: { low: 800, high: 900 }, label: '$800 - $900', checked: false },
                { range: { low: 900, high: 1000 }, label: '$900 - $1000', checked: false },
                { range: { low: 1000, high: 2000 }, label: '$1000 - $2000', checked: false },
            ]
        },

            this.ratingFilter = {
                title: 'Review Rating',
                rating: NaN
            },

            this.sortFilters = {
                filters: [
                    { id: 1, field: 'price', direction: 1, title: 'Price Low to High', checked: true },
                    { id: 2, field: 'price', direction: -1, title: 'Price High to Low', checked: false },
                    { id: 3, field: 'rating', direction: -1, title: 'Top Rated Products', checked: false },
                ]
            }
    }
}
