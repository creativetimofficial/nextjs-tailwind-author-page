// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import LatestBlogPosts from "./latest-blog-posts";
import ContactForm from "./contact-form";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <LatestBlogPosts />
      <ContactForm />
      <Footer />
    </>
  );
}
