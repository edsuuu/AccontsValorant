/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { ReactNode } from 'react';

interface MyRouteProps {
    children: ReactNode | (() => ReactNode);
    isClosed?: boolean;
    requiredPermission?: string;
}

interface LocationState {
    prevPath: string;
}

const MyRoute: React.FC<MyRouteProps> = ({ children, isClosed = false, requiredPermission }) => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    //estado
    const state = useSelector((state: any) => state.auth);
    console.log(state);

    const userPermission = useSelector((state: any) => state.auth.user.permission);

    const location = useLocation();

    if (isClosed && !isLoggedIn) {
        return <Navigate to="/redirect" state={{ prevPath: location.pathname } as LocationState} />;
    }

    if (requiredPermission && userPermission !== requiredPermission) {
        return <Navigate to="/unauthorized" state={{ prevPath: location.pathname } as LocationState} />;
    }

    const renderedChildren = typeof children === 'function' ? (children as () => ReactNode)() : children;

    return isLoggedIn ? <>{renderedChildren}</> : <Navigate to="/login" />;
};
export default MyRoute;
