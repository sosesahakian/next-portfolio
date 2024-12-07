"use client";

import React, { useState, FormEvent } from "react";
//import GithubIcon from "../../../public/github-icon.svg";
//import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import * as Style from "./Email.styled";

const Email: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const data = {
      email: (target.email as HTMLInputElement).value,
      subject: (target.subject as HTMLInputElement).value,
      message: (target.message as HTMLTextAreaElement).value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <Style.Section id="contact">
      <Style.CircleBackground />
      <Style.ContentWrapper>
        <Style.Heading>Let's Connect</Style.Heading>
        <Style.Description>
          {`I'm currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll
          try my best to get back to you!`}
        </Style.Description>
        <Style.Socials>
          {/* <Link href="https://github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link> */}
        </Style.Socials>
      </Style.ContentWrapper>
      <Style.FormWrapper>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <Style.InputField
                name="email"
                type="email"
                id="email"
                required
                placeholder="jacob@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <Style.InputField
                name="subject"
                type="text"
                id="subject"
                required
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <Style.TextAreaField
                name="message"
                id="message"
                placeholder="Let's talk about..."
              />
            </div>
            <Style.SubmitButton type="submit">Send Message</Style.SubmitButton>
          </form>
        )}
      </Style.FormWrapper>
    </Style.Section>
  );
};

export default Email;
