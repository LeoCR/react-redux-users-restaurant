import React,{useEffect,useState} from "react";
import {connect} from "react-redux";
import api from "../../apis/api";
import {Link} from "react-router-dom";
export const UserHistory =props=>{
    const [invoices,setInvoices]=useState([]);
    const fetchInvoices=async()=>{
        await api.get('/api/get-invoices/'+props.user.id)
        .then((res)=>{
            if(res.data.length>0){
                setInvoices(res.data)        
            }
        });
    }
    useEffect(()=>{
        fetchInvoices();
    },[invoices])
    const getInvoices=()=>{
        if(invoices.length>0){
            return(
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Invoice #Number</th>
                                <th>Date</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoices.map((inv)=>
                                    <tr>
                                        <td>{inv.order_code}</td>
                                        <td>{inv.date_of_billing.replace('.000Z','')}</td>
                                        <td><Link className="btn btn-view-more" to={`/user/history/invoice/${inv.order_code}`}>View</Link></td>
                                    </tr>
                            )}
                        </tbody>
                    </table>
                </div>
          )  
        }
        else{
            return(
                <React.Fragment>
                    <p>You don't have any purchase</p>
                </React.Fragment>
            )
        }
    }
    
    return(
        <React.Fragment>
            <h1>User History</h1>
            {getInvoices()}
        </React.Fragment>
    )
    
}
const mapStateToProps=(state)=>{
    return{
      user:state.user.user
    }
}
export default connect(mapStateToProps)(UserHistory);