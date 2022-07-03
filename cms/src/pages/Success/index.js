import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderUser } from "../../actions/orderAction";

import "./css/main.css";
import "./css/util.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "./fonts/iconic/css/material-design-iconic-font.min.css";
// import { bg } from "./images";
import Swal from "sweetalert2";

const Succes = () => {
    const {
        getOrderUserResult,
        getOrderUserLoading,
        getOrderUserError,
        deleteOrderUserResult,
    } = useSelector((state) => state.orderReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        if (deleteOrderUserResult) {
            Swal.fire("Delete Successfully!", "Clicked the button!", "success");
            dispatch(getOrderUser(localStorage.getItem("access_token")));
        }
    });

    useEffect(() => {
        console.log("1.Masuk UseEffect");
        dispatch(getOrderUser(localStorage.getItem("access_token")));
    }, [dispatch]);

    return (
        <>
            <div class="limiter">
                <div
                    class="container-login100"
                //   style={{ backgroundImage: `url(${bg})` }}
                >
                    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form class="login100-form validate-form">
                            <span class="login100-form-title p-b-49">
                                Yeay Checkout Succes
                            </span>
                            <hr></hr>
                            <div>
                                <h2
                                    style={{
                                        color: "blue",
                                        fontFamily: "dosis-regular",
                                        textAlign: "center",
                                    }}
                                >
                                    Your Transaction Number Is
                                </h2>
                            </div>

                            <hr></hr>
                            {getOrderUserResult ? (
                                getOrderUserResult.map((e) => {
                                    return (
                                        <>
                                            <div class="center">
                                                <p> {e.order_payt_trx_number}</p>
                                            </div>
                                        </>
                                    );
                                })
                            ) : getOrderUserLoading ? (
                                <p>Loading</p>
                            ) : (
                                <p>{getOrderUserError ? getOrderUserError : "Data Kosong"}</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Succes;