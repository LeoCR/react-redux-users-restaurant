import React,{useEffect,useState} from "react";
import {connect} from "react-redux";
import api from "../../apis/api";
import { withRouter } from "react-router";
const UserInvoice=props=>{
    const [orderProducts,setOrderProducts]=useState([]);
    const fetchOrders=async()=>{
        const {order_code}=props.match.params;
        await api.get('/api/invoice/show/products/'+order_code+'/'+props.user.username+'/'+props.user.id)
        .then((res)=>{
            setOrderProducts(res.data)
        })
    }
    useEffect(()=>{
        fetchOrders();
    },[orderProducts])
    
    const renderProductsOrder=()=>{
        var totalPrice=0;
        if(orderProducts.length>0){
            orderProducts.forEach(product => {
                totalPrice+=parseFloat(product.total)
            });
            return( 
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity per Product</th>
                                <th>Pricer per Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderProducts.map((order)=>
                                        <tr>
                                            <td>{order.product_name}</td>
                                            <td>{order.product_quantity}</td>
                                            <td>{order.total}</td>
                                        </tr>
                                )
                            }
                            <tr className='total-row'>
                                <td colSpan="2">
                                    <p style={{color:'#fff'}}>Total :</p>
                                </td>
                                <td>
                                    <p style={{color:'#fff'}}>{totalPrice.toFixed(2)}</p>
                                </td>
                            </tr>
                        </tbody>        
                    </table>
                </div>
            )
        }
    }
    return(
        <React.Fragment>
            <h1>Invoice</h1>
            {(orderProducts.length>0)?renderProductsOrder():<p>You don't have invoices</p>}
        </React.Fragment>
    )
    
}
const mapStateToProps=(state)=>{
    return{
      user:state.user.user
    }
}
export default withRouter(connect(mapStateToProps)(UserInvoice));