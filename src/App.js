import React from "react";

import '../src/styles/App.scss';
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import About from './components/About/About'
import Button from './components/Button/Button'

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>My React App!</h1>
                </div>
                <Header />
                <Menu />
                <About />
                <Button label="Сохранить" />
            </div>
        );
    }
}

export default App; 