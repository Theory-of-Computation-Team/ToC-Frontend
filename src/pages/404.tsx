import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 Not found</title>
      </Head>

      <div className=" h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full space-y-3">
          <div className="w-72 md:w-80">
            <Image
              src={"/assets/images/404.png"}
              alt={"error"}
              width={500}
              height={500}
            />
          </div>

          <h1 className="text-2xl md:text-4xl text-center font-semibold">
            404 Page not found
          </h1>

          <div className="mx-auto w-3/4 md:text-md text-center pt-4 text-gray-500">
            <p>
              ขณะนี้ไม่มีหน้าที่คุณกำลังค้นหาหรืออาจเกิดข้อผิดพลาดอื่นๆ
              <br />
              ทางเราขอเเนะนำให้คุณกดกลับเข้าสู่หน้าหลัก
            </p>
          </div>

          <div className="flex justify-center items-center pt-6">
            <Link
              href={`/`}
              className="px-12 xl:px-32 py-3.5 lg:text-base xl:text-lg rounded-3xl font-semibold text-white bg-primary hover:bg-primary-dark"
            >
              กลับสู่หน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
