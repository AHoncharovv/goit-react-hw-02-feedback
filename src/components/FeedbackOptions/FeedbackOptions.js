
import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css'

function FeedBackOption({ options, onLeaveFeedback }) {
    return (
        <ul className={style.list}>
            {options.map((option, index) => (
                <li key={index} className={style.item}>
                    <button type="button" onClick={onLeaveFeedback} value={option} className={style.button}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default FeedBackOption;

FeedBackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

  
        
