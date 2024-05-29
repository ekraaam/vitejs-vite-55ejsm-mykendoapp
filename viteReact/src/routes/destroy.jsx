import { redirect } from "react-router-dom";
import { deleteContact } from "../../../viteReact/src/contact";

export async function action({params}){
  await deleteContact(params.contactId);
  return redirect('/');
}