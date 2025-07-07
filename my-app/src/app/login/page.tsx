'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
          Oracle Utility App
        </h1>
        <form className="space-y-6 bg-[#16181c] p-8 rounded-2xl shadow-lg border border-neutral-700">
          <h2 className="text-2xl font-bold text-white text-center">Sign in to your account</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="bg-black border-neutral-600 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="bg-black border-neutral-600 text-white"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full font-semibold text-md">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}
