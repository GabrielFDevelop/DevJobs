import React from "react";
import Image from "next/image";
import imgCrossCloud from "../../../../../public/cloud-slash-svgrepo-com.svg";

interface ImgCrossCloudProps {
	width?: number;
}

const ImgCrossCloud: React.FC<ImgCrossCloudProps> = ({width}) => {
	return(
		<div>
			<Image src={imgCrossCloud} alt="imgCrossCloud" width={width} />
		</div>
	)
}

export default ImgCrossCloud;