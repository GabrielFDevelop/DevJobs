import React from "react";
import Image from "next/image";
import imgQuestionIcon from "../../../../../public/question-svgrepo-com.svg";

interface ImgQuestionIconProps {
	width?: number;
}

const ImgQuestionIcon: React.FC<ImgQuestionIconProps> = ({width}) => {
	return(
		<div>
			<Image src={imgQuestionIcon} alt="imgQuestionIcon" width={width} />
		</div>
	)
}

export default ImgQuestionIcon;