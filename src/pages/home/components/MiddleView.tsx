import { Icons } from "../../../constants";

const MiddleView = () => {
  return (
    <div className="flex w-full justify-around my-20">
      <IconTitleView
        icon={Icons.truckBox}
        title="Free Shipping"
        secondaryText="Upgrade your style today and get FREE shipping on all orders! Don't miss out."
      />
       <IconTitleView
        icon={Icons.guarantee}
        title="Satisfaction Guarantee"
        secondaryText="Shop confidently with our Satisfaction Guarantee: Love it or get a refund."
      />
       <IconTitleView
        icon={Icons.payment}
        title="Secure Payment"
        secondaryText="Your security is our priority. Your payments are secure with us."
      />
    </div>
  );
};

export default MiddleView;

const IconTitleView: React.FC<IconTitleViewProps> = ({icon, title, secondaryText}) => {
  return (
      <div className="flex flex-col w-80">
        <img src={icon} className="h-12 w-12 mb-3" />
        <label className="mb-2 font-semibold text-neutral-800">{title}</label>
        <label className="text-neutral-500">{secondaryText}</label>
      </div>
  );
};

interface IconTitleViewProps {
  icon: string;
  title: string;
  secondaryText: string;
 
}