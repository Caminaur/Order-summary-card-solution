import hero from "./assets/images/illustration-hero.svg";
import musicIcon from "./assets/images/icon-music.svg";
import backgroundImage from "./assets/images/pattern-background-desktop.svg";
import backgroundMobile from "./assets/images/pattern-background-mobile.svg";

function App() {
  const proceedButton = (
    <button className="w-full bg-primary-bright-blue py-4 rounded-xl shadow-2xl text-white font-semibold hover:opacity-75 transition-all duration-300 cursor-pointer">
      Proceed to Payment
    </button>
  );
  const cancelButton = (
    <button
      className="font-bold text-neutral-desaturated-blue pb-10 cursor-pointer hover:text-neutral-dark-blue transition-all duration-300"
      type="button"
    >
      Cancel Order
    </button>
  );
  return (
    <div className="h-screen bg-primary-pale-blue px-4 flex flex-col justify-center items-center md:px-0 ">
      <picture>
        <source media="(min-width: 768px)" srcSet={backgroundImage} />
        <img
          className="w-screen absolute top-0 left-0 z-10"
          src={backgroundMobile}
          alt=""
          aria-hidden="true"
        />
      </picture>
      <div className="w-full bg-white rounded-t-2xl rounded-b-2xl overflow-hidden flex flex-col items-center justify-center gap-8 max-w-[450px] z-20 custom-shadow">
        <img
          className="object-cover"
          src={hero}
          alt="Picture of a woman listening to music while dancing"
        />
        <div className="flex flex-col items-center gap-6 px-6">
          <p className="font-bold text-xl text-neutral-dark-blue">
            Order Summary
          </p>
          <p className="text-neutral-desaturated-blue text-center px-4 text-sm">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="flex justify-around items-center bg-gray-100  w-full py-4 rounded-lg">
            <img src={musicIcon} alt="" aria-hidden="true" />
            <div>
              <p className="font-bold text-neutral-dark-blue">Annual Plan</p>
              <p className="text-neutral-desaturated-blue">$59.99/year</p>
            </div>
            <a
              className="underline text-primary-bright-blue font-semibold transition-all duration-300 hover:opacity-75 hover:no-underline cursor-pointer"
              href="#"
            >
              Change
            </a>
          </div>

          {proceedButton}

          {cancelButton}
        </div>
      </div>
    </div>
  );
}

export default App;
