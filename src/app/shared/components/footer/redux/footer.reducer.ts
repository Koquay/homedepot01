const initialState = {
    footer: {
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

export const FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        case '[Footer] get':
            return state;

        default:
            return state;
    }
}