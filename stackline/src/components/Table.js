import BootStrapTable from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react';
import { selectOrder } from '../redux/selectors/orderSelector';
import { useSelector } from 'react-redux';

const Table = () =>{
    const order = useSelector(selectOrder);
    const [sales, setSales] = useState(order?.sales)
    const [ascending, setAscending] = useState(false);
    
    const handleSort = (sortBy)=>{
        let tempArr = [...sales]
        if(ascending){
            tempArr?.sort((a, b)=>(a[sortBy] > b[sortBy]) ? 1 : -1)
        }else{
            tempArr?.sort((a, b)=>(a[sortBy] < b[sortBy]) ? 1 : -1) 
        }
        setAscending(!ascending);
        setSales(tempArr);
    };

    useEffect(()=>{
        setSales(order?.sales);
    }, [order?.sales])

    return <BootStrapTable>
        <thead>
            <tr>
                <th style={{textAlign: 'right'}} onClick={(e)=>{handleSort('weekEnding')}}>Week Ending</th>
                <th style={{textAlign: 'right'}} onClick={(e)=>{handleSort('retailSales')}}>Retail Sales</th>
                <th style={{textAlign: 'right'}} onClick={(e)=>{handleSort('wholesaleSales')}}>Wholesale Sales</th>
                <th style={{textAlign: 'right'}} onClick={(e)=>{handleSort('unitsSold')}}>Units Sold</th>
                <th style={{textAlign: 'right'}} onClick={(e)=>{handleSort('retailerMargin')}}>Retailer Margin</th>
            </tr>
        </thead>
        <tbody>
            {sales?.map((item, key)=>{
                return <tr key={key}>
                    <td style={{textAlign: 'right'}}>{item?.weekEnding}</td>
                    <td style={{textAlign: 'right'}}>${item?.retailSales}</td>
                    <td style={{textAlign: 'right'}}>${item?.wholesaleSales}</td>
                    <td style={{textAlign: 'right'}}>{item?.unitsSold}</td>
                    <td style={{textAlign: 'right'}}>${item?.retailerMargin}</td>
                </tr>
            })}
        </tbody>
    </BootStrapTable>;
}
export default Table;