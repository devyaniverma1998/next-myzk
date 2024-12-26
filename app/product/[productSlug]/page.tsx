"use client"
import {
  StockAvailabillity,
  UrgencyText,
  SingleProductRating,
  ProductTabs,
  SingleProductDynamicFields,
  AddToWishlistBtn,
} from "@/components";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaSquareFacebook, FaSquareXTwitter, FaSquarePinterest, FaSquareWhatsapp } from "react-icons/fa6";
import ENDPOINT from '@/config/appConfig';

interface ImageItem {
  imageID: string;
  productID: string;
  image: string;
}

const fetchProductData = async (productSlug: string) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/slugs/${productSlug}`);
  // const data = await fetch(`${ENDPOINT.BASE_URL}/api/slugs/${productSlug}`);
  const product = await data.json();

  const imagesData = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/images/${product.id}`);
  // const imagesData = await fetch(`${ENDPOINT.BASE_URL}/api/images/${product.id}`);
  const images = await imagesData.json();

  return { product, images };
};

const SingleProductPage = ({ params }: SingleProductPageProps) => {
  const [product, setProduct] = useState<any>(null);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [mainImage, setMainImage] = useState<string>("");

  const shareUrl = encodeURIComponent("https://myzk.in/product/"); // Replace with the URL you want to share
  const message = encodeURIComponent("Check this out: "); // Add a message if desired
  const whatsappLink = `https://api.whatsapp.com/send?text=${message}${shareUrl}`;




  useEffect(() => {
    const loadData = async () => {
      const { product, images } = await fetchProductData(params.productSlug);

      if (!product || product.error) {
        notFound();
      } else {
        setProduct(product);
        setImages(images);
        setMainImage(product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg");
      }
    };

    loadData();
  }, [params.productSlug]);

  const handleImageHover = (imageSrc: string) => {
    setMainImage(imageSrc);
  };

  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-center gap-x-4 pt-10 max-lg:flex-col items-center gap-y-5 px-5 ">

          {/* Left side: Alternate Images */}
          <div className="flex flex-col gap-y-2 items-start">
            {product?.alternateImage1 && (
              <Image
                src={`/${product.alternateImage1}`}
                width={400}
                height={400}
                alt="alternate image 1"
                className="w-[90px] h-[90px] border border-gray-900 rounded-[15px] shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer "
                onMouseEnter={() => handleImageHover(`/${product.alternateImage1}`)}
                onMouseLeave={() => setMainImage(product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg")}
              />
            )}
            {product?.alternateImage2 && (
              <Image
                src={`/${product.alternateImage2}`}
                width={400}
                height={400}
                alt="alternate image 2"
                className="w-[90px] h-[90px] border border-gray-900 rounded-[15px] shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer "
                onMouseEnter={() => handleImageHover(`/${product.alternateImage2}`)}
                onMouseLeave={() => setMainImage(product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg")}
              />
            )}
            {product?.alternateImage3 && (
              <Image
                src={`/${product.alternateImage3}`}
                width={400}
                height={400}
                alt="alternate image 3"
                className="w-[90px] h-[90px] border border-gray-900 rounded-[15px] shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer "
                onMouseEnter={() => handleImageHover(`/${product.alternateImage3}`)}
                onMouseLeave={() => setMainImage(product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg")}
              />
            )}
            {product?.alternateImage4 && (
              <Image
                src={`/${product.alternateImage4}`}
                width={400}
                height={400}
                alt="alternate image 4"
                className="w-[90px] h-[90px] border border-gray-900 rounded-[15px] shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer "
                onMouseEnter={() => handleImageHover(`/${product.alternateImage4}`)}
                onMouseLeave={() => setMainImage(product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg")}
              />
            )}
          </div>



          {/* Main Image and Additional Content */}
          <div>
            <Image
              src={mainImage}
              width={400}
              height={400}
              alt="main image"
              className="w-[400px] h-[400px]"
            />

            {/* Thumbnail Images (Existing Mapping) */}
            <div className="flex justify-around mt-0 flex-wrap gap-y-1 max-[400px]:justify-center max-[400px]:gap-x-1">
              {images?.map((imageItem: ImageItem) => (
                <Image
                  key={imageItem.imageID}
                  src={`/${imageItem.image}`}
                  width={400}
                  height={400}
                  alt="not found"
                  className="w-[400px] h-[400px]"
                  onMouseEnter={() => handleImageHover(`/${imageItem.image}`)}
                  onMouseLeave={() => setMainImage(product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg")}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-y-6 text-black max-[500px]:text-center px-5">
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <span className="block w-[200px] h-[2px] bg-blue-900  mt-[-20px]"></span>

            <p><span className="text-xl  line-through">₹{product?.price}</span>
              <span className="text-xl font-semibold  ml-2">₹{product?.salePrice}</span></p>
            <StockAvailabillity stock={94} inStock={product?.inStock} />
            <SingleProductDynamicFields product={product} />

            {/* Wishlist and SKU, Social Media, Payment Icons */}
            <div className="flex flex-col gap-y-2 max-[500px]:items-center">
              <AddToWishlistBtn product={product} slug={params.productSlug} />
              <p className="text-lg">
                SKU: <span className="ml-1">Myzk-1</span>
              </p>
              <div className="text-lg flex gap-x-2">
                <span>Share:</span>
                <div className="flex items-center gap-x-2 text-2xl">
                  <a href={`${whatsappLink}${params.productSlug}`} target="_blank" rel="noopener noreferrer">
                    <FaSquareWhatsapp />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="py-16">
          <ProductTabs product={product} />
        </div>
      </div>
    </div>

  );
};

export default SingleProductPage;
