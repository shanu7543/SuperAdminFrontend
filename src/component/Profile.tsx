// components/Header.tsx
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// import div from "../components/div";
// import MDTypography from "../components/MDTypography";
// import div from "../components/div";

// import breakpoints from "../assets/theme/base/breakpoints";
// import backgroundImage from "../assets/images/bg-profile.jpeg";

import burceMars from "../assets/images/bruce-mars.jpg";
import { Card } from "@mui/material";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth 
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);

  return (
    <div className="relative mb-5">
      <div
        className="flex items-center relative min-h-[18.75rem] rounded-xl"
        style={{
          backgroundImage: `linear-gradient(rgba(69, 39, 160, 0.6), rgba(69, 39, 160, 0.6))`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card className="relative mt-[-8rem] mx-3 py-2 px-2">
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            {/* <div src={burceMars} alt="profile-image" size="xl" className="shadow-sm" /> */}
          </Grid>
          <Grid item>
            <div className="h-full mt-0.5 leading-4">
              {/* <MDTypography variant="h5" fontWeight="medium">
                Richard Davis
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                CEO / Co-Founder
              </MDTypography> */}
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="ml-auto">
            <AppBar position="static">
              <Tabs 
            //   orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}
              >
                <Tab
                  label="App"
                  icon={
                    <Icon fontSize="small" className="mt-[-0.25rem]">
                      home
                    </Icon>
                  }
                />
                <Tab
                  label="Message"
                  icon={
                    <Icon fontSize="small" className="mt-[-0.25rem]">
                      email
                    </Icon>
                  }
                />
                <Tab
                  label="Settings"
                  icon={
                    <Icon fontSize="small" className="mt-[-0.25rem]">
                      settings
                    </Icon>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </Card>
    </div>
  );
}

Header.defaultProps = {
  children: "",
};

Header.propTypes = {
  children: PropTypes.node,
};
