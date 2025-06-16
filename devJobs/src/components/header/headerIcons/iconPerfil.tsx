import React from "react";
import Image from "next/image";
import imgPerfil from "../../../../public/circle-user-svgrepo-com.svg";

const ImgPerfil = () => {
	return(
		<div>
			<Image src={imgPerfil} alt="imgPerfil" width={70} />
		</div>
	)
}

export default ImgPerfil;