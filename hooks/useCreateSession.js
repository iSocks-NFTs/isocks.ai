const useCreateSession = (emailAddress) => {
  // Store Today's Date
  var date = new Date();
  var date = date.toLocaleDateString();
  if(window.localStorage) {
    localStorage.setItem("emailAddress", emailAddress);
    localStorage.setItem("loginDate", date);
    console.log('')
  }
  return { emailAddress, date };
};

export default useCreateSession;
