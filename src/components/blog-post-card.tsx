import React from "react";
import Image from "next/image";
import {
  Button,
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface BlogPostCardProps {
  img: string;
  title: string;
  desc: string;
}

export function BlogPostCard({ img, title, desc }: BlogPostCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-52">
        <Image width={768} height={768} src={img} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography className="mb-3 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button variant="text" color="gray" className="flex items-center gap-2">
          read more
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button>
      </CardBody>
    </Card>
  );
}

export default BlogPostCard;