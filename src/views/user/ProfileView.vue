<template>
  <div class="w-full">
    <div
      class="relative flex flex-col flex-auto min-w-0 p-4 mb-6 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
      <div class="flex flex-wrap items-center -mx-3">
        <div class="flex-none w-auto max-w-full px-3">
          <div
            class="aspect-square text-base ease-soft-in-out h-18.5 w-[4.625rem] relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
            <img src="../assets/img/bruce-mars.jpg" alt="profile_image" class="w-full shadow-soft-sm rounded-xl" />
          </div>
        </div>
        <div class="flex-none w-auto max-w-full">
          <div class="h-full">
            <h5 class="mb-1">Alec Thompson</h5>
            <p class="mb-0 font-semibold leading-normal text-sm">CEO / Co-Founder</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full">
    <div class="flex flex-wrap -mx-3">
      <div class="w-full max-w-full px-3 xl:w-4/12">
        <div
          class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
            <h6 class="mb-0">Platform Settings</h6>
          </div>
          <div class="flex-auto p-4">
            <h6 class="font-bold leading-tight uppercase text-xs text-slate-500">Account</h6>
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <li class="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                <div class="min-h-6 mb-0.5 block pl-0">
                  <input id="follow"
                    class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox" checked />
                  <label for=" follow"
                    class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Email
                    me when someone follows me</label>
                </div>
              </li>
              <li class="relative block px-0 py-2 bg-white border-0 text-inherit">
                <div class="min-h-6 mb-0.5 block pl-0">
                  <input id="answer"
                    class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox" />
                  <label for="answer"
                    class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Email
                    me when someone answers on my post</label>
                </div>
              </li>
              <li class="relative block px-0 py-2 bg-white border-0 rounded-b-lg text-inherit">
                <div class="min-h-6 mb-0.5 block pl-0">
                  <input id="mention"
                    class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox" checked />
                  <label for="mention"
                    class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Email
                    me when someone mentions me</label>
                </div>
              </li>
            </ul>
            <h6 class="mt-6 font-bold leading-tight uppercase text-xs text-slate-500">Application</h6>
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <li class="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                <div class="min-h-6 mb-0.5 block pl-0">
                  <input id="launches projects"
                    class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox" />
                  <label for="launches projects"
                    class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">New
                    launches and projects</label>
                </div>
              </li>
              <li class="relative block px-0 py-2 bg-white border-0 text-inherit">
                <div class="min-h-6 mb-0.5 block pl-0">
                  <input id="product updates"
                    class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox" checked />
                  <label for="product updates"
                    class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Monthly
                    product updates</label>
                </div>
              </li>
              <li class="relative block px-0 py-2 pb-0 bg-white border-0 rounded-b-lg text-inherit">
                <div class="min-h-6 mb-0.5 block pl-0">
                  <input id="subscribe"
                    class="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right"
                    type="checkbox" />
                  <label for="subscribe"
                    class="w-4/5 mb-0 ml-4 overflow-hidden font-normal cursor-pointer select-none text-sm text-ellipsis whitespace-nowrap text-slate-500">Subscribe
                    to newsletter</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
        <div
          class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
            <div class="flex flex-wrap -mx-3">
              <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                <h6 class="mb-0">Profile Information</h6>
              </div>
            </div>
          </div>
          <div v-if="userStore.isLoading" class="flex-auto p-4">
            <p class="h-4 mb-1 bg-gray-300 rounded w-full"></p>
            <p class="h-4 mb-1 bg-gray-300 rounded w-full"></p>
            <p class="h-4 mb-1 bg-gray-300 rounded w-3/4"></p>
            <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <li
                class="flex items-center relative px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                <strong class="text-slate-700 w-[90px] flex-initial">Full Name:</strong> &nbsp; <p
                  class="h-4 bg-gray-300 rounded w-3/4"></p>
              </li>
              <li
                class="flex items-center relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                <strong class="text-slate-700 w-[90px] flex-initial">Mobile:</strong> &nbsp; <p
                  class="h-4 bg-gray-300 rounded w-3/4"></p>
              </li>
              <li
                class="flex items-center relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                <strong class="text-slate-700 w-[90px] flex-initial">Email:</strong> &nbsp; <p
                  class="h-4 bg-gray-300 rounded w-3/4"></p>
              </li>
              <li
                class="flex items-center relative px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                <strong class="text-slate-700 w-[90px] flex-initial">Location:</strong> &nbsp; <p
                  class="h-4 bg-gray-300 rounded w-3/4"></p>
              </li>
              <li
                class="flex items-center relative px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                <strong class="leading-normal text-sm text-slate-700 w-[90px] flex-initial">Address:</strong> &nbsp; <p
                  class="h-4 bg-gray-300 rounded w-3/4"></p>
              </li>
            </ul>
          </div>
          <div v-else class="flex-auto p-4">
            <form @submit.prevent="handleUpdateProfile">
              <textarea class="leading-normal text-sm w-full border-0 h-auto p-0 resize-none overflow-hidden"
                v-model="userStore.data.user_info.description"></textarea>
              <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li
                  class="relative flex items-center px-4 py-2 pt-0 pl-0 leading-normal bg-white border-0 rounded-t-lg text-sm text-inherit">
                  <strong class="text-slate-700 w-[90px] flex-initial">Full Name:</strong> &nbsp; <input
                    class="border-0 py-0 px-2 w-auto text-sm" type="text" v-model="userStore.data.name">
                </li>
                <li
                  class="relative flex items-center px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                  <strong class="text-slate-700 w-[90px] flex-initial">Mobile:</strong> &nbsp; <input
                    class="border-0 py-0 px-2 w-auto text-sm" type="text" v-model="userStore.data.user_info.phone">
                </li>
                <li
                  class="relative flex items-center px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                  <strong class="text-slate-700 w-[90px] flex-initial">Email:</strong> &nbsp; {{ userStore.data.email }}
                </li>
                <li
                  class="relative flex items-center px-4 py-2 pl-0 leading-normal bg-white border-0 border-t-0 text-sm text-inherit">
                  <strong class="text-slate-700 w-[90px] flex-initial">Location:</strong> &nbsp; <input type="text"
                    class="border-0 py-0 px-2 w-auto text-sm" v-model="userStore.data.user_info.location">
                </li>
                <li
                  class="flex items-center relative px-4 py-2 pb-0 pl-0 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                  <strong class="leading-normal text-sm  w-[90px] flex-initial text-slate-700">Address:</strong> &nbsp;
                  <input type="text" class="border-0 py-0 px-2 w-auto text-sm"
                    v-model="userStore.data.user_info.address">
                </li>
              </ul>
              <button type="submit" class="px-3 border">OK</button>
            </form>
          </div>
        </div>
      </div>
      <div class="w-full max-w-full px-3 lg-max:mt-6 xl:w-4/12">
        <div
          class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
            <h6 class="mb-0">Conversations</h6>
          </div>
          <div class="flex-auto p-4">
            <ul class="flex flex-col pl-0 mb-0 rounded-lg">
              <li class="relative flex items-center px-0 py-2 mb-2 bg-white border-0 rounded-t-lg text-inherit">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                  <img src="../assets/img/kal-visuals-square.jpg" alt="kal" class="w-full shadow-soft-2xl rounded-xl" />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h6 class="mb-0 leading-normal text-sm">Sophie B.</h6>
                  <p class="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                </div>
                <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                  href="javascript:;">Reply</a>
              </li>
              <li class="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                  <img src="../assets/img/marie.jpg" alt="kal" class="w-full shadow-soft-2xl rounded-xl" />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h6 class="mb-0 leading-normal text-sm">Anne Marie</h6>
                  <p class="mb-0 leading-tight text-xs">Awesome work, can you..</p>
                </div>
                <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                  href="javascript:;">Reply</a>
              </li>
              <li class="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                  <img src="../assets/img/ivana-square.jpg" alt="kal" class="w-full shadow-soft-2xl rounded-xl" />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h6 class="mb-0 leading-normal text-sm">Ivanna</h6>
                  <p class="mb-0 leading-tight text-xs">About files I can..</p>
                </div>
                <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                  href="javascript:;">Reply</a>
              </li>
              <li class="relative flex items-center px-0 py-2 mb-2 bg-white border-0 border-t-0 text-inherit">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                  <img src="../assets/img/team-4.jpg" alt="kal" class="w-full shadow-soft-2xl rounded-xl" />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h6 class="mb-0 leading-normal text-sm">Peterson</h6>
                  <p class="mb-0 leading-tight text-xs">Have a great afternoon..</p>
                </div>
                <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                  href="javascript:;">Reply</a>
              </li>
              <li class="relative flex items-center px-0 py-2 bg-white border-0 border-t-0 rounded-b-lg text-inherit">
                <div
                  class="inline-flex items-center justify-center w-12 h-12 mr-4 text-white transition-all duration-200 text-base ease-soft-in-out rounded-xl">
                  <img src="../assets/img/team-3.jpg" alt="kal" class="w-full shadow-soft-2xl rounded-xl" />
                </div>
                <div class="flex flex-col items-start justify-center">
                  <h6 class="mb-0 leading-normal text-sm">Nick Daniel</h6>
                  <p class="mb-0 leading-tight text-xs">Hi! I need more information..</p>
                </div>
                <a class="inline-block py-3 pl-0 pr-4 mb-0 ml-auto font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100"
                  href="javascript:;">Reply</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex-none w-full max-w-full px-3 mt-6">
        <div
          class="relative flex flex-col min-w-0 mb-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="p-4 pb-0 mb-0 bg-white rounded-t-2xl">
            <h6 class="mb-1">Projects</h6>
            <p class="leading-normal text-sm">Architects design houses</p>
          </div>
          <div class="flex-auto p-4">
            <div class="flex flex-wrap -mx-3">
              <div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div class="relative">
                    <a class="block shadow-xl rounded-2xl">
                      <img src="../assets/img/home-decor-1.jpg" alt="img-blur-shadow"
                        class="max-w-full shadow-soft-2xl rounded-2xl" />
                    </a>
                  </div>
                  <div class="flex-auto px-1 pt-6">
                    <p
                      class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                      Project #2</p>
                    <a href="javascript:;">
                      <h5>Modern</h5>
                    </a>
                    <p class="mb-6 leading-normal text-sm">As Uber works through a huge amount of internal management
                      turmoil.</p>
                    <div class="flex items-center justify-between">
                      <button type="button"
                        class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View
                        Project</button>
                      <div class="mt-2">
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-1.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Elena Morison
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-2.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Ryan Milly
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-3.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Nick Daniel
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-4.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Peterson
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div class="relative">
                    <a class="block shadow-xl rounded-2xl">
                      <img src="../assets/img/home-decor-2.jpg" alt="img-blur-shadow"
                        class="max-w-full shadow-soft-2xl rounded-xl" />
                    </a>
                  </div>
                  <div class="flex-auto px-1 pt-6">
                    <p
                      class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                      Project #1</p>
                    <a href="javascript:;">
                      <h5>Scandinavian</h5>
                    </a>
                    <p class="mb-6 leading-normal text-sm">Music is something that every person has his or her own
                      specific opinion about.</p>
                    <div class="flex items-center justify-between">
                      <button type="button"
                        class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View
                        Project</button>
                      <div class="mt-2">
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-3.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Nick Daniel
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-4.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Peterson
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-1.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Elena Morison
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-2.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Ryan Milly
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                <div
                  class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                  <div class="relative">
                    <a class="block shadow-xl rounded-2xl">
                      <img src="../assets/img/home-decor-3.jpg" alt="img-blur-shadow"
                        class="max-w-full shadow-soft-2xl rounded-2xl" />
                    </a>
                  </div>
                  <div class="flex-auto px-1 pt-6">
                    <p
                      class="relative z-10 mb-2 leading-normal text-transparent bg-gradient-to-tl from-gray-900 to-slate-800 text-sm bg-clip-text">
                      Project #3</p>
                    <a href="javascript:;">
                      <h5>Minimalist</h5>
                    </a>
                    <p class="mb-6 leading-normal text-sm">Different people have different taste, and various types of
                      music.</p>
                    <div class="flex items-center justify-between">
                      <button type="button"
                        class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs hover:scale-102 active:shadow-soft-xs tracking-tight-soft border-fuchsia-500 text-fuchsia-500 hover:border-fuchsia-500 hover:bg-transparent hover:text-fuchsia-500 hover:opacity-75 hover:shadow-none active:bg-fuchsia-500 active:text-white active:hover:bg-transparent active:hover:text-fuchsia-500">View
                        Project</button>
                      <div class="mt-2">
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-4.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Peterson
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-3.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Nick Daniel
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-2.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Ryan Milly
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                        <a href="javascript:;"
                          class="relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid ease-soft-in-out text-xs rounded-circle hover:z-30"
                          data-target="tooltip_trigger" data-placement="bottom">
                          <img class="w-full rounded-circle" alt="Image placeholder" src="../assets/img/team-1.jpg" />
                        </a>
                        <div data-target="tooltip" class="hidden px-2 py-1 text-white bg-black rounded-lg text-sm"
                          role="tooltip">
                          Elena Morison
                          <div
                            class="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                            data-popper-arrow></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full max-w-full px-3 mb-6 md:w-6/12 md:flex-none xl:mb-0 xl:w-3/12">
                <div
                  class="relative flex flex-col h-full min-w-0 break-words bg-transparent border border-solid shadow-none rounded-2xl border-slate-100 bg-clip-border">
                  <div class="flex flex-col justify-center flex-auto p-6 text-center">
                    <a href="javascript:;">
                      <i class="mb-4 fa fa-plus text-slate-400"></i>
                      <h5 class="text-slate-400">New project</h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { inject, onMounted, reactive, ref } from "vue";
const title = inject('title')
const userStore = useUserStore()

onMounted(() => {
  title.value = 'Profile'
})

onMounted(() => {
  userStore.fetchUser()
})

const handleUpdateProfile = async () => {
  await userStore.updateUserProfile()
}

</script>