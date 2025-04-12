"use client";

import Image from "next/image";

const Final = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image
        src={"/images/icon-thank-you.svg"}
        alt={"Thank You Image"}
        width={80}
        height={80}
        className="mb-8"
      />
      <h2
        className="text-[2rem] font-extrabold mb-1"
        style={{ color: "hsl(213, 96%, 18%)" }}
      >
        Thank you!
      </h2>
      <p
        className="font-normal text-center"
        style={{ color: "hsl(231, 11%, 63%)" }}
      >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Final;
