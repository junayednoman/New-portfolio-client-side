import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import Container from "../../ui/Container";

const Content = ({
  heading,
  content,
  techs,
  description,
}: {
  heading: string;
  content: string;
  techs: string[];
  description: string;
}) => {
  return (
    <Container>
      <div className="mt-12">
        <div className="lg:px-6">
          <h3 className="md:text-4xl font-semibold text-white">{heading}</h3>
          <p className="text-white-100 text-lg mt-4">{description}</p>
        </div>
        <div className="max-w-[850px] mx-auto mt-16">
          {HTMLReactParser(content)}
          <div className="flex items-center gap-2 mt-5 flex-wrap">
            {techs.map((tech) => (
              <Link
                key={tech}
                className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
                href={"/"}
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Content;
