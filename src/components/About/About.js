import React from 'react';

import '../About/About.scss';
import styles from '../About/About.css';

class About extends React.Component {
    render() {
        return (
            <div className={styles.About}>
                Текст написанный в компоненте About
            </div>
        );
    }
}

export default About;