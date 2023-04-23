import React from "react";

const LearnRegex = () => {
  return (
    <div id="learn" className="w-full py-6 md:py-16 md:px-32">
      <div className="container mx-auto flex flex-col items-start px-8 py-8 md:py-12 gap-4">
        <h1 className="relative my-8 md:my-12 inline-block group font-bold text-xl md:text-3xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
          หลักการ Regular Expression
          <span className="absolute left-0 -bottom-5 my-2 h-1 w-[30%] group-hover:w-full transition-all duration-500 ease-out bg-primary"></span>
        </h1>
        <div className="container mx-auto md:justify-around px-12 py-8 md:py-12 bg-slate-200 rounded-[3.5rem]">
          <b className="text-xl">Regular Expression ที่นำมาประยุกต์ใช้</b>
          <div className="pl-8 py-6">
            <p>
              โดยได้เลือก Regular Expression มาประยุกต์ในการ Accept Language
              ที่ต้องการ ได้ดังนี้
            </p>
            <div className="pl-8 py-4 pt-8">
              <span className="bg-slate-100 rounded-2xl px-2 py-1">
                &#62;(.*?)&#60;
              </span>{" "}
              เป็นให้ Regular Expression Accept กับ Language
              ในการค้นหารายชื่อวัดที่อยู่ภายใน HTML Tag
            </div>
            <div className="pl-8 py-4 pt-8">
              <span className="bg-slate-100 rounded-2xl px-2 py-1">(^วัด)</span>{" "}
              เป็นให้ Regular Expression Accept กับ Language
              ในการค้นหารายชื่อของวัดเพียงอย่างเดียว จากกลุ่มคำที่ได้จาก HTML
              Tag
            </div>
            <div className="pl-8 py-4 pt-8">
              <span className="bg-slate-100 rounded-2xl px-2 py-1">
                (?!วัดราษฏร์ใน)
              </span>{" "}
              เป็นให้ Regular Expression Accept กับ Language
              คัดเลือกเฉพาะข้อมูลไม่มีตัวอักษรคำว่า “วัดราษฏร์ใน”,
              “วัดราษฎร์ใน”, “วัดราษฏร์มหา”, “วัดราษฎร์มหา”, “วัดใน”, <br></br>
              <br></br>“วัดหลวงใน”, “วัดไทย”, “วัดหน้าพระเมรุ”
              และ“วัดราษฎร์ธรรม”
            </div>
            <div className="pl-8 py-4 pt-8">
              <span className="bg-slate-100 rounded-2xl px-2 py-1">
                \(&#91;^)&#93;*\)
              </span>{" "}
              เป็นให้ Regular Expression Accept กับ Language
              ในบางชื่อวัดมีการใช้ Space เพิ่มเติม
              ทำให้มีการดึงตัวชื่อตำบลและชื่อทางเลือกออกมาด้วยจึงได้แก้ไข้ด้วยการตัดวงเล็บหลังชื่อวัดและตำบล
            </div>
          </div>
          <div className="mt-4">
            <b className="text-xl py-8 ">
              Regular Expression Code Implementation &apos;ปราจีนบุรี&apos;
            </b>
          </div>
          <div className="px-8 py-4 rounded-lg">
            <div
              className="px-8 "
              style={{
                background: "#272822",
                overflow: "auto",
                width: "auto",
                borderWidth: ".1em .1em .1em .1em",
                padding: ".9em .6em",
                borderRadius: "30px",
              }}
            >
              <pre style={{ margin: 0, lineHeight: "125%" }}>
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li </span>
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>findall(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;&gt;(.*?)&lt;&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>res)</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[result</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>result</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>&apos;(^วัด)&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,result)</span>{" "}
                <span style={{ color: "#f8f8f2" }}>]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[result</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>result</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,result)</span>{" "}
                <span style={{ color: "#f8f8f2" }}>]</span>
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>temple_names</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>pattern</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>compile(</span>
                <span style={{ color: "#e6db74" }}>r&quot;\S+&quot;</span>
                <span style={{ color: "#f8f8f2" }}>)</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>temple</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li:</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#f8f8f2" }}>match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>pattern</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>search(temple)</span>
                {"\n"}
                {"        "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>match:</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#f8f8f2" }}>temple_names</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>append(match</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>group(</span>
                <span style={{ color: "#ae81ff" }}>0</span>
                <span style={{ color: "#f8f8f2" }}>))</span>
                {"\n"}
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>temple_name</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>temple_names[:</span>
                <span style={{ color: "#f92672" }}>-</span>
                <span style={{ color: "#ae81ff" }}>4</span>
                <span style={{ color: "#f8f8f2" }}>]</span>
                {"\n"}
              </pre>
            </div>
          </div>
          <div className="mt-8">
            <b className="text-xl py-8 ">
              Regular Expression Code Implementation &apos;ปัตตานี&apos;
            </b>
          </div>
          <div className="px-8 py-4 rounded-lg">
            <div
              className="px-8 "
              style={{
                background: "#272822",
                overflow: "auto",
                width: "auto",
                borderWidth: ".1em .1em .1em .1em",
                padding: ".9em .6em",
                borderRadius: "30px",
              }}
            >
              <pre style={{ margin: 0, lineHeight: "125%" }}>
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>findall(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;&gt;(.*?)&lt;&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>response)</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[i</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>i</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>&apos;^วัด&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>i)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[i</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>i</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>i)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>i</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>range(len(li)):</span>
                {"\n"}
                {"            "}
                <span style={{ color: "#f8f8f2" }}>li[i]</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>sub(</span>
                <span style={{ color: "#e6db74" }}>
                  r&apos;\s*\([^)]*\)\s*$&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>
                <span
                  style={{ color: "#960050", backgroundColor: "#1e0010" }}
                ></span>
                <span style={{ color: "#e6db74" }}>&apos;&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li[i])</span>
                {"\n"}
              </pre>
            </div>
          </div>
          <div className="mt-8">
            <b className="text-xl py-8 ">
              Regular Expression Code Implementation &apos;อยุธยา&apos;
            </b>
          </div>
          <div className="px-8 py-4 rounded-lg">
            <div
              className="px-8 "
              style={{
                background: "#272822",
                overflow: "auto",
                width: "auto",
                borderWidth: ".1em .1em .1em .1em",
                padding: ".9em .6em",
                borderRadius: "30px",
              }}
            >
              <pre style={{ margin: 0, lineHeight: "125%" }}>
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>findall(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;&gt;(.*?)&lt;&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>html_content)</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>&apos;^วัด&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์ใน)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฎร์ใน)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์มหา)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฎร์มหา)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>&apos;(?!วัดใน)&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดหลวงใน)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>&apos;(?!วัดไทย)&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดหน้าพระเมรุ)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฎร์ธรรม)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>sub(</span>
                <span style={{ color: "#e6db74" }}>&apos;\([^)]*\)&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#e6db74" }}>&apos;&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>sub(</span>
                <span style={{ color: "#e6db74" }}>&apos;ตำบล.*?&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#e6db74" }}>&apos;&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match]</span>
                {"\n"}
                {"    "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>sub(</span>
                <span style={{ color: "#e6db74" }}>&apos; หรือ&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#e6db74" }}>&apos;&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match]</span>
                {"\n"}
              </pre>
            </div>
          </div>
          <div className="mt-8">
            <b className="text-xl py-8 ">
              Regular Expression Code Implementation &apos;พะเยา&apos;
            </b>
          </div>
          <div className="px-8 py-4 rounded-lg">
            <div
              className="px-8 "
              style={{
                background: "#272822",
                overflow: "auto",
                width: "auto",
                borderWidth: ".1em .1em .1em .1em",
                padding: ".9em .6em",
                borderRadius: "30px",
              }}
            >
              <pre style={{ margin: 0, lineHeight: "125%" }}>
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>findall(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;&gt;(.*?)&lt;&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>html_content)</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>&apos;^วัด&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,e)]</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์ใน)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,e)]</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์มหา)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,e)]</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[e</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#66d9ef" }}>if</span>{" "}
                <span style={{ color: "#f8f8f2" }}>re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>match(</span>
                <span style={{ color: "#e6db74" }}>
                  &apos;(?!วัดราษฏร์ธรรม)&apos;
                </span>
                <span style={{ color: "#f8f8f2" }}>,e)]</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>[re</span>
                <span style={{ color: "#f92672" }}>.</span>
                <span style={{ color: "#f8f8f2" }}>sub(</span>
                <span style={{ color: "#e6db74" }}>&apos;\([^)]*\)&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#e6db74" }}>&apos;&apos;</span>
                <span style={{ color: "#f8f8f2" }}>,</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e)</span>{" "}
                <span style={{ color: "#66d9ef" }}>for</span>{" "}
                <span style={{ color: "#f8f8f2" }}>e</span>{" "}
                <span style={{ color: "#f92672" }}>in</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match]</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>li_match[:</span>
                <span style={{ color: "#f92672" }}>-</span>
                <span style={{ color: "#ae81ff" }}>4</span>
                <span style={{ color: "#f8f8f2" }}>]</span>
                {"\n"}
                {"     "}
                <span style={{ color: "#f8f8f2" }}>li_match</span>{" "}
                <span style={{ color: "#f92672" }}>=</span>{" "}
                <span style={{ color: "#f8f8f2" }}>list(set(li_match))</span>
                {"\n"}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnRegex;
