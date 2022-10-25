// import { useEffect, useState } from 'react'
// import axios from 'axios'

// export const useRequest = ({url, method }) => {
//   const [isLoading, setIsLoading] = useState(false)
//   const [isError, setIsError] = useState(false)
//   const [error, setError] = useState([])
//   const [response, setResponse] = useState(null)

//   useEffect(() => {

//   })

//   const postRequest = async (data) => {
//     console.log('data', data)
//     const response = await axios.post(url, data)
//     setIsLoading(true)
//     const responseData = response.data
//     setResponse(responseData)
//     setIsLoading(false)
//   }

//   return { isLoading, isError, error, response, postRequest }
// }
