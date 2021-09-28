import React from "react";
import { ThemeContext } from "../context/theme";
import Header from './header';
import Content from './content';
import Footer from './footer';

export default class Main extends React.Component {
    static contextType = ThemeContext;
    render() {
        return (
            <div className={this.context.mode}>
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}
