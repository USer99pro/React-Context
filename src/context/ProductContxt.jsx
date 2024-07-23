
import React ,{createContext, useState, useEffect, useContext} from "react"

const ProContext = createContext();


export const ProductProvider = ({ children }) => {

    const[product, setProduct] = useState([]);
    const[loading, setloading] = useState(true);
    const[error,seterror]= useState(null);

    useEffect( ()=>{
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            setProduct(data.products);
            setloading(false);
            
        })
        .catch(err => {
            console.error('เกิดข้อผิดพลาดในการโหลดข้อมูล',err);
            seterror('เกิดข้อผิดพลาดในการโหลดข้อมูล',err);
            setloading(false);
        })
            
    })

    return (
      <ProContext.Provider value={{product, loading, error}}>
        {children}
      </ProContext.Provider>
    )
}

export const useProduct = () => useContext(ProContext);