'use client'
import React, { useState } from 'react'
import { Heart } from "lucide-react"
import Image from 'next/image'

const Products = () => {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <div className="flex items-center justify-between p-10 gap-10">
      
      {/* Left side */}
      <div className="flex flex-1 items-center justify-center">
        <div className='grid grid-cols-2'>
          <Image
            src="/assets/KMO10060BergenRecycledQuiltedJacketDarkNavy_040.webp"
            alt="Jacket Image 1"
            width={300}
            height={400}
            className="object-cover p-2"
          />
          <Image
            src="/assets/KMO10060BergenRecycledQuiltedJacketDarkNavy_064.webp"
            alt="Jacket Image 2"
            width={300}
            height={400}
            className="object-cover p-2"
          />


        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-1 flex-col space-y-6">
        
        
        <div className="space-y-3">
          <h3 className="text-[34px] font-semibold">
            Bergen Recycled Quilted Jacket
          </h3>

          <h1 className="text-sm">
            $270.00{" "}
            <span className="text-red-500 bg-red-100 px-1">
              SAVE 30%
            </span>
          </h1>

          <p className="text-red-500 text-xs">
            Discount Applied in Cart*
          </p>
        </div>

        
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Color: <span className="font-semibold">{selectedColor || "Select a color"}</span>
          </label>

          <div className="flex gap-2">
            {["black", "gray", "blue", "green"].map(color => (
              <div key={color}>
                <div className={`w-10 h-10 rounded-full cursor-pointer hover:ring-2 ${color === "black" ?
                  "bg-black" : color === "gray" ? "bg-gray-900" : color === "blue" ? "bg-blue-900" :
                  "bg-green-900"} ${selectedColor === color ? "ring-2 ring-blue-500" : ""}`}></div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Size: <span className="font-semibold">{selectedSize || "Select a size"}</span>
          </label>

          <div className="flex gap-2 flex-wrap">
            {["XS", "S", "M", "L", "XL", "XXL"].map(size => (
              <div
                key={size}
                onMouseEnter={() => setSelectedSize(size)}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 flex items-center justify-center border cursor-pointer
                ${selectedSize === size ? "border-black bg-gray-100" : "border-gray-300"}
              hover:border-black`}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex gap-2 text-white mt-4">
          <button className="bg-blue-950 px-4 py-2 w-full">
            ADD TO BAG – $270.00 CAD
          </button>

          <button className="bg-blue-950 px-4 py-2 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        
        <p className="text-xs text-gray-600">
          Select your size and style to check for same-day delivery and pick-up availability.
        </p>
      </div>
    </div>
  )
}

export default Products
