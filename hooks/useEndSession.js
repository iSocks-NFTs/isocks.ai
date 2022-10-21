const useEndSession = () =>{
    if(window.localStorage){
        let userRecord = localStorage.getItem('emailAddress');
        if(userRecord){
            localStorage.setItem('emailAddress','');
        }
        return {userRecord}
    }
}

export default useEndSession;