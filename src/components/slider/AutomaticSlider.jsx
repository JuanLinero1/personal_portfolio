import React from 'react'
import HeroSlider, {Slider} from 'hero-slider/dist/HeroSlider'
import { Slide } from 'hero-slider'

const AutomaticSlider = () => {
  return (
    <>
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="vertical"
        initialSlide={1}
        onBeforeChange={(prev, next) => {console.log("onBeforeChange", prev, next)}}
        onChange={next => console.log("onChange", next)}
        onAfterChange={next => console.log("onAfterChange", next)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)"
        }}
        settings={{slidingDuration: 250}}
      >
        <Slider
          background={{
            backgroundImage: "https://pro.translit.com/wp-content/uploads/2021/03/Udemy-image-2-600x338.png",
            backgroundAttachment: "fixed"
          }}
        ></Slider>
      </HeroSlider>
    </>
  )
}

export default AutomaticSlider