import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
import { SettingsContext } from "../context/site";

export default function Content(props) {
  const site = useContext(SettingsContext);
  const theme = useContext(ThemeContext);

  const twitterHandler = e => {
      site.setTwitter(e.target.value);
  }

  return (
    <div>
      <h2>Content Rendered via class component</h2>
      <>
        <h1>{site.title}</h1>
        <div>
          <a target="_blank" href={`https://twitter.com/${site.twitter}`}>
            @{site.twitter}
          </a>
        </div>
        <div>
          {/* title */}
          <input
            type="text"
            value={site.title}
            onChange={(e) => site.setTitle(e.target.value)}
          />

          {/* twitter */}
          <input
            type="text"
            value={site.twitter}
            onChange={twitterHandler}
          />
        </div>
      </>
      <h2>Current Mode: {theme.mode}</h2>
    </div>
  );
}

// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Content Rendered via class component</h2>
//                 <SettingsContext.Consumer>
//                     {siteContext => (
//                         <>
//                             <h1>{siteContext.title}</h1>
//                             <div>
//                                 <a target="_blank"
//                                     href={`https://twitter.com/${siteContext.twitter}`}>
//                                     @{siteContext.twitter}
//                                 </a>
//                             </div>
//                         </>
//                     )}
//                 </SettingsContext.Consumer>
//                 <ThemeContext.Consumer>
//                     {themeContext => (
//                         <h2>Current Mode: {themeContext.mode}</h2>
//                     )}
//                 </ThemeContext.Consumer>
//             </div>
//         );
//     }
// }

// export default Content;
