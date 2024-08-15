// import React from 'react'
// import PropTypes from 'prop-types'
import { useCreateMyUser } from '@/api/MyUserApi';
import { useAuth0 } from "@auth0/auth0-react";
import { AppState, Auth0Provider, User } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom'

type Props ={
    children: React.ReactNode;
}

const Auth0ProviderWithNavigator=({children}: Props)=> {
    // const {createUser,} = useCreateMyUser();
    const navigate = useNavigate();
    const {getAccessTokenSilently} = useAuth0();

  
    const domain = import.meta.env.VITE_AUTH0_DOMAIN
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL

    if(!domain || !clientId ||  !redirectUri){
        throw new Error("unable to initialise auth")
    }

    const onRedirectCallback = async (appState?:AppState,user?:User)=>{
        const token = await getAccessTokenSilently();
        console.log("token",token)
        navigate("/auth-callback")
        // console.log("USER",user);
        // if(user?.sub && user?.email){
        //     createUser({auth0Id:user.sub, email: user.email})

        // }

    }

    return (
        <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{redirect_uri: redirectUri,}}
        onRedirectCallback={onRedirectCallback}>

            {children}

        </Auth0Provider>

    )

 
  
}

// Auth0ProviderNavigator.propTypes = {}

export default Auth0ProviderWithNavigator
