import HTMLReactParser from "html-react-parser";
import Link from "next/link";
import Container from "../../ui/Container";

const Content = ({ content, techs }: { content: string; techs: string[] }) => {
  return (
    <Container>
      <div className="mt-12">
        <div className="max-w-[850px] mx-auto mt-16">
          {HTMLReactParser(content)}
          <div className="flex items-center gap-2 mt-12 flex-wrap">
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
