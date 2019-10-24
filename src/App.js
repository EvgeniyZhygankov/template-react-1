import React from "react";

import styles from '../src/styles/App.css';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Button from './components/Button/Button'

class App extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.App}>
                    <h1>My React App!</h1>
                </div>
                <Header />
                <Menu />
                <About />
                <Button label="Сохранить" />
                <Button label="Удалить" />
            </div>
        );
    }
}

export default App; 