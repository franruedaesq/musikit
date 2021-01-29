import {useHistory} from 'react-router-dom'
import React, { useEffect, useState } from 'react';

// export const useFetchFromSpotify = (token, endpoint) => {
//     let history = useHistory()
//     const [resp, setResp] = useState({})

//     const fetchData = async(tkn, url) => {
//         const data = await fetch(url,{
//             headers: {
//                 Authorization: `Bearer ${tkn}`
//               }
//         })
//         if (data.status == 401) {
//             console.log('error en la conexion')
//             localStorage.removeItem('token')
//             history.push('/login')
//         }
    
//         const jsonData = await data.json()
//         return jsonData      
//     }
    
//     const jsonData = fetchData(token, endpoint)
//     return jsonData


// }



export const useFetchSpotify = (url, token) => {
    const [status, setStatus] = useState({loading: false})
    let history = useHistory()

    const fetchNow = async(url, token) => {
        try {
            setStatus({loading: true})
            const data = await fetch(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const jsonData = await data.json()
           
            if (jsonData.error && jsonData.error.status == 401) {
                console.log('error en la conexion')
                localStorage.removeItem('token')
                history.push('/login')
            }
            await setStatus({ loading: false, data: jsonData })

        } catch (error) {
            setStatus({ loading: false, error })
        }
    }

    useEffect(() => {
        if (url) {
            fetchNow(url, token);
          }
    }, [])

    return { ...status, fetchNow };
}
