import React from 'react';

import '../Menu/Menu.scss';

const menuElem = [
    {
        name: "Home",
        link: "www.kufar.by"
    }, 
    {
        name: "Contacts",
        link: "www.kufar.by"
    }, 
    {
        name: "About",
        link: "www.kufar.by"
    }];

export default class Menu extends React.Component {

    render() {
        return (
        <ul>
        {
            menuElem.map((link, index) => {

                return (
                    <li className={`class_template {index}`} key={index}>
                        <a href={link.link}>{link.name}</a>
                    </li>
                )
            })
        }
        </ul>
        );
    }
}
