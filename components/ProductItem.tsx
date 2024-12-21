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
        {/* <Card sx={{ maxWidth: "100%", position: "relative" }}>
          <Link href={`/product/${product.slug}`} passHref>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="300"
                image={
                  product.mainImage
                    ? `/${product.mainImage}`
                    : "/product_placeholder.jpg"
                }
                alt="not found"
                sx={{ objectFit: "cover" }}
              />

              <CardMedia
                component="img"
                height="300"
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
              backgroundColor: "#eee7f2",
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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

              <Box>
                <IconButton
                  aria-label="add to wishlist"
                  sx={{
                    backgroundColor: "#2563eb",
                    color: "black",
                    borderRadius: "50%",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "black",
                    },
                    mr: 1,
                  }}
                >
                  <AddToWishlistIcon product={product} slug={product.slug} />
                </IconButton>

                <IconButton
                  aria-label="add to cart"
                  sx={{
                    backgroundColor: "#2563eb",
                    color: "black",
                    borderRadius: "50%",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                >
                  <AddToCartIcon quantityCount={1} product={product} />
                </IconButton>
              </Box>
            </Box>
          </CardContent>
        </Card> */}
        <Card sx={{ maxWidth: "100%", position: "relative", display: "flex" }}>
          {/* Left Side: Product Image */}
          <Link href={`/product/${product.slug}`} passHref>
            <Box sx={{ position: "relative", flex: 1 }}>
              {/* Primary product image */}
              <CardMedia
                component="img"
                height="300"
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
                height="300"
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

          {/* Right Side: Product Details */}
          <CardContent
            sx={{
              backgroundColor: "#dce2ef4f",
              flex: 3, // Flex to take up the remaining space
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

            {/* Flex container for price and icons */}
            <Box>
              {/* Price Section */}
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
              

              {/* <Box sx={{ display: "flex" }}>
                <IconButton
                  aria-label="add to wishlist"
                  sx={{
                    backgroundColor: "#2563eb",
                    color: "black",
                    borderRadius: "50%",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "black",
                    },
                    mr: 1,
                  }}
                >
                  <AddToWishlistIcon product={product} slug={product.slug} />
                </IconButton>

                <IconButton
                  aria-label="add to cart"
                  sx={{
                    backgroundColor: "#2563eb",
                    color: "black",
                    borderRadius: "50%",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "black",
                    },
                  }}
                >
                  <AddToCartIcon quantityCount={1} product={product} />
                </IconButton>
              </Box> */}
              <Box sx={{ display: "flex",paddingTop:"20px" }}>
                <Button
                  sx={{
                    
                    backgroundColor: "black !important",
                    color: "white",
                    borderRadius: "10px",
                    padding: "5px 50px",
                    border: "1px solid black",
                    display: "flex",
                    alignItems: "center", // Ensure alignment between icon and text
                    "&:hover": {
                      color: "black",
                      backgroundColor: "white !important",
                    },
                  }}
                >
                  {/* Uncomment if you want to include the icon */}
                  <AddToCartIcon quantityCount={1} product={product} />

                  {/* Add To Cart Text */}
                  {/* <Typography
                    variant="body1"
                    sx={{
                      marginLeft: "8px",
                      fontWeight: "bold",
                      textTransform: "uppercase", 
                    }}
                  >
                    Add To Cart
                  </Typography> */}
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
