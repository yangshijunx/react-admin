import React from "react";
import { Switch } from "antd";

const SwitchDark = (props: any) => {
	const onClick = () => {
		console.log("props", props);
	};
	const onChange = (checked: boolean) => {
		console.log("ε½εηΆζ", checked);
	};
	return <Switch onChange={onChange} className="dark" checkedChildren={<>π</>} unCheckedChildren={<>π</>} onClick={onClick} />;
};
export default SwitchDark;
