import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/Carousel.css";
import sushi from "../../img/sushi.png";
import recipe from "../../img/recipe.png";

const SliderCard = () => {
  const CustomPrevArrow = (props) => (
    <button {...props} className="carousel-arrow prev">
      {"<"}
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="carousel-arrow next">
      Next
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      <div className=" relative flex flex-col group gap-5 items-center">
        <img src={sushi} className=" w-[100%]" alt="" />
        <div className=" text-center flex gap-10 absolute bottom-[50%] left-[45%]">
          <a
            href="https://sushishopforu.netlify.app/"
            className=" text-3xl opacity-0 group-hover:opacity-90 transition-all px-8 py-3 rounded-xl  bg-[#0d1117]  text-[#c9d1d9]   "
          >
            Launch
          </a>          
        </div>
      </div>

      <div>
        <img src={recipe} alt="" />
      </div>
    </Slider>
  );
};

export default SliderCard;
