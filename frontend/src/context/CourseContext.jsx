import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export let mycontext=createContext();
const CourseContext = ({children}) => {
    

    let [allcources,setallcources]=useState([])
    let[cart,setcart]=useState([])
     let findById = (id)=>{
    let data = allcources?.find((el)=>{
        return el.id == id
    })
    return data;
  }
    let getAllCources=async()=>{
        let res=await axios.get("http://localhost:3000/courses")
        if(res.status===200){
            setallcources(res.data)
            
            
        }

    }
    let handleAddCourse=(coursedata)=>{
        setallcources([...allcources,coursedata]);

    }
    let handleUpdateCourse=(coursedata)=>{
        let updated=allcources.map((course)=>{
            return course.id==coursedata.id ? coursedata :course

        })
        setallcources(updated)

    }
    let deletedById=async(id)=>{
        let fillterd=allcources?.filter((course)=>{
            return course.id!=id;

        })
        setallcources(fillterd)
        let res=await axios.delete(`http://localhost:3000/courses/${id}`)
        console.log(res.data);
        

    }
   let addToCart = (data) => {
  setcart((prevCart) => {
    let exists = prevCart.some(
      (course) => course.id === data.id
    );

    if (exists) {
      return prevCart;
    }

    return [...prevCart, data];
  });
};
  let removeFromCart = (id) => {
  setcart((prevCart) =>
    prevCart.filter((course) => course.id != id)
  );
};
    useEffect(()=>{
        getAllCources();
    },[])
  return (
    <mycontext.Provider value={{allcources,handleAddCourse,handleUpdateCourse,deletedById,findById,addToCart,cart,removeFromCart}}>
        {children}
    </mycontext.Provider>
  )
}

export default CourseContext
