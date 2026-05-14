import React from "react";

import PricingCard from "./PricingCard";

function PricingSection() {

  const plans = [

    {
      subtitle: "ESSENTIALS",
      title: "BASIC",
      price: "3.99",
      buttonText: "Select Basic",

      features: [
        "1080p HD Streaming",
        "1 Concurrent Screen",
        "Ad-Supported Library",
      ],
    },

    {
      subtitle: "MOST POPULAR",
      title: "SUPERIOR",
      price: "7.99",
      buttonText: "Select Superior",

      features: [
        "4K Ultra HD + HDR",
        "2 Concurrent Screens",
        "No Commercial Breaks",
        "Spatial Audio Support",
      ],
    },

    {
      subtitle: "ELITE CHOICE",
      title: "PREMIUM",
      price: "10.99",
      buttonText: "Select Premium",
      premium: true,

      features: [
        "8K Streaming Ready",
        "Unlimited Screens",
        "Early Access Premieres",
        "Dolby Atmos Mastering",
      ],
    },

  ];


  return (

    <section
      className="
        bg-[var(--bg)]
        px-6
        py-24
        text-[var(--text)]
      "
    >

      <div className="mx-auto max-w-[1180px]">

        {/* Heading */}

        <div className="mb-20 text-center">

          <h1
            className="
              mb-6
              font-[var(--SplineSans)]
              text-5xl
              font-black
              uppercase
              leading-none

              md:text-6xl
              lg:text-[72px]
            "
          >
            Choose Your Experience
          </h1>

          <p
            className="
              mx-auto
              max-w-[780px]
              font-[var(--BeVietnamPro)]
              text-[var(--gris)]
              text-lg
              leading-8

              lg:text-[24px]
              lg:leading-[40px]
            "
          >
            Precision-engineered streaming for the ultimate cinematic immersion.
            Select the tier that matches your passion.
          </p>

        </div>



        {/* Cards */}

        <div
          className="
            grid
            grid-cols-1
            gap-8

            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {plans.map((plan, index) => (

            <PricingCard
              key={index}
              subtitle={plan.subtitle}
              title={plan.title}
              price={plan.price}
              buttonText={plan.buttonText}
              features={plan.features}
              premium={plan.premium}
            />

          ))}

        </div>

      </div>

    </section>

  )
}

export default PricingSection