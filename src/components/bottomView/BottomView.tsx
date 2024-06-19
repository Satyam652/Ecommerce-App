import { Icons } from "../../constants";

const BottomView = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-around my-12">
        <div>
          <div className="flex space-x-5 items-center">
            <img src={Icons.bottomLogo} className="h-11 w-11" />
            <label className="font-extrabold text-xl">E-commerce</label>
          </div>
          <label className="text-sm text-neutral-500 w-64 block mt-2">
            DevCut is a YouTube channel for practical project-based learning.
          </label>
          <div className="flex space-x-4 mt-10">
            <ImageButton image={Icons.github} />
            <ImageButton image={Icons.instagram} />
            <ImageButton image={Icons.youtube} />
          </div>
        </div>

        <div className="flex space-x-10">
          <LinkSection
            heading="SUPPORT"
            buttonLabel1="FAQ"
            buttonLabel2="Terms of use"
            buttonLabel3="Privacy Policy"
          />

          <LinkSection
            heading="COMPANY"
            buttonLabel1="About us"
            buttonLabel2="Contact"
            buttonLabel3="Careers"
          />

          <LinkSection
            heading="SHOP"
            buttonLabel1="My Account"
            buttonLabel2="Checkout"
            buttonLabel3="Cart"
          />
        </div>

        <div>
          <label className="font-medium text-sm text-neutral-400 mb-8">
            ACCEPTED PAYMENTS
          </label>
          <div className="flex space-x-4 mt-10 items-center">
            <ImageButton image={Icons.masterCard} style="h-5 w-8" />
            <ImageButton image={Icons.amex} style="h-5 w-8" />
            <ImageButton image={Icons.visa} style="h-5 w-8" />
          </div>
        </div>
      </div>
      <div className="text-sm text-neutral-500 mx-auto text-center my-10">
        © 2023 DevCut. All rights reserved.
      </div>
    </div>
  );
};

export default BottomView;

interface ImageButtonProps {
  image: string;
  style?: string;
}

const ImageButton: React.FC<ImageButtonProps> = ({ image, style = "" }) => {
  return (
    <button className={`w-6 h-6 ${style}`}>
      <img src={image} />
    </button>
  );
};

interface LinkSectionProps {
  heading: string;
  buttonLabel1: string;
  buttonLabel2: string;
  buttonLabel3: string;
}

const LinkSection: React.FC<LinkSectionProps> = ({
  heading,
  buttonLabel1,
  buttonLabel2,
  buttonLabel3,
}) => {
  return (
    <div className="flex flex-col items-start">
      <label className="font-medium text-sm text-neutral-400 mb-8">
        {heading}
      </label>
      <button className="font-medium text-sm text-neutral-500 mb-3">
        {buttonLabel1}
      </button>
      <button className="font-medium text-sm text-neutral-500 mb-3">
        {buttonLabel2}
      </button>
      <button className="font-medium text-sm text-neutral-500 mb-3">
        {buttonLabel3}
      </button>
    </div>
  );
};
