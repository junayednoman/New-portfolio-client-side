import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import PIcon from "../ui/PIcon";
import { FaArrowUpRightFromSquare, FaSquareXTwitter } from "react-icons/fa6";
import MagicButtonSmall from "../ui/MagicButtonSmall";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="md:pb-10 pb-8 -mt-16 z-50 bg-black">
      <Container>
        <div className="flex sm:flex-row flex-col gap-y-5 items-center justify-between">
          <p className="text-sm text-white-200 z-50">
            Copyright © 2024 Junayed Noman
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <PIcon link="https://www.linkedin.com/in/junayed-noman/">
              <FaLinkedin size={20} />
            </PIcon>
            <PIcon link="https://github.com/junayednoman">
              <FaGithub size={20} />
            </PIcon>
            <PIcon link="https://www.facebook.com/JunayedNoman.me">
              <FaFacebookSquare size={20} />
            </PIcon>
            <div className="sm:block hidden">
              <PIcon link="https://twitter.com/junayednoman">
                <FaSquareXTwitter size={20} />
              </PIcon>
            </div>
            <a
              href="https://drive.google.com/file/d/1W6xp-K4rSH5h9h5VjhO7coGOzk1SaUKN/view?usp=sharing"
              target="_blank"
            >
              <MagicButtonSmall icon={<FaArrowUpRightFromSquare size={13} />}>
                View Resume
              </MagicButtonSmall>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
