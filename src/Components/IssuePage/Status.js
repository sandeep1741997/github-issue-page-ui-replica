import React from 'react';
import './IssuePage.css';

const Status = ({ labels }) => {

    return (
        <React.Fragment>
            {
                labels && labels.map((item, idx) =>
                    <span className='status' style={{
                        background: '#' + item.color, color:
                            item.name === "Type: Bug" ? 'white' : ''
                    }} key={idx}>{item.name}</span>
                )
            }

        </React.Fragment>
    );
};

export default Status;