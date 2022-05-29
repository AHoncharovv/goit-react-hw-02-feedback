import React from "react";

function Statistics({ good, neutral, bad, total, positive = 0 }) {
    return (
        <>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positive}%</li>
            </ul>
        </>
    )
} 

export default Statistics;