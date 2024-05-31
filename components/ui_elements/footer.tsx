"use client"
//compoenets
import Link from "next/link";
//images
import facebook from '../images/svgs/logos/facebook.svg'
import instagram from '../images/svgs/logos/instagram.svg'
import tele from '../images/svgs/logos/tele.svg'
import twitter from '../images/svgs/logos/twitter.svg'
import youtube from '../images/svgs/logos/youtube.svg'
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { allCategorys } from "@/types/admin";
import { useRouter } from "next/navigation";




interface footerType {
  setSelectedCategory?: Dispatch<SetStateAction<string | null>>
  setActiveButtonId?: Dispatch<SetStateAction<string | null>>
  allCategories?: allCategorys[] | undefined
}

export default function Footer({ setActiveButtonId, setSelectedCategory, allCategories }: footerType) {
  const router = useRouter()

  const handleCategoryClick = (categoryId: string | null) => {
    router.push(`/categorys/${categoryId}`)
  };

  return (
    <footer className="w-full bg-[#21204A]">
      <div className="max-w-[1440px] mx-auto text-[#fff] pt-[67px] flex max-sm:flex-col max-sm:gap-12 justify-between px-3 mb-16">
        <div>
          <Link href={"/"}>
            <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold">COMFORT BOOKS</span>
          </Link>
          <span className="block mt-6">Bizning ijtimoiy tarmoqlarimizga qo&apos;shiling</span>
          <ul className="text-[14px] flex gap-4 text-[#BDCADB] mt-3">
            <li>
              <Link href={"https://instagram.com/comfortBooks_uz"} target="_blank">
                <Image src={instagram} alt="facebook" className="w-[25px]" />
              </Link>
            </li>
            <li>
              <Link href={"https://t.me/Comfortbooks_uz"} target="_blank">
                <Image src={tele} alt="telegram" className="w-[25px]" />
              </Link>
            </li>
            <li>
              <Link href={"tel:+998975911441"} target="_blank">
                <span className="text-[18px]">(97)591-14-41</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          {allCategories?.length && <ul className="text-[14px] flex flex-col gap-3 text-[#BDCADB]">
            <li>
              <Link href={"/"} className="text-[18px] text-[#fff] font-medium">Books</Link>
            </li>
            {allCategories.map(category => (
              <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                <Link href={"#categories"}>
                  <span className="capitalize">{category.title}</span>
                </Link>
              </li>
            ))}
          </ul>}
        </div>
      </div>
      <hr className="text-[#11315B] pb-[64px]" />
    </footer>
  )
}
