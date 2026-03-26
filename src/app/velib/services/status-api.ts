export interface StatusApi {
  stationCode: string;
  id: number;
  num_bikes_available: number;
  numBikesAvailable: number;
  num_bikes_available_types: [
    { mechanical: number; },
    { ebike: number; }
  ];
  num_docks_available: number;
  numDocksAvailable: number;
  is_installed: number;
  is_returning: number;
  is_renting: number;
  last_reported: number;
}
