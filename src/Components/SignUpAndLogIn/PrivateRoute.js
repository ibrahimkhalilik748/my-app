import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [userDetails, setUserDetails] = useContext(userContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                userDetails.email ? (
                    children
                ) : (
                    <Redirect
                        // exact
                        // from="/"
                        to="/login"
                        // to={{
                        //     pathname: "/login",
                        //     state: { from: location }
                        // }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;