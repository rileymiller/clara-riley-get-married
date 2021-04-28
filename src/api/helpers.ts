import { apiConfig } from './index';
import axios from 'axios';

export const RSVP_UPLOAD_URL = `${apiConfig.rsvpBaseURL}/${apiConfig.rsvpUploadEndpoint}`;

export const postRSVP = async (params: Record<string, unknown>) => axios.post(RSVP_UPLOAD_URL, params, {
  // headers: { "access-control-allow-origin": "*" },
  // headers: {
  //   "Access-Control-Allow-Headers": "*",
  //   "Access-Control-Allow-Origin": "*",
  // },
});
