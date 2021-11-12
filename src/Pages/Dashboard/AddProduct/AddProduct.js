import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
      fetch('http://localhost:5000/products', {method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    } )
    .then(res=>res.json())
      .then(res=> {
          if(res.insertedId){
              alert('Added successfully');
              reset()
          }
      })
    }
    return (
        <div className="add-product">
            <h1 className="text-center">Add a new Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="">
      <input {...register("title", { required: true, maxLength: 20 })} placeholder="title" />
      <textarea {...register("des")} placeholder="description" required />

      <input type="number" {...register("price")} placeholder="price" required />
      <input {...register("img")} placeholder="Image url" required />
      <input className="btn-info" type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;