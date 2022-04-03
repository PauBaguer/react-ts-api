import { User } from "../models/user";
import UserService from "../services/user-service";

interface Props {
  user: User;
  token: string;
  emitId: Function;
}

function Actions({ user, token, emitId }: Props) {
  return (
    <div>
      <a
        className="btn-floating"
        onClick={() => {
          console.log("add user Click!");
          emitId("addUser");
        }}
      >
        <i className="material-icons">add_box</i>
      </a>
      <a
        className="btn-floating"
        onClick={() => {
          console.log("update Click!");
          emitId(user._id);

          setTimeout(() => {
            (document.getElementById("name")! as HTMLInputElement).value =
              user.name as string;
            (document.getElementById("userName")! as HTMLInputElement).value =
              user.userName as string;

            var dd: any = user.birthDate.getDate();
            var mm: any = user.birthDate.getMonth() + 1;

            var yyyy: any = user.birthDate.getFullYear();
            if (dd < 10) {
              dd = "0" + dd;
            }
            if (mm < 10) {
              mm = "0" + mm;
            }
            var date = yyyy + "-" + mm + "-" + dd;
            (document.getElementById("birthDate")! as HTMLInputElement).value =
              date as string;
            (document.getElementById("password")! as HTMLInputElement).value =
              user.password as string;
            (document.getElementById("email")! as HTMLInputElement).value =
              user.mail as string;
          }, 50);
        }}
      >
        <i className="material-icons">update</i>
      </a>
      <a
        className="btn-floating red"
        onClick={() => {
          console.log("delete user Click!");
          UserService.deleteUser(token, user._id!);
        }}
      >
        <i className="material-icons">delete</i>
      </a>
    </div>
  );
}

export default Actions;
