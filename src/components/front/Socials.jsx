import { ReactComponent as GithubLogo } from "../../svgs/github.svg";
import { ReactComponent as LinkedInLogo } from "../../svgs/linkedin.svg";

import "./Socials.scss";

export default function Socials(props) {
  return (
    <div className="Frontpage__Socials">
      <div className="Frontpage__Socials--item">
        <a rel="noreferrer" href="https://github.com/Jokurale" target="_blank">
          <GithubLogo />
        </a>
      </div>
      <div className="Frontpage__Socials--item">
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/michał-podsiadły-076119193/"
          target="_blank"
        >
          <LinkedInLogo />
        </a>
      </div>
    </div>
  );
}
