import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

class CardAuthor extends React.Component {
  render() {
    return (
      <div className="author">
        <Link to={'/dashboard/home'}>
          <img
            className="avatar border-gray"
            src={this.props.avatar}
            alt={this.props.avatarAlt}
          />
        </Link>

        <h5 className="title prof-title" style={{ textDecoration: 'none' }}>{this.props.title}</h5>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

CardAuthor.propTypes = {
  // Where the user to be redirected on clicking the avatar
  link: PropTypes.string,
  avatar: PropTypes.string,
  avatarAlt: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default CardAuthor;
