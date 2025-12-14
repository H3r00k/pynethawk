export interface Device {
  ip: string;
  mac: string;
  hostname: string;
}

export interface ScanResponse {
  devices: {
    ip: string;
    mac: string;
  }[];
}
