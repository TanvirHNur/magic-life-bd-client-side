import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const WriteAReview = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        // data.status= 'pending';
        // data.id = _id;
        // data.product = title;
        // console.log(data)
        fetch('http://localhost:5000/reviews',  {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(data)
          } )
        .then(res=>{
            console.log(res)
            if(res.insertedId){
                alert('Thank you For your valuable comment. Your comment is important to us. We will publish it on review section right now');
                reset();

            }
        })
        alert('Thank you For your valuable comment. Your comment is important to us. We will publish it on review section right now');
                reset();

    };
    return (
        <div>
              <div className="d-flex justify-content-center">
             <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                  <h4>Write A Review</h4>
                 {/* register your input into the hook by invoking the "register" function */}
                 <input  defaultValue={user.displayName} {...register("name")} />

                 {/* include validation with required or other standard HTML validation rules */}
                 <input defaultValue={user.email} {...register("email", { required: true })} />
                 {/* errors will return when field validation fails  */}
                 {errors.email && <span className="error">This field is required</span>}
                 <input placeholder="Phone" {...register("phone", { required: true })} />
                 {errors.phone && <span className="error">This field is required</span>}
                 <input placeholder="rating" type="number" {...register("rating" , { required: true }, { min: 1, max: 5 })} />
                 {errors.rating && <span className="error">This field is required</span>}
                 <input placeholder="comment" type="text" {...register("review" , { required: true }, { min: 10, max: 205 })} />
                 {errors.review && <span className="error">This field is required</span>}
                

                 <input type="submit" />
             </form>
             </div>
        </div>
    );
};

export default WriteAReview;