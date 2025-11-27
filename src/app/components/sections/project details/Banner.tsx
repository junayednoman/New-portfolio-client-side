import { FaGithub } from "react-icons/fa";
import Container from "../../ui/Container";
import MagicButtonSmall from "../../ui/MagicButtonSmall";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Banner = ({
  image,
  github_client,
  github_server,
  url,
}: {
  image: string;
  github_client: string;
  github_server: string;
  url: string;
}) => {
  return (
    <section className="md:pt-20 pt-16">
      <Container>
        <div
          className="bg-center bg-cover bg-no-repeat rounded-[21px]"
          style={{ backgroundImage: `url(${image})` }}>
          <div className="w-full xl:h-[800px] lg:h-[600px] md:h-[500px] sm:h-[350px] h-[300px] rounded-[20px] bg-black-100/5"></div>
        </div>
        <div className="flex items-center gap-3 mt-6 lg:px-6">
          {github_client !== "#" && (
            <MagicButtonSmall
              target="_blank"
              icon={<FaGithub size={18} />}
              iconPosition="left"
              link={github_client}>
              Client Side
            </MagicButtonSmall>
          )}
          {github_server !== "#" && (
            <MagicButtonSmall
              target="_blank"
              icon={<FaGithub size={18} />}
              iconPosition="left"
              link={github_server}>
              {url === "#" && github_client === "#"
                ? "Github Repo"
                : "Server Side"}
            </MagicButtonSmall>
          )}
          {url !== "#" && (
            <MagicButtonSmall
              target="_blank"
              icon={<FaArrowUpRightFromSquare size={13} />}
              link={url}>
              Live Link
            </MagicButtonSmall>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Banner;
