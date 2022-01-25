import Head from "next/head";
import { useState } from "react";
import Person from "../components/Person";
import Quote from "../components/Quote";
import styles from "../styles/Home.module.scss";

interface ITestimonial {
  quote: string;
  name: string;
  occupation: string;
  img: string;
}

export default function Home({ testimonials }) {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number>(0);

  const handleTestimonialSlider = (direction: string) => {
    if (direction == "right") {
      let newTestimonial =
        selectedTestimonial + 1 >= testimonials.length
          ? 0
          : selectedTestimonial + 1;
      setSelectedTestimonial(newTestimonial);
    }

    if (direction == "left") {
      let newTestimonial =
        selectedTestimonial - 1 < 0
          ? testimonials.length - 1
          : selectedTestimonial - 1;
      setSelectedTestimonial(newTestimonial);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Testimonials</title>
        <meta name="description" content="Testimonials Page" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Quote
          quote={{
            text: testimonials[selectedTestimonial].quote,
            name: testimonials[selectedTestimonial].name,
            occupation: testimonials[selectedTestimonial].occupation,
          }}
        />
        <Person
          img={testimonials[selectedTestimonial].img}
          setTestimonial={handleTestimonialSlider}
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const testimonials: ITestimonial[] = [
    {
      quote:
        "I've been interested in coding for a while but never taken the jump, unitl now. I couln't recommend this course enough. I'm now in the job of my dreams and so exited about the future.",
      name: "Tanya Sinclair",
      occupation: "UX Engineer",
      img: "/assets/image-tanya.jpg",
    },
    {
      quote:
        "If you want to lay the best doundation possible I'd recommend taking this course. The depth the instrictors go into is incredible. I now feel so cofident about starting up as a professional developer.",
      name: "John Tarkpor",
      occupation: "Junior Front-end Developer",
      img: "/assets/image-john.jpg",
    },
  ];

  return {
    props: {
      testimonials,
    },
  };
}
