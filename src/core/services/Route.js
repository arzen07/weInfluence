import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { SIGN_IN } from '../constants';
import { AuthContext } from "./Auth";

const PrivateRoute = ({
    component: RouteComponent, ...rest
}) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps => !!currentUser
                ? (<RouteComponent {...routeProps} />)
                : (<Redirect to={SIGN_IN} />)}
        />
    )
}
export default PrivateRoute;