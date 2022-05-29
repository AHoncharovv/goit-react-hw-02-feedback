
import React from "react";

function FeedBackOption({ options, onLeaveFeedback }) {
    return (
        <ul>
            {options.map((option, index) => (
                <li key={index}>
                    <button type="button" onClick={onLeaveFeedback} value={option}>{option}</button>
                </li>
            ))}
        </ul>
    )
}

export default FeedBackOption;

  
        
