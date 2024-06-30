import React from "react";

import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
    // export const footerLinks = [
    //     {
    //         title: "Useful Links",
    //         links: [
    //             { name: "Link 1", link: "/" },
    //             { name: "Link 2", link: "/" },
    //             { name: "Link 3", link: "/" },
    //             { name: "Link 4", link: "/" },
    //             { name: "Link 5", link: "/" },
    //             { name: "Link 6", link: "/" },
    //         ],
    //     },
    //     {
    //         title: "Help",
    //         links: [
    //             { name: "About us", link: "/" },
    //             { name: "FAQs", link: "/" },
    //             { name: "Privacy policy", link: "/" },
    //         ],
    //     },
    //     {
    //         title: "Get in touch",
    //         links: [
    //             { name: "contact@wcit.org.uk", link: "mailto:contact@wcit.org.uk" },
    //             { name: "+4407123456789", link: "tel:+4407123456789" },
    //         ],
    //     },
    // ];

    // export const socialMedia = [
    //     { src: facebook, alt: "facebook logo" },
    //     { src: twitter, alt: "twitter logo" },
    //     { src: instagram, alt: "instagram logo" },
    // ];
    return (
        // using tailwind to design
        <section className="bg-primary text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col  md:flex-row">
                    {footerLinks.map((link, index) => (
                        <div key={index} className="px-4 py-2">
                            <h3 className="text-lg font-bold">{link.title}</h3>
                            <ul className="list-none">
                                {link.links.map((item, index) => (
                                    <li key={index} className="mt-2">
                                        <a href={item.link} className="text-gray-400 hover:text-white">
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex items-center mt-4 md:mt-0">
            {socialMedia.map((item, index) => (
                        <a key={index} href="#" className="mx-4 text-gray-400 hover:text-white">
                            <img src={item.src} alt={item.alt} className="w-6 h-6" />
                        </a>
            ))}
            <p className="text-gray-400">&copy;
              <script>document.write(new Date().getFullYear());
                  </script> WCIT. All rights reserved.</p>
                </div>
            </div>
      </section>

        // using tailwind to design
    );
};

export default Footer;
