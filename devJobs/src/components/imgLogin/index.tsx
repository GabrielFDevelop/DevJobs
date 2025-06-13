import React from "react";
import Image from "next/image";
import empregoLogin from '../../../public/empregoLogin.jpg';

const ImgLogin = () => {
	return(
		<div>
			<Image src={empregoLogin} alt="imgLogin" width={500} />
		</div>
	)
}

export default ImgLogin;