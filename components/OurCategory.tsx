import React from "react";
import { Box, Container, Typography, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import Link from "next/link";

const OurCategory = () => {
  return (
    <section style={{ padding: "80px 0" }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={8} md={6} textAlign="center">
            <Typography variant="h2" gutterBottom>
              Best <em>Offer & Deals</em>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {/* Extension Board Service */}
          <Grid item xs={12} sm={4}>
            <Link href="/extensionboard" passHref>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h4" align="center">
                      Extension Board
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: 2 }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore corrupti aliquam ducimus numquam placeat quia similique cupiditate?
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          {/* Mobile Charger Service */}
          <Grid item xs={12} sm={4}>
            <Link href="/charger" passHref>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h4" align="center">
                      Mobile Charger
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: 2 }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum harum minus consequatur asperiores omnis corrupti tenetur distinctio quae?
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          {/* Data Cable Service */}
          <Grid item xs={12} sm={4}>
            <Link href="/datacable" passHref>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h4" align="center">
                      Data Cable 
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ marginTop: 2 }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ipsam aspernatur cum reiciendis, officiis voluptas in nesciunt accusamus eum!
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default OurCategory;
