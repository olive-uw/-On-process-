import React from 'react';
import HomeComponent from '../components/HomeComponent';
import AboutComponent from '../components/AboutComponent';
import MainLayout from '../components/MainLayout';
const Home=()=>{
    return (

    <MainLayout>
         <HomeComponent></HomeComponent>
        <AboutComponent></AboutComponent>
    </MainLayout>
    
    
    )

    
}
export default Home;