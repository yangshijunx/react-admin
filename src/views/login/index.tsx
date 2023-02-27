import "./index.less";
import SwitchDark from "@/compontents/SwitchDark";
import LoginForm from "@/compontents/LoginForm";
import ImgLeft from "@/assets/images/login_left.png";
import logo from "@/assets/images/logo.png";

const Login = () => {
	return (
		<div className="login-container">
			<SwitchDark />
			<div className="login-box">
				<div className="login-left">
					<img src={ImgLeft} alt="" />
				</div>
				<div className="login-right">
					<div className="login-logo">
						<img className="login-icon" src={logo} alt="logo" />
						<div className="login-name">My - Admin</div>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
