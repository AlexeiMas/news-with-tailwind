import {CompanyBlock, ContactUsBlock, ContentBlock} from "@/components/Footer/index";

const Footer = () => {
  return (
    <footer className="border-t mt-10 py-10 px-2">
      <div className="md:flex">
        <CompanyBlock/>
        <ContentBlock/>
        <ContactUsBlock/>
      </div>
    </footer>
  );
};

export default Footer;