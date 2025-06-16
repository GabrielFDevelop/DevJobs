import React from "react";
import Image from "next/image";
import imgCadastro from "../../../public/file-alt-svgrepo-com.svg";

const ImgBoxCadastro = () => {
	return(
		<div>
			<Image src={imgCadastro} alt="imgLogin" width={400} />
		</div>
	)
}

export default ImgBoxCadastro;