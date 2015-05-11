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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'DarkBack_body',
                            symbolName: 'DarkBack_body',
                            type: 'rect',
                            rect: ['-4', '96', '188', '211', 'auto', 'auto'],
                            transform: [[],['4']]
                        }
                    ],
                    style: {
                        '${DarkBack_body_Canvas}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "rotateZ",
                            3250,
                            5250,
                            "easeInOutQuad",
                            "${DarkBack_body}",
                            '4deg',
                            '-2deg'
                        ]
                    ]
                }
            },
            "DarkBack_body": {
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
                            id: 'b_head_DKCopy',
                            rect: ['26px', '-88px', '121px', '136px', 'auto', 'auto'],
                            transform: [[], ['5'], [], [], ['48.3555%', '87.6378%']],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_head_DK.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'b_body_DK',
                            rect: ['0px', '0px', '188px', '211px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/boy_image/b_body_DK.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '188px', '211px']
                        }
                    }
                },
                timeline: {
                    duration: 8500,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "rotateZ",
                            3500,
                            5000,
                            "easeInOutQuad",
                            "${b_head_DKCopy}",
                            '5deg',
                            '-11deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("boy_DarkBack_edgeActions.js");
})("EDGE-Boy_DarkBack");
