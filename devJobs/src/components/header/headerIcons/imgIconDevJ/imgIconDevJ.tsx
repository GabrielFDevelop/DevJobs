import React from "react";
import Image from "next/image";
import imgDevJ from "../../../../../public/diagram-subtask-svgrepo-com.svg";

interface ImgDevJProps {
	width?: number;
}

const ImgDevJ: React.FC<ImgDevJProps> = ({width}) => {
	return(
		<div>
			<Image src={imgDevJ} alt="imgDevJ" width={width} />
		</div>
	)
}

export default ImgDevJ;