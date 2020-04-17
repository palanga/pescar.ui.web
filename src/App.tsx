import React, { useState } from "react";
import { MockedProvider } from "@apollo/react-testing";
import { mock as LandingsByLocationMock } from "./analytics/widgets/LandingsByLocation";
import { AnalyticsHome } from "./analytics/AnalyticsHome";
import { Home } from "./home/Home";

const mocks =
  [
    LandingsByLocationMock,
  ]

function App() {

  const [selectedTab, selectTab] = useState<string>("home")

  function selectHomeTab() {
    selectTab("home")
  }

  function selectAnalyticsTab() {
    selectTab("analytics")
  }

  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <div>
        <div>
          <button onClick={selectHomeTab}>home</button>
          <button onClick={selectAnalyticsTab}>analytics</button>
        </div>
        <div>
          {selectedTab === "home" ? <Home/> : null}
          {selectedTab === "analytics" ? <AnalyticsHome/> : null}
        </div>
      </div>
    </MockedProvider>
  );
}

export default App;
