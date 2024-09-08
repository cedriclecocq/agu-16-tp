export interface Station {
  id: number;
  name: string;
  lat: number;
  lon: number;
  capacity: number;
  stationCode: string;
  numBikesAvailable: number;
  numMechanicalBikesAvailable: number;
  numEbikeBikesAvailable: number;
  numDocksAvailable: number;
  isInstalled: boolean;
  isReturning: boolean;
  isRenting: boolean;
  lastReported: number;
}
