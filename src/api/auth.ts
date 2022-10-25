// import { useRequest } from './../hooks/useRequest'

import axios from "axios"
import { useMutation } from "react-query"

// interface iCreds {
//   email: string
//   password: string
// }

export const useAuthorization = () => {
  // async login(creds: iCreds) {
  //     const response = await axios.post('http://localhost:9200/api/v1/auth/login', creds);
  //     return response.data;
  // }

  // async signup(creds: iCreds) {
  //     const response = await axios.post('http://localhost:9200/api/v1/auth/register', creds);
  //     return response.data;
  // }

  const useLogin = (onSuccess) => {
    const mutation = useMutation((data) => {
        return axios.post('http://localhost:9200/api/v1/auth/login', data)
    }, {
        onSuccess: (res) => {
            onSuccess(res.data.token)
        }
    })

    return mutation;
  }

  const useSignup = (onSuccess) => {
    const mutation = useMutation(data => {
      return axios.post('http://localhost:9200/api/v1/auth/register', data)
    }, {
      onSuccess: () => {
        onSuccess(true)
      }
    })

    return mutation;
  }

  return { useLogin, useSignup }
}
