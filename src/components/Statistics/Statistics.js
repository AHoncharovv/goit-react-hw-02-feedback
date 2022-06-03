import PropTypes from 'prop-types';
import style from './Statistics.module.css'

function Statistics({ good, neutral, bad, total = 0, positive = 0 }) {
    return (
        <>
            <h2>Statistics</h2>
            <ul className={style.list}>
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

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};