import about from "../assets/3.jpg";

const About = () => {
  return (
    <section className="bg-green-200 py-20 font-semibold">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-lg text-gray-800">
              At Tree Emporium, we&apos;re passionate about bringing the beauty
              and serenity of nature to your doorstep. With over a decade of
              experience, we specialize in providing a wide variety of premium
              trees sourced from sustainable forests around the world.
            </p>
            <div>-----</div>
            <p className="mt-4 text-lg text-gray-800">
              Our mission is to help you create lush and vibrant landscapes that
              enrich your surroundings and enhance your well-being. Whether
              you&apos;re landscaping your backyard, rejuvenating your garden,
              or greening up your urban space, we&apos;ve got the perfect trees
              to meet your needs.
            </p>
          </div>
          <div
            className="hero min-h-[400px] "
            style={{
              backgroundImage: `url(${about})`,
              opacity: 0.6,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default About;
