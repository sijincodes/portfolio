import React from "react";

function Timeline() {
  return (
    <>
      <section class="dark:bg-gray-800 dark:text-gray-100">
        <div class="container max-w-5xl px-4 py-12 mx-auto">
          <div class="grid gap-4 mx-4 sm:grid-cols-12">
            <div class="col-span-12 sm:col-span-3">
              <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 class="text-3xl font-semibold">Timeline</h3>
              </div>
            </div>
            <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div class="flex  flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gradient-rainblue">
                  <h3 class="text-md font-semibold tracking-wide">
                    👩🏽‍🎓Web Development
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400">
                    2022
                  </time>
                  <p className="mt-1 text-sm">IronHack,Berlin</p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gradient-rainblue">
                  <h3 class="text-md font-semibold tracking-wide">
                    👩🏽‍💻Lead Engineer
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400">
                    2020-2022
                  </time>
                  <p className="mt-1 text-sm">Prodapt,India</p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gradient-rainblue">
                  <h3 class="text-md font-semibold tracking-wide">
                    👩🏽‍💻Senior Consultant
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400">
                    2019-2020
                  </time>
                  <p className="mt-1 text-sm">Saksoft,India</p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gradient-rainblue">
                  <h3 class="text-md font-semibold tracking-wide">
                    👩🏽‍💻Test Analyst
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400">
                    2014-2018
                  </time>
                  <p className="mt-1 text-sm">Accenture,India</p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gradient-rainblue">
                  <h3 class="text-md font-semibold tracking-wide">
                    👩🏽‍🎓Bachelors of Technology
                    <span className="text-sm">
                      (Electronics & Communication)
                    </span>
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400">
                    2010-2014
                  </time>
                  <p className="mt-1 text-sm">Karunya University,India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
