'use-client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CiTrash } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa6";

import Navbar from '../../components/Header';
import Footer from '../../components/Footer';

export default function CartPage() {
    return (
        <div>
            <Navbar />

            <section className="bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-between py-6">
                    <p className="font-semibold text-2xl text-gray-700">Cart</p>
                    <div className=" flex space-x-2">
                        <Link href="/" className="text-indigo-500">Home</Link>
                        <p>/</p>
                        <p className="text-gray-600">Cart</p>
                    </div>
                </div>
            </section>

            {/* The cart section now */}
            <div className="py-6 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                {/* left side */}
                <div 
                    className="lg:col-span-8 rounded-lg shadow-xl  px-8" 
                        style={{
                        backgroundImage: 'linear-gradient(to right, #3b82f6 60%, transparent 100%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'top',
                        backgroundSize: '100% 2px',
                    }}>
                    <div className="border-b border-gray-200 flex justify-between mb-4 pb-2 pt-4">
                        <div className='px-4'>
                            <p className='text-gray-600 font-semibold'>PRODUCT</p>
                        </div>
                        <div className="flex  space-x-18 px-4">
                            <p className='text-gray-600'>PRICE</p>
                            <p className='text-gray-600'>QUANTITY</p>
                            <p className='text-gray-600'>TOTAL</p>
                        </div>
                    </div>

                    {/* single product on the cart */}
                    <div className="border border-gray-200 hover:border-blue-300 rounded-xl flex justify-between py-6 mb-4">
                        <div className='flex'>
                            <div className="border border-gray-200 rounded-lg ml-4">
                                <Image src="/images/product.webp" alt="Product Image" width={64} height={64} className="w-18 h-18 transition-transform duration-300 hover:scale-110" />
                            </div>

                            <div className="px-6 max-w-lg">
                                <p className="font-semibold text-md text-gray-500 ">Lorem ipsum dolor sit amet</p>
                                <div className="flex space-x-2">
                                    <p className="text-gray-400 border border-gray-200 p-2 text-sm rounded-lg">Color: Black</p>
                                    <p className="text-gray-400 border border-gray-200 p-2 text-sm rounded-lg">Size: M</p>
                                </div>
                                <div className="flex space-x-2 pt-4 items-center group">
                                    <CiTrash className="w-5 h-5 text-gray-500 group-hover:text-red-600 hover:ml-1 transition-colors duration-300" />
                                    <p className="text-sm text-gray-500 group-hover:text-red-600  transition-all duration-300">Remove</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex space-x-8 px-4 items-center">
                            <p className="text-dark font-semibold">Ksh. 89.99</p>
                            <div className=" border rounded-2xl  border-gray-200">
                                <div className="p-2 flex items-center space-x-4">
                                    <FaMinus 
                                    className="w-5 h-5 text-gray-400 hover:bg-blue-200 hover:rounded-full hover:scale-125 p-1 transition-all duration-300" 
                                    />
                                    <p className="text-dark font-semibold">1</p>
                                    <FaPlus className="w-5 h-5 text-gray-400 hover:bg-blue-200 hover:rounded-full hover:scale-125 p-1 transition-all duration-300"  />
                                </div>
                                
                                
                            </div>
                            <p 
                                className="text-dark font-semibold relative inline-block" 
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #3b82f6 60%, transparent 100%)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'bottom',
                                    backgroundSize: '100% 2px',
                                }}
                                >
                                Ksh. 129.28
                                </p>
                        </div>
                    </div>
                    {/* product 2 */}
                    <div className="border border-gray-200 hover:border-blue-300 rounded-xl flex justify-between py-6 mb-4">
                        <div className='flex'>
                            <div className="border border-gray-200 rounded-lg ml-4">
                                <Image src="/images/product1.webp" alt="Product Image" width={64} height={64} className="w-18 h-18 transition-transform duration-300 hover:scale-110" />
                            </div>

                            <div className="px-6 max-w-lg">
                                <p className="font-semibold text-md text-gray-500 ">Lorem ipsum dolor sit amet</p>
                                <div className="flex space-x-2">
                                    <p className="text-gray-400 border border-gray-200 p-2 text-sm rounded-lg">Color: Black</p>
                                    <p className="text-gray-400 border border-gray-200 p-2 text-sm rounded-lg">Size: M</p>
                                </div>
                                <div className="flex space-x-2 pt-4 items-center group">
                                    <CiTrash className="w-5 h-5 text-gray-500 group-hover:text-red-600 group-hover:ml-1 transition-colors duration-300" />
                                    <p className="text-sm text-gray-500 group-hover:text-red-600  transition-all duration-300">Remove</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex space-x-8 px-4 items-center">
                            <p className="text-dark font-semibold">Ksh. 89.99</p>
                            <div className=" border rounded-2xl  border-gray-200">
                                <div className="p-2 flex items-center space-x-4">
                                    <FaMinus 
                                    className="w-5 h-5 text-gray-400 hover:bg-blue-200 hover:rounded-full hover:scale-125 p-1 transition-all duration-300" 
                                    />
                                    <p className="text-dark font-semibold">1</p>
                                    <FaPlus className="w-5 h-5 text-gray-400 hover:bg-blue-200 hover:rounded-full hover:scale-125 p-1 transition-all duration-300"  />
                                </div>
                                
                                
                            </div>
                            <p 
                                className="text-dark font-semibold relative inline-block" 
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #3b82f6 60%, transparent 100%)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'bottom',
                                    backgroundSize: '100% 2px',
                                }}
                                >
                                Ksh. 129.28
                                </p>
                        </div>
                    </div>
                    {/* product 3 */}
                    <div className="border border-gray-200 hover:border-blue-300 rounded-xl flex justify-between py-6 mb-4">
                        <div className='flex'>
                            <div className="border border-gray-200 rounded-lg ml-4">
                                <Image src="/images/product.webp" alt="Product Image" width={64} height={64} className="w-18 h-18 transition-transform duration-300 hover:scale-110" />
                            </div>

                            <div className="px-6 max-w-lg">
                                <p className="font-semibold text-md text-gray-500 ">Lorem ipsum dolor sit amet</p>
                                <div className="flex space-x-2">
                                    <p className="text-gray-400 border border-gray-200 p-2 text-sm rounded-lg">Color: Black</p>
                                    <p className="text-gray-400 border border-gray-200 p-2 text-sm rounded-lg">Size: M</p>
                                </div>
                                <div className="flex space-x-2 pt-4 items-center group">
                                    <CiTrash className="w-5 h-5 text-gray-500 group-hover:text-red-600 group-hover:ml-1 transition-colors duration-300" />
                                    <p className="text-sm text-gray-500 group-hover:text-red-600  transition-all duration-300">Remove</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex space-x-8 px-4 items-center">
                            <p className="text-dark font-semibold">Ksh. 89.99</p>
                            <div className=" border rounded-2xl  border-gray-200">
                                <div className="p-2 flex items-center space-x-4">
                                    <FaMinus 
                                    className="w-5 h-5 text-gray-400 hover:bg-blue-200 hover:rounded-full hover:scale-125 p-1 transition-all duration-300" 
                                    />
                                    <p className="text-dark font-semibold">1</p>
                                    <FaPlus className="w-5 h-5 text-gray-400 hover:bg-blue-200 hover:rounded-full hover:scale-125 p-1 transition-all duration-300"  />
                                </div>
                                
                                
                            </div>
                            <p 
                                className="text-dark font-semibold relative inline-block" 
                                style={{
                                    backgroundImage: 'linear-gradient(to right, #3b82f6 60%, transparent 100%)',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'bottom',
                                    backgroundSize: '100% 2px',
                                }}
                                >
                                Ksh. 129.28
                                </p>
                        </div>
                    </div>


                </div>

                {/* on the right side */}
                <div className="lg:col-span-4 rounded-lg shadow-xl px-8">
                    <div>
                        <h3 className="text-gray-600">Order Summary</h3>
                    </div>

                </div>

            </div>

            <Footer />

        </div>
    );
}