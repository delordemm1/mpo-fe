import React, { useState } from "react";
import classnames from 'classnames'
import { Slider } from "@material-ui/core";
import Link from "next/link";

const Category = ({ categories, activeCategory, setActiveCategory }) => {

  const [range, setRange] = useState([50, 400]);
  const [brands, setBrands] = useState([])


  const handleChanges = (event, newValue) => {
    setRange(newValue);
  };

  const categoryClassNames = (category) => {
    return classnames({
      "text-gray-500 px-4 py-2  hover:bg-blue-500 hover:text-white text-left": true,
      "bg-blue-500 text-white": activeCategory === category,
    })
  }
  return (
    <>
      <div className="widget_list widget_filter">
        <h4 className=" font-semibold text-gray-800 pb-3 border-blue-600">
          Price
        </h4>

        <form onSubmit={(e) => priceFilter(e)}>
          <Slider value={range} onChange={handleChanges} min={0} max={500} valueLabelDisplay="auto" className='price_slider' />
          <div className='price_color'>{`$${range?.[0]} - $${range?.[1]}`}</div>
        </form>
      </div>

      <div className="pb-5 mt-5">
        <h4 className="mb-4 font-semibold text-gray-800 pt-3 border-t-2 border-blue-600">
          Categories
        </h4>
        {/* <div className="flex flex-col h-[200px] lg:h-full overflow-y-scroll divide-y divide-slate-300">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={categoryClassNames(category)}
                onClick={() =>
                  setActiveCategory(category === "All" ? null : category)
                }
              >
                {category}
              </button>
            );
          })}
        </div> */}

        <div className="tag_widget">
          <ul>
            <li><Link href="#" className="hover:bg-blue-500 hover:text-white">All</Link></li>
            <li><Link href="#" className="hover:bg-blue-500 hover:text-white">Lunch</Link></li>
            <li><Link href="#" className="hover:bg-blue-500 hover:text-white">Breakfast</Link></li>
            <li><Link href="#" className="hover:bg-blue-500 hover:text-white">Dinner</Link></li>
            <li><Link href="#" className="hover:bg-blue-500 hover:text-white">Meal Packs</Link></li>
            <li><Link href="#" className="hover:bg-blue-500 hover:text-white">Snacks/RTG</Link></li>
          </ul>
        </div>
      </div>

      <div className="widget_list widget_brands">
      <h4 className="mb-4 font-semibold text-gray-800 pt-3 border-t-2 border-blue-600">
          Pickup Location
        </h4>
        <ul>
          {
            [1,1,1,1]?.map((data, index) => {
              return <li key={`data${index}`}>
                <input type="checkbox" name={data?.title} id={data?.title} value={brands}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBrands(prev => [...prev, data?.title])
                    } else {
                      setBrands(prev => prev.filter(brand => brand != data?.title))
                    }
                  }}
                />
                <label htmlFor={data?.title}>Oshgbo</label>
                 {/* <span>(1)</span> */}
              </li>
            })
          }
        </ul>
      </div>

    </>
  );
};

export default Category;
