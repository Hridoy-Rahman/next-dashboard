import React from 'react';
import styles from '@/app/ui/dashboard/buttons/buttons.module.css'

const Delete = () => {
    return (
        <div>
            <button className={`${styles.button} bg-red-600`}>delete</button>
        </div>
    );
};

export default Delete;