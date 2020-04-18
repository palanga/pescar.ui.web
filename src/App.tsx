import React, { useState } from "react";
import { MockedProvider } from "@apollo/react-testing";
import { mock as LandingsByLocationMock } from "./analytics/widgets/LandingsByLocation";
import { AnalyticsHome } from "./analytics/AnalyticsHome";
import { Home } from "./home/Home";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  CssBaseline,
  Hidden,
  Toolbar
} from "@material-ui/core";
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { ComingSoon } from "./ComingSoon";

const mocks =
  [
    LandingsByLocationMock,
  ]

function App() {

  const [selectedTab, selectTab] = useState<string>("home")

  function renderTab() {
    switch (selectedTab) {
      case "home":
        return <Home/>
      case "analytics":
        return <AnalyticsHome/>
      default:
        return <ComingSoon/>
    }
  }

  return (
    <React.Fragment>
      <CssBaseline/>
      <MockedProvider mocks={mocks} addTypename={false}>
        <div>
          <Hidden smDown>
            <AppBar position="fixed">
              <Toolbar>
                <DirectionsBoatIcon style={{marginInlineEnd: 12}}/>
                <Button color="inherit" onClick={() => selectTab("home")}>Home</Button>
                <Button color="inherit" onClick={() => selectTab("analytics")}>Analytics</Button>
                <Button color="inherit" onClick={() => selectTab("news")}>News</Button>
                <Button color="inherit" onClick={() => selectTab("marketplace")}>Marketplace</Button>
              </Toolbar>
            </AppBar>
            <div style={{height: 64}}/>
          </Hidden>
          <div style={{height: 3000}}>
            {renderTab()}
          </div>
          <Hidden mdUp>
            <div style={{height: 56}}/>
            <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}} component="footer">
              <BottomNavigation value={selectedTab} onChange={(_, name) => selectTab(name)}>
                <BottomNavigationAction label="Home" value="home" icon={<DirectionsBoatIcon/>}/>
                <BottomNavigationAction label="Analytics" value="analytics" icon={<ShowChartIcon/>}/>
                <BottomNavigationAction label="News" value="news" icon={<AnnouncementIcon/>}/>
                <BottomNavigationAction label="Marketplace" value="marketplace" icon={<MonetizationOnIcon/>}/>
              </BottomNavigation>
            </AppBar>
          </Hidden>
        </div>
      </MockedProvider>
    </React.Fragment>
  );
}

export default App;
