// *********************
// Role of the component: Single product tabs on the single product page containing product description, main product info and reviews
// Name of the component: ProductTabs.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductTabs product={product} />
// Input parameters: { product: Product }
// Output: Single product tabs containing product description, main product info and reviews
// *********************

"use client";

import React, { useState } from "react";
import RatingPercentElement from "./RatingPercentElement";
import SingleReview from "./SingleReview";
import { formatCategoryName } from "@/utils/categoryFormating";
import { Box, Typography } from "@mui/material";

const ProductTabs = ({ product }: { product: Product }) => {
  const [currentProductTab, setCurrentProductTab] = useState<number>(0);

  return (
    <div className="px-5 text-black">
      <div role="tablist" className="tabs tabs-bordered">
        <a
          role="tab"
          className={`tab text-lg text-black pb-8 max-[500px]:text-base max-[400px]:text-sm max-[370px]:text-xs ${currentProductTab === 0 && "tab-active"
            }`}
          onClick={() => setCurrentProductTab(0)}
        >
          Description
        </a>
        <a
          role="tab"
          className={`tab text-black text-lg pb-8 max-[500px]:text-base max-[400px]:text-sm max-[370px]:text-xs ${currentProductTab === 1 && "tab-active"
            }`}
          onClick={() => setCurrentProductTab(1)}
        >
          Additional info
        </a>
      </div>

      {/* devyani */}

      {/* <div className="p-5">
        {currentProductTab === 0 && (
          <>
          test
            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our Micro USB PVC Data Cable is engineered to offer both
                durability and functionality. Perfect for charging and data
                transfer, this cable combines high-quality PVC construction with
                efficient performance to meet all your connectivity needs.
              </Typography>

              <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                <li>USB-A to Micro USB</li>
                <li>3A Fast Charging Cable</li>
                <li>
                  Compatible with Android Phones/Tablets, 480 Mbps Data Transfer
                  Speed
                </li>
                <li>Tangle-Free USB Cable</li>
                <li>Round</li>
                <li>Length: 1M</li>
                <li>Color: White</li>
              </ul>
            </Box>
            <p className="text-lg max-sm:text-base max-sm:text-sm">
              {product?.description}
            </p>
          </>
        )}

        {currentProductTab === 1 && (
          <div style={{ overflow: "hidden" }}>
            <table className="table text-xl text-justify max-[500px]:text-base" style={{ marginLeft: "200px" }}>
              <tbody>
                
                <tr>
                  <th>Color:</th>
                  <td>Silver, LightSlateGray, Blue</td>
                </tr>
                <tr>
                  <th>Connector Type:</th>
                  <td>Micro USB</td>
                </tr>
                <tr>
                  <th>Material:</th>
                  <td>PVC (Polyvinyl Chloride)</td>
                </tr>
                <tr>
                  <th>Data Transfer Rate:</th>
                  <td>Up to 480 Mbps</td>
                </tr>
                <tr>
                  <th>Charging Speed:</th>
                  <td>Up to 2.4A</td>
                </tr>
                <tr>
                  <th>Length:</th>
                  <td>1m / 2m / 3m (Various Options)</td>
                </tr>
                <tr>
                  <th>Compatibility:</th>
                  <td>All Micro USB Devices</td>
                </tr>
                <tr>
                  <th>Durability:</th>
                  <td>Flexible and Tangle-Free</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        )}
      </div> */}


      <div className="pt-5 px-5 flex justify-center items-start">
        {/* Product Description Tab */}
        {currentProductTab === 0 && (
          <p className="text-lg max-sm:text-base">{product?.description}</p>
        )}

        {/* Product Specifications Tab */}
        {currentProductTab === 1 && (
          <div className="overflow-x-auto mt-4 w-full max-w-4xl">
            <table className="table text-xl text-start max-[500px]:text-base w-full mx-auto">
              <tbody>
                {/* Row 1 */}
                <tr>
                  <th className="text-left pr-4 py-2">Manufacturer:</th>
                  <td className="py-2">{product?.manufacturer}</td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <th className="text-left pr-4 py-2">Category:</th>
                  <td className="py-2"><span className="mr-2">Electronics </span>
                    {product?.category?.name
                      ? formatCategoryName(product?.category?.name)
                      : "No category"}
                  </td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <th className="text-left pr-4 py-2">Color:</th>
                  <td className="py-2">Silver, LightSlateGray</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Connector Type:</th>
                  <td>Micro USB</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Material:</th>
                  <td>PVC (Polyvinyl Chloride)</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Data Transfer Rate:</th>
                  <td>Up to 480 Mbps</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Charging Speed:</th>
                  <td>Up to 2.4A</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Length:</th>
                  <td>1m / 2m / 3m (Various Options)</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Compatibility:</th>
                  <td>All Micro USB Devices</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-2">Durability:</th>
                  <td>Flexible and Tangle-Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>


    </div>
  );
};

export default ProductTabs;





