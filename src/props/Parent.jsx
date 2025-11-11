import Child from "./Child"

function Parent()
{
   let UserData = {
        name:"kamesh",
        age: 22,
        email:"kamesh@gmail.com"
    }

    return(
        <>
        <Child name={UserData.name} age={UserData.age} email={UserData.email}/>
        </>
    )
}
export default Parent