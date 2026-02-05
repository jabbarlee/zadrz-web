"use client";

import { Marquee } from "@/src/components/ui/marquee";
import testimonialsData from "@/src/lib/testimonials.json";

// Testimonial Card Component
function TestimonialCard({
  handle,
  content,
}: {
  handle: string;
  content: string;
}) {
  // Highlight @openclaw mentions in the content
  const highlightOpenClaw = (text: string) => {
    const parts = text.split(/(@openclaw)/gi);
    return parts.map((part, index) => {
      if (part.toLowerCase() === "@openclaw") {
        return (
          <span key={index} className="text-orange-600 font-semibold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="w-[350px] h-[200px] flex-shrink-0 bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <p className="text-sm text-gray-700 leading-relaxed flex-1 overflow-hidden">
        {highlightOpenClaw(content)}
      </p>
      <p className="text-sm font-bold text-gray-900 mt-3">{handle}</p>
    </div>
  );
}

export function TechValidationSection() {
  // Split testimonials into two rows
  const testimonials = testimonialsData.marquee_data;
  const row1 = testimonials.filter((_, index) => index % 2 === 0);
  const row2 = testimonials.filter((_, index) => index % 2 === 1);

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 bg-gray-50 overflow-hidden"
    >
      {/* Force light theme for this section */}
      <div className="absolute inset-0 bg-gray-50" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Powered by OpenClaw Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-sm font-semibold text-gray-900">
                Powered by OpenClaw
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-gray-900">
              Built on the engine developers trust.
            </h2>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Zadrz is powered by OpenClaw—the industry standard for autonomous
              browsing. We took the raw power that engineers love and wrapped it
              in an interface anyone can use.
            </p>
          </div>

          {/* Marquee Container with Gradient Masks */}
          <div className="relative">
            {/* Gradient masks for fade effect */}
            <div
              className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, rgb(249, 250, 251), transparent)",
              }}
            />
            <div
              className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to left, rgb(249, 250, 251), transparent)",
              }}
            />

            {/* Testimonial Marquees */}
            <div className="space-y-4">
              {/* First Row - Moving Right */}
              <Marquee reverse={true} pauseOnHover className="[--duration:50s]">
                {row1.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    handle={testimonial.handle}
                    content={testimonial.content}
                  />
                ))}
              </Marquee>

              {/* Second Row - Moving Left */}
              <Marquee pauseOnHover className="[--duration:50s]">
                {row2.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    handle={testimonial.handle}
                    content={testimonial.content}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
