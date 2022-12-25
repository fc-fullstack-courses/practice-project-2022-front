import React from 'react';
import PricingElementOptionDetail from './PricingElementOptionDetail/PricingElementOptionDetail';
import classNames from 'classnames';
import styles from '../PricingBox.module.sass';
const PricingElementOption = ({option : {name, details}, isLastOption}) => {
    const detailsNames = details.map(detail => 
        (<PricingElementOptionDetail key={detail.id} name={detail.name}/>));
    return (
        <li className={classNames({[styles.noBorderBottom]: isLastOption})}>
            {name} 
            {detailsNames}   
        </li>
    );
}

export default PricingElementOption;
