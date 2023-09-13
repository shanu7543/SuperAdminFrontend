// components/OrdersOverview.tsx

import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import div from "./div"; // Make sure to provide the correct path to div

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <Box pt={3} px={3}>
        <Typography variant="h6" fontWeight="medium">
          Orders overview
        </Typography>
        <Box mt={0} mb={2}>
          <Typography variant="button" color="text" fontWeight="regular">
            {/* <Typography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>
                arrow_upward
              </Icon>
            </Typography> */}
            &nbsp;
            <Typography variant="button" color="text" fontWeight="medium">
              24%
            </Typography>{" "}
            this month
          </Typography>
        </Box>
      </Box>
      <Box p={2}>
        <div
          color="success"
        //   icon="notifications"
          title="$2400, Design changes"
        //   dateTime="22 DEC 7:20 PM"
        />
        <div
          color="error"
        //   icon="inventory_2"
          title="New order #1832412"
        //   dateTime="21 DEC 11 PM"
        />
        <div
          color="info"
        //   icon="shopping_cart"
          title="Server payments for April"
        //   dateTime="21 DEC 9:34 PM"
        />
        <div
          color="warning"
        //   icon="payment"
          title="New card added for order #4395133"
        //   dateTime="20 DEC 2:20 AM"
        />
        <div
          color="primary"
        //   icon="vpn_key"
          title="New card added for order #4395133"
        //   dateTime="18 DEC 4:54 AM"
        //   lastItem
        />
      </Box>
    </Card>
  );
}

export default OrdersOverview;
