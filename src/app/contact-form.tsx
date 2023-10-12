"use client";

import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { PhoneIcon, EnvelopeIcon, TicketIcon } from "@heroicons/react/24/solid";


export function ContactForm() {
  return (
    <section className="px-8 pt-20">
    <div className="container mx-auto mb-5 md:mb-20 text-center">
      <Typography variant="h1" color="blue-gray" className="mb-4">
        Say Hi!
      </Typography>
      <Typography variant="lead" className="mx-auto !text-gray-500">
        Any questions or remarks? Just write us a messaage!
      </Typography>
    </div>
    <div className="container mx-auto">
      <Card shadow={true} className="border border-gray/50">
        <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-2 md:gap-28">
          <div className="w-full mt-8 md:mt-0 md:px-10 h-full p-5">
            <form action="#">
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="First Name"
                  name="first-name"
                  placeholder="eg. Lucas"
                  containerProps={{
                    className: "!min-w-full mb-3 md:mb-0",
                  }}
                />
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Last Name"
                  name="last-name"
                  placeholder="eg. Jones"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
              </div>
              {/* @ts-ignore */}
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Email"
                name="first-name"
                placeholder="eg. lucas@mail.com"
                containerProps={{
                  className: "!min-w-full mb-8",
                }}
              />
              {/* @ts-ignore */}
              <Textarea
                color="gray"
                size="lg"
                variant="static"
                label="Your Message"
                name="first-name"
                containerProps={{
                  className: "!min-w-full mb-10 md:mb-28",
                }}
              />
              <div className="w-full flex justify-end">
                <Button className="w-full md:w-fit" color="gray" size="md">
                  Send message
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <Typography variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>
            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                +1(424) 535 3523
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                hello@mail.com
              </Typography>
            </div>
            <div className="flex mb-10 gap-5">
              <TicketIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                Open Support Ticket
              </Typography>
            </div>
            <div className="flex items-center gap-5">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </section>
  );
}
export default ContactForm;