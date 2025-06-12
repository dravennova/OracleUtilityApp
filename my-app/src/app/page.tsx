'use client';

import { useEffect, useState } from 'react';

type Customer = {
  CUSTOMER_ID: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  PHONE: string;
  EMAIL: string;
};

export default function Home() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await fetch('http://localhost:3001/customers');
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setCustomers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  if (loading) return <p>Loading customers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.CUSTOMER_ID}>
              <td className="border px-4 py-2">{customer.CUSTOMER_ID}</td>
              <td className="border px-4 py-2">{customer.FIRST_NAME}</td>
              <td className="border px-4 py-2">{customer.LAST_NAME}</td>
              <td className="border px-4 py-2">{customer.PHONE}</td>
              <td className="border px-4 py-2">{customer.EMAIL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
