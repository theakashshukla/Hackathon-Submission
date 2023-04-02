import * as React from "react";
// import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
// import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // Create header withh left buttonn anndright side image with reactbootstrapp

  
      //  <AppBar position="static">
      //    <Header>
      //     <div className="header">
      //       <div className="header__left">
      //         <img
      //           className="header__logo"
      //           src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png"
      //           alt=""

      //         />
      //         <h1>HH</h1>
      //       </div>
      //     </div>
      //   </Header> 
      //   <Toolbar>
      //     <Typography variant="h6" sx={{ flexGrow: 1 }}>
      //       Hackathon Submissions
      //     </Typography>
      //     <Box sx={{ flexGrow: 1 }}>
      //       <Tabs
      //         value={value}
      //         onChange={handleTabChange}
      //         aria-label="navigation tabs"
      //       >
      //         <Tab label="All Submissions" component={RouterLink} to="/" />
      //         <Tab
      //           label="Favourite Submissions"
      //           component={RouterLink}
      //           to="/favourites"
      //         />
      //       </Tabs>
      //     </Box>
      //   </Toolbar>
      // </AppBar> 
      
      <div>
         <Container>
      <Row>
        <Col>
          <Button variant="primary" size="lg" block>
            Click me!
          </Button>
        </Col>
        <Col>
          <Image src="https://via.placeholder.com/350x150" thumbnail />
        </Col>
      </Row>
    </Container>

      </div>
       
       );
};

export default Header;
