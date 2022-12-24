import React from 'react';
import PricingElementOption from './PricingElementOption/PricingElementOption';

const PricingBox = ({category : {name, title, price, options}}) => {
    const optionElements = options.map(opt => (
        <PricingElementOption key={opt.id} option={opt}/>
    ));
    return (
        <div>
         {`${name} ${title} ${price}`} 
         {optionElements}  
         <button>Start</button>
        </div>
    );
}

export default PricingBox;
