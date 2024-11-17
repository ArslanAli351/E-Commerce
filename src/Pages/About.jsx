import img1 from "../assets/Untitled-4.png";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="">
        <div className="h-16 border-2 relative group  ">
          <h1 className="absolute group-hover:text-primary transition duration-300 w-full center mt-32 font_3 text-4xl">
            {" "}
            E-Commerce Website
          </h1>
          <img src={img1} alt="banner" className="w-full" />
        </div>
      </div>
      <div className="absolute  mt-72 w-full font_1 flex flex-col gap-7">
        <p>
          <span className="font-bold">Welcome to E-Commerce Website –</span>{" "}
          Your Trusted Online Marketplace for [Product Category]
        </p>
        <p>
          At E-Commerce Website, we believe in offering more than just products
          – we deliver quality, convenience, and exceptional customer service.
          Whether you're looking for [specific product types, e.g., stylish
          clothing, cutting-edge electronics, eco-friendly home goods], we are
          here to provide you with the best shopping experience possible.
        </p>
        <h1 className="font-bold">Our Mission</h1>
        <p>
          Our mission is simple: to make shopping online a breeze while offering
          only the highest quality products at competitive prices. We’re
          committed to transparency, reliability, and ensuring that every order
          is handled with care – from the moment you click "buy" to when your
          package arrives at your door.
        </p>

        <p>
          We believe in making the shopping experience as seamless as possible.
          That’s why we offer fast shipping, easy returns, and 24/7 customer
          support. We want every interaction with our brand to feel personalized
          and stress-free.
        </p>

        <h1 className="font-bold">Why Shop With Us?</h1>

        <ul className=" flex flex-col gap-4 a">
          <li className="a">
            <span className="font-semibold"> Curated Selection</span> : We
            carefully select every product we sell, ensuring it meets our high
            standards for quality, durability, and style.
          </li>
          <li>
            <span className="font-semibold">Customer-Centric Service: </span>{" "}
            Our dedicated support team is always here to assist you with any
            questions or concerns, ensuring that your shopping experience is
            smooth from start to finish.
          </li>
          <li>
            <span className="font-semibold">Secure Shopping:</span> We use the
            latest technology to ensure that your personal and payment
            information is protected.
          </li>
          <li>
            <span className="font-semibold">Sustainability:</span>We’re proud to
            offer eco-friendly options and work with brands that share our
            commitment to environmental responsibility.
          </li>
          <h1 className="font-semibold">Our Values</h1>
          <li>
            <span className="font-semibold">Quality: </span>Every product we
            offer is handpicked for its quality and value, ensuring that you
            always get the best.
          </li>
          <li>
            <span className="font-semibold">Integrity:</span>We’re committed to
            honesty in all our dealings, providing clear product descriptions,
            transparent pricing, and excellent customer service.
          </li>
          <li>
            <span className="font-semibold">Innovation:</span>We are always on
            the lookout for new trends, technologies, and products to keep your
            shopping experience fresh and exciting.
          </li>
        </ul>
        <h1 className="font-bold">Join the E-Commerce Website Family</h1>
        <p>
          We’re more than just a store – we’re a community. Join thousands of
          satisfied customers who trust us for their shopping needs. Follow us
          on [Social Media Links] to stay up-to-date with new arrivals,
          exclusive offers, and behind-the-scenes looks at how we operate.
        </p>

        <Footer />
      </div>

    </>
  );
}
