import React, { useEffect } from "react";
import { Scrollbar } from "smooth-scrollbar-react";
import list from "./list";
import { useStorageState } from 'react-use-storage-state'

import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
function nav() {

  const dispatch = useDispatch()
  
const [manu , setManu] = useStorageState('manu', 0) 


  
const ListManu = list.map((item, index) => {
    if (item.id === 0) {
      return (
        <div key={index}>
          {" "}
          <li className="mb-3" onClick={() =>{
             setManu(item.id) 
            dispatch({
              type: 'SET_NUMBER_MANU',
              payload: item.id
            })
             }}>
            <Link to="/" className={
              manu == item.id ? "active flex sveltekit: prefetch" : "flex sveltekit: prefetch"
            }>
              <span className="flex-none">
                <div className="rounded-md ring-1 ring-slate-900/5 shadow-sm  bg-base-100">
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z"
                      className="fill-primary"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z"
                      className="fill-primary"
                    />
                  </svg>
                </div>
              </span>{" "}
              <span className="flex-1">{item.name}</span>{" "}
            </Link>{" "}
          </li>
          <li className="menu-title">
            <span>HTML Tutorial</span>
          </li>{" "}
        </div>

      )
    }
    return (
      <li key={index} onClick={() =>{
         setManu(item.id)
        dispatch({
          type: 'SET_NUMBER_MANU',
          payload: item.id
        })
        }
         }>
        <Link to={`html${item.id}`}  className={
          manu == item.id ? "active flex sveltekit: prefetch" : "flex sveltekit: prefetch"
        }>
           {item.name}
        </Link>
      </li>
    );

  });
  return (
    <React.Fragment>
      <Scrollbar
        plugins={{
          overscroll: {
            effect: "bounce",
          },
        }}
      >
        <label htmlFor="drawer" className="drawer-overlay" />{" "}
        <div className="bg-base-200 w-64 hidden lg:block">
          <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex shadow-sm">
            <a
              href="/"
              aria-current="page"
              aria-label="Homepage"
              className="flex-0 btn btn-ghost px-2"
            >
              <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                <span className="uppercase">HT</span>{" "}
                <span className="text-base-content uppercase">ML</span>
              </div>
            </a>{" "}
            <button
              type="button"
              className="a a-hover font-mono text-xs text-opacity-50"
            >
              <div
                data-tip="เวอร์ชั่นล่าสุด"
                className="tooltip tooltip-bottom"
              >
                5.0.0
              </div>
            </button>
          </div>{" "}
          <div className="h-4" />{" "}

          <ul className="menu menu-compact flex flex-col p-0 px-4">
            {ListManu}
          </ul>
        </div>
      </Scrollbar>


    </React.Fragment>
  );
}

export default nav;
