"use clients";
import Image from "next/image";
import Facebook from "../public/logo/Facebook.png";
import instagram from "../public/logo/instagram.png";
import twitter from "../public/logo/twitter.png";
import rachayitha from "../public/logo.png";
const Footer = () => {
  return (
    <section className="relative max-container padding-container pb-6 bg-purple-100">
      <div className="flex ml-4 mt-20 gap-2 w-full border justify-between">
        <div className="px-4">
          <div className="py-4 ">
            <p className="font-bold">Discover</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Home</p>
            <p>Novels</p>
            <p>Authors</p>
            <p>Subjects</p>
            <p>Collections</p>
            <p>Advanced Search</p>
            <p>Return to Top</p>
          </div>
        </div>
        <div className="">
          <div className="py-4 ">
            <p className="font-bold">Resources</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Tags</p>
            <p>Download Apps</p>
            <p>Be an Author</p>
            <p>Help Center</p>
            <p>APrivacy policy</p>
            <p>Terms of Service</p>
            <p>Keywords</p>
          </div>
        </div>
        <div className="">
          <div className="py-4 ">
            <p className="font-bold">Help</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>Support Us</p>
            <p>Help Center </p>
            <p>Report a Problem</p>
            <p>Suggesting Edits</p>
          </div>
        </div>
        <div className="">
          <div className="py-4 ">
            <p className="font-bold">Change Website Language</p>
          </div>
          <div className="flex flex-col gap-3">
            <p>English</p>
            <p>Hindi</p>
          </div>
        </div>
        <div className="">
          <div className="py-4 ">
            <p className="font-bold">Follow us</p>
          </div>

          <div className="flex  gap-3">
            <Image src={Facebook} alt="facebook" />

            <Image src={instagram} alt="instagram " />
            <Image src={twitter} alt="twitter" />
          </div>

          <Image
            src={rachayitha}
            alt="logo"
            width={195.1}
            height={36.17}
            className="absolute right-6 bottom-4 "
          />
        </div>
      </div>
    </section>
  );
};
export default Footer;
