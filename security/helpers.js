import React from "react";
import Router, { useRouter } from 'next/router';

const routes = process.env.NEXT_PUBLIC_PUBLIC_ALLOWED_ROUTES.split(", ");

export const LocationContext = React.createContext(null);

async function routeHome() {
    await Router.push('/')
}

export function LocationContextProvider({ children }) {
    const lastVisitedLocation = React.useRef(null);
    function registerLocation(location) {
        lastVisitedLocation.current = location;
    }
    return (
        <LocationContext.Provider value={{ registerLocation, lastVisitedLocation }}>
            {children}
        </LocationContext.Provider>
    );
}

export function useInvalidUrlRoutes() {
    const { asPath } = useRouter();
    const currentLocation = asPath;
    const {lastVisitedLocation} = React.useContext(LocationContext);

    if (
        lastVisitedLocation.current === null &&
        !routes.includes(currentLocation)
    ) {
        routeHome();
    }
}