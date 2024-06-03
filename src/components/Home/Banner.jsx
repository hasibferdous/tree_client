// import banner1 from "../../assets/image_01.jpeg";
import banner from "../../assets/4.jpg";

export default function Banner() {
  return (
    <div
      className="hero min-h-[400px] "
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-center">
          <h1 className="mb-5 text-4xl font-bold">Grow Your Green Haven</h1>
          <p className="mb-5 text-2xl ">
            Discover and Buy Quality Trees to Beautify Your Home and Garden.
          </p>
          <button className="btn bg-green-300 font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
}
