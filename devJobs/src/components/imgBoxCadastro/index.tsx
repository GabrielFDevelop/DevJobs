import React from "react";
import Image from "next/image";
import imgCadastro from "../../../public/file-alt-svgrepo-com.svg";

interface ImgBoxCadastroProps {
	width: number;
}

const ImgBoxCadastro: React.FC<ImgBoxCadastroProps> = ({width}) => {
	return(
		<div>
			<Image src={imgCadastro} alt="imgLogin" width={width} />
		</div>
	)
}

export default ImgBoxCadastro;