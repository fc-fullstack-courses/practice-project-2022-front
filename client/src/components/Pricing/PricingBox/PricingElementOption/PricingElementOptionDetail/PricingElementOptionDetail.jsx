import React from 'react';
import styles from './PricingElementOptionDetail.module.sass'

const PricingElementOptionDetail = ({name}) => {
    return (
        <p>
            <i className={styles.fa}>
                {name}
            </i>
        </p>
    );
}

export default PricingElementOptionDetail;
