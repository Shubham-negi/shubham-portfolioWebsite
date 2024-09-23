import { TestimonialData } from "@/constants/TestimonialData";
import React, { Fragment } from "react";

const Testimonials = () => {

  return (
    
    <Fragment>
      <section id="testimonials" >
      <div className="py-8 pt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm">
        
        <h3 className="text-3xl font-bold text-center pb-8 flex justify-center items-center gap-3">
          <span className="mr-3"> {/* place the people icon */}</span>
          Testimonials
        </h3>

        <div className="flex gap-8 carousel">
          {/* Check if TestimonialData is an array and has items */}
          {Array.isArray(TestimonialData) && TestimonialData.length > 0 ? (
            TestimonialData?.map((app ,key) => (
              <div className="overflow-hidden carousel-item rounded-3xl " key={key}>
                <div className="card bg-base-100 w-96  ">
                  <figure>
                    <img
                      src={app.imageUrl} // Use imageUrl from the data
                      alt={`Testimonial from ${app.name}`} // Descriptive alt text
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {app.name} {/* Access name property */}
                    </h2>
                    <p>{app.description || "No description available."}</p>{" "}
                    {/* Access description property */}
                    <div className="card-actions justify-end w-fit" >
                        {app.Abilities?.map((a ,k)=>(<div  className="badge badge-outline" key={k}>{a}</div>
))}
                      {/* Access Abities property */}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No testimonials available.</p> // Fallback if there are no testimonials
          )}
        </div>

        {/* Uncomment and implement <MobileScreenApps /> if needed */}
      </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
