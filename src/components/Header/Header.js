import React from "react";
import Link from "next/link";

const Header = () => {
  const navigation = [
    {
      slug: "/",
      title: "Home",
    },
    {
      slug: "/about",
      title: "About",
    },
    {
      slug: "/contact",
      title: "Contact",
    },
  ];

  return (
    <header className="border-b border-solid border-slate-800 bg-base-200">
      <div className="container-xl lg:px-14">
        <div className="navbar">
          <div className="flex-1">
            <Link href="/" className="text-primary text-xl font-[600]">
              Next App
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {navigation.map((item, _id) => (
                <li key={_id}>
                  <Link
                    className="font-[500] text-base hover:text-primary"
                    href={item.slug}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
