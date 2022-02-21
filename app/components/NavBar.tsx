import { Link, LinksFunction } from "remix";




export default function NavBar(props: { socials : string [] } ) {
    return (
      <>
        <div id="navigationBar">
          <h1>In progress 2.0</h1>
          <img id="hiMe" src={props.socials[0]}></img>
        </div>
      </>
    );
  }