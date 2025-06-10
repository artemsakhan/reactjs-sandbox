const serverData = {
    MatchCandidates: [
        {
            "labels": [
                "LABEL_LIKES_ME"
            ],
            "profile": {
                "hid": "lpB4W0j7lPkqZeM0",
                "name": "Олена",
                "gender": "f",
                "age": 28,
                "city": {
                    "id": 1,
                    "name": "Kyiv",
                    "country": {
                        "id": 1,
                        "name": "Ukraine"
                    }
                },
                "photos_showcases": [
                    // {
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/9qje02W/anmvl.6365458b6f4ae.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/e2wb0Ny/w3rvz.635b7ae5d3a99.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/e2wb0Ny/srkrv.635b56a309cd7.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/e2wb0Ny/rvu9n.635b523ad6b29.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/e2wb0Ny/p2atx.635b5077f7f9f.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/Q1Rj0oz/dr555.635ab4ed78811.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/Q1Rj0oz/t38xf.635aab11dbc4a.800x600.webp',
                        // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/Q1Rj0oz/5v9us.635aaad425c1f.800x600.webp',
                      // o: 'https://lyranova.s3.eu-central-1.amazonaws.com/Q1Rj0oz/aro7j.635aa8c0922f7.800x600.webp',
                    // },
                    {
                        "o": "https://lyranova.s3.eu-central-1.amazonaws.com/e9z4PQ7/tqz7d.63592e71a67e2.800x600.webp"
                    },
                    {
                        "o": "https://lyranova.s3.eu-central-1.amazonaws.com/x2dN0V7/e6ha1.632ba1feb83ce.800x600.webp"
                    },
                ],
                "about_me": "Your mom will totally approve.",
                "online_state": "ONLINE_STATE_UNSPECIFIED",
                // "body_type": "Athletic",
                "height": {
                    "unit": 176,
                    "measure": "cm",
                },
            },
            "distance": 2
        },
        // {
        //     "labels": [
        //         "LABEL_LIKES_ME"
        //     ],
        //     "profile": {
        //         "hid": "lpB4W0j7lPkqZeM1",
        //         "name": "Alice",
        //         "gender": "m",
        //         "age": 33,
        //         "city": {
        //             "id": 1,
        //             "name": "San-Francisco",
        //             "country": {
        //                 "id": 1,
        //                 "name": "Ukraine"
        //             }
        //         },
        //         "photos_showcases": [
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //         ],
        //         "about_me": "Fitness junkie who enjoys yoga, running, and discovering healthy recipes to share with friends.",
        //         "online_state": "ONLINE_STATE_RECENTLY_SEEN",
        //         "occupation": "Doctor",
        //         "height": {
        //             "unit": 180,
        //             "measure": 'cm',
        //         },
        //         "body_type": "Athletic"
        //     },
        //     "distance": 30
        // },
        // {
        //     "labels": [],
        //     "profile": {
        //         "hid": "lpB4W0j7lPkqZeM2",
        //         "name": "Olga",
        //         "gender": "m",
        //         "age": 18,
        //         "city": {
        //             "id": 1,
        //             "name": "Los-Angeles",
        //             "country": {
        //                 "id": 1,
        //                 "name": "Ukraine"
        //             }
        //         },
        //         "photos_showcases": [
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //         ],
        //         "about_me": "Exploring the world one adventure at a time. Love hiking, photography, and meeting new people.",
        //         "online_state": "ONLINE_STATE_RECENTLY_SEEN",
        //         "occupation": "Engineer",
        //         "height": {
        //             "unit": 180,
        //             "measure": 'cm',
        //         },
        //         "body_type": "Athletic"
        //     },
        //     "distance": 84
        // },
        // {
        //     "labels": [],
        //     "profile": {
        //         "hid": "lpB4W0j7lPkqZeM3",
        //         "name": "Vlad",
        //         "gender": "m",
        //         "age": 44,
        //         "city": {
        //             "id": 1,
        //             "name": "Barcelona",
        //             "country": {
        //                 "id": 1,
        //                 "name": "Ukraine"
        //             }
        //         },
        //         "photos_showcases": [
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //         ],
        //         "about_me": "Digital nomad navigating life through travel, technology, and a passion for capturing moments on camera.",
        //         "online_state": "ONLINE_STATE_RECENTLY_SEEN",
        //         "occupation": "Data Scientist",
        //         "height": {
        //             "unit": 180,
        //             "measure": 'cm',
        //         },
        //         "body_type": "Athletic"
        //     },
        //     "distance": 16
        // },
        // {
        //     "labels": [
        //         "LABEL_LIKES_ME"
        //     ],
        //     "profile": {
        //         "hid": "lpB4W0j7lPkqZeM4",
        //         "name": "Britany",
        //         "gender": "m",
        //         "age": 44,
        //         "city": {
        //             "id": 1,
        //             "name": "Pryazovske",
        //             "country": {
        //                 "id": 1,
        //                 "name": "Ukraine"
        //             }
        //         },
        //         "photos_showcases": [
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //             {
        //                 "o": "https://lyranova.s3.eu-central-1.amazonaws.com/EG98Odj/adbdj.62cb2da838e93.800x600.webp"
        //             },
        //         ],
        //         "about_me": "Just me",
        //         "online_state": "ONLINE_STATE_RECENTLY_SEEN",
        //         "occupation": "Project Manager",
        //         "height": {
        //             "unit": 180,
        //             "measure": 'cm',
        //         },
        //         "body_type": "Athletic"
        //     },
        //     "distance": 28
        // },
    ],
};

function mapToModel(v)  {
    let geoProximity = ''

    if (v.distance === 0) {
        geoProximity = 'In your area'
    } else if (v.distance > 500) {
        geoProximity = 'Far away'
    } else {
        geoProximity = `${v.distance} km away`
    }

    return {
        isActive: v.profile.online_state === 'ONLINE_STATE_ONLINE',
        likesMe: v.labels.includes('LABEL_LIKES_ME'),
        profile: {
            hid: v.profile.hid,
            name: v.profile.name,
            age: v.profile.age,
            geoProximity: geoProximity,
            aboutMe: v.profile.about_me,
            bodyType: v.profile.body_type,
            occupation: v.profile.occupation,
            height: v.profile.height ? `${v.profile.height.unit}${v.profile.height.measure}` : null,
            photos: v.profile.photos_showcases.map((p) => p.o),
            cityName: v.profile.city?.name,
        }
    }
}

export const dummyData = {
    MatchCandidates: serverData.MatchCandidates.map(item => mapToModel(item)),
};

