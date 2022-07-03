import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getOrderUser,
  deleteOrder,
  detailOrder,
} from "../actions/orderAction";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListOl,
  faMapLocationDot,
  faMapPin,
  faFileInvoice,
  faBox,
  faPencil,
  faTrashCan,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function OrderPage() {
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
      <div className="color-full-page">
        <div className="container-sm">
          <br></br>
          {getOrderUserResult ? (
            getOrderUserResult.map((e) => {
              return (
                <>
                  <div className="row ">
                    <div className="col-md-8 offset-md-2 justify-content-center bg-color-order ">
                      <br></br>
                      <h1 className="text-center">Order</h1>
                      <hr></hr>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon>
                          </span>{" "}
                          Jumlah Barang
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_total_qty}{" "}
                        </h5>
                      </div>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faMapLocationDot}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Alamat Pengiriman
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_addres}
                        </h5>
                      </div>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>
                          </span>{" "}
                          Kota Pengiriman
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_city}
                        </h5>
                      </div>
                      <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link
                          className="btn btn-sm btn btn-outline-primary"
                          onClick={() => dispatch(detailOrder(e))}
                          to={`edit/${e.id}`}
                        >
                          <span>
                            <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
                          </span>{" "}
                          Edit
                        </Link>

                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() =>
                            dispatch(
                                deleteOrder(
                                localStorage.getItem("access_token"),
                                e.id
                              )
                            )
                          }
                        >
                          <span>
                            <FontAwesomeIcon
                              icon={faTrashCan}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Delete
                        </button>
                      </div>

                      <hr></hr>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon
                              icon={faFileInvoice}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Harga Total
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_total_due}
                        </h5>
                      </div>

                      <div className="card-body" style={{ width: "18rem" }}>
                        <h4 className="card-title">
                          <span>
                            <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
                          </span>{" "}
                          Status Order
                        </h4>
                        <h5 className="card-subtitle mb-8 text-muted text-align">
                          {e.order_status}
                        </h5>
                      </div>
                      <div className="edit-btn d-grid gap-2 d-md-flex justify-content-md-center">
                        <Link
                          className="btn btn-sm btn-outline-success"
                          to={`checkout/${e.id}`}
                        >
                          <span>
                            <FontAwesomeIcon
                              icon={faMoneyBill}
                            ></FontAwesomeIcon>
                          </span>{" "}
                          Check Out
                        </Link>
                      </div>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                  <br></br>
                </>
              );
            })
          ) : getOrderUserLoading ? (
            <p>Loading</p>
          ) : (
            <p>{getOrderUserError ? getOrderUserError : "Data Kosong"}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default OrderPage;