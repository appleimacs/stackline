import Button from 'react-bootstrap/Button';
import React from 'react';
import { selectOrder } from '../redux/selectors/orderSelector';
import { useSelector } from 'react-redux';

const Sidebar = () =>{  
    const order = useSelector(selectOrder);

    return <>
        <img src={order?.image} width="100%" height="auto" alt={order?.title} />
        <h2 style={{textAlign: 'center'}}>{order?.title}</h2>
        <p style={{textAlign: 'center', fontWeight: '200'}}>{order?.subtitle}</p>
        {order?.tags?.map((tag, key)=>{
            return <Button key={key} size={'small'} style={{margin: '5px'}} variant="outline-secondary">{tag}</Button>
        })}
    </>;
}
export default Sidebar;