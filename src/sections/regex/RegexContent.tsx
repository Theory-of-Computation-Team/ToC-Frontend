import React from 'react'

const RegexContent = () => {
    return (
        <div>
            <div
                className={`container flex flex-col md:flex-row md:justify-around py-8 md:py-12 gap-4`}
            >
                <div className="flex flex-col justify-center gap-6 md:gap-10 md:w-[550px]">
                    <div className="space-y-6">
                        <a className="inline-block group font-bold text-xl md:text-2xl xl:text-4xl tracking-wide transition-all duration-300 ease-in-out">
                            หลักการของ Regular Expression
                            <span
                                style={{ backgroundColor: "#333333" }}
                                className="block my-2 h-1 w-[50%] group-hover:w-full transition-all duration-500 ease-out"
                            ></span>
                        </a>

                    </div>
                </div>
                <div className="relative flex justify-center shrink-0 px-8 py-8">
                    <div className="relative z-10">
                    </div>
                </div>
                <div className="relative flex justify-center shrink-0 px-8 py-8">
                    <div className="relative z-10">
                    </div>
                </div>
                <div className="relative flex justify-center shrink-0 px-8 py-8">
                    <div className="relative z-10">
                    </div>
                </div>
            </div>
            <div
                className='container mx-auto md:justify-around px-12 py-8 md:py-12 bg-slate-200 rounded-lg'
            >
                <b className='text-xl'>Regular Expression ที่นำมาประยุกต์ใช้</b>
                <div className='pl-8 py-6'>
                    <p>
                        โดยได้เลือก Regular Expression มาประยุกต์ในการ Accept Language ที่ต้องการ ได้ดังนี้
                    </p>
                    <div className='pl-8 py-4 pt-8'>
                        <span className='bg-slate-100 rounded-lg px-2 py-1'>&#62;(.*?)&#60;</span> เป็นให้ Regular Expression Accept กับ Language ในการค้นหารายชื่อวัดที่อยู่ภายใน HTML Tag
                    </div>
                    <div className='pl-8 py-2'>
                        <span className='bg-slate-100 rounded-lg px-2 py-1'>(^วัด)</span> เป็นให้ Regular Expression Accept กับ Language ในการค้นหารายชื่อของวัดเพียงอย่างเดียว จากกลุ่มคำที่ได้จาก HTML Tag
                    </div>

                </div>
                    <b className='text-xl py-8'>Regular Expression Code Implementation</b>
                <div className='px-8 py-4 rounded-lg'>
                    <div className='px-8 ' style={{background: '#272822', overflow: 'auto', width: 'auto', borderWidth: '.1em .1em .1em .1em', padding: '.9em .6em', borderRadius: "30px"}}><pre style={{margin: 0, lineHeight: '125%'}}>{"    "}<span style={{color: '#f8f8f2'}}>li </span><span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>re</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>findall(</span><span style={{color: '#e6db74'}}>'&gt;(.*?)&lt;'</span><span style={{color: '#f8f8f2'}}>,</span> <span style={{color: '#f8f8f2'}}>res)</span>{"\n"}{"    "}<span style={{color: '#f8f8f2'}}>li</span> <span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>[result</span> <span style={{color: '#66d9ef'}}>for</span> <span style={{color: '#f8f8f2'}}>result</span> <span style={{color: '#f92672'}}>in</span> <span style={{color: '#f8f8f2'}}>li</span> <span style={{color: '#66d9ef'}}>if</span> <span style={{color: '#f8f8f2'}}>re</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>match(</span><span style={{color: '#e6db74'}}>'(^วัด)'</span><span style={{color: '#f8f8f2'}}>,result)</span> <span style={{color: '#f8f8f2'}}>]</span>{"\n"}{"    "}<span style={{color: '#f8f8f2'}}>li</span> <span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>[result</span> <span style={{color: '#66d9ef'}}>for</span> <span style={{color: '#f8f8f2'}}>result</span> <span style={{color: '#f92672'}}>in</span> <span style={{color: '#f8f8f2'}}>li</span> <span style={{color: '#66d9ef'}}>if</span> <span style={{color: '#f8f8f2'}}>re</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>match(</span><span style={{color: '#e6db74'}}>'(?!วัดราษฏร์)'</span><span style={{color: '#f8f8f2'}}>,result)</span> <span style={{color: '#f8f8f2'}}>]</span>{"\n"}{"\n"}{"    "}<span style={{color: '#f8f8f2'}}>temple_names</span> <span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>[]</span>{"\n"}{"    "}<span style={{color: '#f8f8f2'}}>pattern</span> <span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>re</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>compile(</span><span style={{color: '#e6db74'}}>r"\S+"</span><span style={{color: '#f8f8f2'}}>)</span>{"\n"}{"    "}<span style={{color: '#66d9ef'}}>for</span> <span style={{color: '#f8f8f2'}}>temple</span> <span style={{color: '#f92672'}}>in</span> <span style={{color: '#f8f8f2'}}>li:</span>{"\n"}{"        "}<span style={{color: '#f8f8f2'}}>match</span> <span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>pattern</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>search(temple)</span>{"\n"}{"        "}<span style={{color: '#66d9ef'}}>if</span> <span style={{color: '#f8f8f2'}}>match:</span>{"\n"}{"            "}<span style={{color: '#f8f8f2'}}>temple_names</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>append(match</span><span style={{color: '#f92672'}}>.</span><span style={{color: '#f8f8f2'}}>group(</span><span style={{color: '#ae81ff'}}>0</span><span style={{color: '#f8f8f2'}}>))</span>{"\n"}{"\n"}{"    "}<span style={{color: '#f8f8f2'}}>temple_name</span> <span style={{color: '#f92672'}}>=</span> <span style={{color: '#f8f8f2'}}>temple_names[:</span><span style={{color: '#f92672'}}>-</span><span style={{color: '#ae81ff'}}>4</span><span style={{color: '#f8f8f2'}}>]</span>{"\n"}</pre></div>
                </div>
            </div>
        </div>
    )
}

export default RegexContent