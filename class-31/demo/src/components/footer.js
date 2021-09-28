import { useContext } from "react";
import { SettingsContext } from "../context/site";
import { Card, Elevation } from "@blueprintjs/core";

export default function Footer(props) {
    // use useContext as many times as you want
    const site = useContext(SettingsContext);

    return (
        <footer>
            <Card elevation={Elevation.THREE}>
                <div>the site title is: {site.title}</div>
            </Card>
        </footer>
    );
}