import { MdNotifications } from "react-icons/md";

export default function Messages() {
  return (
    <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6">
      <div className="w-full border-b p-2">
        <h3 className="text-2xl font-semibold">Notifications</h3>
      </div>
      <div className="p-2 flex flex-col items-center justify-start h-full mt-20 text-center">
        <MdNotifications size={70} />
        <p>You don't have any Notifications</p>
        <p>
          Here you will be able to see all the notifications that we send you
        </p>
      </div>
    </div>
  );
}
