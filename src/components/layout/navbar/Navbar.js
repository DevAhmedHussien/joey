'use client';
import React, { useState, useEffect } from 'react';
import MainNavBar from './MainNavBar';
import HeartBeats from './HeartBeats';

function ResponsiveAppBar() {
    const [showHeartBeats, setShowHeartBeats] = useState(true); // Initially show HeartBeats

    useEffect(() => {
        const heartBeatRoutes = ['/', '/sexual-health', '/weight-loss', '/hair-growth', '/contact-us', '/about-us', '/blogs'];

        const currentPath = window.location.pathname;

        if (heartBeatRoutes.includes(currentPath)) {
            const timer = setTimeout(() => {
                setShowHeartBeats(false); 
            }, 2000);

            return () => clearTimeout(timer); 
        } else {
            setShowHeartBeats(false);
        }
    }, []);

    return (
        <>
            {showHeartBeats ? <HeartBeats /> : <MainNavBar />}
        </>
    );
}
export default ResponsiveAppBar;
