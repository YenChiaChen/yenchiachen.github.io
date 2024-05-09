import TextSpaceBetween from "../Components/TextSpace";
import ExpandableCard from "../Components/Card";
function LandingPage() {
  return (
    <div className="bg-[#ffffff] h-[3000px]">
      <div className="container mx-auto pt-24">
        <div className="grid grid-cols-3 h-[80vh] gap-8">
          <div className="bg-[#8b79d1] rounded-xl">&nbsp;</div>
          <div className="col-span-2">
            <h1 className="text-[100px] font-bold">
              <TextSpaceBetween text="Portfolio 』" />
            </h1>
            <div className="grid grid-cols-5">
              <ExpandableCard
                title="示例卡片"
                content="這裡是更多的資訊，當卡片被展開時，你可以看到這些資訊。"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
