"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


function Hero() {
  return (
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-64">
        <Image
          width={1024}
          height={1024}
          alt="avatar"
          src="/image/avatar1.jpg"
          className="w-40 rounded-xl"
        />
        <div className="flex mt-16 justify-between">
          <Typography variant="h5" className="text-3xl">
            Emma Roberts
          </Typography>
          <Button color="gray">follow</Button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">323</Typography>
            <Typography className="!text-gray-500 font-normal">
              Posts
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">3.5k</Typography>
            <Typography className="!text-gray-500 font-normal">
              Followers
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">260</Typography>
            <Typography className="!text-gray-500 font-normal">
              Following
            </Typography>
          </div>
        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8">
          A wordsmith who believes in the power of language to shape our world,
          inspire change, and connect us all. I bring a unique perspective to
          the writing, blending the knowledge and experiences into
          thought-provoking narratives.
        </Typography>
        <Button
          variant="text"
          color="gray"
          className="flex items-center gap-2 mt-2"
        >
          more about me
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button>
      </div>
    </header>
  );
}
export default Hero;
