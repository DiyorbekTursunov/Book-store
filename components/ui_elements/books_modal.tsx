//components
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'
//images
import book_1 from '../images/books/book_1.jpg'
import plus_icon from '../images/svgs/icons/plus_icon.svg'
import minus_icon from '../images/svgs/icons/minus_icon.svg'

interface BooksModalProps {
    setmodalIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function BooksModal({ setmodalIsOpen }: BooksModalProps) {
    return (
        <>
            <div className="fixed w-full h-full  top-0 right-0 bg-black opacity-30 z-50"></div>
            <div
                id="static-modal"
                data-modal-backdrop="static"
                tabIndex={-1}
                className="overflow-y-auto overflow-x-hidden fixed  left-0 z-50 flex justify-center items-center w-full h-full  md:inset-0 max-h-full"
            >
                <div className="relative p-4 w-full flex justify-center 2xl:w-[1200px] max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Static modal
                            </h3>
                            <button
                                onClick={() => setmodalIsOpen(false)}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="static-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4 flex md:flex-row sm:flex-col max-sm:flex-col md:items-start sm:items-center max-sm:items-center items-start gap-12">
                            <Image src={book_1} alt='book image' className='md:w-[364px] md:h-[527px] sm:w-[164px] sm:h-[290px] max-sm:sm:w-[164px] max-sm:h-[390px]' />
                            <div>
                                <h2 className='text-[24px] font-semibold mb-3'>BOOK NAME</h2>
                                <p>A polite young bear, dressed in a stylish red hat, shows up in London’s bustling Paddington Station with no more than a suitcase full of marmalade.</p>
                                <div className='flex items-center justify-between'>
                                    <div className="bg-[#F0F0F0] flex px-[10px] py-2 items-center w-[180px] rounded-[62px] sm:mt-3   gap-[20px]">
                                        <Button variant={"ghost"}>
                                            <Image src={minus_icon} alt="plus icon" />
                                        </Button>
                                        <span>1</span>
                                        <Button variant={"ghost"}>
                                            <Image src={plus_icon} alt="plus icon" />
                                        </Button>
                                    </div>
                                    <Button
                                        onClick={() => setmodalIsOpen(false)}
                                        data-modal-hide="static-modal"
                                        type="button"
                                        className="text-white hidden max-sm:flex font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Add to card
                                    </Button>
                                </div>
                            </div>
                        </div>
                        {/* Modal footer */}
                        <div className="hidden items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600  sm:flex ">
                            <Button
                                onClick={() => setmodalIsOpen(false)}
                                data-modal-hide="static-modal"
                                type="button"
                                className="text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Add to card
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
