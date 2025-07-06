'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-10 bg-background text-foreground">
      <section className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Oracle Utility App
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage your utility meters, billing, and account settings — all in one place.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/signup">
            <Button variant="outline">Get Started</Button>
          </Link>
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Meter Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Add, edit, and monitor utility meters seamlessly.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Billing & Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Track usage and view your payment history.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Secure Account</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Update personal information and secure your data.
            </p>
          </CardContent>
        </Card>
      </section>
      <footer className="mt-16 text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Oracle Utility App. All rights reserved. Demo Application Only
      </footer>
    </main>
  );
}
