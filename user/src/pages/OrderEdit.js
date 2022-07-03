import React, { useEffect, useState } from "react";
import { updateOrderUser } from "../actions/orderAction";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import image_bg from "./img-bg-5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListOl,
    faMapLocationDot,
    faMapPin,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Swal from "sweetalert2";

function OrderEdit() {
    const navigate = useNavigate();
    const [order_city, setCity] = useState("");
    const [order_addres, setAddress] = useState("");
    const [order_total_qty, setTotalqty] = useState("");
    const [id, setID] = useState("");
      const [order_total_due, setTotaldue] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            updateOrderUser(
                localStorage.getItem("access_token"),
                {
                    order_city: order_city,
                    order_addres: order_addres,
                    order_total_qty: order_total_qty,
                },
                +id
            )
        );
    };
    const { updateorderuserResult, getdetailorderuserResult } = useSelector(
        (state) => state.orderReducer
    );

    useEffect(() => {
        if (updateorderuserResult) {
            Swal.fire("Update Successfully!", "Clicked the button!", "success");
            navigate("/order");
        }
    });

    useEffect(
        () => {
            if (getdetailorderuserResult) {
                setCity(getdetailorderuserResult.order_city);
                setAddress(getdetailorderuserResult.order_addres);
                setTotalqty(getdetailorderuserResult.order_total_qty);
                setTotaldue(getdetailorderuserResult.order_total_due);
                setID(getdetailorderuserResult.id);
            }
        },
        [getdetailorderuserResult],
        [dispatch]
    );

    return (
        <div className="color-full-page">
            <div className="container-sm">
                <div className="row ">
                    <div className="col-md-6 offset-md-3 line-white"></div>
                    <div className="col-md-6 offset-md-3 justify-content-center bg-color-order">
                        {/* <img
              className="img-fluid img-responsive mx-auto d-block"
              src={image_bg}
              alt=""
            /> */}
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className="input-group flex-nowrap input-align">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="order_total_qty"
                                    value={order_total_qty}
                                    onChange={(event) => setTotalqty(event.target.value)}
                                />
                            </div>

                            <div className="input-group flex-nowrap input-align">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faMapLocationDot}></FontAwesomeIcon>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Caption"
                                    name="order_addres"
                                    value={order_addres}
                                    onChange={(event) => setAddress(event.target.value)}
                                //
                                />
                            </div>

                            <div className="input-group flex-nowrap input-align">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Caption"
                                    name="order_city"
                                    value={order_city}
                                    onChange={(event) => setCity(event.target.value)}
                                //
                                />
                            </div>

                            {/* <div className="input-group flex-nowrap input-align">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Caption"
                  name="order_city"
                  value={order_total_due}
                  onChange={(event) => setTotaldue(event.target.value)}
                  //
                />
              </div> */}

                            <div className=" justify-content-center input-group flex-nowrap submit-btn input-align">
                                <button className="btn text-add" type="submit">
                                    Edit
                                </button>
                            </div>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderEdit;