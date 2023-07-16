import { ENV, authFetch, authFetcher } from "@/utils";

export class User {
	async getMe(token) {
		try {
			const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER_ME}`;
			// const params = {
			// 	headers: {
			// 		Authorization: `Bearer ${token}`,
			// 	},
			// };
			// const response = await fetch(url, params);
			const response = await authFetch(url);
			const result = await response.json();
			if (response.status !== 200) throw result;
			return result;
		} catch (error) {
			throw error;
		}
	}
}
