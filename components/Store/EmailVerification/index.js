import useAuth from "../../../hooks/useAuth";

export default function EmailVerification() {
  const { user, loading, error } = useAuth();

  return (
    <>
      {!error & !loading ? (
        <>
          {user.emailVerificationStatus ? (
            ""
          ) : (
            <div className="w-full absolute flex justify-center bg-black z-30 h-8 shadow-md items-center">
              <p>
                We're glad you're here! Verify your email to enjoy full access.
              </p>
            </div>
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
