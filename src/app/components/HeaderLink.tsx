import React from "react";
import Link from "next/link";

interface HeaderLinkProps {
  href: string;
  title: string;
}

const HeaderLink = ({ href, title }: HeaderLinkProps) => {
  return (
    <div className="hover:text-red-900 p-2 rounded">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default HeaderLink;
