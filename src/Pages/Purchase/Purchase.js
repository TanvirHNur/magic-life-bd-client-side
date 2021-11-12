import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import './Purchase.css';

const Purchase = () => {
    const {id} =useParams();
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
        .catch(err => {
            console.log(err)
        })
    } , [id]);
    const BookedProducts = products.find(product => product._id == id);
    const { _id,title,}= BookedProducts || '';
    console.log(BookedProducts)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    // console.log(user.displayName)
    const onSubmit = data => {
        data.status= 'pending';
        data.id = _id;
        data.product = title;
        console.log(data)
        fetch('http://localhost:5000/orders',  {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          } )
        .then(res=>{
            console.log(res)
            if(res.insertedId){
                alert('Order placed successfully');
                reset();
            }
        })
        alert('Order placed successfully');
                reset();

    };
    return ( 
        <div>
            <div className="booking-info">
                <h1 className="review-text ps-5">Review Your Order</h1>
                <h2 className="ps-5">{title}  <span className="fs-6">6/7 Days Delivary</span></h2>
            </div>
             <div className="d-flex justify-content-center">
             <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                  <h4>Customer Information</h4>
                 {/* register your input into the hook by invoking the "register" function */}
                 <input  defaultValue={user.displayName} {...register("name")} />

                 {/* include validation with required or other standard HTML validation rules */}
                 <input defaultValue={user.email} {...register("email", { required: true })} />
                 {/* errors will return when field validation fails  */}
                 {errors.email && <span className="error">This field is required</span>}
                 <input placeholder="Phone" {...register("phone", { required: true })} />
                 {errors.phone && <span className="error">This field is required</span>}
                 <input placeholder="Addres"  {...register("address")} />
                 <input placeholder="City" {...register("city")} />
                

                 <input type="submit" />
             </form>
             </div>
        </div>
    );
};

export default Purchase;