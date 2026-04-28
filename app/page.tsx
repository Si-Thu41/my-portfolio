import HomePage from "@/components/home/home";
import About from "@/components/about/about";
import Project from "@/components/project/project";

export default function Page() {
  return (
    <>
      <section id="home"><HomePage /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="contact" className="min-h-screen">Contact content</section>
    </>
  )
}