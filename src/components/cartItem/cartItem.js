import Button from "../button/button"
function cartItem(){
    return(
        <div className="shadow">
            <div className="grid grid-cols-12 ">
                <div className="col-span-2">
                    <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3k7gsqNtMuMSCPdJ-QZOhir1EhVZn6Ni5g&s" />
                </div>
                <div className="col-span-10">







                    <div className="flex justify-between">
                        <div><h3>Product Name :<span>Product 1</span></h3></div>
                        <div className="mt-3 me-3">
                        <svg class="w-[30px] h-[30px] fill-[#d41c1c]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">


<path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"></path>

</svg>
                        </div>
                    </div>









                    
                    <h3>Product price :<span>40$</span></h3>
                    <Button />
                    <h3>Total product price :<span>40$</span></h3>
                </div>
            </div>
        </div>
    )
}
export default cartItem;