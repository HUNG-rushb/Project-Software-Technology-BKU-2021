import { projectFirestore } from "./config";

const GetInfoUser = async (phonenumber) =>{
    userdata = await projectFirestore.collection("Customer Account").get()

    return userdata.docs;
}
// const ReturnPassword = async (phonenumber) => {
//     const data = await GetInfoUser(phonenumber)
    
//     return data;
// }
// const PhonenumberIsExisits= async (phonenumber) =>{
//     const data = await GetInfoUser(phonenumber)
//     if(data.exists)
//     {
//         return true;
//     }
//     else return false;
    
// }
// const ChangePwd = async (phonenumber) =>{
    
//     const result = await projectFirestore.collection("Customer Account")
// }
export default GetInfoUser;