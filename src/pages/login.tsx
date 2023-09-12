import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { getLogin } from "@/apihelpers/api";
import { useRouter } from 'next/router';
// import { useHistory } from "react-router-dom";


type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
};



function Basic() {
  const { register, handleSubmit } = useForm<FormData>();
  // const history = useHistory();

  // const onSubmit: SubmitHandler<FormData> = (data) => {
  //   // Check user credentials (replace with your authentication logic)
  //   if (data.email === "user@example.com" && data.password === "password") {
  //     // Store user information in local storage
  //     localStorage.setItem("isLoggedIn", "true");
  //     localStorage.setItem("userEmail", data.email);

  //     // Redirect to the dashboard page
  //     // history.push("/dashboard");
  //   } else {
  //     alert("Invalid email or password");
  //   }
  // };
  const router = useRouter();


  const loginHandler = async (data: any) => {
    const response = await getLogin({
      email: data.email,
      password: data.password,
    });
    console.log("You are loggedIn ");
    if(response.success){
      router.push("/home")
    }
  };

  // Define the background image URL
  const backgroundImageUrl =
    "https://img.freepik.com/free-psd/golden-celebration-design-elements_23-2150317957.jpg?w=1380&t=st=1694489125~exp=1694489725~hmac=ec7774bde6dc970141e2d747e44995e2c93a50f11598f26e94a6287f58baacec";

  const mainDivStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImageUrl})`, // Set the background image
    backgroundSize: "cover", // Adjust the background size as needed
  };

  return (
    <div
      className="h-screen w-screen bg-neutral-50 flex justify-center items-center"
      style={mainDivStyle}
    >
      <div className="h-96 w-96">
        <Card className="mx-2 mt-3 ">
          <div className="bg-gradient-to-r  from-blue-300 via-blue-500 to-blue-300 rounded-lg shadow-info p-2 mb-1 text-center ">
            <span className="text-white text-lg font-medium mt-1">Sign in</span>
            <Grid
              container
              spacing={3}
              justifyContent="center"
              className="mt-1 mb-2"
            >
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
            <form role="form" onSubmit={handleSubmit(loginHandler)}>
              <div className="mb-2">
                <input
                  type="email"
                  className="w-full p-2 rounded border"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  className="w-full p-2 rounded border"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="flex items-center ml-0">
                <Switch {...register("rememberMe")} />
                <span className="text-sm font-normal cursor-pointer select-none">
                  &nbsp;&nbsp;Remember me
                </span>
              </div>
              <div className="mt-4 mb-1">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 p-2 text-white rounded"
                >
                  Sign in
                </button>
              </div>

              <div className="mt-3 mb-1 text-center">
                <Link href={"/"}>
                  <span className="text-sm">
                    Don't remember password ? forget password
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Basic;
