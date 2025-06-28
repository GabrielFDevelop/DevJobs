import React from "react";
import Image from "next/image";
import imgVagas from "../../../public/suitcase-svgrepo-com.svg";

interface ImgVagasProps {
	width: number;
}

const ImgVagas: React.FC<ImgVagasProps> = ({width}) => {
	return(
		<div>
			<Image src={imgVagas} alt="imgVagas" width={width} />
		</div>
	)
}

export default ImgVagas;