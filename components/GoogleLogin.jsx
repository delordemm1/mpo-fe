import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa';

const GoogleLoginButton = () => {
    const successRes = (response) => {
        // Handle the response from Google Sign-In
        console.log('onSuccess: ', response);
    };

    const failureRes = (response) => {
        // Handle the response from Google Sign-In
        console.log('onFailure: ', response);
    };

    const logout = (response) => {
        // Handle the response from Google Sign-In
        console.log('onLogoutSuccess: ', response);
    };

    return (
        <>
            <GoogleLogin
                clientId="949320575775-c4i71ejccscqlfhqahq1f9jud79vdfag.apps.googleusercontent.com"
                // render={renderProps => (
                //     <a onClick={renderProps.onClick} disabled={renderProps.disabled}
                //         className="inline-flex w-full justify-center items-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                //     >
                //         <span className="sr-only">Signup with Google</span>
                //         <FaGoogle size={25} className="text-blue-400" />

                //         <p className="ml-5 text-sm">Signup with Google</p>
                //     </a>
                // )}
                buttonText="Login with Google"
                onSuccess={successRes}
                onFailure={failureRes}
                cookiePolicy={'single_host_origin'}
            />


            <GoogleLogout
                clientId="949320575775-c4i71ejccscqlfhqahq1f9jud79vdfag.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
            >
            </GoogleLogout>
        </>
    );
};

export default GoogleLoginButton;