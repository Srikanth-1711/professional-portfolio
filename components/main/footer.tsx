import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

import { SOCIALS } from "@/constants";

export const Footer = () => <footer id="contact" className="footer"><div><p className="eyebrow">Let&apos;s build</p><h2>Have an AI application in mind?</h2><a className="footer-mail" href="mailto:lakshmisrikanthpolavarapu@gmail.com">lakshmisrikanthpolavarapu@gmail.com <ArrowTopRightOnSquareIcon aria-hidden="true" /></a></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Lakshmi Srikanth Polavarapu</p><div>{SOCIALS.map(({ name, icon: Icon, link }) => <a href={link} aria-label={name} key={name} target={name === "Email" ? undefined : "_blank"} rel={name === "Email" ? undefined : "noreferrer"}><Icon /></a>)}</div></div></footer>;
