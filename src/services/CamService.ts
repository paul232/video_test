import { BASE_API_URL } from '../helpers/ApiClient';

export const CamService = {

	getCamSrcByNum: (camNum: number) => {
		return `${BASE_API_URL}/streams/cam${camNum}.m3u8`;
	}

}