import { LinksFunction } from "remix";
import NavBar from "~/components/NavBar";
import backgroundVideo from "~/img/Background.mp4"

import indexStyle from "~/styles/index.css";
import navbarStyle from "~/styles/navbar.css";

import hiMe from "~/img/welcomeMe.png";
import linkedInImg from "~/img/linkedInIcon.png";
import gitHubImg from "~/img/gitHubIcon.png";
import twitterImg from "~/img/twitterIcon.png";
import twitchImg from "~/img/twitchIcon.png";

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap",},
    { rel: "stylesheet", href: indexStyle},
    { rel: "stylesheet", href: navbarStyle},
    { rel: "LinkedIn", href: "https://www.linkedin.com/in/alex-lecusay-0a51a5217/"},
    { rel: "GitHub", href: "https://github.com/AlexLecusay?tab=repositories"},
    { rel: "Twitter", href: "https://twitter.com/AlexxIzNasty"},
    { rel: "Twitch", href: "https://www.twitch.tv/alexxiznasty"},
  
  ]
}

export default function Index() {
  return (
    <>
      <video id="backgroundVid" autoPlay loop muted>
      <source src={backgroundVideo} type="video/mp4"/></video>
      <NavBar socials={[
            hiMe,
            linkedInImg,
            gitHubImg,
            twitterImg,
            twitchImg,
          ]}/>
    </>
  );
}
