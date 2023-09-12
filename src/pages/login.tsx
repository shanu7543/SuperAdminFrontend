import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

function Basic() {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);


   // Define the background image URL
   const backgroundImageUrl =
   "https://img.freepik.com/free-psd/golden-celebration-design-elements_23-2150317957.jpg?w=1380&t=st=1694489125~exp=1694489725~hmac=ec7774bde6dc970141e2d747e44995e2c93a50f11598f26e94a6287f58baacec";

 const mainDivStyle: React.CSSProperties = {
   backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
   backgroundSize: "cover", // Adjust the background size as needed
 };

  return (
    <div className="h-screen w-screen bg-neutral-50 flex justify-center items-center" style={mainDivStyle}>
      <div className="h-96 w-96 ">
      <Card className="mx-2 mt-3 ">
        <div className="bg-gradient-to-r  from-blue-300 via-blue-500 to-blue-300 rounded-lg shadow-info p-2 mb-1 text-center ">
          <span className="text-white text-lg font-medium mt-1">Sign in</span>
          <Grid container spacing={3} justifyContent="center" className="mt-1 mb-2">
            <Grid item xs={2}>
              <span>
                <MuiLink href="#" className="text-white">
                  <FacebookIcon color="inherit" />
                </MuiLink>
              </span>
            </Grid>
            <Grid item xs={2}>
              <span>
                <MuiLink href="#" className="text-white">
                  <GitHubIcon color="inherit" />
                </MuiLink>
              </span>
            </Grid>
            <Grid item xs={2}>
              <span>
                <MuiLink href="#" className="text-white">
                  <GoogleIcon color="inherit" />
                </MuiLink>
              </span>
            </Grid>
          </Grid>
        </div>
        <div className="pt-4 pb-3 px-3">
          <form role="form">
            <div className="mb-2">
              <input type="email" className="w-full p-2 rounded border" placeholder="Email" />
            </div>
            <div className="mb-2">
              <input type="password" className="w-full p-2 rounded border" placeholder="Password" />
            </div>
            <div className="flex items-center ml-0">
              <Switch
                checked={rememberMe}
                onChange={handleSetRememberMe}
                className="mr-1"
              />
              <span
                className="text-sm font-normal cursor-pointer select-none"
                onClick={handleSetRememberMe}
              >
                &nbsp;&nbsp;Remember me
              </span>
            </div>
            <div className="mt-4 mb-1">
              <button className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-2 text-white rounded">
                Sign in
              </button>
            </div>
            <div className="mt-3 mb-1 text-center">
              <span className="text-sm">
                Don't remember password ?{" "}
                {/* <Link
                  to="/authentication/sign-up"
                  className="text-blue-500 font-medium"
                > */}
                 forget password
                {/* </Link> */}
              </span>
            </div>
          </form>
        </div>
      </Card>
      </div>
    </div>
  );
}

export default Basic;
