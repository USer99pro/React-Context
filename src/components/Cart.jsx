import React from 'react'
import { useCart } from '../context/Cartcontexts'

const Cart = () => {
    const {cart, removeFromCart, updateQuantity, clearCart} = useCart();
    const total = cart.reduce((sum,item)=>sum + item.price * item.quantity,0);


  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>ตะกร้าสินค้า</h1>
        {
            cart.length === 0?(
                <p>ไม่มีตระกล้าสินค้า</p>
            ):(
                <>
                    {cart.map((item)=>(
                        <div key={item.id} className='flex items-center justify-between mb-4'>
                            <div>
                                <h2 className='text-lg font-semibold'>{item.title}</h2>
                                <p className='text-gray-400'> ราคา: {item.quantity}x{item.price} บาท</p>
                            </div>

                            <div className='flex items-center'>
                                <button 
                                    onClick={()=>updateQuantity(item.id, Math.max(1, item.quantity -1))}
                                    className='text-gray-500 p-2 py-2 rounded'
                                > -
                                </button>
                                <span className='mx-2'>{item.quantity}</span>
                                <button 
                                    onClick={()=>updateQuantity(item.id, Math.max(1, item.quantity +1))}
                                    className='text-gray-500 p-2 py-2 rounded'
                                > +
                                </button>
                                <button 
                                    onClick={()=>removeFromCart(item.id)}
                                    className='text-red-500 p-2 py-2 rounded'
                                > ลบ </button>
                                    
                            </div>
                        </div>
                    ))}
                    <div className="mt-4 ">
                        <p className='text-xl font-bold'>รวมทั้งหมด : {total.toFixed(2)}</p>
                    </div>
                    <button 
                        onClick={clearCart}
                        className='mt-2 bg-red-300 text-white px-4 py-2 rounded font-bold hover:bg-red-500 transition'
                    >ล้างตระกร้า</button>


                </>
            )

        }

    </div>
  )
}

export default Cart
