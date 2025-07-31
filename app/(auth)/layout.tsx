import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="  hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <Image
  src="https://sdmntprwestus2.oaiusercontent.com/files/00000000-33c0-61f8-bca8-8abe1179a9e9/raw?se=2025-07-31T11%3A12%3A41Z&sp=r&sv=2024-08-04&sr=b&scid=9fe8d353-8697-56c9-ae7e-b16cc6489c2e&skoid=04233560-0ad7-493e-8bf0-1347c317d021&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-30T22%3A56%3A04Z&ske=2025-07-31T22%3A56%3A04Z&sks=b&skv=2024-08-04&sig=ndA%2BKDj7n5YByPeOJqPeWjCxuYEcbmiIPFaWGdyDjmE%3D"
  alt="CloudKeep logo"
  width={300}
  height={300}
  className="object-contain mx-auto w-[220px] md:w-[240px] lg:w-[260px] transition-transform duration-300 hover:scale-105"
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