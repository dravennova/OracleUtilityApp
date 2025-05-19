'use client';

import {useEffect, useState} from 'react'; 

type Customer = //type name for customer and items related
{
  CUSTOMER_ID: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  PHONE: string;
  EMAIL: string;
};

export default function Home()
{
  //function to retrieve test customer information from database
  const[customers, setCustomers] = useState<Customer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3001/customers')
      .then((res) => 
      {
        if (!res.ok) 
          throw new Error('Failed to fetch customers');
        return res.json();
      })
      .then(setCustomers)
      .catch((error) => setError(error.message));
  }, [])
  

//display on page table
  return (
    <main>
      <h1>Customers</h1>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
           {customers.map((c) => (
            <tr key={c.CUSTOMER_ID}>
              <td>{c.CUSTOMER_ID}</td>
              <td>{c.FIRST_NAME}</td>
              <td>{c.PHONE}</td>
              <td>{c.EMAIL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}