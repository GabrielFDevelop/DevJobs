import React from "react";
import Image from "next/image";
import imgPerfil from "../../../../../public/circle-user-svgrepo-com.svg";

interface ImgPerfilProps {
	width?: number;
}

const ImgPerfil: React.FC<ImgPerfilProps> = ({width}) => {
	return(
		<div>
			<Image src={imgPerfil} alt="imgPerfil" width={width} />
		</div>
	)
}

export default ImgPerfil;