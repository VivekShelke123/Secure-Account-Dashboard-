import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-slate-800  p-6 text-center min-h-11 border-solid md:text-lg text-sm text-white">
      <div className="m-4">
        <Link className="md:px-4 px-2 hover:underline" href={"#"}>Privacy Policy</Link>
        <Link className="md:px-4 px-2 hover:underline" href={"#"}>Terms of Service</Link>
        <Link className="md:px-4 px-2 hover:underline" href={"#"}>Support</Link>
        <Link className="md:px-4 px-2    hover:underline" href={"#"}>Social Media Links</Link>
      </div>
      <div className="m-4">
        <p>Contact: email@example.com | Phone: 123-456-7890</p>
      </div>
      <div className="m-4 flex flex-col">
        <label className="pb-2">Subscribe to our Newsletter</label>
        <div >
        <input
          type="email"
          id="newsletter-email"
          placeholder="Enter your email"
          className="mx-2 md:m-0 mb-3 text-center"
        />
        <button className="mx-2 bg-fuchsia-600 px-3 rounded-lg hover:bg-fuchsia-400">Submit</button>
        </div>
      </div>
    </div>
  );
}
