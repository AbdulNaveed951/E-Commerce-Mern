import React from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar.js';
import Metadata from '../Metadata';
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Doughnut, Line } from "react-chartjs-2";
// import { Doughnut , Line } from "react-chartjs-2";
import {Doughnut, Line } from 'react-chartjs-2';


const Dashboard = () => {
    // const lineState = {
    
     
        // labels: ['Jun', 'Jul', 'Aug'],
        // datasets: [
        //   {
        //     id: 1,
        //     label: '',
        //     data: [5, 6, 7],
        //   },
          
        // ]
    
    // }

    //     labels: ["Initial Amount", "Amount Earned"],
    //     datasets: [
    //       {
    //         label: "TOTAL AMOUNT",
    //         backgroundColor: ["tomato"],
    //         hoverBackgroundColor: ["rgb(197, 72, 49)"],
    //         data: [0, 4000],
    //       },
    //     ],
      // };
      

      
      // const doughnutState = {
      //   // labels: ["Out of Stock", "InStock"],
      //   // datasets: [
      //   //   {
      //   //     backgroundColor: ["#00A6B4", "#6800B4"],
      //   //     hoverBackgroundColor: ["#4B5000", "#35014F"],
      //   //     // data: [outOfStock, products.length - outOfStock],
      //   //   },
      //   // ],
        
        
      // };
  return (
    <div className="dashboard">
        <Metadata title="Dashboard - Admin Panel" />
        <Sidebar />
        <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>
       
        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> 
              {/* ₹{totalAmount} */}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              {/* <p>{products && products.length}</p> */}
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              {/* <p>{orders && orders.length}</p> */}
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              {/* <p>{users && users.length}</p> */}
            </Link>
          </div>
        </div>
        <div className="lineChart">
           {/* <Line data = {lineState} />  */}
        </div>

        <div className="doughnutChart">
          {/* <Doughnut data={doughnutState} /> */}
       
        </div>
        </div>
        </div>
  )
}

export default Dashboard