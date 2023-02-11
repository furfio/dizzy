const ApiRootPath = process.env.NODE_ENV === 'development' ? 'https://localhost:7000/' : 'https://dizzybackend.azurewebsites.net/'

export const Apis = {
    WeatherForecast: ApiRootPath + 'WeatherForecast'
}