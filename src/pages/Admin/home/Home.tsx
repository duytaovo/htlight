import BarChartBox from "src/components/barChartBox/BarChartBox";
import BigChartBox from "src/components/bigChartBox/BigChartBox";
import ChartBox from "src/components/chartBox/ChartBox";
import PieChartBox from "src/components/pieCartBox/PieChartBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "src/data";
import "./home.scss";

const HomeAdmin = () => {
  return (
    <div className="home text-black/70">
      {/* <div className="box box1">
        <TopBox />
      </div> */}
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChartBox />
      </div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default HomeAdmin;

