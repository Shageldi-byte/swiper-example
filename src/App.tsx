import "swiper/css";
import "swiper/css/navigation";
import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        autoHeight={true}
        modules={[Navigation]}
        navigation
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {new Array(20).fill(0).map((it, i) => {
          return (
            <SwiperSlide>
              {({ isActive }) => (
                <>
                  <div
                    style={{
                      height: "400px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "darkblue",
                        padding: isActive ? "0px" : "20px",
                      }}
                    >
                      <h2>Platform {i}</h2>
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <img src="/img.png" style={{ width: "100%" }} />
                        </motion.div>
                      ) : null}
                    </div>
                  </div>
                </>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default App;
