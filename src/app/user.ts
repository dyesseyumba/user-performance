export interface User {
  user: {
    id: string,
    name: string
  };
  performancesA: string[];
  performancesB: string[];
}

export interface P {
  id: string;
  name: string;
}

export interface Performance {
  performancesA: P[];
  performancesB: P[];
}
