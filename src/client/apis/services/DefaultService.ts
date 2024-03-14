/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DefaultService {
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static getApiMatchGetMatches(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/match/getMatches',
        });
    }
    /**
     * @param key
     * @returns any OK
     * @throws ApiError
     */
    public static getApiMatchGetTournament(
        key: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/match/getTournament/{Key}',
            path: {
                'Key': key,
            },
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static getApiMatchGetTournaments(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/match/getTournaments',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static getApiMatchGetTournamentsShort(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/match/getTournamentsShort',
        });
    }
    /**
     * @returns any OK
     * @throws ApiError
     */
    public static postApiMatchMatchSingle(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/match/matchSingle',
        });
    }
}
