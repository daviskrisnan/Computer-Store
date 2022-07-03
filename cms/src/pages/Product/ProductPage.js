import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getProductDetail, deleteProduct } from "../../actions/productAction";
// import { addOrder } from "../actions/orderAction";

// import { MdDeleteForever } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Swal from "sweetalert2";


function ProductPage() {
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const { getProductResult, getProductLoading, getProductError, deleteProductResult } = useSelector(
        (state) => state.productReducer
    );

    // const { postOrderResult } = useSelector((state) => state.orderReducer);

    // useEffect(() => {
    //     if (postOrderResult) {
    //         Swal.fire("Order Successfully!", "Clicked the button!", "success");
    //         navigate("/order");
    //     }
    // });

    useEffect(() => {
        console.log("1.Masuk UseEffect");
        dispatch(getProduct());
    }, [dispatch]);

    const deleteHandler = (id) => {
        dispatch(deleteProduct(id));
        Swal.fire({
            icon: "success",
            title: "Delete Success!",
            text: `You've successfully Delete an post!`,
        });
        navigation('/product');
    };

    useEffect(() => {
        if (deleteProductResult) {
            dispatch(getProduct());
        }
    }, [deleteProductResult, dispatch])
    return (
        <>
            <div className="row">
                <div className="col-12 my-2">
                    <button type="button" className="btn btn-secondary">
                        <AiFillFileAdd></AiFillFileAdd>
                        <Link to="/product/add" className="add">
                            Add
                        </Link>
                    </button>
                    <Outlet></Outlet>
                </div>
                <div className="col-md-12">
                    <div className="table-wrap">
                        <table className="table table-striped table-responsive">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Nama Produk</th>
                                    <th>Deskripsi</th>
                                    <th>Harga</th>
                                    <th>Stok</th>
                                    <th>Expire</th>
                                    <th>Berat</th>
                                    <th>Kategori</th>
                                    <th>Brand</th>
                                    <th>Kondisi</th>
                                    <th>Total Terjual</th>
                                    <th>Rating</th>
                                    <th>View</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getProductResult ? (
                                    getProductResult.map((product, i) => {
                                        return (
                                            <>
                                                <tr key={product.id}>
                                                    <th scope="row">{i + 1}</th>
                                                    <td>{product.prod_name}</td>
                                                    <td>{product.prod_desc}</td>
                                                    <td>{product.prod_price}</td>
                                                    <td>{product.prod_stock}</td>
                                                    <td>{product.prod_expire}</td>
                                                    <td>{product.prod_weight}</td>
                                                    <td>{product.prod_category}</td>
                                                    <td>{product.prod_brand}</td>
                                                    <td>{product.prod_condition}</td>
                                                    <td>{product.prod_total_sold}</td>
                                                    <td>{product.prod_rating}</td>
                                                    <td>{product.prod_views}</td>
                                                    <td>
                                                        <button type="button" className="btn btn-success"
                                                            onClick={() => dispatch(getProductDetail(product))}>
                                                            <AiFillEdit />
                                                            <Link to={`/product/edit/${product.id}`} className='edit'>Edit</Link>
                                                        </button>
                                                    </td>

                                                    <td>
                                                        <button href="/product" type="button" className="btn btn-success"
                                                            onClick={() => deleteHandler(product.id)}>Delete</button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                ) : getProductLoading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <p>{getProductError ? getProductError : "Data Kosong"}</p>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div className="banner-home">
                <img
                    className="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                    src={image_3}
                    alt=""
                ></img>
            </div> */}
            {/* <div className="bg-color-product">
                <div className="container">
                    <br></br>
                    <h1 className="product-title">All Products</h1>
                    <br></br>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {getProductResult ? (
                            getProductResult.map((e) => {
                                return (
                                    <>
                                        <div className="col">
                                            <div className="card h-100">
                                                <img
                                                    src={require(`../images/${e.product_images[0].prim_filename}`)}
                                                    className="card-img-top img-thumbnail"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">{e.prod_name}</h5>
                                                    <p className="card-text">
                                                        <span>Rp. </span> {e.prod_price}
                                                    </p>
                                                    <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                                                        <Link
                                                            className="btn btn-sm btn btn-outline-primary"
                                                            onClick={() => dispatch(getProductDetail(e.id))}
                                                            to={`detail/${e.id}`}
                                                        >
                                                            <span>
                                                                <FontAwesomeIcon
                                                                    icon={faInfo}
                                                                ></FontAwesomeIcon>
                                                            </span>{" "}
                                                            Detail
                                                        </Link>
                                                        <button
                                                            className="btn btn-sm btn-outline-success"
                                                            onClick={() =>
                                                                dispatch(
                                                                    addOrder(
                                                                        localStorage.getItem("access_token"),
                                                                        e.id
                                                                    )
                                                                )
                                                            }
                                                        >
                                                            <span>
                                                                <FontAwesomeIcon
                                                                    icon={faPlus}
                                                                ></FontAwesomeIcon>
                                                            </span>{" "}
                                                            Add
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        ) : getProductLoading ? (
                            <p>Loading</p>
                        ) : (
                            <p>{getProductError ? getProductError : "Data Kosong"}</p>
                        )}
                        <br></br>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default ProductPage;