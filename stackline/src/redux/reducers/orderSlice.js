/* eslint-disable no-empty-pattern */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const setOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const response = await fetch('data.json').then(
        (data)=>{
            return data.json();
        },
        (error) => {
            console.log(error);
        }
    );
    return response;
})

export const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers(builder){
        builder.addCase(setOrders.fulfilled, (state, action) =>{
            let tempRS = [];
            let tempRM = [];
            let tempUS = [];
            let tempWE = [];
            let tempWS = [];
            let countRS = 0;
            let countRM = 0;
            let countUS = 0;
            let countWS = 0;
        
            let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            let curr = 'JAN';
            let month;
            for(let i=0;i<action?.payload[0]?.sales?.length;i++){
                const { retailSales, retailerMargin, unitsSold, weekEnding, wholesaleSales} = action?.payload[0]?.sales[i];
                month = months[parseInt(weekEnding?.split('-')[1])-1];
                if((curr !== month)){
                    tempRS.push(countRS);
                    tempRM.push(countRM);
                    tempUS.push(countUS);
                    tempWE.push(curr);
                    tempWS.push(countWS);
                    countRS = 0;
                    countRM = 0;
                    countUS = 0;
                    countWS = 0;
                    curr = month;
                }
                    countRS += retailSales;
                    countRM += retailerMargin;
                    countUS += unitsSold;
                    countWS += wholesaleSales;
                
            }
            tempRS.push(countRS);
            tempRM.push(countRM);
            tempUS.push(countUS);
            tempWE.push(month);
            tempWS.push(countWS);
            
            console.log(tempWE)
            console.log(tempRS)
            return {...action.payload, retailSalesMonthly: tempRS, retailerMarginMonthly: tempRM, unitsSoldMonthly: tempUS, weekEndingMonthly: tempWE, wholesaleSalesMonthly: tempWS}
        });
    }
})
export const {} = orderSlice.actions;

export default orderSlice.reducer;