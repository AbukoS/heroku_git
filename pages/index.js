import { Heading, Box, Image, Flex, Divider } from "@chakra-ui/react";
import Slider from "react-slick";
import { productsListUrl } from "../utils/constants";

function Home({ items }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box w="100vw">
      <Heading>Simple Ecom Auto deploy site</Heading>
      <Divider />
      <Slider {...settings}>
        {items?.map((item) => (
          <Box key={item.id} w="300px" h="300px">
            <Image src={item.image} fallbackSrc="/jacket.png" />
            <Heading fontSize="20px">{item.title}</Heading>
            <Flex align="center">
              <Heading fontSize="md" fontWeight="bold">
                Ksh.{item.discount_price.toLocaleString()}
              </Heading>
              <Heading
                ml={3}
                style={{ textDecoration: "line-through" }}
                fontSize="12px"
                fontWeight="bold"
              >
                Ksh.{item.price.toLocaleString()}
              </Heading>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export async function getStaticProps() {
  const res = await fetch(productsListUrl);
  const items = await res.json();

  return {
    props: {
      items,
    },

    revalidate: 1,
  };
}

export default Home;
