import React from 'react';


function Navigation({ onRouteChange,isSignedIn }) {
    const navBar = {
        display: 'flex',
        justifyContent: 'flex-end',
    }
    if (isSignedIn) {
        return(
            <nav style={navBar}>
                <p className='f3 link dim underline pa3 pointer'
                    onClick={() => {onRouteChange('sign-out')}}>
                    Sign out
                </p>
            </nav>
        )  
    }
    else{
        return(
            <nav style={navBar}>
                <p className='f3 link dim underline pa3 pointer'
                    onClick={() => {onRouteChange('sign-in')}}>
                    Sign in
                </p>
                <p className='f3 link dim underline pa3 pointer'
                    onClick={() => {onRouteChange('register')}}>
                    Sign up
                </p>
            </nav>
        )
    }

}

export default Navigation