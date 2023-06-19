import React, { useState } from 'react';
import { categories } from '../data/data';

const Category = () => {
  const [categoryList, setCategoryList] = useState(categories);

  return (
    <div className='flex flex-wrap '>
      {categoryList.map((category, index) => (
        <div key={index} className='flex mx'  >
          <img src={category.image} alt={category.name} />
          <p>{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;

