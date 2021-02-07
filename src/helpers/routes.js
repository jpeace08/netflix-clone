import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loginedPath, children, ...restProps }) {
    return (
        <Route 
            {...restProps}
            render={(data) => {
                if (!user) {
                    return children;
                }
                if (user) {
                    return <Redirect to={{ pathname: loginedPath }} />
                }
                return null;
            }}
        />
    );
}

export function ProtectedRoute({ user, signinPath, children, ...restProps }) {
    return (
        <Route 
            {...restProps}
            render={({ location }) => {
                if (user) {
                    return children;
                }
                if (!user) {
                    return <Redirect to={{
                        pathname: signinPath,
                        state: {
                            from: location,
                        }
                    }}/>
                }
                return null;
            }}
        />
    )
}