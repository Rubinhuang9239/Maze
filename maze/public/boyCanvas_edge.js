/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['13px', '299px', '100px', '38px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.82104700854701',
                            fill: ["rgba(91,78,95,0.48)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'boy_Default',
                            symbolName: 'boy_Default',
                            type: 'rect',
                            rect: ['24px', '13px', '81', '315', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Boy_Default_Canvas}': {
                            isStage: true,
                            rect: ['0', '0', '170px', '340px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8250,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "b_headPart": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'b_neck',
                            rect: ['6px', '39px', '32.8%', '42.7%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_neck.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '61', '51', 'auto', 'auto'],
                            id: 'b_headWithHat',
                            symbolName: 'b_headWithHat',
                            type: 'rect',
                            transform: [[], ['-25'], [], [], ['26.444%', '87.1821%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '68px']
                        }
                    }
                },
                timeline: {
                    duration: 8112,
                    autoPlay: true,
                    data: [
                        [
                            "eid17",
                            "rotateZ",
                            2000,
                            1598,
                            "easeInOutCubic",
                            "${b_headWithHat}",
                            '0deg',
                            '-24deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            4000,
                            409,
                            "easeInOutQuart",
                            "${b_headWithHat}",
                            '-24deg',
                            '-25deg'
                        ],
                        [
                            "eid58",
                            "rotateZ",
                            7000,
                            1112,
                            "easeInOutQuart",
                            "${b_headWithHat}",
                            '-25deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "b_clmainPart": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'b_clmain',
                            rect: ['5px', '0px', '93.3%', '100%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_clmain.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_narm',
                            rect: ['0px', '19px', '68%', '65.3%', 'auto', 'auto'],
                            transform: [[], ['5'], [], [], ['36.5004%', '7.7641%']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_narm.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '92.6%', '53%']
                        }
                    }
                },
                timeline: {
                    duration: 8250,
                    autoPlay: true,
                    data: [
                        [
                            "eid40",
                            "rotateZ",
                            2000,
                            1081,
                            "easeInOutQuad",
                            "${b_narm}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid60",
                            "rotateZ",
                            7000,
                            1250,
                            "easeInOutQuart",
                            "${b_narm}",
                            '5deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "b_nlegPart": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'b_nfoot',
                            rect: ['0px', '100px', '100%', '23.1%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_nfoot.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_nleg',
                            rect: ['2px', '0px', '62.5%', '83.9%', 'auto', 'auto'],
                            transform: [[], ['3'], [], [], ['29.3229%', '101.4879%']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_nleg.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '130px']
                        }
                    }
                },
                timeline: {
                    duration: 8112,
                    autoPlay: true,
                    data: [
                        [
                            "eid34",
                            "rotateZ",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${b_nleg}",
                            '0deg',
                            '3deg'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            7000,
                            1112,
                            "easeInOutQuad",
                            "${b_nleg}",
                            '3deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "b_flegPart": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'b_ffoot',
                            rect: ['1px', '86px', '97.7%', '24.6%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_ffoot.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_fleg',
                            rect: ['0px', '0px', '58.1%', '85.1%', 'auto', 'auto'],
                            transform: [[], ['2'], [], [], ['33%', '99%']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_fleg.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 8112,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "rotateZ",
                            1991,
                            1009,
                            "easeInOutQuad",
                            "${b_fleg}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid56",
                            "rotateZ",
                            7000,
                            1112,
                            "easeInOutQuad",
                            "${b_fleg}",
                            '2deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "boy_Default": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['16px', '48px', '65', '166', 'auto', 'auto'],
                            id: 'b_clback',
                            symbolName: 'b_clback',
                            type: 'rect',
                            transform: [[], [], [], [], ['39.6%', '69%']]
                        },
                        {
                            type: 'rect',
                            id: 'b_flegPart',
                            symbolName: 'b_flegPart',
                            rect: ['25px', '189px', '43', '114', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'b_nlegPart',
                            symbolName: 'b_nlegPart',
                            rect: ['9px', '185px', '48', '130', 'auto', 'auto']
                        },
                        {
                            rect: ['10px', '1px', '61', '68', 'auto', 'auto'],
                            id: 'b_headPart',
                            symbolName: 'b_headPart',
                            type: 'rect',
                            transform: [[], ['4'], [], [], ['26.1862%', '93.6221%']]
                        },
                        {
                            rect: ['0px', '49px', '75', '167', 'auto', 'auto'],
                            id: 'b_clmainPart',
                            symbolName: 'b_clmainPart',
                            type: 'rect',
                            transform: [[], [], [], [], ['40%', '69%']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '81px', '315px']
                        }
                    }
                },
                timeline: {
                    duration: 8250,
                    autoPlay: true,
                    data: [
                        [
                            "eid62",
                            "rotateZ",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${b_clback}",
                            '0deg',
                            '-3deg'
                        ],
                        [
                            "eid61",
                            "rotateZ",
                            7112,
                            1000,
                            "easeInOutQuad",
                            "${b_clback}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid29",
                            "left",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${b_headPart}",
                            '16px',
                            '10px'
                        ],
                        [
                            "eid50",
                            "left",
                            7000,
                            1250,
                            "easeInOutQuad",
                            "${b_headPart}",
                            '10px',
                            '16px'
                        ],
                        [
                            "eid25",
                            "rotateZ",
                            2000,
                            1000,
                            "easeInOutQuad",
                            "${b_clmainPart}",
                            '0deg',
                            '-3deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            7000,
                            1112,
                            "easeInOutQuad",
                            "${b_clmainPart}",
                            '-3deg',
                            '0deg'
                        ],
                        [
                            "eid15",
                            "rotateZ",
                            2000,
                            1081,
                            "easeInOutQuad",
                            "${b_headPart}",
                            '4deg',
                            '-1deg'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            4000,
                            409,
                            "easeInOutQuad",
                            "${b_headPart}",
                            '-1deg',
                            '-6deg'
                        ],
                        [
                            "eid49",
                            "rotateZ",
                            7000,
                            1250,
                            "easeInOutQuad",
                            "${b_headPart}",
                            '-6deg',
                            '4deg'
                        ]
                    ]
                }
            },
            "b_headWithHat": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'b_head',
                            rect: ['1px', '1px', '63.5%', '96.2%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_head.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_hat',
                            rect: ['1px', '0px', '96.8%', '53.9%', 'auto', 'auto'],
                            transform: [[], [], [], ['1.01639']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_hat.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '63px', '52px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "b_clback": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'b_farm',
                            rect: ['10px', '13px', '124.6%', '59.6%', 'auto', 'auto'],
                            transform: [[], ['23'], [], [], ['17.8341%', '12.7454%']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_farm.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_clback',
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            transform: [[], [], [], [], ['40%', '69%']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_clback.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '65px', '166px']
                        }
                    }
                },
                timeline: {
                    duration: 7500,
                    autoPlay: true,
                    data: [
                        [
                            "eid67",
                            "rotateZ",
                            3000,
                            1133,
                            "easeInOutCubic",
                            "${b_farm}",
                            '23deg',
                            '-17deg'
                        ],
                        [
                            "eid69",
                            "rotateZ",
                            6000,
                            1500,
                            "easeInOutQuart",
                            "${b_farm}",
                            '-17deg',
                            '22deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("boyCanvas_edgeActions.js");
})("EDGE-Boy_Default");
