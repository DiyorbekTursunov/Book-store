//components
import { Book } from '@/types/admin'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '../ui/button'
import { toast } from 'react-toastify'
//images

interface BooksModalProps {
    setmodalIsOpen: Dispatch<SetStateAction<boolean>>
    modalIsOpen: boolean
    bookForModalData: Book
}

export default function BooksModal({ setmodalIsOpen, modalIsOpen, bookForModalData }: BooksModalProps) {
    const [count, setcount] = useState(1)
    return modalIsOpen ? (
        <>
            <div onClick={() => setmodalIsOpen(false)} data-state="open" className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" data-aria-hidden="true" aria-hidden="true" style={{ pointerEvents: "auto" }}></div>
            <div role="dialog" id="radix-:r1j:" aria-describedby="radix-:r1l:" aria-labelledby="radix-:r1k:" data-state="open" className="max-sm:h-screen items-center fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg p-2" tabIndex={-1} style={{ pointerEvents: "auto" }}><div className="flex flex-col space-y-1.5 text-center sm:text-left">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full grid gap-4 pt-6 relative">
                    <div className="p-6 pt-0 grid gap-4">
                        <div className="sm:grid sm:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:items-center gap-2">
                            <img src={bookForModalData.imageUrl} width={190} height={270} alt="Book image" className='h-[270px]' />
                            <div>
                                <h2 className='font-semibold mb-4'>{bookForModalData.name}</h2>
                                <p className='text-[#3d3d3d] mb-4'>{bookForModalData.description}</p>
                                <div className='flex items-center gap-3 '>
                                    <Button variant={"ghost"} onClick={() => setcount(count >= 10 ? count : count + 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="22px" viewBox="0 0 24 24" fill="none">
                                            <path d="M4 12H20M12 4V20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Button>
                                    <span>{count}</span>
                                    <Button variant={"ghost"} onClick={() => setcount(count <= 1 ? count : count - 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
                                            <path d="M6 12L18 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => { setmodalIsOpen(false), toast("Savatga qo'shildi") }} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 transition-all" type="submit">
                            Savatga qo&apos;shish
                        </button>
                    </div>
                    <button onClick={() => setmodalIsOpen(false)} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x h-4 w-4"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        <span className="sr-only">Close</span>
                    </button>
                </div>
            </div>
            </div>
        </>
    ) : null
}
