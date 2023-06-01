import Image from "next/image";
import "../styles/global.scss";
import "../styles/reset.scss";
import Section from "@/pages/Section";
import Cover from "@/pages/Cover";
import SocialNetworks from "@/pages/SocialNetworks";
import BuyMeCoffee from "@/pages/BuyMeCoffee";
import Title from "@/pages/Title";

export default function Home() {
  return (
    <div>
      <Section>
        <Cover title="Maria<br /> Avram" />
        <SocialNetworks />
        <BuyMeCoffee />
      </Section>
      <Section>
        <Title>New Post</Title>
      </Section>
    </div>
  );
}
