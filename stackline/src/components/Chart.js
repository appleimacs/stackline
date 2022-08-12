import { Line } from 'react-chartjs-2';
import React from 'react';
import { selectRetailerMarginMonthly, selectRetailSalesMonthly, selectUnitsSoldMonthly, selectWeekEndingMonthly, selectWholesaleSalesMonthly } from '../redux/selectors/orderSelector';
import { useSelector } from 'react-redux';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

const Chart = () =>{  
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const retailSales = useSelector(selectRetailSalesMonthly);
    const retailerMargin = useSelector(selectRetailerMarginMonthly);
    const unitsSold = useSelector(selectUnitsSoldMonthly);
    const weekEnding = useSelector(selectWeekEndingMonthly);
    const wholesaleSales = useSelector(selectWholesaleSalesMonthly);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                align: 'start',
                text: 'Analyze Monthly Data',
            },
        },
        scales: {
            y: {
                suggestedMin: 0,
            }
        }
    };

    const data = {
        labels: weekEnding,
        datasets: [{
            label: 'Retail Sales',
            backgroundColor: 'red',
            borderColor: 'red',
            data: retailSales,
        },
        {
            label: 'Retailer Margins',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: retailerMargin,
        },
        {
            label: 'Units Sold',
            backgroundColor: 'green',
            borderColor: 'green',
            data: unitsSold,
        },
        {
            label: 'Wholesale Sales',
            backgroundColor: 'grey',
            borderColor: 'grey',
            data: wholesaleSales,
        }]
    };

    return <Line options={options} data={data} />;
}
export default Chart;