import React from 'react'
import { Link } from 'react-router-dom'
import { useProduct } from '../context/ProductContxt'

const ProductList = () => {

    const { product, loading, error } = useProduct();
    if (loading) return <div className="container mx-auto p-4 "> กำลังโหลด...</div>
    if (error) return <div className="container mx-auto"> (error) </div>

4
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl ">รายการสินค้า</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {product.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover mb-4 rounded"
                        />

                        <h2 className='text-xl font-semibold mb-2'>{product.title}</h2>
                        <p className='text-gray-600 mb-2 '>{product.description}</p>
                        <p className='text-xl font-bold text-green-600'>ราคา : {product.price} บาท</p>
                    </Link>
                ))}


            </div>

        </div>
    )
}

export default ProductList
