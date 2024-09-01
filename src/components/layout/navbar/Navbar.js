'use client';

import React, { useState, useEffect } from 'react';
import MainNavBar from './MainNavBar';
import HeartBeats from './HeartBeats';

function ResponsiveAppBar() {
    const [showHeartBeats, setShowHeartBeats] = useState(true); // Initially show HeartBeats

    useEffect(() => {
        const heartBeatRoutes = ['/', '/sexual-health', '/weight-loss', '/hair-growth', '/contact-us', '/about-us', '/blogs'];

        // Check if the current route matches any of the heartBeatRoutes
        const currentPath = window.location.pathname;

        if (heartBeatRoutes.includes(currentPath)) {
            // Show HeartBeats for a short duration before switching to MainNavBar
            const timer = setTimeout(() => {
                setShowHeartBeats(false); // Switch to MainNavBar after delay
            }, 2000); // 2000ms (2 seconds) delay, adjust as needed

            return () => clearTimeout(timer); // Cleanup the timer on component unmount
        } else {
            setShowHeartBeats(false); // Directly show MainNavBar if not in heartBeatRoutes
        }
    }, []);

    return (
        <>
            {showHeartBeats ? <HeartBeats /> : <MainNavBar />}
            {/* <HeartBeats />  */}

        </>
    );
}

export default ResponsiveAppBar;

// right loading logic

// 'use client';

// import React, { useState, useEffect } from 'react';
// import MainNavBar from './MainNavBar';
// import HeartBeats from './HeartBeats';

// function ResponsiveAppBar() {
//     const [showHeartBeats, setShowHeartBeats] = useState(false);

//     useEffect(() => {
//         const handleRouteChangeStart = () => {
//             setShowHeartBeats(true); // Show HeartBeats when route change starts
//         };

//         const handleRouteChangeComplete = () => {
//             setShowHeartBeats(false); // Show MainNavBar when route change completes
//         };

//         // Listen to route change events via the window object
//         window.addEventListener('beforeunload', handleRouteChangeStart);
//         window.addEventListener('load', handleRouteChangeComplete);

//         // Cleanup listeners on component unmount
//         return () => {
//             window.removeEventListener('beforeunload', handleRouteChangeStart);
//             window.removeEventListener('load', handleRouteChangeComplete);
//         };
//     }, []);

//     return (
//         <>
//             {showHeartBeats ? <HeartBeats /> : <MainNavBar />}
//         </>
//     );
// }

// export default ResponsiveAppBar;
