import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

const MyOrdersPage = () => {
  // Dummy order data with actual website products
  const orders = [
    {
      id: '12345',
      date: '10/15/2023',
      total: 528.98,
      status: 'Shipped',
      items: [
        {
          id: '1',
          name: 'Smart Home Hub Pro',
          quantity: 1,
          image: '/images/products/smart-hub-pro.webp',
          price: 299,
        },
        {
          id: '2',
          name: 'Guardian Security Camera System',
          quantity: 1,
          image: '/images/products/security.png',
          price: 399,
        },
      ],
    },
    {
      id: '12346',
      date: '11/02/2023',
      total: 119.99,
      status: 'Delivered',
      items: [
        {
          id: '3',
          name: 'Glovee smart lamp',
          quantity: 2,
          image: '/images/products/light2.png',
          price: 89,
        },
      ],
    },
  ];

  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-8">
          My Orders
        </h1>
        <div className="space-y-8">
          {/* Loop through orders */}
          {orders.map((order) => (
            <div key={order.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Order #{order.id}</h2>
                <p className="text-gray-700 dark:text-gray-300">Date: {order.date}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Total: ${order.total.toFixed(2)}</p>
                <p className="text-gray-700 dark:text-gray-300">Status: {order.status}</p>
              </div>
              <Separator />
              
              {/* Display order items */}
              <div>
                <h2 className='text-lg font-medium my-2'>Ordered Items</h2>
                {order.items.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row justify-between items-center gap-2 p-2 shadow-sm mb-2">
                    <Image src={item.image} alt={item.name} width={64} height={64} className="w-16 h-16 object-contain rounded-lg" />
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-gray-800 dark:text-white font-medium">{item.name}</p>
                      <p className="text-gray-600 dark:text-gray-400">Price: ${item.price}</p>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">Qty: {item.quantity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;