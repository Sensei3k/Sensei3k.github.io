
// // import Slider from 'react-slick'
//
// export default class PauseOnHover extends Component {
//   render() {
//     // var settings = {
//     //   dots: true,
//     //   infinite: true,
//     //   slidesToShow: 3,
//     //   slidesToScroll: 1,
//     //   autoplay: true,
//     //   autoplaySpeed: 2000,
//     //   pauseOnHover: true
//     // }
//     return (
//       <div className='example-carousel'>
//         {/* <h2>Pause On Hover</h2> */}
//         {/* <Slider {...settings}> */}
//         <div style={{width: '20vw', background: 'black'}}>
//           <h3>1</h3>
//         </div>
//         <div style={{width: '20vw', background: 'blue'}}>
//           <h3>2</h3>
//         </div>
//         <div style={{width: '20vw', background: 'green'}}>
//           <h3>3</h3>
//         </div>
//         <div style={{width: '20vw', background: 'red'}}>
//           <h3>4</h3>
//         </div>
//         {/* <div>
//             <h3>5</h3>
//           </div> */}
//         {/* <div>
//             <h3>6</h3>
//           </div> */}
//         {/* </Slider> */}
//       </div>
//     )
//   }
// }


// import React from 'react'
// import SlideShow from 'react-image-show'
//
// const Slider = (props) => {
//   return (
//     <SlideShow
//       images={props.images}
//       width="400px"
//       imagesWidth="400px"
//       imagesHeight="400px"
//       imagesHeightMobile="56vw"
//       thumbnailsWidth="500px"
//       thumbnailsHeight="12vw"
//       thumbnails fixedImagesHeight
//       infinite
//     />
//   )
// }
//
// export default Slider


import React from 'react'
// import ReactDOM from 'react-dom'
// import SlideShow from 'react-image-show'
import { Carousel } from 'react-responsive-carousel'

class ProjectCarousel extends React.Component {
  render() {
    return (
      <Carousel
        infiniteLoop useKeyboardArrows autoPlay transitionTime={1000} showArrows={false} width="700px" showThumbs={false} showStatus={false}>
        {/* <SlideShow
          // width="100px"
          // imagesWidth="100px"
          // imagesHeight="100px"
          // imagesHeightMobile="56vw"
          // thumbnailsWidth="500px"
          // thumbnailsHeight="12vw"
          // thumbnails fixedImagesHeight
          // infinite
        /> */}
        <div>
          <img src="../images/s_invaders.png" />
          <p className="legend">Project 1</p>
        </div>
        <div>
          <img src="https://pbs.twimg.com/profile_images/742877069793742848/c0Ec2mTU_400x400.jpg" />
          <p className="legend">Project 2</p>
        </div>
        <div>
          <img src="https://pbs.twimg.com/profile_images/742877069793742848/c0Ec2mTU_400x400.jpg" />
          <p className="legend">Project 3</p>
        </div>
        <div>
          <img src="https://pbs.twimg.com/profile_images/742877069793742848/c0Ec2mTU_400x400.jpg" />
          <p className="legend">Project 4</p>
        </div>
      </Carousel>
    )
  }
}

export default ProjectCarousel
