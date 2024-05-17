import BottomHeaderSection from "./BottomHeaderSection";

const HeaderSection = () => {
  return (
    <div className="tl-header tl-1-header">
      <div className="tl-1-header-top">
        <div className="container">
          <p>
            Transform talent and your exclusive skills Global Skills Report{" "}
            {new Date().getFullYear()}.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>

      <BottomHeaderSection />
    </div>
  );
};

export default HeaderSection;
