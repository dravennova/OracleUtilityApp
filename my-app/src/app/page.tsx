'use client';

import { useEffect, useState } from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card";


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
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/customers`, {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY || ''
          }
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setCustomers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    //fetchCustomers();
  }, []);

  //if (loading) return <p>Loading customers...</p>;
  //if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 min-h-screen max-w-full overflow-x-hidden flex flex-col">
  <h1 className="text-2xl font-bold mb-4">Oracle Utility App</h1>
  <hr className='h-2 bg-black dark:bg-white mb-5 border-none' />
  <div className="p-6 bg-zinc-900 text-white flex-1 flex flex-col min-h-0 overflow-hidden rounded-lg">
    <div className="flex flex-col lg:flex-row gap-6 mt-6 flex-1 min-h-0">
      <div className="flex flex-col gap-6 lg:flex-[2] min-h-0">
        <Card className="flex-shrink-0">
          <CardHeader>
            <CardTitle>Data Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Some data goes here</p>
          </CardContent>
        </Card>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Card className="flex-1 min-w-0">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Manage Meters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Control meter settings</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-0">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Billing / Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">View and manage billing</p>
            </CardContent>
          </Card>
          <Card className="flex-1 min-w-0">
            <CardHeader>
              <CardTitle className="text-sm sm:text-base">Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Profile and preferences</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="lg:flex-[1] min-h-0">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Payment Section</CardTitle>
          </CardHeader>
          <CardContent className="overflow-y-auto">
            <p>Payment info goes here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</div>
  );
}
