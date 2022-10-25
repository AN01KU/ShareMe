export const fetchUserDetails=()=>{
    const image = localStorage.getItem('userImage')
    const name = localStorage.getItem('userName')
    const googleId = localStorage.getItem('userId') 

    const userInfo = { googleId, name, image }
    
    return userInfo
}
