export const selectOrder = (state) => {
    return state?.order[0];
}

export const selectOrderSales = (state) => {
    return state?.order?.sales;
}

export const selectRetailSalesMonthly = (state) => {
    return state?.order?.retailSalesMonthly;
}

export const selectRetailerMarginMonthly = (state) => {
    return state?.order?.retailerMarginMonthly;
}

export const selectUnitsSoldMonthly = (state) => {
    return state?.order?.unitsSoldMonthly;
}

export const selectWeekEndingMonthly = (state) => {
    return state?.order?.weekEndingMonthly;
}

export const selectWholesaleSalesMonthly = (state) => {
    return state?.order?.wholesaleSalesMonthly;
}

export const selectOrderReviews = (state) => {
    return state?.order?.reviews;
}