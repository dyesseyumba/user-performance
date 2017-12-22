export interface User {
  user: {
    id: string,
    name: string
  };
  perdormanceA: Performance[];
  perdormanceB: Performance[];
}

export interface Performance {
  id: string;
  name: string;
}
