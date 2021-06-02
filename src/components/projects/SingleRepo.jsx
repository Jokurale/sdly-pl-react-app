import "./SingleRepo.scss";

import PropTypes from "prop-types";
import React from "react";
import { GoRepo as RepoIcon } from "react-icons/go";

function SingleRepo({ repo }) {
  const { full_name, html_url, language, license, description } = repo;

  let license_name = "MIT License";

  if (license !== null) {
    license_name = license.name;
  }

  return (
    <div className="SingleRepo">
      <div className="SingleRepo__Header">
        <span className="SingleRepo__Header--decor">
          <RepoIcon />
        </span>
        <a href={html_url}>{full_name}</a>
      </div>
      <div className="SingleRepo__Body">{description}</div>
      <div className="SingleRepo__Footer">
        {language} | {license_name}
      </div>
    </div>
  );
}

// YES, I AM LAZY
SingleRepo.propTypes = {
  repo: PropTypes.any,
};

export default SingleRepo;
