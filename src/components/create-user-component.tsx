import "./create-user-component.css";
import { RegisterUser } from "../models/user";
import UserService from "../services/user-service";

interface Props {
  id: String;
  token: string;
  changeOwnId: Function;
}

function CreateUser({ id, token, changeOwnId }: Props) {
  console.log("Id in create user component");
  console.log(id);
  if (!id || id === "") return <div></div>;
  return (
    <div id="container">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Create a new User</span>

            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    placeholder="Full name"
                    id="name"
                    type="text"
                    className="validate"
                  />
                </div>
                <div className="input-field col s6">
                  <input
                    id="userName"
                    type="text"
                    className="validate"
                    placeholder="Username"
                  />
                </div>
              </div>
              <div className="row">
                <input type="date" className="datepicker" id="birthDate" />
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    className="validate"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    type="email"
                    className="validate"
                    placeholder="email"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="card-action">
            <a
              className="btn red"
              onClick={() => {
                changeOwnId("");
              }}
            >
              Cancel
            </a>
            <a
              className="btn sumbit"
              onClick={() => {
                console.log(
                  (document.getElementById("name")! as HTMLInputElement).value
                );

                let name = (
                  document.getElementById("name")! as HTMLInputElement
                ).value;
                let userName = (
                  document.getElementById("userName")! as HTMLInputElement
                ).value;
                let birthDate = (
                  document.getElementById("birthDate")! as HTMLInputElement
                ).value;
                let password = (
                  document.getElementById("password")! as HTMLInputElement
                ).value;
                let mail = (
                  document.getElementById("email")! as HTMLInputElement
                ).value;

                const user: RegisterUser = {
                  name,
                  userName,
                  birthDate: new Date(birthDate),
                  password,
                  mail,
                };
                console.log(user);
                if (id === "addUser") UserService.createUser(token, user);
                else UserService.updateUser(token, user, id);

                changeOwnId("");
              }}
            >
              {" "}
              Sumbit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
