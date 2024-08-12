
import { Carousel } from 'react-bootstrap';

const VideoSlider = () => {
  return (
    <Carousel style={{width:"100%"}}>
      <Carousel.Item>
        <iframe
          width="100%"
          height="600"
          src="public/b4.mp4"
          title="First slide"
          
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Carousel.Item>
      <Carousel.Item style={{width:"100%"}} >
        <iframe
          width="100%"
          height="600"
          src="public/b4.mp4"
          title="Second slide"
          
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Carousel.Item>

      <Carousel.Item >
        <iframe
          width="100%"
          height="600"
          src="public/b4.mp4"
          title="Second slide"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Carousel.Item>
      {/* Add more Carousel.Items for additional videos */}
    </Carousel>
  );
};

export default VideoSlider;
