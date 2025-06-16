import React from "react";
import Image from "next/image";
import imgLogin from "../../../public/id-card-clip-svgrepo-com.svg";

const ImgBoxLogin = () => {
	return(
		<div>
			<Image src={imgLogin} alt="imgLogin" width={400} />
		</div>
	)
}

export default ImgBoxLogin;