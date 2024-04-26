import { Dispatch, SetStateAction, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FiUpload } from "react-icons/fi";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoCloudUploadOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

interface ImageUploadProps {
    setimageUrl: Dispatch<SetStateAction<string | null>>
    setloading: Dispatch<SetStateAction<boolean>>
    loading: boolean
}

export default function ImageUpload({ setimageUrl, setloading, loading }: ImageUploadProps) {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const uploadImage = () => {
        if (!file) {
            toast("Rasm Tanlanmagan");
            return;
        }

        const imageRef = ref(storage, `images/${file.name}`);
        setloading(true);

        uploadBytes(imageRef, file)
            .then((snapshot) => getDownloadURL(snapshot.ref))
            .then((url) => {
                if (!url) {
                    toast("Yuklash bo'yicha hatolik yuz berdi, iltimos yana bir bor urunib ko'ring");
                    return;
                }
                setimageUrl(url);
                console.log(url);
            })
            .catch((error) => {
                console.error("Error uploading image:", error);
                toast("Rasmni yuklashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
            })
            .finally(() => {
                setloading(false);
            });
    };

    return (
        <>
            <ToastContainer />
            <Dialog>
                <DialogTrigger>
                    <div className="bg-black text-white flex items-center justify-center py-2 px-3 rounded-md hover:bg-opacity-80">
                        <FiUpload size="1.2em" />
                        <span className="ml-2 text-sm">Rasm Yuklash</span>
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="mb-3">Upload Profile Picture</DialogTitle>

                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                {loading ? (
                                    <div className="text-center max-w-md">
                                        <p className="text-sm font-semibold">Uploading Picture</p>
                                        <p className="text-xs text-gray-400">
                                            Do not refresh or perform any other action while the picture
                                            is being uploaded
                                        </p>
                                    </div>
                                ) : !file ? (
                                    <div className="text-center">
                                        <div className="border p-2 rounded-md max-w-min mx-auto">
                                            <IoCloudUploadOutline size="1.6em" />
                                        </div>

                                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Drag an image</span>
                                        </p>
                                        <p className="text-xs text-gray-400 dark:text-gray-400">
                                            Click to upload (image should be 500x500 px & under 10 MB)
                                        </p>
                                    </div>
                                ) : (
                                    <div className="text-center">
                                        <p className="text-xs text-gray-400">
                                            Rasmni yuklash uchun yuborish tugmasini bosing
                                        </p>
                                    </div>
                                )}
                            </label>

                            <Input
                                id="dropzone-file"
                                accept="image/png, image/jpeg"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </div>
                    </DialogHeader>

                    <DialogFooter className="flex items-center justify-end gap-x-2">
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">
                                Close
                            </Button>
                        </DialogClose>

                        <DialogClose asChild>
                            <Button size="sm" className="text-sm" onClick={uploadImage}>
                                {loading ? "Uploading..." : "Submit"}
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}