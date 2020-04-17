export interface Landing {
  __typename: "Landing";
  date: string;
  location: string;
  specie: string;
  fleet: string;
  catchCount: number;
}

export type LandingsSummary = number

export interface KVStringNode {
  key: string;
  value: Node;
}

export interface Node {
  __typename: "Node";
  landings: Landing[];
  summary: LandingsSummary;
  byDate: KVStringNode[];
  byLocation: KVStringNode[];
  bySpecie: KVStringNode[];
  byFleet: KVStringNode[];
}

export interface Queries {
  landings: Node;
  locations: string[];
  species: string[];
  fleets: string[];
}
