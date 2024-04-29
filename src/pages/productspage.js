import React from 'react';
import Navbar from '../components/navbar';
import ProductsHero from '../components/productshero';
import Product from '../components/product';
import Footer from '../components/footer';



function ProductPage(){
    return(
        <div className=' min-w-screen h-auto bg-[#08152e]'>
            <Navbar/>
            <ProductsHero/>
            <Product/>
            <Product/>
            <Product/>
            <Footer/>


        </div>
    )
} 


export default ProductPage