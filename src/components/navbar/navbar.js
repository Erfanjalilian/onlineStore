"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "../modal/modal";
import LanguageSwitcher from "../Languagebutton/Languagebutton"
import { useContext } from "react";
import {MyLanguage} from "../../context/myLanguage"


function navbar(){
    const pathName=usePathname();
    const{language}=useContext(MyLanguage)

    const headerHandel=[
        {
            href:"/",
            title:"Home"
        },
        {
            href:"/store",
            title:"Store"
        },
        {
            href:"/AdminPanel",
            title:"AdminPanel"
        }
    ]
    const headerHande2=[
        {
            href:"/",
            title:"صفحه ی اصلی"
        },
        {
            href:"/store",
            title:"فروشگاه"
        },
        {
            href:"/AdminPanel",
            title:"پنل کاربری"
        }

    ]
    return(

        <div className="shadow">

            <div className="p-4 flex w-11/12 mx-auto">
            <div>
                <img className="w-28 h-28 -mt-7" src="logo.png" />
            </div>
            {
                language==="en"?
               
                    headerHandel.map((item)=>(
                        <Link className={`p-4 ${pathName===item.href ? "text-blue-700" : "text-black"}`} key={item.href} href={item.href}>
                            {item.title}
                        </Link>
                    ))
                :
                
                    headerHande2.map((item)=>(
                        <Link className={`p-4 ${pathName===item.href ? "text-blue-700" : "text-black"}`} key={item.href} href={item.href}>
                                {item.title}
                            </Link>
                    ))
               

            }
           
                
               
                  <span className="ms-auto">
                    <div className="flex">
                        <div>
                            <Link href="/LoginPage">
                                <p className="mr-12 mt-2 text-blue-700 text-base underline">Login</p>
                            </Link>
                        </div>
                        <div> <LanguageSwitcher /></div>
                        <div>  <Modal /></div>
                    </div>
                 
                
                  </span>


               
                   
            </div>

         

        </div>
    )
}
export default navbar;