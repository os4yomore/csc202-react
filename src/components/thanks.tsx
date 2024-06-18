import React from 'react';
import './thanks.css';
import { Link } from 'react-router-dom';

const Thanks: React.FC = () => {
    return (
        <div className="thanks-container">
            <h2>Thank you for your patronage!</h2>
            <h4>Toothfixers: Changing lives, one smile at a time!</h4>
            <br />
                    <br />
                    <Link className='link-stuff' to= {`/home`} type="submit">
                        Go Home
                    </Link>
        </div>
    );
}

export default Thanks;
