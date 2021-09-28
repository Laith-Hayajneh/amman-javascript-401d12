import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import Header from './header';
import Content from './content';
import Footer from './footer';

export default function Main() {
    const theme = useContext(ThemeContext);
    return (
        <div className={theme.mode}>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
// export default class Main extends React.Component {
//     static contextType = ThemeContext;
//     render() {
//         return (
//             <div className={this.context.mode}>
//                 <Header />
//                 <Content />
//                 <Footer />
//             </div>
//         )
//     }
// }
