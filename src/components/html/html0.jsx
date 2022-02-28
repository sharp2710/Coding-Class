import React from "react";
import copy from "copy-to-clipboard";
import imgchrome from "../image/img_chrome.png";


const html0 = () => {
  const [showhtml, setShowHtml] = React.useState(false);
  const [tip, setTip] = React.useState(false);
  return (
    <React.Fragment>
    <div className="p-6 pb-5">
      <h2 className="font-bold text-4xl "> บทนํา HTML</h2>
      <p className="mt-2 mb-10">
        HTML เป็นภาษามาร์กอัปมาตรฐานสําหรับการสร้างเว็บเพจ
      </p>
      <div className="not-prose  mb-10 overflow-x-auto">
        <table className="table-compact table w-full">
          <thead>
            <tr>
              <th className="normal-case">
                <a className=" text-primary ">#</a> HTML คืออะไร
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  <a className=" text-primary hover:opacity-60">-</a> HTML
                  ย่อมาจาก ภาษามาร์กอัปข้อความแบบไฮเปอร์
                </span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  <a className=" text-primary hover:opacity-60">-</a> HTML
                  เป็นภาษามาร์กอัปมาตรฐานสําหรับการสร้างเว็บเพจ
                </span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  <a className=" text-primary hover:opacity-60">-</a> HTML
                  อธิบายโครงสร้างของเว็บเพจ
                </span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  <a className=" text-primary hover:opacity-60">-</a> HTML
                  ประกอบด้วยชุดขององค์ประกอบ
                </span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  <a className=" text-primary hover:opacity-60">-</a> องค์ประกอบ
                  HTML บอกเบราว์เซอร์ถึงวิธีการแสดงเนื้อหา
                </span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  <a className=" text-primary hover:opacity-60">-</a> องค์ประกอบ
                  HTML จะติดป้ายกํากับส่วนของเนื้อหาเช่น "นี่คือหัวเรื่อง",
                  "นี่คือย่อหน้า", "นี่คือลิงก์" เป็นต้น
                </span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="component-preview not-prose  max-w-4xl">
        <div className="pb-3 text-sm font-bold">
          <a className=" text-primary hover:opacity-60">#</a>{" "}
          <span className="component-preview-title">
            ตัวอย่าง HTML อย่างง่าย
          </span>
        </div>
        <div className="grid">
          <div className="tabs z-10 -mb-px">
            <button
              onClick={() => setShowHtml(false)}
              className={
                showhtml
                  ? "tab tab-lifted border-0"
                  : "tab tab-lifted tab-active [--tab-bg:hsl(var(--b2))] "
              }
            >
              ดูตัวอย่าง
            </button>
            <button
              className={
                showhtml
                  ? "tab tab-lifted tab-active [--tab-bg:hsl(var(--n))] [--tab-border-color:hsl(var(--n))] [--tab-color:hsl(var(--nc))]"
                  : "tab tab-lifted"
              }
              onClick={() => setShowHtml(true)}
            >
              HTML
            </button>
            <div className="tab tab-lifted mr-6 flex-1 cursor-default [--tab-border-color:transparent]" />
          </div>
          {showhtml ? (
            <div className="grid">
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
                        <span>head</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <span className="token tag ml-5"></span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>title</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <span className="token plain">ชื่อหน้า</span>
                      <span className="token tag ">
                        <span className="token punctuation">{"<"}</span>
                        <span>/</span>
                        <span>title</span>
                        <span className="token punctuation">{">"}</span>
                      </span>
                      <br />
                      <span className="token tag ml-5">
                        <span className="token punctuation">{"<"}</span>
                        <span>/</span>
                        <span>head</span>
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
<head>
<title>ชื่อหน้า</title>
</head>
<body>

<h1>หัวเรื่องแรก</h1>
<p>บรรทัดแรก.</p>

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
          ) : (
            <div className="border mockup-window border-base-300 rounded-none tmi ">
              <div className="m-5 p-5">
                <h1 className="h1">หัวข้อแรก</h1>
                <p className="p">บรรทัดแรก.</p>
              </div>
            </div>
          )}
        </div>
        <div className="card-actions mt-2 justify-end"></div>
      </div>

      <div className="alert shadow-lg mb-10">
        <div>
          <div>
            <h2 className="font-bold mb-2">
              <a className=" text-primary hover:opacity-60">#</a>{" "}
              ตัวอย่างที่อธิบาย
            </h2>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              การประกาศระบุว่าเอกสารนี้เป็นเอกสาร HTML5{" "}
              <code className=" text-primary"> {"<!DOCTYPE html>"}</code>
            </div>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              องค์ประกอบคือองค์ประกอบรากของเว็บเพจ HTML
              <code className=" text-primary"> {"<html>"}</code>
            </div>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              องค์ประกอบมีข้อมูลเมตาเกี่ยวกับเว็บเพจ HTML
              <code className=" text-primary"> {"<head>"}</code>
            </div>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              องค์ประกอบระบุชื่อเรื่องสําหรับเว็บเพจ HTML
              (ซึ่งแสดงในแถบชื่อเรื่องของเบราว์เซอร์หรือในแท็บของเว็บเพจ)
              <code className=" text-primary"> {"<title>"}</code>
            </div>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              องค์ประกอบจะกําหนดเนื้อความของเอกสาร
              และเป็นคอนเทนเนอร์สําหรับเนื้อหาที่มองเห็นได้ทั้งหมด เช่น
              หัวเรื่อง ย่อหน้า รูป การเชื่อมโยงหลายมิติ ตาราง รายการ เป็นต้น
              <code className=" text-primary"> {"<body>"}</code>
            </div>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              องค์ประกอบกําหนดหัวเรื่องขนาดใหญ่
              <code className=" text-primary"> {"<h1>"}</code>
            </div>
            <div className="text-xs">
              <a className=" text-primary hover:opacity-60">-</a>{" "}
              องค์ประกอบกําหนดย่อหน้า
              <code className=" text-primary"> {"<p>"}</code>
            </div>
          </div>
        </div>
        <div className="flex-none">
          <button className="btn gap-2 btn-sm ">
            <div className="rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-blue-200 dark:group-hover:bg-blue-500 dark:bg-slate-800 dark:highlight-white/5">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z"
                  className="fill-secondary"
                />
                <path
                  d="M10.25 9.75 7.75 12l2.5 2.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-blue-50 dark:stroke-slate-400 dark:group-hover:stroke-white dark:stroke-slate-400"
                />
                <path
                  d="m13.75 9.75 2.5 2.25-2.5 2.25"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-blue-200 dark:group-hover:stroke-white dark:stroke-slate-400"
                />
              </svg>
            </div>
            ลองด้วยตัวเอง
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="mb-2 text-sm">
        <a className=" text-primary font-bold">#</a>{" "}
        <span className="component-preview-title font-bold">
          องค์ประกอบ HTML คืออะไร
        </span>
        <p>
          <a className=" text-primary hover:opacity-60">~</a> องค์ประกอบ HTML
          ถูกกําหนดโดยแท็กเริ่มต้น เนื้อหาบางส่วน และแท็กสิ้นสุด:{" "}
          <code className=" text-primary">{"<tagname>"}</code>{" "}
          ใส่เนื้อหาที่นี่...{" "}
          <code className=" text-primary">{"</tagname>"}</code>
        </p>
        <p>
          <a className=" text-primary hover:opacity-60">~</a> องค์ประกอบ HTML
          คือทุกอย่างตั้งแต่แท็กเริ่มต้นไปจนถึงแท็กสิ้นสุด:{" "}
          <code className="text-primary"> {"<h1>"}</code>
          หัวเรื่องขนาดใหญ่
          <code className="text-primary"> {"</h1>"}</code>{" "}
          <code className="text-primary"> {"<p>"}</code>
          ข้อความย่อหน้า<code className="text-primary"> {"</p>"}</code>
        </p>
      </div>
      <div className="not-prose mt-5 mb-1 overflow-x-auto">
        <table className="table-compact table w-full">
          <thead>
            <tr>
              <th className="normal-case">แท็กเปิด</th>
              <th className="normal-case">เนื้อหาองค์ประกอบ</th>
              <th className="normal-case">แท็กเปิด</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">{"<h1>"}</span>
              </th>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  {"My First Heading"}
                </span>
              </th>
              <th className="font-normal">
                <span className="font-mono lowercase">{"	</h1>"}</span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">{"<p>"}</span>
              </th>
              <th className="font-normal">
                <span className="font-mono lowercase">
                  {"	My first paragraph."}
                </span>
              </th>
              <th className="font-normal">
                <span className="font-mono lowercase">{"</p>"}</span>
              </th>
            </tr>
            <tr>
              <th className="font-normal">
                <span className="font-mono lowercase">{"<br>"}</span>
              </th>
              <th className="font-normal">
                <span className="font-mono lowercase">{"none"}</span>
              </th>
              <th className="font-normal">
                <span className="font-mono lowercase">{"none"}</span>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="alert shadow-lg  alert-warning mb-5">
        <div>
          <p className="text-sm p-3">
            {" "}
            <span className="text-primary">โน้ต</span>: องค์ประกอบ HTML
            บางองค์ประกอบไม่มีเนื้อหา {"(เช่น องค์ประกอบ <br>)"}{" "}
            องค์ประกอบเหล่านี้เรียกว่าองค์ประกอบที่ว่างเปล่า
            องค์ประกอบว่างไม่มีแท็กสิ้นสุด!
          </p>
        </div>
      </div>
      <div className="m-5 pt-5">
        <span className="mt-5 font-bold">
          <a className=" text-primary font-bold">#</a> เว็บเบราว์เซอร์
        </span>
        <p className="text-sm m-5 mt-0 mb-2">
          วัตถุประสงค์ของเว็บเบราว์เซอร์ (Chrome, Edge, Firefox, Safari)
          คือการอ่านเอกสาร HTML และแสดงอย่างถูกต้อง เบราว์เซอร์ไม่แสดงแท็ก HTML
          แต่ใช้แท็กเหล่านั้นเพื่อกําหนดวิธีการแสดงเอกสาร:
        </p>
        <div className="border mockup-window border-base-300 mb-10">
          <img src={imgchrome} className="w-full h-full" />
        </div>
        <hr />
        <div className=" mt-5 ">
          <span className="font-bold">
            <a className=" text-primary font-bold">#</a> โครงสร้าง HTML
          </span>
          <p className="text-sm mb-2">
            <a className=" text-primary font-bold">~</a>{" "}
            ด้านล่างนี้คือการแสดงภาพโครงสร้างเว็บเพจ HTML
          </p>

          <div className="border mockup-window ">
            <div
              className="bg-primary"
              style={{
                marginTop: "20px",
                backgroundColor: "hsl(var(--n))",
                color: "hsl(var(--nc))",
                width: "100%",
                padding: "15px",

                textAlign: "start",
              }}
            >
              <font>&lt;html&gt;</font>
              <div
                style={{
                  width: "90%",
                  border: "1px solid grey",
                  padding: 3,
                  margin: "10px 10px 10px 35px",
                  textAlign: "start",
                }}
              >
                <font>&lt;head&gt;</font>
                <div
                  style={{
                    width: "90%",
                    border: "1px solid grey",
                    padding: 5,
                    margin: "10px 10px 10px 35px",
                    textAlign: "start",
                  }}
                >
                  &lt;title&gt;หัวข้อแรก&lt;/title&gt;
                </div>
                <font>&lt;/head&gt;</font>
              </div>
              <div
                style={{
                  width: "90%",

                  border: "1px solid grey",
                  padding: 3,
                  margin: "10px 10px 10px 35px",

                  textAlign: "start",
                }}
              >
                <font>&lt;body&gt;</font>
                <div
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    width: "90%",
                    border: "1px solid grey",
                    padding: 3,
                    margin: 20,
                  }}
                >
                  <div
                    style={{
                      width: "90%",
                      border: "1px solid grey",
                      padding: 5,
                      margin: 20,
                    }}
                  >
                    &lt;h1&gt;This is a heading&lt;/h1&gt;
                  </div>
                  <div
                    style={{
                      width: "90%",
                      border: "1px solid grey",
                      padding: 5,
                      margin: 20,
                    }}
                  >
                    &lt;p&gt;This is a paragraph.&lt;/p&gt;
                  </div>
                  <div
                    style={{
                      width: "90%",
                      border: "1px solid grey",
                      padding: 5,
                      margin: 20,
                    }}
                  >
                    &lt;p&gt;This is another paragraph.&lt;/p&gt;
                  </div>
                </div>
                <font>&lt;/body&gt;</font>
              </div>
              <font>&lt;/html&gt;</font>
            </div>
          </div>

          <div className="alert shadow-lg  alert-warning mb-5 mt-2">
            <div>
              <p className="text-sm p-3">
                {" "}
                <span className="text-primary">โน้ต</span>: เนื้อหาภายในส่วน{" "}
                {"<body>"} (พื้นที่สีขาวด้านบน) จะแสดงในเบราว์เซอร์
                เนื้อหาภายในองค์ประกอบ {"<title>"}{" "}
                จะแสดงในแถบชื่อเรื่องของเบราว์เซอร์หรือในแท็บของเว็บเพจ
              </p>
            </div>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">ประวัติ HTML</h2>
            <div>
              <p className="text-sm">
                ตั้งแต่วันแรกๆ{" "}
                <a
                  className="btn btn-link p-0"
                  href="https://th.wikipedia.org/wiki/%E0%B9%80%E0%B8%A7%E0%B8%B4%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B9%84%E0%B8%A7%E0%B8%94%E0%B9%8C%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A"
                >
                  ของเวิลด์ไวด์เว็บ
                </a>
                มี HTML หลายรุ่นดังนี้.
              </p>
              <div></div>
            </div>
          </div>
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              className="w-36 h-36"
              id="icon-hearbeat"
              viewBox="0 0 256 256"
              xmlSpace="preserve"
            >
              <g transform="translate(128 128) scale(0.72 0.72)" style={{}}>
                <g
                  style={{
                    stroke: "none",
                    strokeWidth: 0,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "none",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                  transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                >
                  <polygon
                    points="12.54,81 5.32,0 84.68,0 77.45,80.99 44.95,90 "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(228,77,38)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                  <polygon
                    points="45,83.11 71.26,75.83 77.44,6.62 45,6.62 "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(241,101,41)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                  <polygon
                    points="45,36.67 31.85,36.67 30.95,26.49 45,26.49 45,16.56 44.97,16.56 20.09,16.56 20.33,19.22 22.77,46.6 45,46.6 "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(235,235,235)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                  <polygon
                    points="45,62.47 44.96,62.48 33.89,59.49 33.19,51.57 27.81,51.57 23.21,51.57 24.6,67.17 44.95,72.82 45,72.8 "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(235,235,235)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                  <polygon
                    points="44.97,36.67 44.97,46.6 57.2,46.6 56.05,59.48 44.97,62.48 44.97,72.81 65.33,67.17 65.48,65.49 67.82,39.33 68.06,36.67 65.38,36.67 "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(255,255,255)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                  <polygon
                    points="44.97,16.56 44.97,22.73 44.97,26.47 44.97,26.49 68.93,26.49 68.93,26.49 68.96,26.49 69.16,24.26 69.61,19.22 69.85,16.56 "
                    style={{
                      stroke: "none",
                      strokeWidth: 1,
                      strokeDasharray: "none",
                      strokeLinecap: "butt",
                      strokeLinejoin: "miter",
                      strokeMiterlimit: 10,
                      fill: "rgb(255,255,255)",
                      fillRule: "nonzero",
                      opacity: 1,
                    }}
                    transform="  matrix(1 0 0 1 0 0) "
                  />
                </g>
              </g>
            </svg>
          </figure>
          <div className="card-body">
            <table className="table-compact table w-full">
              <thead>
                <tr>
                  <th className="normal-case">ปี</th>
                  <th className="normal-case">เวอร์ชั่น</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">1989</span>
                  </th>
                  <td>Tim Berners-Lee invented www</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">1991</span>
                  </th>
                  <td>Tim Berners-Lee invented HTML</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">1993</span>
                  </th>
                  <td>Dave Raggett drafted HTML+</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">1995</span>
                  </th>
                  <td>HTML Working Group defined HTML 2.0</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">1997</span>
                  </th>
                  <td>W3C Recommendation: HTML 3.2</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">1999</span>
                  </th>
                  <td>W3C Recommendation: HTML 4.01</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2000</span>
                  </th>
                  <td>W3C Recommendation: XHTML 1.0</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2008</span>
                  </th>
                  <td>WHATWG HTML5 First Public Draft</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2012</span>
                  </th>
                  <td>WHATWG HTML5 Living Standard</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2014</span>
                  </th>
                  <td>W3C Recommendation: HTML5</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2016</span>
                  </th>
                  <td>W3C Candidate Recommendation: HTML 5.1</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2017</span>
                  </th>
                  <td>W3C Recommendation: HTML5.1 2nd Edition</td>
                </tr>
                <tr>
                  <th className="font-normal">
                    <span className="font-mono lowercase">2017</span>
                  </th>
                  <td>W3C Recommendation: HTML5.2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="alert shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-info-content flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <div className="text-xs">
                บทช่วยสอนนี้เป็นไปตามมาตรฐาน HTML5 ล่าสุด
              </div>
            </div>
          </div>
          <div className="flex-none">
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
      </div>
    </div>
    </React.Fragment>
  );
};


export default html0;