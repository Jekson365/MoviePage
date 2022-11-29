import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Discover } from './discover/Discover'
import { Details } from './pages/Details'
import { AnimatePresence, motion } from 'framer-motion'


export const Routess = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/login'} element={<Login />} />
                <Route path={'/Registration'} element={<Register />} />
                <Route path={'/discover'} element={<Discover />} />
                <Route path={'/details/movie/:id'} element={<Details />} />
                <Route path={'/details/tv/:id'} element={<Details />} />
            </Routes>
        </AnimatePresence>
    )
}
