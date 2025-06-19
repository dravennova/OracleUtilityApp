'use client';

import { useEffect, useState } from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "../components/ui/card";
import {ModeToggle} from "../components/ui/mode-toggle";

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
    <div className="p-6 min-h-screen max-w-full overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-4">Oracle Utility App</h1>
      <ModeToggle />
      <hr className='h-2 bg-black dark:bg-white mb-5 border-none' />

      <div className="p-6 min-h-screen w-full bg-zinc-900 text-white">
        <div className="flex flex-col md:flex-row gap-6">

            <div className="flex flex-col gap-6 flex-[2]">{/* data section */}
              <Card>
                <CardHeader>
                  <CardTitle>Data Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Some data goes here</p>
                </CardContent>
              </Card>

              
              <div className="flex flex-col md:flex-row gap-4"> {/* meters-billing-account */}
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Manage Meters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Control meter settings</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Billing / Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>View and manage billing</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Profile and preferences</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="md:flex-[1] mt-6 md:mt-0"> {/*list of payments made*/}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Payment Section</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Payment info goes here</p>
                </CardContent>
              </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
