import React from "react";

import copy from "copy-to-clipboard";

import imgchrome from "../image/img_chrome.png";
import imgnotepad from "../image/img_notepad.png";
import imgsaveas from "../image/img_saveas.png";


const html1 = () => {
  const [tip, setTip] = React.useState(false);
  return (
    <React.Fragment>
    <div className="p-6 pb-5">
      <h2 className="font-bold text-4xl "> เครื่องมือแก้ไข HTML</h2>
      <p className="mt-2 mb-10">
        ตัวแก้ไขข้อความอย่างง่ายคือสิ่งที่ต้องเรียนรู้ HTML
      </p>
      <div className="card bg-primary shadow-xl text-primary-content">
        <div className="card-body">
          <a className="text-primary-content">
            #{" "}
            <span className="font-bold">
              {" "}
              เรียนรู้ HTML โดยใช้ Notepad หรือ TextEdit
            </span>
          </a>

          <p className="text-sm">
            เว็บเพจสามารถสร้างและปรับเปลี่ยนได้โดยใช้ตัวแก้ไข HTML แบบมืออาชีพ
            อย่างไรก็ตามสําหรับการเรียนรู้ HTML
            เราขอแนะนําโปรแกรมแก้ไขข้อความอย่างง่ายเช่น Notepad (PC) หรือ
            TextEdit (Mac)
            เราเชื่อว่าการใช้ตัวแก้ไขข้อความอย่างง่ายเป็นวิธีที่ดีในการเรียนรู้
            HTML ทําตามขั้นตอนด้านล่างเพื่อสร้างเว็บเพจแรกของคุณด้วย Notepad
            หรือ TextEdit
          </p>
        </div>
      </div>
      <hr className="mb-5 mt-5" />

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <a className=" text-primary ">
            # <span className="font-bold mt-3 "> ขั้นตอนที่ 1</span>
          </a>

          <p className="text-sm">
            <a className=" text-primary">-</a> เปิด Notepad (PC)
          </p>
          <p className="text-sm">
            Windows 8 หรือใหม่กว่า เปิดหน้าจอเริ่ม
            (สัญลักษณ์หน้าต่างที่ด้านล่างซ้ายบนหน้าจอของคุณ) พิมพ์ Notepad
          </p>
          <p className="text-sm">
            Windows 7 หรือรุ่นก่อนหน้า: เริ่ม
            <span className=" text-primary">{">"}</span> โปรแกรม
            <span className=" text-primary">{">"}</span> อุปกรณ์เสริม
            <span className=" text-primary">{">"}</span> Notepad
          </p>
          <p className="text-sm">
            {" "}
            <a className=" text-primary ">-</a> เปิด TextEdit (Mac)
          </p>
          <p className="text-sm">
            เปิดโปรแกรมประยุกต์ <span className=" text-primary">{">"}</span>{" "}
            ตัวค้นหา <span className=" text-primary">{">"}</span> TextEdit
          </p>
          <p className="text-sm">
            นอกจากนี้ยังเปลี่ยนการกําหนดลักษณะบางอย่างเพื่อให้แอปพลิเคชันบันทึกแฟ้มได้อย่างถูกต้อง
            ใน การกําหนดลักษณะ <span className=" text-primary">{">"}</span>{" "}
            รูปแบบ <span className=" text-primary">{">"}</span>
            <span> เลือกข้อความธรรมดา</span>
          </p>
          <p className="text-sm">
            จากนั้นภายใต้
            <span className="text-primary">
              {"  "}เปิดและบันทึก{"  "}
            </span>
            ให้เลือกกล่องที่ระบุว่า{" "}
            <span className="text-primary">
              แสดงไฟล์ HTML เป็นโค้ด HTML แทนที่จะเป็นข้อความที่จัดรูปแบบ
            </span>
          </p>
        </div>
      </div>

      <hr className="mb-5 mt-5" />
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <a className=" text-primary ">
            #<span className="font-bold mt-3 "> ขั้นตอนที่ 2</span>
          </a>

          <p className="text-sm">
            {" "}
            <a className=" text-primary ">-</a> เขียน HTML บางตัว
          </p>
          <p className="text-sm mb-2">
            เขียนหรือคัดลอกโค้ด HTML ต่อไปนี้ลงใน 'แผ่นจดบันทึก'
          </p>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid ">
              <div className="code-wrapper col-start-1 row-start-1">
                <div className="mockup-code">
                  <pre>
                    <code>
                      <span className="token tag">
                        <span className="token punctuation">{"<"}</span>
                        <span>!DOCTYPE</span>
                      </span>{" "}
                      <span className="token attr-name">html</span>
                      <span className="token punctuation">{">"}</span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>html</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>body</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>h1</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <span className="token plain">หัวเรื่องแรก</span>
                      <span className="token tag ">
                        <span className="token punctuation">{"<"}</span>
                        <span>/</span>
                        <span>h1</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>p</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <span className="token plain">หัวเรื่องแรก</span>
                      <span className="token tag ">
                        <span className="token punctuation">{"<"}</span>
                        <span>/</span>
                        <span>p</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>/</span>
                        <span>body</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>/</span>
                        <span>html</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                    </code>
                  </pre>
                </div>
              </div>
              <div className="col-start-1 row-start-1 flex items-start justify-end p-2">
                <div
                  data-tip={tip ? "คัดลอกแล้ว" : "คัดลอก"}
                  onClick={() => {
                    setTip(true);
                    copy(`<!DOCTYPE html>
<html>

<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>

`);
                  }}
                  className="tooltip tooltip-left tooltip-accent"
                >
                  {tip ? (
                    <button className="btn btn-square btn-sm">
                      <svg
                        className="h-5 w-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path d="M 16 2 C 14.742188 2 13.847656 2.890625 13.40625 4 L 5 4 L 5 29 L 27 29 L 27 4 L 18.59375 4 C 18.152344 2.890625 17.257813 2 16 2 Z M 16 4 C 16.554688 4 17 4.445313 17 5 L 17 6 L 20 6 L 20 8 L 12 8 L 12 6 L 15 6 L 15 5 C 15 4.445313 15.445313 4 16 4 Z M 7 6 L 10 6 L 10 10 L 22 10 L 22 6 L 25 6 L 25 27 L 7 27 Z M 21.28125 13.28125 L 15 19.5625 L 11.71875 16.28125 L 10.28125 17.71875 L 14.28125 21.71875 L 15 22.40625 L 15.71875 21.71875 L 22.71875 14.71875 Z" />
                      </svg>
                    </button>
                  ) : (
                    <button className="btn btn-square btn-sm">
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                      >
                        <path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="grid content-around">
              <img src={imgnotepad} className="w-full h-auto self-center" />
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5 mt-5" />
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <a className=" text-primary ">
            #<span className="font-bold mt-3 "> ขั้นตอนที่ 3</span>
          </a>
          <p className="text-sm">
            {" "}
            <a className=" text-primary ">-</a> บันทึกเว็บเพจ HTML
          </p>
          <p className="text-sm">
            บันทึกแฟ้มบนคอมพิวเตอร์ของคุณ เลือก ไฟล์
            <span className="text-primary"> {">"} </span>
            บันทึกเป็น ในเมนู Notepad
          </p>
          <p className="text-sm">
            ตั้งชื่อแฟ้ม <span className="text-primary"> {"index.html"} </span>{" "}
            และตั้งค่าการเข้ารหัสเป็น
            <span className="text-primary"> {"UTF-8"} </span>
            (ซึ่งเป็นการเข้ารหัสที่ต้องการสําหรับแฟ้ม HTML)
          </p>
          <img src={imgsaveas} className="w-full h-auto" />
        </div>
        <div className="alert shadow-lg alert-warning">
          <div>
            <span className="text-sm">
              คุณสามารถใช้.htmหรือ.htmlเป็นนามสกุลแฟ้ม
              ไม่มีความแตกต่างมันขึ้นอยู่กับคุณ
            </span>
          </div>
        </div>
      </div>

      <hr className="mb-5 mt-5" />
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <a className=" text-primary ">
            #<span className="font-bold mt-3 "> ขั้นตอนที่ 4</span>
          </a>
          <p className="text-sm">
            {" "}
            <a className=" text-primary ">-</a> ดูเว็บเพจ HTML
            ในเบราว์เซอร์ของคุณ
          </p>

          <p className="text-sm">
            เปิดแฟ้ม HTML ที่บันทึกไว้ในเบราว์เซอร์โปรดของคุณ
            (ดับเบิลคลิกที่แฟ้ม หรือคลิกขวา แล้วเลือก "เปิดด้วย")
          </p>
          <img src={imgchrome} className="w-full h-auto" />
        </div>
      </div>
      <hr className="mb-5 mt-5" />
      <div className="flex justify-between">
        <button className="btn gap-2 btn-sm  btn-outline btn-success">
          ถัดไป
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="btn gap-2 btn-sm  btn-outline btn-success">
          ถัดไป
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    </React.Fragment>

  );
};
export default html1;
