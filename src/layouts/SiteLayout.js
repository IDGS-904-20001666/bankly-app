import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FooterComponent } from '../components/FooterComponent'
import { NavbarComponent } from '../components/NavbarComponent'
import { AboutUsPage } from '../pages/AboutUsPage'
import { ContactUsPage } from '../pages/ContactUsPage'
import { IndexPage } from '../pages/IndexPage'
import { ServicesPage } from '../pages/ServicesPage'

export const SiteLayout = () => 
{
    return (
        <>
            <NavbarComponent/>
            <Routes>
                <Route path="/" element={ <IndexPage /> } />
                <Route path="/about_us" element={ <AboutUsPage /> } />
                <Route path="/contact_us" element={ <ContactUsPage /> } />
                <Route path="/services" element={ <ServicesPage /> } />
            </Routes>
            <FooterComponent/>
        </>
    )
}