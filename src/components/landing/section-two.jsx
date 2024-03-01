import Logo from "../logo";
export default function SectionTwo() {
  return (
    <section className="w-full h-[443px] relative border-b border-gray-200">
      <div className=" flex flex-grow justify-around items-center h-full">
        <div className="bg-blue-600 w-[487px] h-[232px] flex flex-col gap-4 items-center justify-center">
          <div>
            <Logo color="text-white" />
          </div>
          <div className="text-[1.5rem] font-semibold">No Hassle Setup</div>
          <div className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="bg-blue-600 w-[487px] h-[232px] flex flex-col gap-4 items-center justify-center">
          <div>
            <Logo color="text-white" />
          </div>
          <div className="text-[1.5rem] font-semibold">No Hassle Setup</div>
          <div className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <div className="bg-blue-600 w-[487px] h-[232px] flex flex-col gap-4 items-center justify-center">
          <div>
            <Logo color="text-white" />
          </div>
          <div className="text-[1.5rem] font-semibold">No Hassle Setup</div>
          <div className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </section>
  );
}
