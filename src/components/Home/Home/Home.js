import React from 'react';
import Product from '../../Product/Product';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header/Header';
import TopHeader from '../../Shared/Header/TopHeader/TopHeader';
import Reviews from '../../Shared/Reviews/Reviews/Reviews';
import Shop from '../../Shop/Shop';
import HeroSection from '../HeroSection/HeroSection';
import ProductBanner from '../ProductBanner/ProductBanner';

const Home = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <div className="sticky-top">
                <Header></Header>
            </div>
            <HeroSection></HeroSection>
            <Shop />
            <ProductBanner></ProductBanner>
            <Reviews />
            <Footer></Footer>
        </div>
    );
};

export default Home;