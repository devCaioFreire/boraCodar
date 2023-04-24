// import { useContext } from 'react'
// import { Outlet, Navigate } from 'react-router-dom'
// import Cookies from 'js-cookie';
// // import { AuthContext } from '../context/authContext'

// export function PrivateRoute({ ...props }) {
//     const authContext = useContext(AuthContext);

//     const isAuthenticated = authContext?.signed;
//     const hasAuthToken = Cookies.get('@Auth:token') !== null;

//     return isAuthenticated && hasAuthToken ? <Outlet /> : <Navigate to="/" />;
// }
