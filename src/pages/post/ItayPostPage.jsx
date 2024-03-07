const ItayPostPage = () => {
  return (
    <>
      <div className="flex flex-row justify-center w-full p-[18px] border-blue_gray-100_01 border-4 border-solid bg-white-A700">
        <div className="flex flex-row justify-start items-center w-full mb-[15px] gap-[37px] max-w-[1287px]">
          <div className="flex flex-row justify-start items-start w-[50%] gap-7">
            <div className="flex flex-col w-[15%] mt-[15px] gap-[15px]">
              <div className="flex flex-col items-center justify-center w-full pb-[15px]">
                <img
                  src="images/img_thumbnail.png"
                  alt="thumbnail_one"
                  className="w-[63px] mb-0.5 object-cover rounded-[11px]"
                />
              </div>
              <div className="w-[94px] h-px bg-black-900" />
              <img
                src="images/img_thumbnail_94x94.png"
                alt="thumbnail_one"
                className="w-full object-cover rounded-[11px]"
              />
              <div className="w-[94px] h-px bg-black-900" />
              <img
                src="images/img_thumbnail_1.png"
                alt="thumbnail_one"
                className="w-full object-cover rounded-[11px]"
              />
              <div className="w-[94px] h-px bg-black-900" />
              <img
                src="images/img_thumbnail_2.png"
                alt="thumbnail_one"
                className="w-full object-cover rounded-[11px]"
              />
            </div>
            <div className="flex flex-col items-start justify-start h-[527px] w-[81%] p-[18px] border-blue_gray-100 border-4 border-solid bg-[url(/public/images/img_frame_9.png)] bg-cover bg-no-repeat rounded-[28px]">
              <button
                color="white_A700"
                size="xs"
                className="mb-[428px] text-transparent tracking-[0.66px] font-librefranklin font-bold bg-gradient1 bg-clip-text border-blue_gray-100 border border-solid min-w-[93px] rounded-[5px]"
              >
                NEW
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[48%] mb-0.5 gap-[221px]">
            <div className="flex flex-col items-start justify-start w-full gap-[23px]">
              <div className="flex flex-col items-start justify-start w-[45%] gap-[7px]">
                <div className="flex flex-row justify-center">
                  <p className="!text-gray-900 !text-[56.86px]">Mario kart</p>
                </div>
                <div className="flex flex-row justify-center w-[34%]">
                  <div className="flex flex-row justify-center w-full">
                    <p className="!text-[37.91px]">₪170</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full pt-1 gap-1.5">
                <p className="!text-[28.43px]">Description</p>
                <p className="!text-gray-700 !text-[18.95px]">
                  Lorem Ipsumis simply dummy text of the printing and
                  typesetting industry, Lorem Ipsumis simply dummy.
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full gap-[15px]">
              <button
                color="light_blue_A700"
                size="md"
                className="border-blue_gray-100 border border-solid shadow-sm min-w-[364px] rounded-[26px]"
              >
                Buy Now
              </button>
              <button
                color="black_900"
                size="md"
                className="border-blue_gray-100 border border-solid min-w-[236px] rounded-[26px]"
              >
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItayPostPage;
