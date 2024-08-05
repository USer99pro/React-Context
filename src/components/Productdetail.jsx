import React from 'react'
import { useProduct } from '../context/ProductContxt'
import {useParams, Link} from 'react-router-dom'
import { useCart } from '../context/Cartcontexts'

const Productdetail = () => {
    const { id } = useParams();
    const { product,loading,error } = useProduct();
    const { addToCart } = useCart();

    if (loading) return <div className="container mx-auto p-4 "> กำลังโหลด...</div>
    if (error) return <div className="container mx-auto"> (error) </div>

    const myproduct = product.find(p => p.id === parseInt(id));
    if (!myproduct){
        return <div className="container mx-auto p-4 ">ไม่พบสินค้า</div>
    } 


  return (
    <div className='container mx-auto p-3 bg-transparent'>
        <Link to="/" className='text-blue-500 hover:underline mb-4 inline-block' > &larr; กลับไปหน้ารายการสินค้า </Link>
        <div className='bg-red-300 shadow-lg rounded-lg overflow-hidden'>
            <img className='w-72 h-72 object-cover' src={myproduct.thumbnail} alt={myproduct.title} />
            <div className='p-6'>
                <h1 className='text-1xl mb-2 font-bold'> {myproduct.title}</h1>
                <p className=' mb-3 text-green-600 font-bold' > {myproduct.price} บาท</p>
                <p className='text-bold mb-4 '> รายละเอียด: {myproduct.description}</p>
                <button onClick={() => addToCart(myproduct)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-color mb-4'>เพิ่มในตะกร้า</button>

                <div className='bg-gray-100 rounded'>
                  <h2 className='text-xl mb-2 font-semibold'>รายละเอียด </h2>
                    <p>เเบรนด์{myproduct.brand}</p>
                    <p>หมวดหมู่{myproduct.category}</p>
                    <p>คะเเนน {myproduct.rating}</p>
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Productdetail
