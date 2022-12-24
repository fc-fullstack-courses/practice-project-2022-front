import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPriceCategories } from 'store/slices/pricingSlice';
import PricingBox from './PricingBox/PricingBox';

const Pricing = () => {

    const dispatch = useDispatch();
    const { priceCategories } = useSelector((state) => state.pricing);

    useEffect(() => {
        dispatch(getPriceCategories());
        }, []);

    const pricingCategories = priceCategories.map(cat => 
        (<PricingBox key={cat.id} category={cat}/>)
    );
    return (
        <div>
            {pricingCategories}
        </div>
    );
}

export default Pricing;
