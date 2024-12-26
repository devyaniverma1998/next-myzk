import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

// MUI Components
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  CardMedia,
} from "@mui/material";
import { Favorite, ShoppingCart, Visibility } from "@mui/icons-material";
import AddToWishlistBtn from "./AddToWishlistBtn";
import AddToWishlistIcon from "./AddToWishlistIcon";
import AddToCartIcon from "./AddToCartIcon";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          borderRadius: 3,
          marginLeft: 1,
          marginRight: 1,
          boxShadow: 2,
        }}
      >

        <Card sx={{ maxWidth: "100%", position: "relative", display: "flex" }}>
          {/* Left Side: Product Image */}
          <Link href={`/product/${product.slug}`} passHref>
            <Box sx={{ position: "relative", flex: 1 }}>
              {/* Primary product image */}
              <CardMedia
                component="img"
                height="auto"
                image={
                  product.mainImage
                    ? `/${product.mainImage}`
                    : "/product_placeholder.jpg"
                }
                alt="not found"
                sx={{ objectFit: "cover" }}
              />
              {/* Hover image */}
              <CardMedia
                component="img"
                height="auto"
                image={
                  product.alternateImage1
                    ? `/${product.alternateImage1}`
                    : "/product_placeholder.jpg"
                }
                alt="Secondary Image 1"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": {
                    opacity: 1,
                  },
                }}
              />
            </Box>
          </Link>

          <CardContent
            sx={{
              backgroundColor: "#dce2ef4f",
              flex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Link href={`/product/${product.slug}`} passHref>
              <Typography
                variant="body1"
                component="a"
                sx={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {product.title}
              </Typography>
            </Link>

            <Box>
              <Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="del"
                  sx={{ marginRight: 2 }}
                >
                  ₹{product.price}
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  component="span"
                >
                  ₹{product.salePrice}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", paddingTop: "10px", justifyContent: "center" }}>
                <Button
                  sx={{
                    backgroundColor: "black !important",
                    color: "white",
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    padding: { xs: "5px 20px", sm: "5px 40px" },  // Adjust padding for small screens
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",  // Ensure the content is centered within the button
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white !important",
                    },
                    // Responsive design for different screen sizes
                    "@media (max-width: 600px)": {
                      padding: "2px 0px",  // Adjust padding for very small screens (e.g., phones)
                    },
                  }}
                >
                  <AddToCartIcon quantityCount={1} product={product} />
                </Button>
              </Box>

            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default ProductItem;
