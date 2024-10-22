import { BackgroundLines } from "../ui/BackgroundLines";
import FContainer from "../ui/FContainer";
import MagicButton from "../ui/MagicButton";

const CTA = () => {
  return (
    <section>
      <div className="relative">
        <BackgroundLines>
          <div className="md:pb-24 pt-10 pb-16 z-50">
            <FContainer>
              <div className="text-center">
                <h4 className="md:text-3xl text-2xl text-white font-bold capitalize">
                  Hire The Right Talent to get the best results
                </h4>
                <p className="mt-4 text-white-100">
                  If you want to hire the right talent, get in touch and let's
                  make it happen.
                </p>
                <MagicButton className="mt-8">Hire me</MagicButton>
              </div>
            </FContainer>
          </div>
        </BackgroundLines>
      </div>
    </section>
  );
};

export default CTA;
