import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function RegisterReq() {
  let navigate = useNavigate();

  let handleLogin = async () => {
    navigate("/loginBefore");
  };

  return (
    <div className="wallpaper2">

      <div className="login-wrapper">
        <h1>Request status</h1>
        <p>Registration Completed</p>
      </div>
      <Button variant="primary" onClick={() => handleLogin()}>
        Back
      </Button>
    </div>
  );
}

export default RegisterReq;
