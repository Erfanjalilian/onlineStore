
import { Result } from "postcss";
import Productitem from "../../components/productitem/productitem"
import Link from "next/link";

import {MyLanguage} from "../../context/myLanguage"
import {languagedata} from "../../components/language/language"

async function store(){

 
  const mylanguage=languagedata;
  console.log(mylanguage)


  let data;
    

    if(mylanguage==="en"){

      const result=await fetch("http://localhost:3000/store")
      data=await result.json()

    }
    if(mylanguage==="pe"){

      const result=await fetch("http://localhost:3000/storpe")
     data=await result.json()

    }


    return(

        <div className="mx-auto w-11/12">
            <h2 className="my-14">Store</h2>
            <div className="grid grid-cols-4 gap-4">
                {
                  data.map((item)=>(
                    <Link key={item.id} href={`store/${item.id}`}>
                       <Productitem key={item.id} {...item} />
                    </Link>
                  ))
                }
            </div>
        </div>




        






       
    )
}
export default store;