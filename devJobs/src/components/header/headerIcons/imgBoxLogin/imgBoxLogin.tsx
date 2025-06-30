import React from "react";
import Image from "next/image";
import imgLogin from "../../../../../public/id-card-clip-svgrepo-com.svg";

interface ImgBoxLoginProps {
	width: number;
}

const ImgBoxLogin: React.FC<ImgBoxLoginProps> = ({width}) => {
	return(
		<div>
			<Image src={imgLogin} alt="imgLogin" width={width} />
		</div>
	)
}

export default ImgBoxLogin;