"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "../modal/modal";
import LanguageSwitcher from "../Languagebutton/Languagebutton"

function navbar(){
    const pathName=usePathname();

    const headerHandel=[
        {
            href:"/",
            title:"Home"
        },
        {
            href:"/store",
            title:"Store"
        }
    ]
    return(

        <div className="shadow">

            <div className="p-4 flex w-11/12 mx-auto">
                
                {
                    headerHandel.map((item)=>(
                        <Link className={`p-4 ${pathName===item.href ? "text-blue-700" : "text-black"}`} key={item.href} href={item.href}>
                            {item.title}
                        </Link>
                    ))
                }
                  <span className="ms-auto">
                    <div className="flex">
                        <div> <LanguageSwitcher /></div>
                        <div>  <Modal /></div>
                    </div>
                 
                
                  </span>


               
                   
            </div>

         

        </div>
    )
}
export default navbar;