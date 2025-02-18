// pages/refund-policy.js
import React from "react";
import { Container, Box, Typography, Link } from "@mui/material";

const RefundReturnPolicy = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{ paddingY: 5 }}>
        {/* Policy Sections */}
        <Typography
          variant="h4"
          sx={{ color: "hsl(221.21deg 83.19% 53.33%)", marginBottom: 2 }}
        >
          Returns & Refund Policy
        </Typography>

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography paragraph>
            We have a 3-day return policy, which means you have 3 days after
            receiving your item to request a return.
          </Typography>
          <Typography paragraph>
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You’ll also need the receipt or proof of
            purchase.
          </Typography>
          <Typography paragraph>
            To start a return, you can contact us at{" "}
            <Link href="mailto:myzkdtm@gmail.com">myzkdtm@gmail.com</Link>.
            Please note that returns will need to be sent to the following
            address: Digital Telemedia Technology Pvt. Ltd., E-169, E Block,
            Sector 63, Noida, Uttar Pradesh 201301.
          </Typography>
          <Typography paragraph>
            If your return is accepted, we’ll send you a return shipping label,
            as well as instructions on how and where to send your package. Items
            sent back to us without first requesting a return will not be
            accepted.
          </Typography>
          <Typography paragraph>
            You can always contact us for any return questions at{" "}
            <Link href="mailto:myzkdtm@gmail.com">myzkdtm@gmail.com</Link>.
          </Typography>
        </Box>

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Damages and Issues</Typography>
          <Typography paragraph>
            Please inspect your order upon reception and contact us immediately
            if the item is defective, damaged, or if you receive the wrong item,
            so that we can evaluate the issue and make it right.
          </Typography>
        </Box>

      

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Exchanges</Typography>
          <Typography paragraph>
            The fastest way to ensure you get what you want is to return the
            item you have, and once the return is accepted, make a separate
            purchase for the new item.
          </Typography>
          <Typography paragraph>
            As above, your item must be in the same condition that you received
            it, unworn or unused, with tags, and in its original packaging.
            You’ll also need the receipt or proof of purchase.
          </Typography>
        </Box>

        <Box
          className="refund"
          sx={{
            marginBottom: 3,
            padding: 2,
            borderRadius: 1,
            boxShadow: 1,
            backgroundColor: "#fff",
          }}
        >
          <Typography variant="h6">Returns</Typography>
          <Typography paragraph>
            We will notify you once we’ve received and inspected your return,
            and let you know if the return was approved or not. If approved,
            you’ll be automatically refunded on your original payment method
            within 7 business days. Please remember it can take some time for
            your bank or credit card company to process and post the refund too.
          </Typography>
          <Typography paragraph>
            If more than 15 business days have passed since we’ve approved your
            return, please contact us at{" "}
            <Link href="mailto:myzkdtm@gmail.com">myzkdtm@gmail.com</Link>.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default RefundReturnPolicy;
