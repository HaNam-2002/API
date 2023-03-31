import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Banner from '../components/Banner/Banner';
import Mainmenu from '../components/Menu/Menu';
import Promo from '../components/promo/promo';
import MainContent from '../components/mainContent/mainContent';
import TopSeller from '../components/topSellers/TopSellers';
function HomePage() { 
    return (   
        <div style={{position: 'relative'}}>
            <Header />
            <Mainmenu/>
            <Banner/>
            <Promo/>
            <MainContent/>
            <TopSeller/>
            {/* <Oppo /> */}
            <Footer />
        </div>
    );
}

export default HomePage;
