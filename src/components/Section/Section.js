import PropTypes from 'prop-types';
import style from './Section.module.css';

function Section({ title, children }) {
    return (
        <div className={style.section}>
            <h2>{title}</h2> 
            {children}
        </div>
    )
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};