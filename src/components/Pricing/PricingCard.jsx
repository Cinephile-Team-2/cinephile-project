import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button.jsx";

function PricingCard({
  subtitle,
  title,
  price,
  features,
  buttonText,
  premium,
}) {
  return (
    <div
      className={`
        relative
        flex
        w-full
        h-full
        flex-col
        rounded-[20px]
        border
        bg-[#131028]
        px-8
        pb-8
        pt-10
        text-left

        ${premium ? "border-[var(--primary)]" : "border-[#252041]"}
      `}
    >
      {/* Ribbon */}

      {premium && (
        <div className="absolute top-0 right-0 overflow-hidden w-28 h-24 pointer-events-none">
          <div
            className="
              absolute
              top-[14px]
              right-[-30px]
              rotate-45
              bg-[var(--fucsia)]
              text-white
              text-[8px]
              font-bold
              tracking-[1px]
              px-8
              py-2
              uppercase
              shadow-lg
            "
          >
            BEST VALUE
          </div>
        </div>
      )}

      {/* Subtitle */}

      <p
        className="
          mb-5
          font-[var(--BeVietnamPro)]
          text-[13px]
          font-bold
          tracking-[3px]
          text-[var(--gris)]
        "
      >
        {subtitle}
      </p>

      {/* Title */}

      <h2
        className="
          mb-2
          font-[var(--SplineSans)]
          text-4xl
          font-black
          leading-none

          lg:text-[38px]
        "
      >
        {title}
      </h2>

      {/* Price */}

      <div className="mb-14 flex items-end gap-2">
        <span
          className="
            font-[var(--SplineSans)]
            font-black
            leading-none
            text-[var(--primary)]
            lg:text-[38px]
          "
        >
          ${price}
        </span>

        <span
          className="
            font-[var(--BeVietnamPro)]
            text-[var(--gris)]
            text-lg
            lg:text-[24px]
          "
        >
          /mo
        </span>
      </div>

      {/* Features */}

      <ul className="mb-16 flex flex-col gap-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="
              flex
              items-center
              gap-2
              font-[var(--BeVietnamPro)]
              text-[15px]
              text-[var(--text)]

              lg:text-[18px]
            "
          >
            <FaCheckCircle
              className={`
                text-[18px]

                ${premium ? "text-[var(--secondary)]" : "text-[var(--primary)]"}
              `}
            />

            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}

      <div className="mt-auto w-full flex justify-center">
        <Button
          type="submit"
          variant={premium ? "primary" : "outline"}
          size="lg"
          className={`w-full md:w-auto ${
            premium
              ? "bg-[var(--primary)] text-black"
              : "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black"
          }`}
        >
          {buttonText}
        </Button>
        
      </div>
    </div>
  );
}

export default PricingCard;