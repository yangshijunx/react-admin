import React from "react";
import { Switch } from "antd";

const SwitchDark = (props: any) => {
	const onClick = () => {
		console.log("props", props);
	};
	const onChange = (checked: boolean) => {
		console.log("当前状态", checked);
	};
	return <Switch onChange={onChange} className="dark" checkedChildren={<>🌞</>} unCheckedChildren={<>🌜</>} onClick={onClick} />;
};
export default SwitchDark;
