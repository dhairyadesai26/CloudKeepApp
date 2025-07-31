import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="  hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
         <Image
  src="/assets/ChatGPT Image Jul 31, 2025, 07_05_03 PM.png"
  alt="lego"
  width={260}
  height={60}
  priority
  className="object-contain block mx-auto 
    w-[160px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px] 
    transition-transform duration-300 hover:scale-105"
/>



          <div className="space-y-5 text-white text-center">
            <h1 className="h1">Store Less Worry. Keep More Files</h1>
            <p className="body-1">
              Store, access, and manage your documents anytime  with privacy, speed, and style.


            </p>
          </div>
          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={342}
            height={342}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
  <div className="mb-16 lg:hidden w-full flex justify-center items-center pl-5rem">
    <Image
      src="/assets/icons/logo-full-brand.svg"
      alt="logo"
      width={224}
      height={82}
      className="h-auto w-[200px] lg:w-[250px]"
    />
  </div>

  {children}
</section>


    </div>
  );
};

export default Layout;