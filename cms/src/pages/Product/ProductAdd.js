import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getProduct } from '../../actions/productAction';
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';

const ProductAdd = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [prod_name, setProd_name] = useState("");
    const [prod_desc, setProd_desc] = useState("");
    const [prod_price, setProd_price] = useState("");
    const [prod_stock, setProd_stock] = useState("");
    const [prod_expire, setProd_expire] = useState("");
    const [prod_weight, setProd_weight] = useState("");
    const [prod_category, setProd_category] = useState("");
    const [prod_brand, setProd_brand] = useState("");
    const [prod_condition, setProd_condition] = useState("");
    const [prod_total_sold, setProd_total_sold] = useState("");
    const [prod_rating, setProd_rating] = useState("");
    const [prod_views, setProd_views] = useState("");

    const { addProductResult } = useSelector((state) => state.productReducer);

    const addHandler = (e) => {
        e.preventDefault();
        dispatch(
            addProduct({
                prod_name: prod_name,
                prod_desc: prod_desc,
                prod_price: prod_price,
                prod_stock: prod_stock,
                prod_expire: prod_expire,
                prod_weight: prod_weight,
                prod_category: prod_category,
                prod_brand: prod_brand,
                prod_condition: prod_condition,
                prod_total_sold: prod_total_sold,
                prod_rating: prod_rating,
                prod_views: prod_views
            })
        );
        Swal.fire({
            icon: "success",
            title: "Add Post Success!",
            text: `You've successfully created an post!`,
        })
        navigation('/product');
    };

    useEffect(() => {
        if (addProductResult) {
            dispatch(getProduct());
        }
    }, [addProductResult, dispatch])

    return (
        <>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h5>Tambah Product</h5>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Nama Product</label>
                        <input type='text' className='form-control' placeholder='masukkan nama produk'
                            onChange={(e) => setProd_name(e.target.value)} value={prod_name} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Deskripsi Product</label>
                        <input type='text' className='form-control' placeholder='masukkan deskripsi produk'
                            onChange={(e) => setProd_desc(e.target.value)} value={prod_desc} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Harga Product</label>
                        <input type='text' className='form-control' placeholder='Rp. 00'
                            onChange={(e) => setProd_price(e.target.value)} value={prod_price} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Jumlah Stock</label>
                        <input type='text' className='form-control' placeholder='masukkan jumlah stock produk'
                            onChange={(e) => setProd_stock(e.target.value)} value={prod_stock} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Expire Product</label>
                        <input type='date' className='form-control' placeholder='masukkan nama product'
                            onChange={(e) => setProd_expire(e.target.value)} value={prod_expire} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Berat Product</label>
                        <input type='text' className='form-control' placeholder='masukkan berat product'
                            onChange={(e) => setProd_weight(e.target.value)} value={prod_weight} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Kategori Product</label>
                        <input type='text' className='form-control' placeholder='masukkan jenis kategori product'
                            onChange={(e) => setProd_category(e.target.value)} value={prod_category} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Brand Product</label>
                        <input type='text' className='form-control' placeholder='masukkan nama brand product'
                            onChange={(e) => setProd_brand(e.target.value)} value={prod_brand} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Kondisi Product</label>
                        <input type='text' className='form-control' placeholder='Baru atau Bekas'
                            onChange={(e) => setProd_condition(e.target.value)} value={prod_condition} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Total Terjual</label>
                        <input type='text' className='form-control' placeholder='total terjual'
                            onChange={(e) => setProd_total_sold(e.target.value)} value={prod_total_sold} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Rating Product</label>
                        <input type='text' className='form-control' placeholder='rate'
                            onChange={(e) => setProd_rating(e.target.value)} value={prod_rating} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <label className='form-label'>Total Views</label>
                        <input type='text' className='form-control' placeholder='views'
                            onChange={(e) => setProd_views(e.target.value)} value={prod_views} />
                    </div>
                </div>

                <div className='col-12 my-12'>
                    <div className='mb-3'>
                        <button type='submit' className='btn btn-primary' onClick={() => addHandler()}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductAdd