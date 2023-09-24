import React from "react";

const Footer = () => {
  return (
    <div className="min-h-screen grid grid-col-1 mx-[2rem] text-white py-8 items-center">
      <div className="md:flex justify-between mx-2">
        <div>
          <img src="./images/logo.png" alt="" className="h-[2rem] mb-4" />
          <p className="">Email us: customer@streamit.com</p>
          <p>COSTUMER SERVICES</p>
          <p> + (480) 555-0103</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Quick Links</p>
          <p>About Us</p>
          <p>Blog</p>
          <p>Pricing Plan</p>
          <p>FAQ</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Movies To Watch</p>
          <p>Top Trending</p>
          <p>Recommended</p>
          <p>Popular</p>
        </div>
        <div>
          <p className="text-lg font-semibold">About Company</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
        </div>
        <div className=" w-2/6">
          <p className="text-lg font-semibold">Subscribe Newsletter</p>
          <form>
            <input
              type="text"
              value=""
              placeholder="Email"
              className="w-[20rem] mx-2 bg-zinc-800 rounded my-4 px-4 py-3 outline-none focus:outline-none cursor-text"
            />
            <p className="mx-2">
              <button className="bg-red-600 text-center text-2xl px-4 py-2 my-4 rounded cursor-pointer">
                Subscribe
              </button>
            </p>
          </form>
          <p className="statick h-[5rem] grid grid-cols-6 gap-1 w-fit items-center">
            <div>Follow us:</div>
            <div>
              <i className="fa fa-facebook  bg-zinc-800 w-8 h-8 text-center content-center pt-2 tex-2xt rounded-full m-2 cursor-pointer hover:mt-[-1rem] hover:static delay-75 transition duration-[2s]  ease-in"></i>
            </div>
            <div>
              <i className="fa fa-instagram bg-zinc-800 w-8 h-8 text-center content-center pt-2 tex-2xt rounded-full m-2 cursor-pointer hover:mt-[-1rem] hover:static delay-75 transition duration-[2s]  ease-in"></i>
            </div>
            <div>
              <i className="fa fa-whatsapp  bg-zinc-800 w-8 h-8 text-center content-center pt-2 tex-2xt rounded-full m-2 cursor-pointer hover:mt-[-1rem] hover:static delay-75 transition duration-[2s]  ease-in"></i>
            </div>
            <div>
              <i className="fa fa-linkedin  bg-zinc-800 w-8 h-8 text-center content-center pt-2 tex-2xt rounded-full m-2 cursor-pointer hover:mt-[-1rem] hover:static delay-75 transition duration-[2s]  ease-in"></i>
            </div>
            <div>
              <i className="fa fa-youtube  bg-zinc-800 w-8 h-8 text-center content-center pt-2 tex-2xt rounded-full m-2 cursor-pointer hover:mt-[-1rem] hover:static delay-75 transition duration-[2s]  ease-in"></i>
            </div>
          </p>
        </div>
      </div>
      <hr />
      <div className="md:flex gap-8">
        <div className="w-3/6">
          <p>Terms Of Use Privacy-Policy Blog FAQ Watch List</p>
          <p>
            &copy; 2023 <span className="text-red-600">STREAMIT</span>. All
            Rights Reserved. All videos and shows on this platform are
            trademarks of, and all related images and content are the property
            of, Streamit Inc. Duplication and copy of this is strictly
            prohibited.
          </p>
        </div>
        <div className="w-2/6">
          <p className="text- 2xl">Download Streamit Apps</p>
          <p>
            <img src="./images/google-play.png" alt="" />
            <img src="./images/apple.png" alt="" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
