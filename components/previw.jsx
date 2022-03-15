import { useState, useEffect, useRef } from "react";
import Placeholder from "./PlaceHolder";

export default function Preview({ show, images, hide, keep, deleteImg }) {
  const [color, setColor] = useState(false);
  const [imgsState, setImgesState] = useState([]);
  const [marginT, setMarginT]= useState(null);
  const [mTCheck, setMTCheck]= useState(false)
  const modal = useRef(null);

  useEffect(() => {
    const newS = images.slice();

    const arrObj = newS.map((img, i) => {
      return {
        img,
        color: "grey",
        id: i,
      };
    });
// setMTCheck(!mTCheck)
    setImgesState([...arrObj]);
    // if (modal.current){
    //   if(modal.current.getBoundingClientRect().height >  window.innerHeight ){
    //    setMarginT(modal.current.getBoundingClientRect().height - window.innerHeight) ;

    //     modal.current.style.marginTop = `${marginT +50 }px`.replace("-","")

    //      console.log({margin:`${modal.current.getBoundingClientRect().height - window.innerHeight +50 }px`.replace("-",""),
    //    mdH:modal.current.getBoundingClientRect().height, 
    //    wH: window.innerHeight,
    //    subs: modal.current.getBoundingClientRect().height - window.innerHeight
    //   })
    //   }
       
      
    // }
 
  }, [images, color,marginT]);

  const enter = (img) => {
    const cur = imgsState.find((im) => im === img);
    cur.color = "blue";
    const ind = imgsState.indexOf(cur);
    const newArr = [...imgsState];
    newArr[ind] = cur;
    setImgesState([...newArr]);
  };
  const leave = (img) => {
    const cur = imgsState.find((im) => im === img);
    cur.color = "grey";
    const ind = imgsState.indexOf(cur);
    const newArr = [...imgsState];
    newArr[ind] = cur;
    setImgesState([...newArr]);
  };

  //    const deleteImg=(e,i)=>{
  //   //  console.log(e)
  //   //  console.log(trash)
  //    const image =images[i]
  //    console.log(image)
  //   const delImg = images.find(img => img ===image)
  //   console.log(delImg)

  //   images.splice(images.indexOf(delImg), 1)
  // // setColor(!color)

  //    }
  //     console.log(show)

  return (
    <>
      {show ? (
       
         <div>
             <div  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full">
              <div ref={modal} className="relative  h-1/2 w-11/12  my-2 mx-auto w-96 max-w-full">
                {/*content*/}
                <div className="border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Preview</h3>
                  </div>
                  {/*body*/}
                  <section className="overflow-hidden text-gray-700 ">
                    <div className="container  px-5 py-2 mx-auto">
                      <div className="flex flex-wrap -m-1 md:-m-2">
                        {imgsState.length > 0
                          ? imgsState.map((img, i) => {
                              return (
                                <div className="flex w-80 m-2 border-2  ">
                                  <div
                                    onMouseEnter={() => enter(img)}
                                    onMouseLeave={() => leave(img)}
                                    onClick={() => deleteImg(i)}
                                    className="w-4 max-w-4 h-8 z-10"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill={img.color}
                                      viewBox="0 0 448 512"
                                    >
                                      <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
                                    </svg>
                                  </div>
                                  <div className="w-full h-full p-1 md:p-2">
                                    <img
                                      alt="gallery"
                                      className="block object-cover object-center w-full h-full rounded-lg"
                                      src={img.img}
                                    />
                                  </div>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </section>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => hide(e)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={(e) => keep(e)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
         </div>
        
          
          
      
      ) : null}
    </>
  );
}
