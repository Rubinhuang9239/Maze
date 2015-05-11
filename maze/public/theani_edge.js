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
                            id: 'SkyPers',
                            type: 'rect',
                            rect: ['0%', '-22.2%', '100%', '143.2%', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)",[270,[['rgba(79,76,102,1.00)',2],['rgba(118,111,147,1.00)',29],['rgba(103,136,147,1.00)',49],['rgba(180,153,119,1.00)',77],['rgba(175,149,131,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'BackCloud',
                                symbolName: 'BackCloud',
                                display: 'block',
                                type: 'rect',
                                rect: ['779px', '696px', '635', '549', 'auto', 'auto'],
                                opacity: '1',
                                filter: [0, 16, 1, 1, 0, 0.3, 0, 6, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],[],['0.98','0.99']]
                            },
                            {
                                id: 'cloud1',
                                display: 'none',
                                type: 'image',
                                rect: ['261px', '885px', '37.2%', '40.2%', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",'img/cloud1.png','0px','0px'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 3, "rgba(0,0,0,0)", 0, 0, 0],
                                transform: [[],[],['0','6'],['2.20335']]
                            }]
                        },
                        {
                            id: 'PostBox',
                            symbolName: 'PostBox',
                            display: 'block',
                            type: 'rect',
                            rect: ['210px', '142px', '149', '115', 'auto', 'auto'],
                            opacity: '0',
                            filter: [0, 0, 1, 1, 0, 0, 0, 10, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'LeafBox1',
                            display: 'none',
                            type: 'rect',
                            rect: ['530px', '1005px', '3%', '3%', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 8, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'LeafBox2',
                            display: 'none',
                            type: 'rect',
                            rect: ['530px', '1005px', '3%', '3%', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'textureBox',
                            display: 'none',
                            type: 'rect',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${StageOne}': {
                            isStage: true,
                            rect: ['null', 'null', '88.9%', '100%', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 70000,
                    autoPlay: false,
                    data: [
                        [
                            "eid24",
                            "opacity",
                            1000,
                            455,
                            "linear",
                            "${PostBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid296",
                            "filter.blur",
                            1000,
                            2857,
                            "linear",
                            "${BackCloud}",
                            '16px',
                            '5px'
                        ],
                        [
                            "eid301",
                            "filter.blur",
                            3857,
                            1596,
                            "linear",
                            "${BackCloud}",
                            '5px',
                            '1px'
                        ],
                        [
                            "eid316",
                            "filter.blur",
                            12955,
                            4295,
                            "linear",
                            "${BackCloud}",
                            '1px',
                            '6px'
                        ],
                        [
                            "eid89",
                            "background-image",
                            1000,
                            2857,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',22],['rgba(84,117,179,1.00)',46],['rgba(255,255,255,1.00)',78],['rgba(181,181,181,1.00)',100]]],
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',42],['rgba(84,117,179,1.00)',68],['rgba(204,239,251,1.00)',89],['rgba(181,181,181,1.00)',100]]]
                        ],
                        [
                            "eid91",
                            "background-image",
                            3857,
                            4143,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',42],['rgba(84,117,179,1.00)',68],['rgba(204,239,251,1.00)',89],['rgba(181,181,181,1.00)',100]]],
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',27],['rgba(84,117,179,1.00)',53],['rgba(204,239,251,1.00)',82],['rgba(181,181,181,1.00)',100]]]
                        ],
                        [
                            "eid92",
                            "background-image",
                            8000,
                            3091,
                            "easeInOutQuad",
                            "${SkyPers}",
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',27],['rgba(84,117,179,1.00)',53],['rgba(204,239,251,1.00)',82],['rgba(181,181,181,1.00)',100]]],
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',36],['rgba(84,117,179,1.00)',62],['rgba(204,239,251,1.00)',88],['rgba(181,181,181,1.00)',100]]]
                        ],
                        [
                            "eid93",
                            "background-image",
                            11091,
                            3562,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',36],['rgba(84,117,179,1.00)',62],['rgba(204,239,251,1.00)',88],['rgba(181,181,181,1.00)',100]]],
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',19],['rgba(84,117,179,1.00)',50],['rgba(204,239,251,1.00)',78],['rgba(181,181,181,1.00)',100]]]
                        ],
                        [
                            "eid444",
                            "background-image",
                            14653,
                            4246,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(54,47,109,1.00)',2],['rgba(89,82,144,1.00)',19],['rgba(84,117,179,1.00)',50],['rgba(204,239,251,1.00)',78],['rgba(181,181,181,1.00)',100]]],
                            [270,[['rgba(79,76,102,1.00)',2],['rgba(118,111,147,1.00)',23],['rgba(103,136,147,1.00)',42],['rgba(180,153,119,1.00)',74],['rgba(175,149,131,1.00)',100]]]
                        ],
                        [
                            "eid229",
                            "background-image",
                            18899,
                            5851,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(79,76,102,1.00)',2],['rgba(118,111,147,1.00)',23],['rgba(103,136,147,1.00)',42],['rgba(180,153,119,1.00)',74],['rgba(175,149,131,1.00)',100]]],
                            [270,[['rgba(79,76,102,1.00)',21],['rgba(118,111,147,1.00)',51],['rgba(103,136,147,1.00)',67],['rgba(180,153,119,1.00)',83],['rgba(175,149,131,1.00)',100]]]
                        ],
                        [
                            "eid221",
                            "background-image",
                            24750,
                            2250,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(79,76,102,1.00)',21],['rgba(118,111,147,1.00)',51],['rgba(103,136,147,1.00)',67],['rgba(180,153,119,1.00)',83],['rgba(175,149,131,1.00)',100]]],
                            [270,[['rgba(79,76,102,1.00)',20],['rgba(118,111,147,1.00)',56],['rgba(103,136,147,1.00)',73],['rgba(180,153,119,1.00)',88],['rgba(175,149,131,1.00)',100]]]
                        ],
                        [
                            "eid222",
                            "background-image",
                            27000,
                            1750,
                            "easeInOutCubic",
                            "${SkyPers}",
                            [270,[['rgba(79,76,102,1.00)',20],['rgba(118,111,147,1.00)',56],['rgba(103,136,147,1.00)',73],['rgba(180,153,119,1.00)',88],['rgba(175,149,131,1.00)',100]]],
                            [270,[['rgba(79,76,102,1.00)',2],['rgba(118,111,147,1.00)',29],['rgba(103,136,147,1.00)',49],['rgba(180,153,119,1.00)',77],['rgba(175,149,131,1.00)',100]]]
                        ],
                        [
                            "eid349",
                            "background-image",
                            32500,
                            3782,
                            "linear",
                            "${SkyPers}",
                            [270,[['rgba(79,76,102,1.00)',2],['rgba(117,110,147,1.00)',29],['rgba(103,135,147,1.00)',49],['rgba(179,153,119,1.00)',77],['rgba(175,149,130,1.00)',100]]],
                            [270,[['rgba(120,118,135,1.00)',2],['rgba(124,144,142,1.00)',30],['rgba(150,182,176,1.00)',56],['rgba(174,190,189,1.00)',80],['rgba(205,217,216,1.00)',100]]]
                        ],
                        [
                            "eid392",
                            "background-image",
                            45500,
                            3000,
                            "easeInCubic",
                            "${SkyPers}",
                            [270,[['rgba(120,118,135,1.00)',2],['rgba(124,144,142,1.00)',30],['rgba(149,181,175,1.00)',56],['rgba(174,189,188,1.00)',80],['rgba(205,216,216,1.00)',100]]],
                            [270,[['rgba(120,118,135,0.60)',2],['rgba(124,144,142,0.50)',16],['rgba(149,181,175,0.40)',29],['rgba(174,189,188,0.30)',44],['rgba(205,216,216,0.20)',60]]]
                        ],
                        [
                            "eid416",
                            "location",
                            1000,
                            2857,
                            "easeInOutCubic",
                            "${BackCloud}",
                            [[1096.5, 970.5, 0, 0, 0, 0,0],[1076.5, 1105.5, 0, 0, 0, 0,136.47]]
                        ],
                        [
                            "eid425",
                            "location",
                            3857,
                            4143,
                            "easeInOutCubic",
                            "${BackCloud}",
                            [[1076.5, 1105.5, 0, 0, 0, 0,0],[1077.83, 641.5, 0, 0, 0, 0,464]]
                        ],
                        [
                            "eid428",
                            "location",
                            8000,
                            3091,
                            "easeInOutCubic",
                            "${BackCloud}",
                            [[1077.83, 641.5, 0, 0, 0, 0,0],[1274.17, 897.5, 0, 0, 0, 0,322.62]]
                        ],
                        [
                            "eid430",
                            "location",
                            11091,
                            3562,
                            "easeInOutQuad",
                            "${BackCloud}",
                            [[1274.17, 897.5, 0, 0, 0, 0,0],[1316.5, 764.5, 0, 0, 0, 0,139.57]]
                        ],
                        [
                            "eid432",
                            "location",
                            14653,
                            3501,
                            "easeInOutQuad",
                            "${BackCloud}",
                            [[1316.5, 764.5, 0, 0, 0, 0,0],[1283.17, 723.5, 0, 0, 0, 0,52.84]]
                        ],
                        [
                            "eid443",
                            "location",
                            18250,
                            3250,
                            "easeInQuad",
                            "${BackCloud}",
                            [[1283.17, 723.5, 0, 0, 0, 0,0],[1283.17, 444.49, 0, 0, 0, 0,279.01]]
                        ],
                        [
                            "eid9",
                            "location",
                            1000,
                            6000,
                            "easeInCubic",
                            "${PostBox}",
                            [[569.38, 526.65, 0, 0, 0, 0,0],[836.02, 278.21, 282.38, 7.26, 800.43, 20.57,410.62],[1054.31, 460.39, -0.21, 151.66, -0.46, 338.19,723],[876.94, 671.2, -34.46, 10.55, -591.52, 181.11,1027.87],[842.22, 680.46, 0, 0, 0, 0,1063.8]]
                        ],
                        [
                            "eid439",
                            "location",
                            7000,
                            2910,
                            "linear",
                            "${PostBox}",
                            [[842.22, 680.46, -379.26, 86.6, 0, 0,0],[568.88, 601.68, -32.26, -157.04, -52.41, -255.17,312.27],[702.19, 454.2, 390.61, -44.89, 273.59, -31.44,531.57],[877.68, 600.13, -10.64, 199.72, -11.69, 219.29,795.92],[522.19, 677.37, 0, 0, 0, 0,1170.33]]
                        ],
                        [
                            "eid440",
                            "location",
                            9910,
                            5590,
                            "easeOutCubic",
                            "${PostBox}",
                            [[522.19, 677.37, -7.7, -0.04, 0, 0,0],[514.67, 677.32, -288.08, -2.76, -7.34, -0.07,7.52],[272.97, 570.42, -226.82, -311.26, -221.5, -303.97,285.21],[249.29, 293.76, 268.54, -277.85, 239.82, -248.12,592.57],[547.35, 285.84, 0, 0, 0, 0,905.92]]
                        ],
                        [
                            "eid410",
                            "location",
                            15500,
                            6250,
                            "easeInOutQuad",
                            "${PostBox}",
                            [[547.35, 285.84, 209.06, 257.49, 0, 0,0],[632.29, 537.3, 17.69, 62.96, 148.21, 527.43,269.25],[653.87, 608.68, 118.53, 369.04, 25.79, 80.29,343.82],[863.95, 1099.5, 0, 0, 0, 0,877.89]]
                        ],
                        [
                            "eid115",
                            "location",
                            21750,
                            7000,
                            "easeInQuad",
                            "${PostBox}",
                            [[863.95, 1099.5, 0, 0, 0, 0,0],[1150.77, 697.67, 165.42, -723.01, 172.49, -753.88,504.23],[904.22, -189.4, 0, 0, 0, 0,1434.68]]
                        ],
                        [
                            "eid123",
                            "display",
                            29000,
                            0,
                            "easeInOutQuad",
                            "${PostBox}",
                            'block',
                            'none'
                        ],
                        [
                            "eid207",
                            "opacity",
                            15500,
                            2645,
                            "linear",
                            "${LeafBox1}",
                            '0.34962606837607',
                            '1'
                        ],
                        [
                            "eid354",
                            "location",
                            17890,
                            6365,
                            "easeInOutQuart",
                            "${LeafBox2}",
                            [[638.55, 1127.41, 0, 0, 0, 0,0],[135.5, 471.96, -64.63, -768.7, -57.74, -686.7,838.25],[353.59, 370.19, 0, 0, 0, 0,1176.82]]
                        ],
                        [
                            "eid359",
                            "location",
                            24255,
                            8031,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            [[353.68, 370.25, 0, 0, 0, 0,0],[581.04, 523.22, 338.14, 254.77, 334.44, 251.98,274.14],[792.05, 459.96, 0, 0, 0, 0,523.31]]
                        ],
                        [
                            "eid369",
                            "location",
                            32286,
                            4699,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            [[791.99, 460.43, 0, 0, 0, 0,0],[776.27, 304.42, -79.76, -115.5, -112.44, -162.83,160.28],[490.74, 317.1, -183.77, 980.95, -98.78, 527.26,515.1],[953.49, 593.23, 0, 0, 0, 0,1148.41]]
                        ],
                        [
                            "eid384",
                            "location",
                            36985,
                            3155,
                            "easeInCubic",
                            "${LeafBox2}",
                            [[953.43, 593.2, 0, 0, 0, 0,0],[1097.02, 248.72, -7.32, -524.96, -11.35, -814.05,389.81],[1053.65, -150.47, 0, 0, 0, 0,791.71]]
                        ],
                        [
                            "eid218",
                            "width",
                            15500,
                            4534,
                            "linear",
                            "${LeafBox1}",
                            '12%',
                            '5%'
                        ],
                        [
                            "eid224",
                            "width",
                            20034,
                            12847,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            '5%',
                            '4%'
                        ],
                        [
                            "eid374",
                            "width",
                            32881,
                            6046,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            '4%',
                            '3%'
                        ],
                        [
                            "eid396",
                            "display",
                            0,
                            0,
                            "linear",
                            "${textureBox}",
                            'none',
                            'none'
                        ],
                        [
                            "eid230",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cloud1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            18154,
                            0,
                            "linear",
                            "${cloud1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid232",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${cloud1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid387",
                            "display",
                            36282,
                            0,
                            "easeInCubic",
                            "${cloud1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid397",
                            "display",
                            43355,
                            0,
                            "easeInCubic",
                            "${cloud1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid291",
                            "scaleY",
                            1000,
                            1515,
                            "linear",
                            "${BackCloud}",
                            '1.11177',
                            '0.99'
                        ],
                        [
                            "eid211",
                            "filter.blur",
                            17956,
                            2914,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            '8px',
                            '0px'
                        ],
                        [
                            "eid373",
                            "filter.blur",
                            23813,
                            3023,
                            "easeInOutQuad",
                            "${LeafBox1}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid14",
                            "height",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '960px',
                            '960px'
                        ],
                        [
                            "eid366",
                            "width",
                            25015,
                            7072,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            '3%',
                            '11%'
                        ],
                        [
                            "eid368",
                            "width",
                            32087,
                            6718,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            '11%',
                            '6.73%'
                        ],
                        [
                            "eid371",
                            "filter.blur",
                            25723,
                            6085,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            '3px',
                            '0px'
                        ],
                        [
                            "eid365",
                            "height",
                            25015,
                            7072,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            '3%',
                            '11%'
                        ],
                        [
                            "eid367",
                            "height",
                            32087,
                            6718,
                            "easeInOutQuad",
                            "${LeafBox2}",
                            '11%',
                            '6.78%'
                        ],
                        [
                            "eid438",
                            "opacity",
                            2515,
                            0,
                            "linear",
                            "${BackCloud}",
                            '1',
                            '1'
                        ],
                        [
                            "eid330",
                            "opacity",
                            17000,
                            5000,
                            "easeInOutCubic",
                            "${BackCloud}",
                            '1',
                            '0'
                        ],
                        [
                            "eid290",
                            "scaleX",
                            1000,
                            1515,
                            "linear",
                            "${BackCloud}",
                            '1.11177',
                            '0.98'
                        ],
                        [
                            "eid225",
                            "location",
                            18250,
                            2601,
                            "easeInCubic",
                            "${cloud1}",
                            [[639.99, 1640.05, 0, 0, 0, 0,0],[640.46, -467.53, 0, 0, 0, 0,2107.58]]
                        ],
                        [
                            "eid389",
                            "location",
                            36801,
                            5412,
                            "easeInCubic",
                            "${cloud1}",
                            [[680.69, 1482.5, 0, 0, 0, 0,0],[680.61, -117.69, 0, 0, 0, 0,1600.19]]
                        ],
                        [
                            "eid190",
                            "location",
                            15500,
                            6363,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            [[637.09, 1157.71, 0, 0, 0, 0,0],[1043.1, 656.02, 8.21, -674.15, 7.55, -619.69,661.04],[858.21, 269.06, 0, 0, 0, 0,1102.02]]
                        ],
                        [
                            "eid191",
                            "location",
                            21863,
                            7240,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            [[857.92, 269.18, 0, 0, 0, 0,0],[683.23, 176.96, -138.08, -19.4, -211.74, -29.74,199.19],[544.93, 225.34, -116.92, 107.33, -134.15, 123.15,350.71],[490.59, 392.29, 29.65, 171.53, 32.76, 189.54,532.96],[664.93, 448.06, 218.36, -36.51, 268.55, -44.89,734.73],[823.64, 339.21, 0, 0, 0, 0,929.95]]
                        ],
                        [
                            "eid192",
                            "location",
                            29103,
                            7557,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            [[823.8, 339.34, 0, 0, 0, 0,0],[939.73, 261.75, 129.26, -39.33, 153.5, -46.71,140.43],[1028.18, 410.41, -17.57, 181.07, -44.89, 462.66,353.5],[909.99, 615.4, -1657.15, 381.11, -226.63, 52.12,602.42],[220.38, 238.12, 0, 0, 0, 0,1476.68]]
                        ],
                        [
                            "eid382",
                            "location",
                            36660,
                            2840,
                            "easeInCubic",
                            "${LeafBox1}",
                            [[220.69, 238.23, 0, 0, 0, 0,0],[218.28, 10.28, 29.67, -254.21, 37.45, -320.88,228.39],[266.05, -166.61, 0, 0, 0, 0,412.04]]
                        ],
                        [
                            "eid375",
                            "display",
                            14653,
                            0,
                            "linear",
                            "${LeafBox1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid385",
                            "display",
                            40140,
                            0,
                            "easeInCubic",
                            "${LeafBox1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid219",
                            "height",
                            15500,
                            4534,
                            "linear",
                            "${LeafBox1}",
                            '11.5%',
                            '4.92%'
                        ],
                        [
                            "eid223",
                            "height",
                            20034,
                            12847,
                            "easeInOutCubic",
                            "${LeafBox1}",
                            '4.92%',
                            '4%'
                        ],
                        [
                            "eid353",
                            "height",
                            32881,
                            6046,
                            "linear",
                            "${LeafBox1}",
                            '4%',
                            '3%'
                        ],
                        [
                            "eid377",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${LeafBox2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid386",
                            "display",
                            40427,
                            0,
                            "easeInCubic",
                            "${LeafBox2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid404",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${SkyPers}",
                            '1',
                            '1'
                        ],
                        [
                            "eid408",
                            "opacity",
                            56500,
                            10000,
                            "linear",
                            "${SkyPers}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Stage}",
                            '1280px',
                            '1280px'
                        ],
                        [
                            "eid21",
                            "filter.blur",
                            1000,
                            383,
                            "linear",
                            "${PostBox}",
                            '10px',
                            '0px'
                        ],
                        [
                            "eid26",
                            "filter.blur",
                            4250,
                            435,
                            "linear",
                            "${PostBox}",
                            '0px',
                            '3.8px'
                        ],
                        [
                            "eid31",
                            "filter.blur",
                            4809,
                            435,
                            "linear",
                            "${PostBox}",
                            '3.8px',
                            '0px'
                        ],
                        [
                            "eid29",
                            "filter.blur",
                            11576,
                            323,
                            "linear",
                            "${PostBox}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid30",
                            "filter.blur",
                            12657,
                            298,
                            "linear",
                            "${PostBox}",
                            '4px',
                            '0px'
                        ],
                        [
                            "eid101",
                            "filter.blur",
                            18154,
                            745,
                            "swing",
                            "${PostBox}",
                            '0px',
                            '6px'
                        ],
                        [
                            "eid122",
                            "filter.blur",
                            27000,
                            621,
                            "easeInOutQuad",
                            "${PostBox}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid336",
                            "display",
                            24750,
                            0,
                            "easeInOutCubic",
                            "${BackCloud}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "PostBox": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '115px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '115px']
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
            "CloudLayer": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['379px', '120px', '40.9%', '74.9%', 'auto', 'auto'],
                            id: 'cloud1',
                            transform: [[], [], [], ['2.44532', '1.33513']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'img/cloud1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100%', '100%']
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
            "backCloud": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.48368', '1.20761']],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'BackCloud',
                            type: 'image',
                            rect: ['16.3%', '8.6%', '67.4%', '82.8%', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/BackCloud.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '960px', '831px']
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
            "BackCloud": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '635px', '549px', 'auto', 'auto'],
                            id: 'backCloud',
                            symbolName: 'backCloud',
                            type: 'rect'
                        },
                        {
                            transform: [[], ['7'], [0, 0, 0], [1, 1, 1]],
                            id: 'BackCloudsmall',
                            type: 'image',
                            rect: ['-691px', '-193px', '366px', '285px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'img/BackCloudsmall.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '635px', '549px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("theani_edgeActions.js");
})("EDGE-211632830");
