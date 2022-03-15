import { useState, useEffect, useRef } from "react";
import './placeHolder.module.css'

export default function Placeholder({n}) {
 


  useEffect(() => {
    
   
  }, []);

  
 

  

  return (

   
<div className="w-full flex items-center flex-col">
    <div className="flex bg-white shadow-md p-4 rounded-md">
        <div className="place_holder mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200">
        
        </div>
        <div className="flex flex-col justify-between">
            <div className="place_holder mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">
            
            </div>
            <div className="place_holder h-10 w-40 overflow-hidden relative bg-gray-200">
            
            </div>
        </div>
    </div>
</div>

  )

}
