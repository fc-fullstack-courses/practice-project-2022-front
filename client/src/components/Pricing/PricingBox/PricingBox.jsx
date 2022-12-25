import React from 'react';
import PricingElementOption from './PricingElementOption/PricingElementOption';
import styles from './PricingBox.module.sass';
import classNames from 'classnames';

const PricingBox = ({category : {name, title, price, options}}) => {
    const optionElements = options.map((opt, index) => (
        <PricingElementOption 
            key={opt.id} 
            option={opt} 
            isLastOption={index === options.length - 1}
        />));
    return (
        <div className={classNames({
            [styles.pricingBox] : true,
            [styles.bronze] : name === 'Bronze',
            [styles.gold] : name === 'Gold',
            [styles.platinum] : name === 'Platinum',
            [styles.managed] : name === 'Managed',
        })}>
            <div className={styles.topBox}>
                <h3>{name}</h3>
                <p>{title}</p> 
                <span>{price}</span>
            </div>
         <ul>
            {optionElements} 
            <li className={styles.noBorderBottom}>
                <a href='/start-contest'>
                    <i>
                        <button className={styles.pricingBoxBtn}>Start</button>
                    </i>
                </a>  
            </li>
         </ul> 
        </div>
    );
}

export default PricingBox;
