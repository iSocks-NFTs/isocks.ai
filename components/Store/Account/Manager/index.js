import { FaLock } from "react-icons/fa6";

export default function Manager({ setModalTrigger }) {
  function openChangePassword() {
    setModalTrigger((modalTrigger) => ({
      ...modalTrigger,
      changePassword: true,
    }));
  }

  return (
    <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6">
      <div className="w-full border-b p-2">
        <h3 className="text-2xl font-semibold">Settings</h3>
      </div>
      <div className="my-3 px-2 flex flex-wrap gap-x-3">
        <div className="border w-[450px] h-fit rounded-md py-3">
          <div className="w-full border-b p-2 text-semibold">
            Profile Details
          </div>
          <div className="flex flex-col gap-y-3 p-2">
            <button className="px-4 py-2 bg-[--primary-brand] text-white rounded-md w-fit hover:bg-white hover:text-[--primary-brand] border-black border">
              Basic Details
            </button>
            <button className="px-4 py-2 bg-transparent border border-black text-[--primary-brand] rounded-md w-fit">
              Edit Contact Information
            </button>
          </div>
        </div>
        <div className="border w-[450px] h-fit rounded-md py-3">
          <div className="w-full inline-flex items-center gap-x-2 border-b p-2 text-semibold">
            <FaLock /> Security Settings
          </div>
          <div className="flex flex-col gap-y-3 p-2">
            <button
              className="px-4 py-2 bg-[--primary-brand] text-white rounded-md w-fit hover:bg-white hover:text-[--primary-brand] border-black border"
              onClick={openChangePassword}
            >
              Change Password
            </button>
            <button className="px-4 py-2 bg-transparent border border-black text-[--primary-brand] rounded-md w-fit">
              Forgot Password
            </button>
            <button className="px-4 py-2 bg-transparent border border-red-500 text-red-500 rounded-md w-fit">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
