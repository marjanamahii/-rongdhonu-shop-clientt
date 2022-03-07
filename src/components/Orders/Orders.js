import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import swal from "sweetalert";
import './Orders.css';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    // const history = useHistory();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:7000/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    console.log("Found orders")
                    return res.json();
                }
                else if (res.status === 401) {
                    console.log("Navigate to login");
                    // navigate('/login')
                }

            })
            .then(data => setOrders(data));
    }, [])

    const cancelOrder = (id) => {
        swal({
            title: "Are you sure?",
            text: "Cancel for this order registration.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:7000/orders/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Deleted!", "Deleted Successfully!", "success");
                            }
                        })
                } else {
                    swal("Delete Canceled!");
                }
            });
    }

    return (
        <div className='py-3'>
            <div className="container myOrder">
                {/* <h2>You have placed: {orders.length} Orders</h2> */}
                <h2 className="text-center my-4">
                    My <span style={{ color: "#000000" }}>Orders: {orders.length}</span>
                </h2>
                <Table striped bordered hover size="sm" responsive="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Order Status</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order =>
                            <tr>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                {order.status === "Pending" ? (
                                    <td className="text-danger fw-bold">{order.status}</td>
                                ) : (
                                    <td className="text-success fw-bold">{order.status}</td>
                                )}
                                {order?.payment ? <td className="text-success fw-bold">Paid</td> : <td className="text-danger fw-bold">Unpaid</td>}
                                {order?.payment ? <td><button className="payBtn" disabled>Paid</button></td> : <td><Link to={`/dashboard/payment/${order._id}`}><button className="payBtn">Pay</button></Link></td>}
                                <td>
                                    <button onClick={() => cancelOrder(order._id)} className="cancelBtn">Cancel</button>
                                </td>
                            </tr>
                            // <li
                            //     key={order._id}
                            // >{order.name} : {order.email}</li>
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Orders;