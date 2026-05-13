import React from "react";

import { FaCheckCircle } from "react-icons/fa";

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
        rounded-[20px]
        border
        bg-[#131028]
        px-8
        pb-8
        pt-10
        text-left

        ${premium
          ? "border-[var(--primary)]"
          : "border-[#252041]"
        }
      `}
    >

      {/* Ribbon */}

      {premium && (

        <div className="absolute right-0 top-0 overflow-hidden">

          <div
            className="
              translate-x-[42px]
              translate-y-[18px]
              rotate-45
              bg-[var(--fucsia)]
              px-16
              py-2
              text-[10px]
              font-bold
              tracking-[2px]
              text-white
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
          mb-10
          font-[var(--SplineSans)]
          text-4xl
          font-black
          leading-none

          lg:text-[58px]
        "
      >
        {title}
      </h2>



      {/* Price */}

      <div className="mb-14 flex items-end gap-2">

        <span
          className="
            font-[var(--SplineSans)]
            text-5xl
            font-black
            leading-none
            text-[var(--primary)]

            lg:text-[72px]
          "
        >
          ${price}
        </span>

        <span
          className="
            mb-2
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
              gap-4
              font-[var(--BeVietnamPro)]
              text-[15px]
              text-[var(--text)]

              lg:text-[22px]
            "
          >

            <FaCheckCircle
              className={`
                text-[18px]

                ${premium
                  ? "text-[var(--secondary)]"
                  : "text-[var(--primary)]"
                }
              `}
            />

            {feature}

          </li>

        ))}

      </ul>



      {/* Button */}

      <button
        className={`
          w-full
          rounded-[8px]
          py-4
          font-[var(--BeVietnamPro)]
          text-[16px]
          font-bold
          transition-all
          duration-300

          lg:text-[22px]

          ${premium
            ? "bg-[var(--primary)] text-black"
            : `
              border
              border-[var(--primary)]
              text-[var(--primary)]
              hover:bg-[var(--primary)]
              hover:text-black
            `
          }
        `}
      >
        {buttonText}
      </button>

    </div>

  )
}

export default PricingCard