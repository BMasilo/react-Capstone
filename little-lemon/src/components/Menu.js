import React from 'react';
import recipes from '../recipes'
import Swal from 'sweetalert2';

const handleOrder = (id) => {
    console.log(id, "id is clicked");
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, order it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
            title: "Order Confirmed!",
            text: "Your order has been processed, Enjoy!.",
            icon: "success"
        });
        }
    });
}

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='menu-header'>
            <h2>This weeks Specials!</h2>
            <button>Order</button>
            </div>
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''></img>
                            <div className='menu-content'>
                                <div className='heading'>
                                    <h5>{recipe.title}</h5>
                                    <p>{recipe.price}</p>
                                </div>
                                <p>{recipe.description}</p>
                                <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>Order Now</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Menu;