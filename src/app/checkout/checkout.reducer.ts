const initialState = {
    citiesStates: [
        { city: 'Boston', state: 'MA' },
        { city: 'Canton', state: 'MA' },
        { city: 'Quincy', state: 'MA' },
        { city: 'Stoughton', state: 'MA' },
        { city: 'Roslindale', state: 'MA' },
    ],

    expMonths: [
        { month: null },
        { month: '01-January' },
        { month: '02-February' },
        { month: '04-March' },
        { month: '05-April' },
        { month: '06-May' },
        { month: '07-June' },
        { month: '08-July' },
        { month: '09-August' },
        { month: '00-September' },
        { month: '10-October' },
        { month: '11-November' },
        { month: '12-December' },
    ],

    expYears: [
        { year: null },
        { year: '2018' },
        { year: '2019' },
        { year: '2020' },
        { year: '2021' },
        { year: '2022' },
        { year: '2023' },
        { year: '2024' },
        { year: '2025' },
        { year: '2026' },
        { year: '2027' },
        { year: '2028' },
    ]
}

export const CheckoutReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}