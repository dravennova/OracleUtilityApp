'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";

import React from 'react'

const page = () => {
  return (
    <div>
      <Input type="email" placeholder="Email:"/> 
      <Input type="password" placeholder="Password:"/>
      <Button variant="outline">Sign In</Button>
    </div>
  )
}

export default page