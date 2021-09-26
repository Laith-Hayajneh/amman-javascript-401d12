import React from "react";
import { ThemeContext } from "../context/theme";
import { SettingsContext } from "../context/site";

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content Rendered via class component</h2>
                <SettingsContext.Consumer>
                    {siteContext => (
                        <>
                            <h1>{siteContext.title}</h1>
                            <div>
                                <a target="_blank"
                                    href={`https://twitter.com/${siteContext.twitter}`}>
                                    @{siteContext.twitter}
                                </a>
                            </div>
                        </>
                    )}
                </SettingsContext.Consumer>
                <ThemeContext.Consumer>
                    {themeContext => (
                        <h2>Current Mode: {themeContext.mode}</h2>
                    )}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Content;