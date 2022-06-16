import React from 'react';
import { Route } from 'react-router-dom';

export default function PrivateRoute(props) {

    // const user = { id: 1, role: 'regular'};
    const { user } = useAuth();

    if(!user) return <Redirect to="/login" />

  return (
    <Route {...props} />
  )
}
