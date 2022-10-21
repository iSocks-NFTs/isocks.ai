const useCheckSession = () =>{
    if(window.localStorage){
        let iSocksId = localStorage.getItem('isocksId');

        return {iSocksId};
    }
}

export default useCheckSession;