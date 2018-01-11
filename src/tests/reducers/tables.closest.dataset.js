// example of data set usefull to test my reducer tables.closest
export const closestExample = {
  "links" : {
    "next" : "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-08&end_date=2017-09-13&detailed=false&api_key=DEMO_KEY",
    "prev" : "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-08-29&end_date=2017-09-03&detailed=false&api_key=DEMO_KEY",
    "self" : "https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-09-03&end_date=2017-09-08&detailed=false&api_key=DEMO_KEY"
  },
  "element_count" : 2,
  "near_earth_objects" : {
    "2017-09-07" : [ {
      "links" : {
        "self" : "https://api.nasa.gov/neo/rest/v1/neo/3780671?api_key=DEMO_KEY"
      },
      "neo_reference_id" : "3780671",
      "name" : "(2017 PN26)",
      "nasa_jpl_url" : "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3780671",
      "absolute_magnitude_h" : 22.501,
      "estimated_diameter" : {
        "kilometers" : {
          "estimated_diameter_min" : 0.0840146411,
          "estimated_diameter_max" : 0.1878624487
        },
        "meters" : {
          "estimated_diameter_min" : 84.0146411251,
          "estimated_diameter_max" : 187.862448661
        },
        "miles" : {
          "estimated_diameter_min" : 0.0522042616,
          "estimated_diameter_max" : 0.1167322776
        },
        "feet" : {
          "estimated_diameter_min" : 275.6385951889,
          "estimated_diameter_max" : 616.346636065
        }
      },
      "is_potentially_hazardous_asteroid" : false,
      "close_approach_data" : [ {
        "close_approach_date" : "2017-09-07",
        "epoch_date_close_approach" : 1504767600000,
        "relative_velocity" : {
          "kilometers_per_second" : "3.1956824403",
          "kilometers_per_hour" : "11504.4567850193",
          "miles_per_hour" : "7148.4220506694"
        },
        "miss_distance" : {
          "astronomical" : "0.2584808935",
          "lunar" : "100.5490722656",
          "kilometers" : "38668192",
          "miles" : "24027302"
        },
        "orbiting_body" : "Earth"
      } ]
    }, {
      "links" : {
        "self" : "https://api.nasa.gov/neo/rest/v1/neo/3781303?api_key=DEMO_KEY"
      },
      "neo_reference_id" : "3781303",
      "name" : "(2017 QA35)",
      "nasa_jpl_url" : "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3781303",
      "absolute_magnitude_h" : 23.365,
      "estimated_diameter" : {
        "kilometers" : {
          "estimated_diameter_min" : 0.0564358378,
          "estimated_diameter_max" : 0.1261943697
        },
        "meters" : {
          "estimated_diameter_min" : 56.4358378,
          "estimated_diameter_max" : 126.1943696879
        },
        "miles" : {
          "estimated_diameter_min" : 0.035067593,
          "estimated_diameter_max" : 0.0784135217
        },
        "feet" : {
          "estimated_diameter_min" : 185.1569540876,
          "estimated_diameter_max" : 414.0235358468
        }
      },
      "is_potentially_hazardous_asteroid" : false,
      "close_approach_data" : [ {
        "close_approach_date" : "2017-09-07",
        "epoch_date_close_approach" : 1504767600000,
        "relative_velocity" : {
          "kilometers_per_second" : "15.2878190079",
          "kilometers_per_hour" : "55036.1484285505",
          "miles_per_hour" : "34197.3223388402"
        },
        "miss_distance" : {
          "astronomical" : "0.116902961",
          "lunar" : "45.4752540588",
          "kilometers" : "17488434",
          "miles" : "10866809"
        },
        "orbiting_body" : "Earth"
      } ]
    } ]
  }
}
