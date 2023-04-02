import * as React from "react";

// import { Button, Col, Container, Image, Row } from "react-bootstrap";


const Header = () => {
  // const [value, setValue] = React.useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div style={{ width:"100%"}}>
      <Header>
        <div className="header">
          <div className="header__left">
            <img
              className="header__logo"
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
              alt=""
            />
            <h1>Hi</h1>
          </div>
        </div>
      </Header>

    </div>
  );
};

export default Header;
