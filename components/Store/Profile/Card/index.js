import useAuth from "../../../../hooks/useAuth";
import { FaPencilAlt } from "react-icons/fa";

export default function ProfileCard() {
  return (
    <div className="rounded-md bg-white text-[--primary-brand] py-3 md:w-4/6 w-5/6 shadow-md">
      <div className="w-full border-b p-2">
        <h3 className="text-2xl font-semibold">Account Overview</h3>
      </div>
      <div className="my-3 px-2 flex flex-wrap gap-3">
        <AccountDetails />
        <AddressBook />
      </div>
      <div className="my-3 px-2 flex flex-wrap gap-3">
        <StoreCredit />
      </div>
    </div>
  );
}

function AccountDetails() {
  const { user, loading, error } = useAuth();
  return (
    <div className="border w-[450px] h-[250px] rounded-md py-3">
      <div className="w-full border-b p-2 text-semibold">Account Details</div>
      {!error && !loading ? (
        <div className="p-2">
          <p className="font-semibold">{user.fullName}</p>
          <p>{user.emailAddress}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function StoreCredit() {
  return (
    <div className="border w-[450px] h-[250px] rounded-md py-3">
      <div className="w-full border-b p-2 text-semibold">
        <h3>Store Credits</h3>
      </div>
      <div className="p-2">
        <p>Credits Coming Soon</p>
      </div>
    </div>
  );
}

function AddressBook() {
  return (
    <div className="border w-[450px] h-[250px] rounded-md py-3">
      <div className="w-full border-b p-2 text-semibold flex justify-between">
        <h3>Address Book</h3>
        <FaPencilAlt className="hover:cursor-pointer" />
      </div>
      <div className="p-2">Currently No Address Saved</div>
    </div>
  );
}
