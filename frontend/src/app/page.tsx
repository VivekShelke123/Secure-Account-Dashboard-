import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="items-center text-center py-5 mt-12 pt-6">
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
      <div className="flex flex-col text-center m-6 p-4 font-merriweather">
        <h2 className=" md:text-4xl mt-7 text-2xl  mb-4">Feature Highlights</h2>
        <div className="m-3">
          <h3 className="md:text-2xl text-lg font-bold">
            1) Real-Time Updates
          </h3>
          <p className="md:text-lg text-sm">
            Stay updated with real-time activity monitoring.
          </p>
        </div>
        <div className="m-3">
          <h3 className="md:text-2xl text-lg font-bold">2) Secure Access</h3>
          <p className="md:text-lg text-sm">
            Enjoy peace of mind with our top-notch security features.
          </p>
        </div>
        <div className="m-3">
          <h3 className="md:text-2xl text-lg font-bold">
            3) Device Management
          </h3>
          <p className="md:text-lg text-sm">
            Manage and monitor your devices effortlessly.
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center m-6 p-4 font-merriweather">
        <h2 className=" md:text-4xl mt-12 text-2xl  mb-4">How It Works</h2>
        <div className="m-3">
          <h3 className="md:text-2xl text-lg font-bold ">Step 1: Sign Up</h3>
          <p className="md:text-lg text-sm">
            Create your account to get started.
          </p>
        </div>
        <div className="m-3">
          <h3 className="md:text-2xl text-lg font-bold">
            Step 2: Secure Your Account
          </h3>
          <p className="md:text-lg text-sm">
            Enable 2FA and other security measures.
          </p>
        </div>
        <div className="m-3">
          <h3 className="md:text-2xl text-lg font-bold">
            Step 3: Manage Devices
          </h3>
          <p className="md:text-lg text-sm">
            View and manage your logged-in devices.
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center m-6 p-4 font-merriweather">
        <h2 className=" md:text-4xl mt-12 text-2xl  mb-4">About Us</h2>
        <p className="md:text-lg text-sm">
          We are a tech company dedicated to providing secure and reliable
          solutions for your online activities.
        </p>
        <h3 className="md:text-2xl text-lg mt-7 mb-3 font-bold">
          Meet Our Team
        </h3>
        <p className="md:text-lg text-sm">
          Our team consists of experienced professionals in the field of
          cybersecurity and web development.
        </p>
      </div>
      <div className="flex flex-col text-center m-6 p-4 font-merriweather">
        <h2 className=" md:text-4xl mt-12 text-2xl  mb-4">Security Features</h2>
        <ul  className="md:text-lg text-sm">
          <li>Two-Factor Authentication</li>
          <li>Data Encryption</li>
          <li>Secure Login/Logout</li>
        </ul>
      </div>
    </div>
  );
}
