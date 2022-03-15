import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Err from "../components/Error";
import * as Yup from "yup";


import Layout from "../components/Layout";
import { productService } from "../services/product.service";

import { alertService } from "../services/alert.service";
import Perview from "../components/previw";
export default function Add() {
  const router = useRouter();
  const [images, setImages] = useState([]);
  const [preImgs, setPreImgs] = useState([]);
  const [rawImgs, setRawImgs] = useState([]);
  const [show, setShow] = useState(false);
  const[category, setCat]=useState(null);
  const[size, setSize]=useState(null);
  const imgInput = useRef(null);

  useEffect(() => {}, [images, show]);

  function handleCategory(e) {
 
    setCat(e.target.value)
     console.log(category)
     
    
    
  }

  function handleSize(e) {
 setSize(e.target.value)
    console.log(size)
    
   
   
 }

  const handleMultipleImages = (e) => {
    const selectedFIles = [];
    const targetFiles = e.target.files;
    setRawImgs(targetFiles)
    const targetFilesObject = [...targetFiles];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });
    setImages(selectedFIles);

    setShow(true);
    console.log(show);
  };

  const hide = (e) => {
    setImages([]);
    setPreImgs([]);
    imgInput.current.value = null;
    setShow(false);
  };

  const keepImgs = (e) => {
    e.preventDefault();
    setShow(false);
    setPreImgs(images);
  };

  const deleteImg = (i) => {
    const image = images[i];
    console.log({ image });
    const delImg = images.find((img) => img === image);
    console.log({ delImg, i: images.indexOf(delImg) });
    const ind = images.indexOf(delImg);
    const rest = images.filter((img) => img !== image);
    console.log({ rest });
    setImages(rest);
    // setColor(!color)
  };

  // form validation rules
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(<Err>name is required</Err>),
   
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit() {
  
     const imagesArr =[];
     let values = Object.values(rawImgs)
     
     values.map(async (file) => {
      Object.assign(file, { url: URL.createObjectURL(file) });
      Object.assign(file, { ext: file.name.split(".").pop() });
      Object.assign(file, {category });
    });
    const formData = new FormData();
    values.map((fl) => {
      formData.append("file[]", fl);
    });
       const product ={ 
        
         images: values,
         category,
         size,
         name
       }
       console.log(product)
     return productService
     .register(product)
    .then(() => {
        alertService.success("Registration successful", {
          keepAfterRouteChange: true,
        });
        // router.push("login");
      })
      .catch(alertService.error);
  }

  return (
    <Layout>
      <div className=" m-6 block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h4 className="card-header">New Product</h4>
<h1>{category +" " + size}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-6">
            <label className="form-label inline-block mb-2 text-gray-700">
              Name
            </label>
            <input
              name="name"
              type="name"
              {...register("name")}
              className={`form-control 
               ${errors.name ? "is-invalid" : ""}
       
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              id="exampleInputEmail2"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>

          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <label
                for="formFileMultiple"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Add Images
              </label>
              <input
                ref={imgInput}
                onChange={handleMultipleImages}
                name="files"
                className={`form-control 
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                type="file"
                id="formFileMultiple"
                multiple
              ></input>
            </div>
          </div>

          <div className=" flex row mb-2">
            <span className="bg-slate-200 w-20 text-center"> Category</span>
            <select onChange={handleCategory} name="category" id="cars">
            <option value=" "></option>
              <option value="sweater">sweater</option>
              <option value="T-shirt">T-shirt</option>
              <option value="hoody">hoody</option>
          
            </select>
            <span className="bg-slate-200 w-20 text-center"> Size</span>

            <select onChange={handleSize} name="size" id="cars">
            <option value=" "></option>
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
              <option value="x-large">x-large</option>
            </select>
          </div>

          <div className="form-group mb-6 flex justify-between ">
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="
    
               px-6
               py-2.5
               bg-blue-600
               text-white
               font-medium
               text-xs
               leading-tight
               uppercase
               rounded
               shadow-md
               hover:bg-blue-700 hover:shadow-lg
               focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
               active:bg-blue-800 active:shadow-lg
               transition
               duration-150
               ease-in-out"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Add
            </button>
            <button
              className="
       
                 py-2.5
                 bg-red-600
                 text-white
                 font-medium
                 text-xs
                 leading-tight
                 uppercase
                 rounded
                 shadow-md
                 hover:bg-blue-700 hover:shadow-lg
                 focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                 active:bg-blue-800 active:shadow-lg
                 transition
                 duration-150
                 px-6
                 ease-in-out"
            >
              {formState.isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              Cancel
            </button>
          </div>
        </form>
      </div>
 

      <div>
        <h3>preview</h3>
        <section className="overflow-hidden text-gray-700 ">
          <div className="container flex flex-wrap px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            {preImgs.map((url) => {
              return (
                <div className="flex flex-wrap -m-1 md:-m-2">
                  <div>
                    <div className="m-2 w-32 p-1 md:p-2">
                      <img
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={url}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Perview
        show={show}
        images={images}
        hide={hide}
        keep={keepImgs}
        deleteImg={deleteImg}
      ></Perview>

      {}
    </Layout>
  );
}
