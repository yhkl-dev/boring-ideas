'use client'

import * as React from 'react'

import {  CardFooter, CardHeader, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function IndexFooter() {
    const next = () => {
        console.log('next....');
    }
    return (
    <CardFooter className="flex justify-center items-center  backdrop-blur-sm">
    <Icons.replay className="mr-2 h-4 w-4 " />
    <Icons.play className="mr-2 h-4 w-4" />
    <div>
    <Icons.fastforward className="mr-2 h-4 w-4"  onClick={next}/>
    </div>
    </CardFooter>
    )

}