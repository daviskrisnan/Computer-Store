import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

import Product from '../pages/Product/index';
import ProductPage from '../pages/Product/ProductPage';
import ProductAdd from '../pages/Product/ProductAdd';
import ProductEdit from '../pages/Product/ProductEdit';
import ProductDetail from '../pages/Product/ProductDetail';

import Order from '../pages/Order/OrderPage';
import OrderEdit from '../pages/Order/OrderEdit';

import Profile from '../pages/Profile';
import Success from '../pages/Success/index';


const MainContent = () => {
    return (
        <>
            <Navbar />
            <Routes path="/home">
                <Route path='' element={<ProductPage />} />
                <Route path='/add' element={<ProductAdd />} />
                <Route path='edit'>
                    <Route path=':id' element={<ProductEdit />} />
                </Route>
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