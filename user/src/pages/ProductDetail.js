import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../actions/productAction";
import { useParams } from "react-router-dom";

import { Rating } from "react-simple-star-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWeightHanging,
    faShirt,
    faCalendarDays,
    faMagnifyingGlass,
    faShapes,
    faWarehouse,
    faEye,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";


function ProductDetail() {
    const { id } = useParams()
    // console.log(+id)
    const dispatch = useDispatch();

    const {
        getDetailProductResult,
        getDetailProductLoading,
        getDetailProductError,
    } = useSelector((state) => state.productReducer);

    useEffect(() => {
        console.log("1.Masuk UseEffect");
        dispatch(getProductDetail(+id));
    }, [dispatch]);


    return (
        <div className="bg-color-product">
            <br></br>
            <br></br>
            <div className="container row-bg-color">
                <br></br>
                {getDetailProductResult ? (
                    getDetailProductResult.map((e) => {
                        return (
                            <>
                                <div className="row justify-content-center ">
                                    <div className="col-7">
                                        <img
                                            src={require(`../images/${e.product_images[0].prim_filename}`)}
                                            alt=""
                                            align="center"
                                            className="img-fluid img-responsive img-thumbnail"
                                        />
                                    </div>
                                    <div className="col-5 ">
                                        <div className="card-body">
                                            <h5 className="card-title">{e.prod_name}</h5>
                                            <p className="card-text">{e.prod_desc}</p>
                                            <p className="card-text"><span>Rp.</span>{e.prod_price}</p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faWarehouse}></FontAwesomeIcon>{" "}
                                                        Jumlah Stock :{" "}
                                                    </span>
                                                    {e.prod_stock}{" "}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faWeightHanging}></FontAwesomeIcon>{" "}
                                                        Berat Barang:{" "}
                                                    </span>{" "}
                                                    {e.prod_weight}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>{" "}
                                                        Expire:{" "}
                                                    </span>{" "}
                                                    {e.prod_expire}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faShirt}></FontAwesomeIcon> Brand:{" "}
                                                    </span>{" "}
                                                    {e.prod_brand}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faShapes}></FontAwesomeIcon>{" "}
                                                        Category:{" "}
                                                    </span>{" "}
                                                    {e.prod_category}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>{" "}
                                                        Condition:{" "}
                                                    </span>{" "}
                                                    {e.prod_condition}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    <span>
                                                        <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> Views: {" "}
                                                    </span>{" "}
                                                    {e.prod_views}
                                                </small>
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted">
                                                    {" "}
                                                    <Rating initialValue={e.prod_rating} />
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <br></br>
                            </>
                        )
                    })
                ) : getDetailProductLoading ? (
                    <p>Loading</p>
                ) : (
                    <p>{getDetailProductError ? getDetailProductError : "Data Kosong"}</p>
                )}
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    );
}

export default ProductDetail;