import React from 'react';
import CompletedItem from './CompletedItem';

const CompletedField = () => {
    return (
        <div className='completed__field'>
            <div className='completed__field_title'>Completed (4)</div>
            <div className='completed__field_list'>
                <CompletedItem/>
                <CompletedItem/>
                <CompletedItem/>
                <CompletedItem/>
                <CompletedItem/>
                <CompletedItem/>
                <CompletedItem/>
                <CompletedItem/>
            </div>
        </div>
    );
}

export default CompletedField;