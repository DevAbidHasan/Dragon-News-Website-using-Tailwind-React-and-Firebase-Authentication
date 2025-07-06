import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise=fetch("/categories.json").then((res)=>res.json());
// console.log(categoryPromise);


const Categories = () => {
    const categories=use(categoryPromise);
    console.log(categories);
    return (
        <div>
            <h2 className='font-bold text-center'>All Categories</h2>
            <div className='grid gap-3 mt-6 grid-cols-1'>
                {
                    
                    categories.map(category=><NavLink 
                        key={category.id} className="btn bg-base-100 font-semibold text-accent border-0 hover:bg-base-200" to={`/category/${category.id}`}>
                        {category.name}
                        </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;
