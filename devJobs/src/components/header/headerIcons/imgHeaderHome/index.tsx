import React from "react";
import Image from "next/image";
import imgHeaderHome from "../../../../../public/house-chimney-blank-svgrepo-com.svg";

interface ImgHeaderHomeProps {
	width: number;
}

const ImgHeaderHome: React.FC<ImgHeaderHomeProps> = ({width}) => {
	return(
		<div>
			<Image src={imgHeaderHome} alt="imgHeaderHome" width={width} />
		</div>
	)
}

export default ImgHeaderHome;