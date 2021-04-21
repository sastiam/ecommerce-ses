import React from "react";

//Icons
import { BsBarChartFill } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import { RiVolumeUpLine } from "react-icons/ri";
import useCourseDetailRedux from "redux/CourseDetail/useCourseDetailRedux";

//Components
import ItemListInformation from "./ItemListInformation";

const ListInformation = () => {
	const { course : { totalStudents , data : { information , level } , modules } } = useCourseDetailRedux();
	const { audio } = JSON.parse(information);

	const getTotalClases = () => {
		let total = 0;
		for(let module of modules) {
			total += module.classes.length;
		}

		if(total === 1) return total + " clase";

		return total + " clases";
	}

	return <ul>
		<ItemListInformation title="Nivel" icon={<BsBarChartFill />} data={level} />
		<ItemListInformation title="Cantidad de clases" icon={<IoMdTime />} data={getTotalClases()} />
		<ItemListInformation title="Estudiantes" icon={<MdPerson />} data={totalStudents} />
		<ItemListInformation title="Audio" icon={<RiVolumeUpLine />} data={audio} />
	</ul>
}

export default ListInformation;