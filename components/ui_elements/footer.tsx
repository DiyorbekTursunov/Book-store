//compoenets
import Link from "next/link";
//images
import facebook from '../images/svgs/logos/facebook.svg'
import instagram from '../images/svgs/logos/instagram.svg'
import tele from '../images/svgs/logos/tele.svg'
import twitter from '../images/svgs/logos/twitter.svg'
import youtube from '../images/svgs/logos/youtube.svg'
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full bg-[#21204A]">
      <div className="max-w-[1440px] mx-auto text-[#fff] pt-[67px] flex max-sm:flex-col max-sm:gap-12 justify-between px-3 mb-16">
        <div>
          <Link href={"/"}>
            <span className="lg:text-[37px] md:text-[27px] max-md:text-[27px] uppercase font-semibold">Book Shop</span>
          </Link>
          <span className="block mt-6">Bizning ijtimoiy tarmoqlarimizga qo'shiling</span>
          <ul className="text-[14px] flex gap-3 text-[#BDCADB] mt-3">
            <li>
              <Link href={"/"} target="_blank">
                <Image src={facebook} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link href={"/"} target="_blank">
                <Image src={instagram} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link href={"/"} target="_blank">
                <Image src={tele} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link href={"/"} target="_blank">
                <Image src={twitter} alt="facebook" />
              </Link>
            </li>
            <li>
              <Link href={"/"} target="_blank">
                <Image src={youtube} alt="facebook" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul className="text-[14px] flex flex-col gap-3 text-[#BDCADB]">
            <li>
              <Link href={"/"} className="text-[18px] text-[#fff] font-medium">Books</Link>
            </li>
            <li>
              <Link href={"/"}>Jahon Adabiyoti</Link>
            </li>
            <li>
              <Link href={"/"}>Bolalar Adabiyoti</Link>
            </li>
            <li>
              <Link href={"/"}>O'zbek Adabiyoti</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="text-[#11315B] pb-[64px]"/>
    </div>
  )
}
