import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Product from '../pages/ProductPage';
import ProductDetail from '../pages/ProductDetail';

import Order from '../pages/OrderPage';
import OrderEdit from '../pages/OrderEdit';

import Profile from '../pages/Profile';
import Success from '../pages/Success/index';


const MainContent = () => {
    return (
        <>
            <Navbar />
            <Routes path="/home">
                <Route path='' element={<Product />} />
                <Route path='detail'>
                    <Route path=':id' element={<ProductDetail />} />
                </Route>

                <Route path='/order'>
                    <Route path='' element={<Order/>} />
                    <Route path='edit'>
                        <Route path=':id' element={<OrderEdit/>} />
                    </Route>
                    <Route path='delete'>
                        <Route path=':id' />
                    </Route>
                    <Route path='checkout'>
                        <Route path=':id' element={<Success/>} />
                    </Route>
                </Route>
                <Route path='/profile' element={<Profile/>} />
            </Routes>
        </>
    )
}

export default MainContent