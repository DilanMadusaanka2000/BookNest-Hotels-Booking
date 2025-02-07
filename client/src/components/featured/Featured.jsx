import React from 'react'
import "./Featured.css";
import useFetch from '../../hooks/useFetch';


function Featured() {
  const { data, loading, error } = useFetch("/hotel/countByCity?cities=colombo,nuwaraeliya,matara");


  return (
    <div className="featured">
      { 
        loading ? (
          "loading please wait"

        ):(
        <>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1546656495-fc838de15e5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sb21ibyUyQyUyMHNyaSUyMGxhbmthfGVufDB8fDB8fHww"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Colombo</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://images.pexels.com/photos/319879/pexels-photo-319879.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nuwaraeliya</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/id/1218837024/photo/traditional-stilt-fisherman-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=JwjU2m4fBuXYvwYQd1Jh4Ay8MfE9-16539VNMLrPklk="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Matara</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div> </> )}
    </div>
  )
}

export default Featured