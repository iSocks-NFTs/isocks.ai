const useCheckSession = () => {
  if (window.localStorage) {
    let emailAddress = localStorage.getItem("emailAddress");
    let lastLogin = localStorage.getItem('loginDate');
    return { emailAddress,lastLogin };
  }
};

export default useCheckSession;
