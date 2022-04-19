import React from "react";

export const Featured = () => {
  return (
    <div>
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-1/3 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div class="h-1 w-20 bg-gradient-to-br from-yellow-500 to-pink-500 rounded"></div>
            </div>
            <div class="flex flex-wrap -m-2">
              <div class="p-2">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p class="text-gray-600">UI Designer</p>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p class="text-gray-600">UI Designer</p>
                  </div>
                </div>
              </div>
              <div class="p-2">
                <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <div class="flex-grow">
                    <h2 class="text-white title-font font-medium">
                      Holden Caulfield
                    </h2>
                    <p class="text-gray-600">UI Designer</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
