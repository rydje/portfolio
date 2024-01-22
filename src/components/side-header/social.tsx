'use client'

import { BsLinkedin, BsGithub, BsWechat } from "react-icons/bs";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export default function Social() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <ul className="flex justify-start space-x-16">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rdjebrouni/"
            className="hover:text-neutral-100"
          >
            <BsLinkedin size="24px" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/rydje"
            className="hover:text-neutral-100"
          >
            <BsGithub size="24px" />
          </a>
        </li>
        <li>
          <Popover
            showArrow
            classNames={{
              base: [
                "before:bg-neutral-500",
              ],
              content: [
                "bg-neutral-500 p-2"
              ]
            }}>
            <PopoverTrigger>
              <div className="hover:text-neutral-100 hover:cursor-pointer">
                <BsWechat size="24px" />
              </div>
            </PopoverTrigger>
            <PopoverContent>
                <Image src={"/images/wechat-qrcode.svg"} alt={"WeChat QR Code"} width={200} height={100}/>
            </PopoverContent>
          </Popover>
        </li>
      </ul>
    </div>
  );
}
