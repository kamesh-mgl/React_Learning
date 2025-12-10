

export default function withAuth(WrappedComp){

    return(props)=>{

        const isLoggedin = 1;
        if(!isLoggedin) return <h2>Access Denied</h2>
        return(
            <WrappedComp {...props}/>
        )
    }
}