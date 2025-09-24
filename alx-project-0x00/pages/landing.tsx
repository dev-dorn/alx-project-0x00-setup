import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Title with Card */}
      <h1 className="text-xl font-extralight">
        <Card />
      </h1>

      {/* Buttons Section */}
      <div className="flex flex-col gap-3">
        {/* Small Buttons */}
        <Button title="Small - Rounded Sm" styles="text-sm rounded-sm" />
        <Button title="Small - Rounded Md" styles="text-sm rounded-md" />
        <Button title="Small - Rounded Full" styles="text-sm rounded-full" />

        {/* Medium Buttons */}
        <Button title="Medium - Rounded Sm" styles="text-base rounded-sm" />
        <Button title="Medium - Rounded Md" styles="text-base rounded-md" />
        <Button title="Medium - Rounded Full" styles="text-base rounded-full" />

        {/* Large Buttons */}
        <Button title="Large - Rounded Sm" styles="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large - Rounded Md" styles="text-lg px-6 py-3 rounded-md" />
        <Button title="Large - Rounded Full" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
