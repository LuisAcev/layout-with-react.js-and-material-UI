
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";

const Swiperchart = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#31D0E3",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://www.factset.com/hubfs/1)Insight/2022/01.2022/01.26.2022_US_Economic_Charts/us-annual-gdp-growth-estimates.png" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://static.vecteezy.com/system/resources/previews/005/363/623/original/horizontal-histogram-icon-rising-interest-rate-chart-increasing-graph-bars-diagram-economical-report-business-strategy-flat-design-linear-and-color-styles-isolated-illustrations-vector.jpg" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://media.istockphoto.com/id/1251235330/photo/stock-market-investment-graph-on-financial-numbers-abstract-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=PyWS90--ytAuI105jptJtVopfAVvz3ZkpNfdVuWkuCg=" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="https://previews.123rf.com/images/versusstudio/versusstudio2011/versusstudio201100004/158517155-gr%C3%A1fico-gr%C3%A1fico-econ%C3%B3mico-concepto-de-negocio-diagrama-de-elementos-de-infograf%C3%ADa-renderizado.jpg" alt=""/>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}

export default Swiperchart
