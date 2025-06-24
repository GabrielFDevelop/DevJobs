import React from "react";
import Image from "next/image";
import imgVagas from "../../../public/id-card-clip-svgrepo-com.svg";

const ImgVagas = () => {
	return(
		<div>
			<Image src={imgVagas} alt="imgVagas" width={70} />
		</div>
	)
}

export default ImgVagas;