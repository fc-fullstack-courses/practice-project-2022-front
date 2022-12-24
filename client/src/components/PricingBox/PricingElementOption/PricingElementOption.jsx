import React from 'react';
import PricingElementOptionDetail from './PricingElementOptionDetail/PricingElementOptionDetail';

const PricingElementOption = ({option : {name, details}}) => {
    const detailsNames = details.map(detail => 
        (<PricingElementOptionDetail key={detail.id} name={detail.name}/>));
    return (
        <div>
            {name} 
            {detailsNames}   
        </div>
    );
}

export default PricingElementOption;
