import moment from "moment";

export default function getVideoDuration(seconds) {
	return moment().startOf("day").seconds(seconds).format("mm:ss")
}
