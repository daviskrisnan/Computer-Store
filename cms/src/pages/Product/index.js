import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch,
    //  useSelector 
    } from 'react-redux';
import { getProduct } from '../../actions/productAction';

// import { MdDeleteForever } from "react-icons/md";
// import { AiFillEdit } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";


const Product = () => {
    const dispatch = useDispatch();

    // const { getProductResult, getProductLoading, getProductError } = useSelector(
    //     (state) => state.productReducer
    // );

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch]);


    return (
        <>
            <div className="col-12 my-2">
                <button type="button" className="btn btn-secondary">
                    <AiFillFileAdd></AiFillFileAdd>
                    <Link to="/product/add" className="add">
                        Add
                    </Link>
                </button>
                <Outlet></Outlet>
            </div>
        </>
    )
}

export default Product;