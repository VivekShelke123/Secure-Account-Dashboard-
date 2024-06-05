export default function UserDashboard() {
  return (
    <div>
      <div className="text-center p-3 m-3 font-Libre_Baskervile">
        <h1 className="md:text-2xl">Welcome, Vivek</h1>
        <p className="md:text-base text-xs">
          Today is X-day | Current Date : dd/mm/yyyy |Current time : tt/ss{" "}
        </p>
      </div>
      <div className="flex md:flex-row flex-col justify-around">
        <div className="p-3 m-3 mt-6 text-left border-solid border-black border-2 md:w-[45%] w-auto rounded-lg ">
          <h1 className="md:text-2xl text-base font-Libre_Baskervile">
            Here Are Your Recent Activities:-
          </h1>
          <div className=" md:text-base text-[4vw] p-2 m-3  ">
            <li>Logged in from Device 1 at 10:00 AM on 2024-05-27</li>
            <li>Logged out from Device 2 at 02:30 PM on 2024-05-26</li>
          </div>
        </div>
        <div className="p-3 m-3 mt-6 text-left border-solid border-black border-2 md:w-[45%] w-auto rounded-lg ">
          <h1 className="md:text-2xl text-base font-Libre_Baskervile">
            Here Are Your Recent Devices :-
          </h1>
          <div className=" md:text-base text-[4vw] p-2 m-3  ">
            <li>1</li>
            <li>2</li>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-around">
        <div className="p-3 m-3 mt-6 text-left border-solid border-black border-2 md:w-[45%] w-auto rounded-lg ">
          <h1 className="md:text-2xl text-base font-Libre_Baskervile">
            User Profile Summary
          </h1>
          <div className=" md:text-base text-[4vw] p-2 m-3  ">
            <li>Name : xyz</li>
            <li>Email : abc@xyz.com</li>
          </div>
        </div>
        <div className="p-3 m-3 mt-6 text-left border-solid border-black border-2 md:w-[45%] w-auto rounded-lg ">
          <h1 className="md:text-2xl text-base font-Libre_Baskervile">
            Security Management
          </h1>
          <div className=" md:text-base text-[4vw] p-2 m-3  ">
            <li>
              2FA Authentication : <button className="text-green-600 hover:underline">Enable/Disable</button>
            </li>
            <li>
              Change Password : <button className="text-green-600 hover:underline">click here</button>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}
