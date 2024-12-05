import ForgetPasswordLayout from "@/components/ForgetPasswordImage";
import CreateNewPassword from "@/components/CreateNewPassword";

const page = () => {
  return (
    <div className="flex">
      <CreateNewPassword />
      <ForgetPasswordLayout />
    </div>
  );
};

export default page;