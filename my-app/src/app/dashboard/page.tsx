'use client';

import { useEffect, useState } from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


type Customer = {
  CUSTOMER_ID: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  PHONE: string;
  EMAIL: string;
};

export default function Home() {


  return (
    <div className="p-6 min-h-screen max-w-full overflow-x-hidden flex flex-col">
        <div className="sticky top-0 bg-black z-10 p-6 border-b border-neutral-800">
            <h1 className="text-2xl font-bold">Oracle Utility App</h1>
        </div>
        <hr className="h-2 bg-black dark:bg-white mb-5 border-none" />
        <div className="p-6 bg-zinc-900 text-white flex-1 flex flex-col min-h-0 overflow-hidden rounded-lg">
            <div className="flex flex-col lg:flex-row gap-6 mt-6 flex-1 min-h-0">
            <div className="flex flex-col gap-6 lg:flex-[2] min-h-0">
                <Card className="flex-1 min-w-0 transition hover:shadow-md hover:border-neutral-500">
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
