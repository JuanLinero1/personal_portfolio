import React from 'react'
import HeroSlider, {Slide} from 'hero-slider'

const AutomaticSlider = () => {
  const languagePhoto = "https://pro.translit.com/wp-content/uploads/2021/03/Udemy-image-2-600x338.png" 
  const gamePhoto = "https://th.bing.com/th/id/OIP.kvpAFERV2dfksca2LNFs8gHaEK?pid=ImgDet&rs=1"

  return (
    <>
      <HeroSlider
        slidingAnimation="top_to_bottom"
        orientation="vertical"
        initialSlide={1}
        onBeforeChange={(prevousSlide, next) => {console.log("onBeforeChange", prevousSlide, next)}}
        onChange={next => console.log("onChange", next)}
        onAfterChange={next => console.log("onAfterChange", next)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.33)"
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 300, 
          shouldAutoPlay: true,
          shouldDisplayButton: true, 
          autoPlayDuration: 4000, 
          height: "100%", 
          width: "100%",  
        }}
      >
        <Slide
          background={{
            backgroundImage: languagePhoto,
            backgroundAttachment: "fixed" 
          }}
        ></Slide>
        <Slide
          background={{
            backgroundImage: gamePhoto,
            backgroundAttachment: "fixed" 
          }}
        ></Slide>
      </HeroSlider>
    </>
  )
}

export default AutomaticSlider