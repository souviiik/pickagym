import axios from 'axios';
export const SEARCH_GYM = 'search_gym';

export function searchGym(value, callback) {
    /*
    const {zipcode} = value;
    const API_KEY = 'AIzaSyBVGJ-SsExoPPm0MzsyW0wHgn09EJftGCE';
    const ROOT_URL_1 = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
    const ROOT_URL_2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?';

    const PLACE_DETAILS = axios.get(`${ROOT_URL_1}${zipcode}&key=${API_KEY}`)
    .then(() => {
        const { lat, lng } = PLACE_DETAILS.results[0].geometry.location;
        // const { lng } = PLACE_DETAILS.results[0].geometry.location;
        const ONE_MILE = 1609.34;

        const request = axios.get(axios.get(`${ROOT_URL_2}location=${lat},${lng}&type=gym&radius=${ONE_MILE*5}&key=${API_KEY}`));         
    });
    */

   callback();

    return {
        type: SEARCH_GYM,
        payload: {
            "html_attributions" : [],
            "next_page_token" : "CqQCFAEAAFWjhuAd9NacdTrvfBBPBZfeo72wN_Qz8lBmoANh_ZmevqVLvrXsjP0-kUS9ZGJUiMPyEXHk-4SEKLUybzVDJL8KoOwPpr9HWp4UFUQUi6IlsdBIBKTqGfJKzcF2orE3Wxz5VL75IiS_350f3A5Y9z8mzAuaoERHYpqacJWWDBpeM1atwpCbXmml0OzMBzc2W6_uZfZdzmITXkzzoresbsU4HiwfHr8TffXOK24vvK8twpWug--WcIj0BxuXyQvrgFpSnvehLT97XZ23tca-0BMHxGC1tYcs0mrJdwJlRWodhRXjlRJhOXRhaFydl3r544wdLwBbXIOFrHMi1TFt0HX5LE28l37-Fk1ZWbT5AkLRdS7cDplYhibj2JYIpWojExIQsmn9sZd7Ld-O8oI-BREXQBoUC5Q1S2wly20kcP2xF9boj53nTaA",
            "results" : [
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.753882,
                        "lng" : -93.59929
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7552309802915,
                           "lng" : -93.59794101970849
                        },
                        "southwest" : {
                           "lat" : 41.7525330197085,
                           "lng" : -93.60063898029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "95b74454b9453090095cedb0693a2867de27cbba",
                  "name" : "Anytime Fitness",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 4032,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/103981943946473630482/photos\"\u003eHaden Despain\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAWPBbwA4fA6akaqDdcupC5UUEXci27AqWSGoTfp2bth5X0BI2yABmWiBvg8Ti0jdvx5R3LV6eAsX9rEa5-V7zQy0G5Zgvlb_PBBQTf2M-hU4bfLPwGw52GNO6JdjuYtrPEhA7W2dx0VFYNITTrrLOBu9EGhTCkrfhf_1cpD4hIH4d1aVktJz8xw",
                        "width" : 3024
                     }
                  ],
                  "place_id" : "ChIJNZTlK5iF7ocR42_62wMyJHA",
                  "rating" : 4.5,
                  "reference" : "CmRRAAAAzzSkiiZdv0my1Fm5EnCpM7eb2Rxzsl_adqjRuHxEr99uwWTZ1-wzlmHwN1_R4lp8UPNax7HgXtG9v60vVgR0oZ1jG5xjV84OF3K5_18VWMBnJ_zkPF9mygQ_NHA_z0EwEhBPjXfXVAUnEn3fmh5WBeE5GhT8vd31Ig3T_NYbyIg48MR-ELPNIg",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2785 N Ankeny Blvd, Ste 15 - Briarwood Ctr, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7046521,
                        "lng" : -93.626847
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.70607673029149,
                           "lng" : -93.6255985197085
                        },
                        "southwest" : {
                           "lat" : 41.70337876970849,
                           "lng" : -93.62829648029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "802b68754df70bba1a764508ea307b81405be25d",
                  "name" : "Anytime Fitness",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 289,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/114490492887531291695/photos\"\u003eAnytime Fitness\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAS7oDU3GZxAzWm9kMx3g3CUpqh0grWYZm3u06guZgNtB_41FW-qYxkK3WIzx8pFKVTNkznJ8vUnVRwJY4IVGspnFvGAVZ98T2ZHWWpLmAvJdEKKO-0LJRDUVVEK-bov7KEhDhzNr2p8mXy9DoKSqVWFdIGhQDiGHLf5iFHa4yF_tGMGkHW-xL5g",
                        "width" : 512
                     }
                  ],
                  "place_id" : "ChIJIa4bodSE7ocR9Ey2WonjqfY",
                  "rating" : 3.5,
                  "reference" : "CmRSAAAAjSfkjxnVhBSjkANT5Ryl93MA_7jeLXMkQg3ecrMN9aSupoixTPwzSnbV0gsiYee1_m-xNda2-VG3vyb0eyQ6nppJMJMBlIpXGUbhsBYivdanCjr9iz3GF_kKC9y7FK8sEhC1IIcF7z5DMh_AV7_BXY3lGhTtoH72ieiP0bmz4wHRiGOgMwpYQQ",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2505 Southwest White Birch Drive, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.73214050000001,
                        "lng" : -93.6300916
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7333275802915,
                           "lng" : -93.62874136970851
                        },
                        "southwest" : {
                           "lat" : 41.7306296197085,
                           "lng" : -93.63143933029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
                  "id" : "39bc062783a2510347b32b857c9e0b9af48d4833",
                  "name" : "balance yoga lounge",
                  "photos" : [
                     {
                        "height" : 2322,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/100026582917555252047/photos\"\u003ebalance yoga lounge\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAI1wB89Ni2fmDvxvhpGDjfKgvJDVWBb__U-NohJwSGopKu43gcdJ-8bVeX8rYLlfBlYeBUSW04PTMtov30kAuYjHpvybR7aLr3O_xrEgdVZT4QcjUIySnmuXcQRZyaKy-EhDyn4fuM-ojXkqV_lvHCTdwGhReMvRPHeHvGQREOrq8s-xQj9vqxw",
                        "width" : 4128
                     }
                  ],
                  "place_id" : "ChIJcfKOIuWE7ocR6KWjo8VR8DQ",
                  "rating" : 5,
                  "reference" : "CmRRAAAAvhtSgFjgwQP3W2GIKX1nPzmSKlGEoWDjDy8kuNQZ4PcWByCUnktBW36vHWLyX-DkVj11JQQKaTGxR8rTK1AjhytJQq938vY677q_ecKSBJuhMu85a9r1ftcM5Ox72WlnEhBOxLBkSi2GOW6V5CBmmfYbGhRM_W47xzc-BfBf-SRoi2txfde4dw",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2202 West 1st Street, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7022098,
                        "lng" : -93.6363571
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.70404843029149,
                           "lng" : -93.63502581970849
                        },
                        "southwest" : {
                           "lat" : 41.70135046970849,
                           "lng" : -93.63772378029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "d8ccedb69b7197af840478443f4e3d05c269ae7d",
                  "name" : "Farrell's eXtreme Bodyshaping - Ankeny South",
                  "opening_hours" : {
                     "open_now" : false,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 1536,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/103297908149423142790/photos\"\u003eFarrell&#39;s eXtreme Bodyshaping - Ankeny South\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAdfSd5DloCLFtzRoRwRpRQue5EPXMJcjclBrX__n4d-A1SPY9g_G4_EtFkcyVxpaPomBTR3g9NP3U0JD4u6zCUdGqOZWLdHXDqY5klvuT-9bjOqIoC-iPtJygAmL3tvP0EhCwqGMKcpkg7FjnFwxJ8RZtGhRMHJX0msAoI-jF-c-yM0BGV_r7Ag",
                        "width" : 2048
                     }
                  ],
                  "place_id" : "ChIJoeZZWzOb7ocROlMQpChLFsI",
                  "rating" : 5,
                  "reference" : "CmRSAAAABQ8HY14NPwNZnT7lKQ_cNO2XCpCZ9XfBK_3mWS4EbMMRL79c5K_95OizdKxArLkUk39haBV0hQeb4e0ggX0yruB59dMdpXDbSOHAPmTLOJPulK3T46aHr_FvEy5ELp9yEhDIKoj2xbZq0irhAfF8Hv46GhSKXVv-Dsdp199pHlnCmMOZmt7-lA",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2803 Southwest Oralabor Road, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7457451,
                        "lng" : -93.598466
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.74739623029151,
                           "lng" : -93.59711506970849
                        },
                        "southwest" : {
                           "lat" : 41.74469826970851,
                           "lng" : -93.5998130302915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "386eda39c2e7637645a924feeab36edd84e03d87",
                  "name" : "Farrell's eXtreme Bodyshaping",
                  "opening_hours" : {
                     "open_now" : false,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 1536,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/113656513541718575628/photos\"\u003eFarrell&#39;s eXtreme Bodyshaping\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAMRSlvN2cU6DPWdaxtJiAUBKpxE7FqiGBnZ4mq2Oj2KdMUshQQ8tA5CY2cXiLa5BG3OdwhWXi8W8C_RM_ZNah01KiunLYv_XSlWm8vIWMHT7yAHiIZCmV2AiVlyz4WUW_EhBMg5mU2LWM5kvsmhdA78lBGhQ7N_ViRo8c5b_k1xDSBoVs9TUUAw",
                        "width" : 2048
                     }
                  ],
                  "place_id" : "ChIJubclT56F7ocRi1wwddMK98w",
                  "rating" : 4.9,
                  "reference" : "CmRSAAAAjArv_9CrwbKeUnBnOyRQ-KCIZvhuEIhBbnWy5CI0Orj5XTkMM8DtdLJ-uiEu-Goht73Y60rCtCXCGd2eVe8WU-vBqN00GEfKL9nglgBJC2jHy61Kgbi6rD5ljNSC6oIuEhCCIOaPhJDVJDGn4Ke9p8fTGhQ9QbbfNVuV-2CsrZvBxRJ-Z9C53w",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "121 Northeast 18th Street, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.712756,
                        "lng" : -93.622855
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7142263802915,
                           "lng" : -93.62146386970849
                        },
                        "southwest" : {
                           "lat" : 41.7115284197085,
                           "lng" : -93.6241618302915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
                  "id" : "d5e673e2cb6131ba6dfb62ffa06d4c6b13825626",
                  "name" : "Grace Ballet Studio",
                  "place_id" : "ChIJgVx67NeE7ocR2aiJwEODE5k",
                  "reference" : "CmRSAAAAYD-u3Ra9ib7JQ3laNKd4bf4Z7Bw_GW3w7DsDDhgyA-KHlZGza6XAMdoyM-MNDohIe1TLqIHL13LLUYNBEkpXT5yXNKe5vfHcrNNFA6EmAv-KaVQBc7RoGkNnxZ3Wm6IlEhCRK478AcRQ8JK6MyvwgOGVGhTDVSs_-kTNWvU0XGjTcQDF4vezAw",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "1615 Southwest Vintage Parkway, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7130789,
                        "lng" : -93.61916629999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7144730302915,
                           "lng" : -93.61805181970848
                        },
                        "southwest" : {
                           "lat" : 41.7117750697085,
                           "lng" : -93.6207497802915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "f69057f43be9c3ca26d9a677fa2a24e435a32d0f",
                  "name" : "Ankeny Fitness World",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "place_id" : "ChIJmyNhXyiF7ocRTso9Wn-zqKw",
                  "rating" : 4.8,
                  "reference" : "CmRSAAAAJPv6AMAzESUTQb0AJdTsN10XJXNSROjRakMyS23lwAmrw9A6QwJwd7DsUY12hqn53VW8TmALXOJ95afxtHg4LkLC36B-pPIjxyOf1j8ICGVneoU9Bh5op5rebgG9DlOrEhBA_IgWYf2Z6wQeNMmYn_bnGhR-0hZexpwwMehv9bn8KaFm8RUeIg",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "sw 50023, 1603 Southwest Vintage Parkway, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7474382,
                        "lng" : -93.60196599999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.74877413029149,
                           "lng" : -93.59961355000002
                        },
                        "southwest" : {
                           "lat" : 41.7460761697085,
                           "lng" : -93.60275014999999
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "3efba25a319be4d9042260059ca6c7e5346808de",
                  "name" : "Aspen Athletic Clubs Ankeny",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 1152,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/106347519586840964666/photos\"\u003eThomas Schroeder\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAzH-dQfx0d9blw1lRVOfymavmkebXC_S1Arg7uj7kU40LDVN43c3FNJ6bjfg-qHiY8JXXu8BT6vEcTPB0gwtl7BCDjYWpEbyDweh1CQXgAsIfhQOExUzTKqu4IRS9-i6nEhClhU81U4eOQJ3VPRcsJkNaGhR9tD6Iyya8wQ9LtFNFpmgI_Lygrg",
                        "width" : 2048
                     }
                  ],
                  "place_id" : "ChIJYYqu26GF7ocRk2H01rEer0g",
                  "rating" : 4.2,
                  "reference" : "CmRRAAAAt-qbDZ1HcrTPVHewhNZmkmYdihMZpMyHOlTwaMgvvd8g0VPhe6jUe-fsEKRx6QMtEgB4T_9Y2tD0CJXO_cp5-enKxsPG2ZCAcr3nAPNOdt2tw4rX_OCfVMYEn65Uop0PEhDm6hVjm0jeE0cndoIcqaYhGhTPRvV3TcDlLDBU6YAHZh7Q1753NQ",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "1802 North Ankeny Boulevard #102, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7048921,
                        "lng" : -93.62685089999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7061326302915,
                           "lng" : -93.62560351970848
                        },
                        "southwest" : {
                           "lat" : 41.7034346697085,
                           "lng" : -93.6283014802915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
                  "id" : "1089fec7b9a146af0965b441c28110eb86d851b1",
                  "name" : "Kris' Hot Yoga",
                  "photos" : [
                     {
                        "height" : 372,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/103535857106654562458/photos\"\u003eKris&#39; Hot Yoga\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAwpAzRkiV9eVqGPrum9UXebB-fUhsMnCdPOmU2Gjgh0KxhN1JD_2v8r8c4HBerSnqwq5Q8mGh2-AQBXnCruOBFcf0V7pWNA9-PzqN_-rk1TQdakPPyraZaiVac0BK86gtEhD9Hl0mWmStywV96PPww36EGhRH6ESLS__hcdzbIgoMjbFXT5tQIQ",
                        "width" : 933
                     }
                  ],
                  "place_id" : "ChIJyV6xo9SE7ocRkW19jtO3SLI",
                  "rating" : 4.5,
                  "reference" : "CmRSAAAASR4tlBL5e8M2iW-KObIVwd67bdA-Fmic1RrIWlYVA07dcLgtJkLyzNeoXBp5LhFXzbfPr6MqDP1eLEiWgSVjTua0bl0iAIjSMV4Y6TmZIkXvf0ct82lH3YVsxWFZf5TAEhDaPDret8t7cCo_yCfpH0aqGhQ5I7LLqr7ztbZyczLf9reYXBWgHQ",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2505 Southwest White Birch Drive, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7474373,
                        "lng" : -93.5984381
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7488011302915,
                           "lng" : -93.5975476
                        },
                        "southwest" : {
                           "lat" : 41.7461031697085,
                           "lng" : -93.60110959999999
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "c1be73847d36f26062c2750fff782ff992162680",
                  "name" : "North Ankeny CrossFit/Acceleration Iowa",
                  "opening_hours" : {
                     "open_now" : false,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 960,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/109417807978219886637/photos\"\u003eNorth Ankeny CrossFit/Acceleration Iowa\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAjWPGPvkndFcS4d1-u0kwpYXttZbzN5qR8fS6iT70iZ3KydRSAhDZbt82IC-8GBL_XRVQycpT07ojOjY_Q-frsWjDpEtAgRfk92wwbbJwtCzXQgu8FpPunMu2koaBC23DEhA9RErEvi8e2ViAogNesKQWGhSDcQTfouN3PDnBajYvnFXDj5ZR_A",
                        "width" : 960
                     }
                  ],
                  "place_id" : "ChIJM3Y_5Z6F7ocRkqG0vrZEVqs",
                  "rating" : 5,
                  "reference" : "CmRSAAAAN5-DlWIMbOc3i3-P6B-Qd3TiHh5C121Ja8Tl4mU4Tn74R3iCeqwcWa5PvA5WuBGJF0Y7pU3ZWMvYAoIPoWgQAj_88hz76Zyd1IFJuoXzY3-bKwqY4OXJ6wvnI9OfvLvlEhCgGgEfN5HN_9yyoUYeIFkMGhSUlSH-et4BVnBxvFFmn-6WMLPG-Q",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "1975 North Ankeny Boulevard #110, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.707336,
                        "lng" : -93.61186269999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7086849802915,
                           "lng" : -93.61051371970848
                        },
                        "southwest" : {
                           "lat" : 41.7059870197085,
                           "lng" : -93.61321168029149
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "849a9ae837b6bad4d61af510d796e66780400c0d",
                  "name" : "Trail Point Aquatics & Wellness",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 3024,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/100254604429092033528/photos\"\u003eDan Hills\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAA0HQ0YLK8Ran0YhMzPkr5K32XNinoXOjyZDbrgiOJtQpvLYxDj76I8HJgN62EU330H8QdrhG25XpQ6aQ2kjcgh_26g0qVjiNEZFBhjZsCTdDwXKbcWqdGq4XHsDWMAY_EEhDbrrg9-5rhqXGg5LjFHE-uGhSfHcxsC6fWlTUDinjtawEc_duiVQ",
                        "width" : 4032
                     }
                  ],
                  "place_id" : "ChIJHz8ciS2F7ocRCcrGyPnkSTc",
                  "rating" : 4.9,
                  "reference" : "CmRRAAAADeKD1uzU0biFByZ8X-vFpX6VjZnwNRSK6dVT1ru-TRGWoTxKRQdBoRmCE5H7aSu0ppp3pJAAqmpL6jWR-A23ztbUf5Jm-yfuDYvTrPvWBQZIhR20Nr5nEopTncAg2DnzEhBDO9ZiF72R2_H2JHv-CkU9GhQU5Nm-HDnib7GpgnDYs-39v9lCUA",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2006 South Ankeny Boulevard, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7033073,
                        "lng" : -93.6389683
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7046189802915,
                           "lng" : -93.6376168197085
                        },
                        "southwest" : {
                           "lat" : 41.7019210197085,
                           "lng" : -93.6403147802915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
                  "id" : "48c06016682e8874bb749907146b79ca51784823",
                  "name" : "New U Yoga",
                  "opening_hours" : {
                     "open_now" : false,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 933,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/112016198231676969497/photos\"\u003eNew U Yoga\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAM6xGoDH0koE52CIQsvWRAr6LoJI-8jaqh04DugPKM-u5W-CB71-tXVHS6vy8fveL7zx2K4go-ungYye4UIXE9nnfCL3Di2rwyzhb7467Z1CfFmPTWErzfIto0ybYB2olEhB80w_g3E4virh2TCarfKehGhT3PO5Th_PKH8wIQOwFEpxizcVXbA",
                        "width" : 1242
                     }
                  ],
                  "place_id" : "ChIJZQwTLcuE7ocRs2JiIwtVA6Q",
                  "rating" : 5,
                  "reference" : "CmRSAAAArIiN7VaCBx3Y2GUAv8bWadC4CXTuFQ1kyAJJ5L4AhRbin95eb1LwzNm79CvxSvBVLJj0UZ3m6gaXMu1c53INEA8wnf2zizp1WHIP1i6EHa45-DoAPpSMxn6JHj94_s5bEhAy-EDp_ORpEg3yT0vUFmbkGhTX8i9Wo4mzYo23T7ndMrzQ0fESWA",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "3020 Southwest Oralabor Road Suite 112, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.75388599999999,
                        "lng" : -93.59943009999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7552373802915,
                           "lng" : -93.59846006970849
                        },
                        "southwest" : {
                           "lat" : 41.7525394197085,
                           "lng" : -93.6011580302915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
                  "id" : "4a7d06bec554a129ea968d4bcd1a7d3ce67ff752",
                  "name" : "The Athletic Training Room",
                  "place_id" : "ChIJg9jQKJiF7ocRZGFL2BcNmPc",
                  "reference" : "CmRSAAAAHzLc9CIqApFPzKosIZOOC1gvJYl103gOcHEYk_qA8qKank0B1xAj_B3yfmXXtSzdHwS-FsJtt7H5CmqsSFicE2hj8g-5kxVrJ-FLbjQ5YPe47-9JvPYrzbAFAq4RKwHJEhB9h43VR0MMBs5HU77EZf7dGhQ65CcHlWNrkBlVWUeMeTth_Dfw7Q",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "2785 North Ankeny Boulevard, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7094252,
                        "lng" : -93.5990709
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7105303302915,
                           "lng" : -93.59772006970849
                        },
                        "southwest" : {
                           "lat" : 41.7078323697085,
                           "lng" : -93.60041803029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "c51b4882313423355f24d87af76f0c003d32af68",
                  "name" : "Elite Edge Transformation Center - Ankeny",
                  "opening_hours" : {
                     "open_now" : false,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 3024,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/104554054562308079812/photos\"\u003eScott Kath\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAOi2zcwN2efXuWrj2OZ1QS5ooxoKUPD1RBRbm_HpRjvk5-u74hNbNw8zIFvkI2XDQzg4Av_2ZQmciBFfQngqIMPQxFlJKaZiuIgZPeGdFNlzzrjo_IIqHGFs8hGrdJWtSEhBJ_E13BXVqKWiNjMRqg7T_GhR0pcTSm8cWxIYU8WeNTefYZn_t6g",
                        "width" : 4032
                     }
                  ],
                  "place_id" : "ChIJwXEtgEmF7ocRcmz2iFOD0g8",
                  "rating" : 4.9,
                  "reference" : "CmRRAAAA0ZTtPmhw98XoJWVu31E9z4bvDy7OL6l4FkZX-8Fj126TNbzQhKZD6KVBNgJMqvAnL5hZVqLrvq3OwB_DO7a0LYVy0qpuhUF0jpo_DckYF12nMhR77q6huSnid7teSROcEhDPuakG_fXdNmCiI8wllzqTGhQef1mqUX4jUdfUfaXI40NmXKyNEw",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "116 Southeast Lorenz Drive, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7313868,
                        "lng" : -93.58533949999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7329853802915,
                           "lng" : -93.58408481970848
                        },
                        "southwest" : {
                           "lat" : 41.7302874197085,
                           "lng" : -93.58678278029149
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "54c3b2422f71160a3846f73d15a80642ec048cf9",
                  "name" : "Orangetheory Fitness",
                  "photos" : [
                     {
                        "height" : 477,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/103358626835295097732/photos\"\u003eOrangetheory Fitness\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAY1KJUToCrs2DWeF6Q9pWT21mEC88i8dIXa1kJJBvgCACink2Yqo4ofhvQG6Ph-KRd_wiuM4TcQb07n0S23oFTeFR3b-7AJXNSlzyXmLMN9MhW0XfcY71QQ-5uoz6zkMHEhDzhx0t5kjJ2PsmaJaRcvEJGhRogRUymMABQMhnAyLT7ZTLWxnQ3w",
                        "width" : 716
                     }
                  ],
                  "place_id" : "ChIJ69VfkWOF7ocR07wgMJTllwQ",
                  "rating" : 5,
                  "reference" : "CmRRAAAAy8B7-09SUQllHNAMDaFLzSoGwRRmFWMkv60Et91tBlDCfTeU2r8f_17gRkDvqK6zqRTTZIR6AItnXymXSAU5AlJYtdk3w4po3iRoTUj1S95gWJJHK6A6-9H-pUtAq1NPEhBu-kUof36b9utbK9dL1fqUGhRT5A9iuirQx74A8jr3wikgnroNQg",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "833 East 1st Street #104, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.70019,
                        "lng" : -93.611003
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7015389802915,
                           "lng" : -93.6096540197085
                        },
                        "southwest" : {
                           "lat" : 41.6988410197085,
                           "lng" : -93.61235198029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "28e399c0f69d189a997a47a1df1bfbefe948bbea",
                  "name" : "Sks.Fitness",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 608,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/106992896102034511649/photos\"\u003eSks.Fitness\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAOCMoMmw12I_oR9Cm5Epbw820qqRzNFjMBxvmUH4W2mF6DtX0aw-lQf8qh_yokrETqGL0f7DJmDVhC0pNEXLzMtWX7rXCJmYY2_bcC5oOYUIPsjnAptLHohYNyALR_0SxEhBiwFbWxNUhyhvLSD6iKMS_GhRby1igNp89a2RdU8fHpqVKPRZqrw",
                        "width" : 1080
                     }
                  ],
                  "place_id" : "ChIJjaSB7c2a7ocRtSslNoN9V7U",
                  "reference" : "CmRSAAAAXvYB6J2Oqx5xgPLl4WCL-212QuI14zbgw8SfBYFwE7vsg_BJUsc97YyZuc6PCjAAwN-BRVwQ133Q-_ejzgrM76bmQHpmuNNU8wB4OGEKJj_Brul8LlbYM21rYo3x4h_IEhDuMnqqp2Y6lzFUBSnXonarGhQGIPX694fdOuhxaRg8unpPBYiZsg",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "713 Southwest 28th Street Apt 208, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.70233959999999,
                        "lng" : -93.59716259999999
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7039420802915,
                           "lng" : -93.5958198197085
                        },
                        "southwest" : {
                           "lat" : 41.7012441197085,
                           "lng" : -93.5985177802915
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "a751d8ab38b14cc48efdb103a3403df0b4093a8e",
                  "name" : "Kosama",
                  "place_id" : "ChIJNbl2HPiP7ocRdB7nX9ISjy8",
                  "reference" : "CmRRAAAA9lHyBbjbugI4I1nm0qF3l0k6Uwa2ZCQJ_WPjn4xt_6iCU6b2L6jDMS2mBM-rN8w65hjgRQd6CLcjHGLAtdg55ENHZ5GzNPxsQNU-5BByYzKv5uD4BpO90CLOf5skS5MyEhBv3dyLYMHmuemtqSxF61KAGhS281uN3ImKqE6NW5bH_2iOCM5l9Q",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "225 Southeast Oralabor Road #5, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.722858,
                        "lng" : -93.575509
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7242069802915,
                           "lng" : -93.57416001970849
                        },
                        "southwest" : {
                           "lat" : 41.7215090197085,
                           "lng" : -93.57685798029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "bd7455b4a1c995dafabe575bec518ce3b7bce042",
                  "name" : "Iowa Sports Academy",
                  "opening_hours" : {
                     "open_now" : true,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 687,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/117733533580425695906/photos\"\u003eIowa Sports Academy\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAAaeaTbe00qdgwpBz1UyangpRCoMRwyH4SAbplRBr_nKid9zJJ-V0xf_cY5C05cS69Xu5GcR05RnFFlNotjznWOAYMl4F-068s80FTfmiiuo8KgNd73YZhRCEk4gHa1tx2EhCz8AIDYfAFhagFVxtc8RuHGhSc1LPWBmGJ0s7C3UW64AeYHhuAhQ",
                        "width" : 1024
                     }
                  ],
                  "place_id" : "ChIJU8JGd_OP7ocRsHIwsFt1SAo",
                  "reference" : "CmRRAAAA5PyoXn9YsyCgFJ2CdkYYRiLZoRYdM753FJKLNlSOt48bYLRrIvf9YTRPnNXWkAicbwP4QhqZ9JgL0pqd88xbHQ8YYF4crEa7m_fgq4D9QG5_OY-3J9XbzMO0Au_HqnMsEhCOCDbO7Kq94uuEGaqr3eb9GhRueZrSTbAk3Xcn-nXFqQLLeJGcmg",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "770 Southeast Creekview Drive, BOX 907, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.730566,
                        "lng" : -93.627838
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.73151043029149,
                           "lng" : -93.62649086970849
                        },
                        "southwest" : {
                           "lat" : 41.7288124697085,
                           "lng" : -93.62918883029151
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "2b10d94ef23a7fc894c5b757a5356a956f5eab93",
                  "name" : "Muscle Bound USA Gym",
                  "opening_hours" : {
                     "open_now" : false,
                     "weekday_text" : []
                  },
                  "photos" : [
                     {
                        "height" : 2047,
                        "html_attributions" : [
                           "\u003ca href=\"https://maps.google.com/maps/contrib/102594325857481049023/photos\"\u003eMuscle Bound USA Gym\u003c/a\u003e"
                        ],
                        "photo_reference" : "CmRaAAAATYXCl6XRNnYor2WMk6hY-G2uMQdX6AhvNTbZaVDqZUwXPRPzlXrT72I97G3kyU2YHeQbl0t44eRyaWhokeIDbVnSK1OhlblwqgxJ_Cz7OGEXU7LIJzfA_QCVy134UVJWEhAoZxgGQzGGXSDoCOSl70SyGhTIfuVZ8ZtnUWMFZ2WNYDXl14fyhg",
                        "width" : 2048
                     }
                  ],
                  "place_id" : "ChIJwY2leuSE7ocRBe-jol2Ktoc",
                  "rating" : 5,
                  "reference" : "CmRSAAAAcTEEYZlXwXbcR5S5fZWJgchO41Vw4-iuOiaxElQ6Yg-Lg3edW6KVgh9Xc1KONKU_jeDjPnzx42EayoNSkwjiD6mZAN77iCn1tD9MolG0bJPTxwY64LEDYPCiqM0oy7KGEhDh9ZICnUYNlCsmPdkxQWADGhQimZeSHMxsgCe9YTrW-2GIldpeVA",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "1932 Southwest 3rd Street #7, Ankeny"
               },
               {
                  "geometry" : {
                     "location" : {
                        "lat" : 41.7435909,
                        "lng" : -93.6101858
                     },
                     "viewport" : {
                        "northeast" : {
                           "lat" : 41.7449398802915,
                           "lng" : -93.60883681970849
                        },
                        "southwest" : {
                           "lat" : 41.7422419197085,
                           "lng" : -93.61153478029149
                        }
                     }
                  },
                  "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
                  "id" : "94930cbf5a12610c84010717240946557ec4646c",
                  "name" : "softball parking",
                  "place_id" : "ChIJHTN9IQiF7ocRx9yApWxdaDI",
                  "reference" : "CmRRAAAAk4MBScVDAw6ITpLdJgmUgHFT_LXEnega1z_-rGh8Ubdm3boSfzoJE-Z-LApjr6M54th7y97JkU3m7kKNO6B0g-7eptrEflEaICtbAi-Q5AsPGeyfXdBKttGFqeIn16aMEhDFaK_i_zjulVpp12gw_kM2GhTFoUGp8FFeh6qI0blj4Btl3VvjKw",
                  "scope" : "GOOGLE",
                  "types" : [ "gym", "health", "point_of_interest", "establishment" ],
                  "vicinity" : "1500-1544 Northwest Ash Drive, Ankeny"
               }
            ],
            "status" : "OK"
         }
    };
    
    /* FIRST REQUEST
    https://maps.googleapis.com/maps/api/place/textsearch/json?query=
    50023
    &key=AIzaSyBVGJ-SsExoPPm0MzsyW0wHgn09EJftGCE
    */

    /* SECOND REQUEST
    https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.7332684,-93.63191309999999&radius=500&type=gym&key=AIzaSyBVGJ-SsExoPPm0MzsyW0wHgn09EJftGCE
    */
}