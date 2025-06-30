import React from "react";
import Image from "next/image";
import imgArrowRight from "../../../../../public/arrow-sm-right-svgrepo-com.svg";

interface ImgArrowRightProps {
	width?: number;
}

const ImgArrowRight: React.FC<ImgArrowRightProps> = ({width}) => {
	return(
		<div>
			<Image src={imgArrowRight} alt="imgArrowRight" width={width} />
		</div>
	)
}

export default ImgArrowRight;