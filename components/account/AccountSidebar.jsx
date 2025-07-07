"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "Manage My Account",
    links: [
      { label: "My Profile", href: "/account/profile" },
      { label: "Address Book", href: "/account/addressbook  " },
      { label: "My Payment Options", href: "/account/payment" },
    ],
  },
  {
    title: "My Orders",
    links: [
      { label: "My Returns", href: "/account/return" },
      { label: "My Cancellations", href: "/account/cancellations" },
    ],
  },
  {
    title: "My Wishlist",
    links: [{ label: "My Wishlist", href: "/wishlist" }],
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-1/5 p-10 space-y-6 ">
      {navItems.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-black mb-2">
            {section.title}
          </h3>
          <ul className="space-y-1 md:text-center">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm ${
                    pathname === link.href
                      ? "text-red-500 font-medium"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
