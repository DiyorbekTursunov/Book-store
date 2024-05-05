"use client"
import { Input } from '@/components/ui/input';
import Navbar from '@/components/ui_elements/navbar';
import axios, { AxiosResponse } from 'axios'
import { NextRequest } from 'next/server';
import { useEffect } from 'react';

const baseURL = 'https://checkout.test.paycom.uz/api'; // Test platform URL


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
      const requestParams =
      {
        "id": 111111,
        "method": "cards.create",
        "params": {
          "card": { "number": "8600069195406311", "expire": "0399" },
          "save": true
        }
      }

      const headers = {
        // 'X-Auth': `66311a0403e7e088228e5226:oNcew1tRQKTP?TNNjwgh0H0zq83qMoVnQwD@`,
        "X-Auth": "66311a0403e7e088228e5226",
      };


      const response = await axiosInstance.post('/', requestParams, { headers });
      console.log(response);

      return response;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  useEffect(() => {
    createCard()
  }, [])

  return (
    <>
      <Navbar />
      <>
        <div className="min-w-[90vh] min-h-[90vh] bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
          <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" style={{ maxWidth: 600 }}>
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase">
                Sotib olish
              </h1>
            </div>
            <div className="mb-3 flex -mx-2">
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Ismingizni kiriting</label>
              <div>
                <Input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"/>
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1">Card number</label>
              <div>
                <Input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="0000 0000 0000 0000"
                  type="number"
                />
              </div>
            </div>
            <div className="mb-10">
              <label className="font-bold text-sm mb-2 ml-1">Security code</label>
              <div>
                <Input
                  className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder={"000"}
                  type="text"
                />
              </div>
            </div>
            <div>
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                <i className="mdi mdi-lock-outline mr-1" /> PAY NOW
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  )
}
