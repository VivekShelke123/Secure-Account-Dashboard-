import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="items-center text-center py-5 pt-6">
        <h1 className="p-5 font-merriweather md:text-5xl text-3xl">
          Welcome to Our Secure Dashboard
        </h1>
        <p className="md:text-2xl text-xl">
          Real-time Monitoring | Device Management | Enhanced Security
        </p>
        <div className="flex justify-center m-2 md:flex-row flex-col items-center mt-6">
          <button className=" px-4 border-solid bg-fuchsia-400 rounded-2xl text-black hover:bg-fuchsia-950 hover:text-white p-2 md:m-5 m-3 ">
            Sign Up
          </button>
          <button className=" px-4 border-solid bg-fuchsia-400 rounded-2xl text-black hover:bg-fuchsia-950 hover:text-white p-2 md:m-5 m-3">
            Learn More
          </button>
        </div>
      </div>
      <div>
      <h2>Feature Highlights</h2>
        <div>
            <h3>Real-Time Updates</h3>
            <p>Stay updated with real-time activity monitoring.</p>
        </div>
        <div>
            <h3>Secure Access</h3>
            <p>Enjoy peace of mind with our top-notch security features.</p>
        </div>
        <div>
            <h3>Device Management</h3>
            <p>Manage and monitor your devices effortlessly.</p>
        </div>
      </div>
    </div>
  );
}
