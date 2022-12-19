import React from "react";

function Awards() {
  return (
    <div className="awards pb-24 mr-48 ml-48">
      <div className="text-6xl mt-12 font-bold justify-center">
        Awards & Recognitions
      </div>
    <div className="flex">
      <div className="w-1/2 m-8 items-center rounded-lg">
        <div className="upper relative mt-8 mr-8 ml-8 mb-4 items-center justify-center rounded-full">
          <div className="block p-8 ">
            <div className="TKW item-center  py-4 text-4xl font-extrabold m-2 bg-white capital">
              TKW
            </div>
            <div className="Heading text-3xl font-bold m-2">
              Transforming Lives in Kenya
            </div>
            <div className="Year text-xl font-bold m-2">YEAR 2021</div>
            <div className="awardee text-lg m-2 ">Knowledge Warehouse Ke</div>
          </div>
        </div>
        <div className="bottm-text bg-black text-white p-4 h-16">
          <p>Positioned top 25 for creating new ways of access to finance through mobile phones</p>
        </div>
      </div>

      
      <div className="w-1/2 m-8 items-center rounded-lg">
        <div className="upper relative  mt-8 mr-8 ml-8 mb-4 items-center justify-center rounded-full">
          <div className="block p-8 ">
            <div className="TKW item-center  py-4 text-4xl font-extrabold m-2 bg-white capital">
              Fortune
            </div>
            <div className="Heading text-3xl font-bold m-2">
              Fortune's Change the World List
            </div>
            <div className="Year text-xl font-bold m-2">YEAR 2020</div>
            <div className="awardee text-lg m-2 ">Fortune</div>
          </div>
        </div>
        <div className="bottm-text bg-[black] text-white h-16 p-4">
          <p>Emerged #7 in Worlds List alongside Alibaba, Paypal & Zoom</p>
        </div>
      </div>
      {/* part2 */}
      {/* award 2 */}
      </div>
    </div>
  );
}

export default Awards;
