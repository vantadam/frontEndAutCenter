import React from 'react';

import LoadingToRedirect from './LoadingToRedirect';



const PRAdmin = ({children}) => {
    const token = localStorage.getItem("refresh_token");
    const decodedToken = jwtDecode(token);
    const user = decodedToken.role[0].authority
    

  return user == "ADMIN" ? children : <LoadingToRedirect />

}

export default PRAdmin