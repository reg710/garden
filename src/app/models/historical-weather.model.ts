

export class HistoricalWeather {
    locationName: string;
    data: IWeatherData[];
    constructor(input: IWeatherResponse, searchZip: string) {
        this.locationName = input.locations[searchZip].name ? input.locations[searchZip].name : '';
        if (input.locations[searchZip].values) {
            this.data = input.locations[searchZip].values.map((dailyInfo: IWeatherValues) => {
                return {
                    datetimeStr: dailyInfo.datetimeStr,
                    precipitation: dailyInfo.precip
                }
            })
        } else {
            this.data = [];
        }
        
    }
}

export interface IWeatherData {
    datetimeStr: string;
    precipitation: number
}


export interface IWeatherValues {
    "wdir": number,
    "temp": number,
    "maxt": number,
    "visibility": number,
    "wspd": number,
    "datetimeStr": string // "2022-08-27T00:00:00-04:00" format,
    "solarenergy": number,
    "heatindex": number,
    "cloudcover": number,
    "mint": number,
    "datetime": number //1661558400000,
    "precip": number,
    "solarradiation": number,
    "weathertype": string,
    "snowdepth": number | null,
    "sealevelpressure": number,
    "snow": number | null,
    "dew": number,
    "humidity": number,
    "precipcover": number,
    "wgust": number | null,
    "conditions": string,
    "windchill": number | null,
    "info": any
}

// Sample API response
export interface IWeatherResponse {
    columns: unknown,
    remainingCost: number,
    queryCost: number,
    messages: unknown,

    locations: any,
    // TODO see if location response keys are always location id
    // locations: {
    //     "Pittsburgh,PA,USA": {
    //         "stationContributions": null,
    //         "values": IWeatherValues[],
    //         "id": string, // "Pittsburgh,PA,USA",
    //         "address": string // "Pittsburgh, PA, United States",
    //         "name": string // "Pittsburgh, PA, United States",
    //         "index": number,
    //         "latitude": number // 40.4385,
    //         "longitude": number // -79.9973,
    //         "distance": number,
    //         "time": number,
    //         "tz": string // "America/New_York",
    //         "currentConditions": null,
    //         "alerts": null
    //     }
    // }
}