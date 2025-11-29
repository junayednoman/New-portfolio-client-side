import BoxBackground from "../ui/BoxBackground";
import Container from "../ui/Container";
import HighLightText from "../ui/HighLightText";
import MagicButton from "../ui/MagicButton";

const CTA = () => {
  return (
    <section>
      <div className="relative">
        <BoxBackground className="md:py-44 py-32 z-50">
          <Container>
            <div className="text-center">
              <h4 className="md:text-3xl text-2xl text-white font-bold capitalize">
                Hire The{" "}
                <HighLightText fontWeight={600}>Right Talent</HighLightText> to
                get the best results
              </h4>
              <p className="mt-4 text-white-100">
                If you want to hire the right talent, get in touch and let's
                make it happen.
              </p>
              <div className="relative">
                <MagicButton
                  blank
                  link="https://drive.google.com/file/d/19uaQSwyx3n8g9vll-4OI4vw1Vup-BWUF/view?usp=sharing"
                  className="mt-8"
                >
                  Hire me
                </MagicButton>
              </div>
            </div>
          </Container>
        </BoxBackground>
      </div>
    </section>
  );
};

export default CTA;
