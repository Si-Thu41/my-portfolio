import HomePage from "@/components/home/home";
import About from "@/components/about/about";
import Project from "@/components/project/project";
import ExtraActivities from "@/components/extraActivities/extraActivities";
export default function Page() {
  return (
    <>
      <section id="home"><HomePage /></section>
      <section id="about"><About /></section>
      <section id="projects"><Project /></section>
      <section id="extra-activities"><ExtraActivities /></section>
      
    </>
  )
}