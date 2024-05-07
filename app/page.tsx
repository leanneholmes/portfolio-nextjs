import { About } from "@/components/About";
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24" id="about">
        <About />
      </div>
      <div id="projects">Projects</div>
    </Layout>
  );
}
