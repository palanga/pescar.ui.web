import { useQuery } from "@apollo/react-hooks";
import { KVStringNode, Queries } from "../../schema";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getStroke } from "../../utils";
import React from "react";
import { gql } from "apollo-boost";

const query = gql`
    {
        locations
        landings(
            dateRange: { from: "2019-01", until: "2020-01" },
            locations: ["Bahía Blanca", "Puerto Madryn", "Ushuaia"],
        ) {
            byDate {
                key
                value {
                    byLocation {
                        key
                        value {
                            summary
                        }
                    }
                }
            }
        }
    }
`;

export function LandingsByLocation() {
  const {data} = useQuery<Queries, undefined>(query);

  const lines = data?.locations.map(location =>
    <Line
      dataKey={getValue(location)}
      key={location}
      name={location}
      stroke={getStroke(location)}
      type="monotone"
    />,
  );

  return (
    <ResponsiveContainer
      height={200}
      width={900}
    >
      <LineChart
        data={data?.landings.byDate || []}
        margin={{top: 5, right: 30, left: 30, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey={dataObject => dataObject.key}/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        {lines}
      </LineChart>
    </ResponsiveContainer>
  );
}

const getValue = (location: string) => (dataObject: KVStringNode) =>
  dataObject.value.byLocation.find(({key}) => key === location)?.value.summary || 0;

const result =
  {
    "data": {
      "locations": ["Bahía Blanca", "Puerto Madryn", "Ushuaia"],
      "landings": {
        "byDate": [
          {
            "key": "2019-01",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 221363,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 188516,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 115679,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-02",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 143505,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 196455,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-03",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 341668,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 167550,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 191223,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-04",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 225230,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 43880,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-05",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 413276,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 43237,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-06",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 5674,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 479829,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 101142,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-07",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 19753,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 81393,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-08",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 1497,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 41087,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 75914,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-09",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 53399,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 351264,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 14849,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-10",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 206346,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 121065,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 60408,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-11",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 69119,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 77833,
                  },
                },
              ],
            },
          },
          {
            "key": "2019-12",
            "value": {
              "byLocation": [
                {
                  "key": "Bahía Blanca",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Puerto Madryn",
                  "value": {
                    "summary": 0,
                  },
                },
                {
                  "key": "Ushuaia",
                  "value": {
                    "summary": 0,
                  },
                },
              ],
            },
          },
        ],
      },
    },
  };

export const mock =
  {
    request: {query: query},
    result: result,
  }
