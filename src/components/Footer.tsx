import { type FC } from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";

const Footer: FC = () => {
  return (
    <footer className="border-t border-transparent-white py-4 text-sm">
      <div className="flex flex-col justify-between lg:flex-row container">
        <div className="flex h-full w-full justify-between  items-center gap-4 ">
          <div className="flex items-end text-grey gap-4">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            Luka Brkovic
          </div>
          <div className="mt-auto flex space-x-2 text-grey">
            <Button variant="icon" size="icon_md">
              <Icons.tg size="20" />
            </Button>
            <Button variant="icon" size="icon_md">
              <Icons.facebook size="20" />
            </Button>
            <Button variant="icon" size="icon_md">
              <Icons.gitHub size="20" />
            </Button>
            <Button variant="icon" size="icon_md">
              <Icons.instagram size="20" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
