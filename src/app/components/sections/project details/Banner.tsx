import Container from "../../ui/Container";

const Banner = ({ image }: { image: string }) => {
  return (
    <section className="md:pt-20 pt-16">
      <Container>
        <div
          className="bg-center bg-cover bg-no-repeat rounded-[21px]"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="w-full xl:h-[800px] lg:h-[600px] md:h-[500px] sm:h-[350px] h-[300px] rounded-[20px] bg-black-100/30"></div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
