import React from "react";
import Image from "next/image";
import imgHeaderHome from "../../../public/house-chimney-blank-svgrepo-com.svg";

const ImgHeaderHome = () => {
	return(
		<div>
			<Image src={imgHeaderHome} alt="imgHeaderHome" width={70} />
		</div>
	)
}

export default ImgHeaderHome;