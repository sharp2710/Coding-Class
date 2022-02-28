import React, { useEffect } from "react";
import Theme from "./theme";

import Nav from "./navBar";
import { Scrollbar } from "smooth-scrollbar-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { useSelector} from 'react-redux'
import Html0 from "./html/html0";
import Html1 from "./html/html1";
// import Html2 from "./html/html2";
// import Html3 from "./html/html3";

function content() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <div className="bg-base-100 drawer h-screen drawer-mobile">
        <input id="drawer" type="checkbox" className="drawer-toggle" />

        <Scrollbar
          plugins={{
            overscroll: {
              effect: "bounce",
            },
          }}
        >
          <div className="drawer-content">
            <div className=" sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm ">
              <div className="navbar w-full">
                <div className="flex flex-1 gap-1 lg:gap-2">
                  <label className="btn btn-square btn-ghost drawer-button lg:hidden">
                    <svg
                      width={20}
                      height={20}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </label>
                  <div className="flex items-center gap-2 lg:hidden">
                    <a
                      href="/"
                      aria-current="page"
                      aria-label="Homepage"
                      className="flex-0 btn btn-ghost px-2 "
                    >
                      <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                        <span className="uppercase text-primary">HT</span>{" "}
                        <span className="uppercase text-base-content">ML</span>
                      </div>
                    </a>{" "}
                    <button
                      type="button"
                      className="link link-hover font-mono text-xs text-opacity-50 "
                    >
                      <div
                        data-tip="เวอร์ชั่นล่าสุด"
                        className="tooltip tooltip-bottom"
                      >
                        5.0.0
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex-0">
                  <div className="items-center flex-none hidden ">
                    <a
                      href="/components"
                      className="btn btn-ghost drawer-button normal-case"
                    >
                      <svg
                        width={20}
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 fill-current md:mr-2"
                      >
                        <path d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z" />
                      </svg>
                      Components
                    </a>
                  </div>

                  <Theme />
                  <div title="Github ↗︎" className="flex-none items-center">
                    <a
                      aria-label="Github"
                      target="_blank"
                      href="https://github.com/SharpTH"
                      rel="noopener"
                      className="btn btn-ghost drawer-button btn-square normal-case"
                    >
                      <svg
                        width={20}
                        height={20}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
                      >
                        <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

              <Switch>
                <Route exact path="/" component={Html0} />
                <Route path="/html1" component={Html1} />
              </Switch>
            
        
          </div>
        </Scrollbar>
        <Nav />
      </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default content;
