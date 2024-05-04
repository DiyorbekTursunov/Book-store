"use client"
import Navbar from '@/components/ui_elements/navbar';
import axios, { AxiosResponse } from 'axios'
import { useEffect } from 'react';

const baseURL = 'https://checkout.test.paycom.uz/'; // Test platform URL


const axiosInstance = axios.create({
  baseURL,
});

interface CardParams {
  number: string;
  expire: string;
}

// interface CreateCardParams {
//   id: number;
//   method: string;
//   params: {
//     card: CardParams;
//     save: boolean;
//   };
// }

interface VerifyParams {
  id: number;
  method: string;
  params: {
    token: string;
    code: string;
  };
}

interface CheckParams {
  id: number;
  method: string;
  params: {
    token: string;
  };
}


export default function CheckOut() {


  const createCard = async (): Promise<AxiosResponse> => {
    try {
      const requestParams = {
        "id": 1,
        "method": "cards.create",
        "params": {
          "card": { "number": "8600069195406311", "expire": "0399" },
          "save": true
        }
      }

      const headers = {
        // 'X-Auth': `66311a0403e7e088228e5226:oNcew1tRQKTP?TNNjwgh0H0zq83qMoVnQwD@`,
        "X-Auth": "66311a0403e7e088228e5226",
        // 'X-Auth': `66311a0403e7e088228e5226`,
      };


      const response = await axiosInstance.post('/api', requestParams, { headers });
      console.log(response);

      return response;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  useEffect(() => {
    const { id, cardExpire, cardNumber, save } = {
      id: 123,
      cardNumber: "8600069195406311",
      cardExpire: "0399",
      save: true
    };

    createCard()
  }, [])



  return (
    <>
      <Navbar />
    </>
  )
}
