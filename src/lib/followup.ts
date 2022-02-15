import axios, { AxiosInstance } from 'axios';

import { ChannelTypeEnum } from './enums';

export interface IFollowupConfig {
  API_URL: string;
}

export interface IEventPayload {
  $user_id: string;
  $first_name?: string;
  $last_name?: string;
  $email?: string;
  $channels?: ChannelTypeEnum[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export class Followup {
  private http: AxiosInstance;

  constructor(
    private API_KEY: string,
    private options: IFollowupConfig = { API_URL: 'https://api.followup.so/v1' }
  ) {
    if (!API_KEY) {
      throw new Error('API_KEY must be provided during initialization');
    }

    this.http = axios.create({
      baseURL: this.options.API_URL,
      headers: {
        Authorization: `ApiKey ${this.API_KEY}`,
      },
    });
  }

  async trigger(eventName: string, payload: IEventPayload) {
    if (!eventName) {
      throw new Error('eventName must be specified');
    }

    return await this.http.post(`/events/trigger`, {
      name: eventName,
      payload: {
        ...payload,
      },
    });
  }
}
