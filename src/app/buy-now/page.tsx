"use client";

import { useParams } from "next/navigation";
import { fabrics } from "@/data/fabrics";
import Image from "next/image";

export default function PaymentPage() {
  const params = useParams();
  const slug = String(params.slug);

  const product = fabrics.find((item) => item.slug === slug);

  if (!product) return <div>Product Not Found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Payment
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Payment Methods */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-4">
            Payment Methods
          </h2>

          <div className="space-y-3">
            <div className="border p-3 rounded">
              Cash on Delivery
            </div>

            <div className="border p-3 rounded">
              Credit/Debit Card
            </div>

            <div className="border p-3 rounded">
              UPI
            </div>

            <div className="border p-3 rounded">
              Net Banking
            </div>
          </div>

          <button className="mt-5 w-full bg-red-900 text-white py-3 rounded">
            Pay Now
          </button>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-4">
            Cart Summary
          </h2>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹{product.price}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₹50</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>₹20</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{product.price}</span>
          </div>
        </div>

        {/* Product Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold mb-4">
            Product Summary
          </h2>

          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="rounded"
          />

          <h3 className="mt-3 font-semibold">
            {product.title}
          </h3>

          <p className="text-gray-500">
            {product.description}
          </p>

          <p className="text-lg font-semibold mt-2">
            ₹{product.price}
          </p>
        </div>
      </div>
    </div>
  );
}