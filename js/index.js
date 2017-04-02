$(function () {
    $('#dowebok').fullpage({
        'navigation': true,
    });
    $('.counter').countUp({
        delay: 10,
        time: 2000
    });


    //第二屏
    var myChart2 = echarts.init(document.getElementById('main2'));
    option2 = {
        title: {
            show: true,
            text: "今日客流数据统计",
            textStyle: {
                color: '#00fff9',
                fontWeight: 'normal',
                fontSize: 25
            }
        },
        tooltip: {
            trigger: 'none'
        },
        legend: {
            x: 'left',
            padding: [10, 20, 0, 20]
        },
        grid: {
            left: '0',
            right: '3%',
            bottom: '3%',
            top: '13%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: 'rgba(00, 22,22, 0)',
                    width: 1
                }
            },
            type: 'category',
            boundaryGap: false,
            splitLine: { //网格线
                show: false
            },
            axisLabel: {
                show: true,
                margin: 20,
                textStyle: {
                    color: '#00fff9'
                }
            },
            data: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00']
        },
        yAxis: {
            min: 0,
            max: 40,
            splitNumber: 5,
            splitLine: { //网格线
                show: true,
                lineStyle: {
                    color: ['#3a3c3d'],
                    type: 'solid',
                    width: 3
                },
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(00, 22,22, 0)',
                    width: 1
                }
            },
            axisLabel: {
                show: true,
                margin: 20,
                formatter: '{value}',
                textStyle: {
                    color: '#00fff9'
                }
            },
        },
        series: {
            type: 'line',
            smooth: true,
            data: ['0', '10', '15', '19', '9', '8', '27', '18', '0'],
            label: {
                normal: {
                    show: true,
                    position: 'top', //值显示
                    textStyle: {
                        color: "#00fff9",
                        fontSize: 16,
                    },
                }
            },
            lineStyle: {
                normal: {
                    color: "#00fff9"  //连线颜色
                }
            },
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: "#fffff" //图标颜色
                }
            }
        }
    };
    myChart2.setOption(option2);

    var myChart3 = echarts.init(document.getElementById('main3'));
    option3 = {
        title: {
            text: '今日到店年龄分布',
            x: 'center',
            textStyle: {
                color: '#00fff9',
                fontWeight: 'normal',
                fontSize: 25
            }
        },
        color: ['#ffffff', '#00fff9', '#1e5f6f', '#49bdca'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                data: [
                    {value: 25, name: '0-18岁'},
                    {value: 12.5, name: '31-40岁'},
                    {value: 12.5, name: '40岁以上'},
                    {value: 50, name: '19-30岁'},
                ],
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            formatter: '{d}%',
                            position: 'inside',
                            textStyle: {
                                color: '#000'
                            },
                        }
                    },
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            }
        ]
    };
    myChart3.setOption(option3);


    //第三屏
    var myChart4 = echarts.init(document.getElementById('main4'));
    var count = 360;
    var data = [];
    for (var i = 0; i < count; i++) {
        data.push([1, i]);
    }
    option4 = {
        color: ['red'],
        title: {
            text: '86.3' + '%',
            textStyle: {
                color: '#ffffff',
                fontSize: 45,
                fontWeight: 'normal',
                fontFamily: '华文细黑',
            },
            x: '13%',
            y: '40%'
        },
        visualMap: [{
            show: false,
            dimension: 1,
            min: 0,
            max: count,
            inRange: {
                color: ["#8eebeb", "#1e5f6f"],
            }
        }],
        series: [{
            type: 'pie',
            radius: ['65%', '75%'],
            center: ['30%', '50%'],
            silent: true,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data
        }]
    }
    myChart4.setOption(option4);

    var myChart5 = echarts.init(document.getElementById('main5'));
    option5 = {
        textStyle: {
            color: '#00FFF9'
        },
        color: ['#3398DB'],
        tooltip: {
            formatter: "{a} <br/>{b} : {c}%",
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            right: '4%',
            bottom: '3%',
            show: false,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "#00FFF9"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(00, 22,22, 0)',
                        width: 0,//这里是为了突出显示加上的，可以去掉
                    }
                },
            },
        ],
        yAxis: [
            {
                type: 'value',
                show: false,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        series: [
            {
                name: '出勤率',
                type: 'bar',
                barWidth: '30%',
                data: [70.2, 91.4, 81.9, 100, 0, 79.3, 94.1]
            },

        ],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}%'
            }
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 254,248, 1)'
                }, {
                    offset: 1,
                    color: 'rgba(36, 50, 51, 0.5)'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowBlur: 10
            }
        }
    };
    myChart5.setOption(option5);


    //第四屏
    var myChart6 = echarts.init(document.getElementById('main6'));
    var dataBJ = [
        [55,9,56,0.46,18,6,1],
        [25,11,21,0.65,34,9,2],
        [56,7,63,0.3,14,5,3],
        [33,7,29,0.33,16,6,4],
        [42,24,44,0.76,40,16,5],
        [82,58,90,1.77,68,33,6],
        [74,49,77,1.46,48,27,7],
        [78,55,80,1.29,59,29,8],
        [267,216,280,4.8,108,64,9],
        [185,127,216,2.52,61,27,10],
        [39,19,38,0.57,31,15,11],
        [41,11,40,0.43,21,7,12],
        [64,38,74,1.04,46,22,13],
        [108,79,120,1.7,75,41,14],
        [108,63,116,1.48,44,26,15],
        [33,6,29,0.34,13,5,16],
        [94,66,110,1.54,62,31,17],
        [186,142,192,3.88,93,79,18],
        [57,31,54,0.96,32,14,19],
        [22,8,17,0.48,23,10,20],
        [39,15,36,0.61,29,13,21],
        [94,69,114,2.08,73,39,22],
        [99,73,110,2.43,76,48,23],
        [31,12,30,0.5,32,16,24],
        [42,27,43,1,53,22,25],
        [154,117,157,3.05,92,58,26],
        [234,185,230,4.09,123,69,27],
        [160,120,186,2.77,91,50,28],
        [134,96,165,2.76,83,41,29],
        [52,24,60,1.03,50,21,30],
        [46,5,49,0.28,10,6,31]
    ];
    var dataGZ = [
        [26,37,27,1.163,27,13,1],
        [85,62,71,1.195,60,8,2],
        [78,38,74,1.363,37,7,3],
        [21,21,36,0.634,40,9,4],
        [41,42,46,0.915,81,13,5],
        [56,52,69,1.067,92,16,6],
        [64,30,28,0.924,51,2,7],
        [55,48,74,1.236,75,26,8],
        [76,85,113,1.237,114,27,9],
        [91,81,104,1.041,56,40,10],
        [84,39,60,0.964,25,11,11],
        [64,51,101,0.862,58,23,12],
        [70,69,120,1.198,65,36,13],
        [77,105,178,2.549,64,16,14],
        [109,68,87,0.996,74,29,15],
        [73,68,97,0.905,51,34,16],
        [54,27,47,0.592,53,12,17],
        [51,61,97,0.811,65,19,18],
        [91,71,121,1.374,43,18,19],
        [73,102,182,2.787,44,19,20],
        [73,50,76,0.717,31,20,21],
        [84,94,140,2.238,68,18,22],
        [93,77,104,1.165,53,7,23],
        [99,130,227,3.97,55,15,24],
        [146,84,139,1.094,40,17,25],
        [113,108,137,1.481,48,15,26],
        [81,48,62,1.619,26,3,27],
        [56,48,68,1.336,37,9,28],
        [82,92,174,3.29,0,13,29],
        [106,116,188,3.628,101,16,30],
        [118,50,0,1.383,76,11,31]
    ];
    var dataSH = [
        [91,45,125,0.82,34,23,1],
        [65,27,78,0.86,45,29,2],
        [83,60,84,1.09,73,27,3],
        [109,81,121,1.28,68,51,4],
        [106,77,114,1.07,55,51,5],
        [109,81,121,1.28,68,51,6],
        [106,77,114,1.07,55,51,7],
        [89,65,78,0.86,51,26,8],
        [53,33,47,0.64,50,17,9],
        [80,55,80,1.01,75,24,10],
        [117,81,124,1.03,45,24,11],
        [99,71,142,1.1,62,42,12],
        [95,69,130,1.28,74,50,13],
        [116,87,131,1.47,84,40,14],
        [108,80,121,1.3,85,37,15],
        [134,83,167,1.16,57,43,16],
        [79,43,107,1.05,59,37,17],
        [71,46,89,0.86,64,25,18],
        [97,71,113,1.17,88,31,19],
        [84,57,91,0.85,55,31,20],
        [87,63,101,0.9,56,41,21],
        [104,77,119,1.09,73,48,22],
        [87,62,100,1,72,28,23],
        [168,128,172,1.49,97,56,24],
        [65,45,51,0.74,39,17,25],
        [39,24,38,0.61,47,17,26],
        [39,24,39,0.59,50,19,27],
        [93,68,96,1.05,79,29,28],
        [188,143,197,1.66,99,51,29],
        [174,131,174,1.55,108,50,30],
        [187,143,201,1.39,89,53,31]
    ];
    var lineStyle = {
        normal: {
            width: 1,
            opacity: 0.5
        }
    };
    option6 = {
        backgroundColor: '#262829',
        title: {
            text: 'AQI - 雷达图',
            left: 'center',
            textStyle: {
                color: '#49bdca'
            }
        },
        legend: {
            bottom: 5,
            data: ['北京', '上海', '广州'],
            itemGap: 20,
            textStyle: {
                color: '#49bdca',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        radar: {
            indicator: [
                {name: 'AQI', max: 300},
                {name: 'PM2.5', max: 250},
                {name: 'PM10', max: 300},
                {name: 'CO', max: 5},
                {name: 'NO2', max: 200},
                {name: 'SO2', max: 100}
            ],
            shape: 'circle',
            splitNumber: 5,
            name: {
                textStyle: {
                    color: 'rgb(238, 197, 102)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [
            {
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#00fff9'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.1
                    }
                }
            },
            {
                name: '上海',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataSH,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: '#00fff9'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            },
            {
                name: '广州',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataGZ,
                symbol: 'none',
                itemStyle: {
                    normal: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.05
                    }
                }
            }
        ]
    };
    myChart6.setOption(option6);

    var myChart7 = echarts.init(document.getElementById('main7'));
    var option7 = {
        series: [{
            type: 'liquidFill',
            radius: '80%',
            data: [0.5, 0.45, 0.4, 0.3],
            label: {
                normal: {
                    textStyle: {
                        color: 'red',
                        insideColor: 'yellow',
                        fontSize: 50
                    }
                }
            }
        }]
    };
    myChart7.setOption(option7);

    var myChart8 = echarts.init(document.getElementById('main8'));
    option8 = {
        backgroundColor: '#262829',

        title: {
            text: '解决状态排名',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#49bdca'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'解决状态',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'P1'},
                    {value:310, name:'P2'},
                    {value:274, name:'P3'},
                    {value:235, name:'P4'}
                ].sort(function (a, b) { return a.value - b.value}),
                roseType: 'angle',
                label: {
                    normal: {
                        formatter: "{b} : {c} ({d}%)"
                    }
                },

                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    myChart8.setOption(option8);

    var myChart9 = echarts.init(document.getElementById('main9'));
    var myData=['天安门广场','故宫','北海公园','西单','中央电视塔','王府井','潘家园'];
    option9 = {
        backgroundColor:'#262829',
        title:{
            text:'大北京景点帅哥美女统计',
            textStyle:{
                color:'#49bdca',
                fontSize:16,
            },
        },
        legend:{
            data:['帅哥','美女'],
            top:4,
            right:'10%',
            textStyle:{
                color:'#49bdca',
            },
        },
        tooltip: {
            show:true,
            trigger:'axis',
            formatter:'{b}<br/>{a}: {c}人',
            axisPointer: {
                type:'shadow',
            }
        },
        toolbox: {
            feature: {
                dataView: {
                    show: false,
                    readOnly: false
                },
                restore: {
                    show: false
                },
                saveAsImage: {
                    show: false
                }
            }
        },
        grid:[{
            show:false,
            left:'4%',
            top:60,
            bottom:30,
            containLabel: true,
            width:'46%',
        },
            {
                show:false,
                left:'50.5%',
                top:80,
                bottom:30,
                width:'4%',
            },
            {
                show:false,
                right:'4%',
                top:60,
                bottom:30,
                containLabel: true,
                width:'46%',
            },
        ],

        xAxis:[{
            type: 'value',
            inverse:true,
            axisLine: {show:false,},
            axisTick: {show:false,},
            position:'top',
            axisLabel: {
                show:true,
                textStyle: {color:'#49bdca',fontSize:12,},
            },
            splitLine: {
                show:true,
                lineStyle:{
                    color:'#49bdca',width: 1,
                    type: 'solid',
                },
            },
        },
            {
                gridIndex: 1,
                show:false,
            },
            {
                gridIndex: 2,
                type: 'value',
                axisLine: {show:false,},
                axisTick: {show:false,},
                position:'top',
                axisLabel: {
                    show:true,
                    textStyle: {color:'#49bdca',fontSize:12,},		        },
                splitLine: {
                    show:true,
                    lineStyle:{
                        color:'#49bdca',width: 1,
                        type: 'solid',
                    },
                },
            },
        ],
        yAxis:
            [
                {
                    type: 'category',
                    inverse:true,
                    position:'right',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {
                        show:false,
                        margin:8,
                        textStyle: {
                            color:'#9D9EA0',fontSize: 12,
                        },

                    },
                    data: myData,
                },
                {
                    gridIndex: 1,
                    type: 'category',
                    inverse:true,
                    position:'left',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {
                        show:true,
                        textStyle: {
                            color:'#49bdca',fontSize: 12,
                        },

                    },
                    data:myData.map(function(value){
                        return {
                            value:value,
                            textStyle:{
                                align:'center',
                            }
                        }
                    }),
                },
                {
                    gridIndex: 2,
                    type: 'category',
                    inverse:true,
                    position:'left',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {
                        show:false,
                        textStyle: {
                            color:'#49bdca',fontSize: 12,
                        },

                    },
                    data:myData,
                },
            ],
        series: [
            {
                name:'帅哥',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                label: {
                    normal: {
                        show:false,
                    },
                    emphasis: {
                        show:true,
                        position:'left',
                        offset:[0,0],
                        textStyle: {color: '#49bdca',fontSize: 14,},
                    },
                },
                itemStyle: {
                    normal: {
                        color:'#659F83',
                    },
                    emphasis: {
                        color:'#08C7AE',
                    },
                },
                data: [400, 350, 300, 250, 200, 150, 100],
            },


            {
                name:'美女',
                type: 'bar',
                barGap: 20,
                barWidth:20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show:false,
                    },
                    emphasis: {
                        show:true,
                        position:'right',
                        offset:[0,0],
                        textStyle: {color: '#49bdca',fontSize: 14,},
                    },
                },
                itemStyle: {
                    normal: {
                        color:'#F68989',
                    },
                    emphasis: {
                        color:'#F94646',
                    },
                },
                data:[380, 370, 350, 330, 300, 290, 280],
            },
        ]
    };
    myChart9.setOption(option9);

    var myChart10 = echarts.init(document.getElementById('main10'));
    var option10 = {
        series: [{
            type: 'liquidFill',
            data: [0.6, 0.55, 0.4, 0.25],
            radius: '90%',
            outline: {
                show: false
            },
            backgroundStyle: {
                borderColor: '#156ACF',
                borderWidth: 1,
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 20
            },
            shape: 'path://M367.855,428.202c-3.674-1.385-7.452-1.966-11.146-1.794c0.659-2.922,0.844-5.85,0.58-8.719 c-0.937-10.407-7.663-19.864-18.063-23.834c-10.697-4.043-22.298-1.168-29.902,6.403c3.015,0.026,6.074,0.594,9.035,1.728 c13.626,5.151,20.465,20.379,15.32,34.004c-1.905,5.02-5.177,9.115-9.22,12.05c-6.951,4.992-16.19,6.536-24.777,3.271 c-13.625-5.137-20.471-20.371-15.32-34.004c0.673-1.768,1.523-3.423,2.526-4.992h-0.014c0,0,0,0,0,0.014 c4.386-6.853,8.145-14.279,11.146-22.187c23.294-61.505-7.689-130.278-69.215-153.579c-61.532-23.293-130.279,7.69-153.579,69.202 c-6.371,16.785-8.679,34.097-7.426,50.901c0.026,0.554,0.079,1.121,0.132,1.688c4.973,57.107,41.767,109.148,98.945,130.793 c58.162,22.008,121.303,6.529,162.839-34.465c7.103-6.893,17.826-9.444,27.679-5.719c11.858,4.491,18.565,16.6,16.719,28.643 c4.438-3.126,8.033-7.564,10.117-13.045C389.751,449.992,382.411,433.709,367.855,428.202z',
            label: {
                normal: {
                    position: ['38%', '40%'],
                    formatter: function() {
                        return 'ECharts\nLiquid Fill';
                    },
                    textStyle: {
                        fontSize: 40,
                        color: '#D94854'
                    }
                }
            }
        }]

    };
    myChart10.setOption(option10);

    var myChart11 = echarts.init(document.getElementById('main11'));
    option11 = {
        backgroundColor: '#262829',
        title: {
            text: '请求数',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#49bdca'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#49bdca'
                }
            }
        },
        legend: {
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['移动', '电信', '联通'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#49bdca'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#49bdca'
                }
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        }],
        yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#49bdca'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#49bdca'
                }
            }
        }],
        series: [{
            name: '移动',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)',
                    borderWidth: 12

                }
            },
            data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
            name: '电信',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
            name: '联通',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: 'rgb(219,50,51)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
            data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        }, ]
    };
    myChart11.setOption(option11);


    //第五屏
    var myChart12 = echarts.init(document.getElementById('main12'));
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };
    var BJData = [
        [{name:'北京'}, {name:'上海',value:95}],
        [{name:'北京'}, {name:'广州',value:90}],
        [{name:'北京'}, {name:'大连',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'包头',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'常州',value:10}]
    ];
    var SHData = [
        [{name:'上海'},{name:'包头',value:95}],
        [{name:'上海'},{name:'昆明',value:90}],
        [{name:'上海'},{name:'广州',value:80}],
        [{name:'上海'},{name:'郑州',value:70}],
        [{name:'上海'},{name:'长春',value:60}],
        [{name:'上海'},{name:'重庆',value:50}],
        [{name:'上海'},{name:'长沙',value:40}],
        [{name:'上海'},{name:'北京',value:30}],
        [{name:'上海'},{name:'丹东',value:20}],
        [{name:'上海'},{name:'大连',value:10}]
    ];
    var GZData = [
        [{name:'广州'},{name:'福州',value:95}],
        [{name:'广州'},{name:'太原',value:90}],
        [{name:'广州'},{name:'长春',value:80}],
        [{name:'广州'},{name:'重庆',value:70}],
        [{name:'广州'},{name:'西安',value:60}],
        [{name:'广州'},{name:'成都',value:50}],
        [{name:'广州'},{name:'常州',value:40}],
        [{name:'广州'},{name:'北京',value:30}],
        [{name:'广州'},{name:'北海',value:20}],
        [{name:'广州'},{name:'海口',value:10}]
    ];
    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };
    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
        series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    option12 = {
        backgroundColor: '#262829',
        title : {
            text: '模拟迁徙',
            subtext: '数据纯属虚构',
            left: 'center',
            textStyle : {
                color: '#00fff9',
                fontSize: '25'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data:['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#00fff9'
            },
            selectedMode: 'single'
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    myChart12.setOption(option12);


    //第六屏
    var myChart13 = echarts.init(document.getElementById('main13'));
    option13 = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        color:['#00fff9', '#49bdca','#1e5f6f','#fff'],
        legend: {
            x : 'center',
            y : 'center',
        },
        toolbox: {
            show : false,
            feature : {
                mark : {show: false},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'店铺保修',
                type:'pie',
                radius : [100, 150],
                center : ['50%', '50%'],
                roseType : 'angle',
                label: {//线条引出的文字标签
                    normal: {
                        textStyle: {
                            color: '#49bdca',
                            fontSize: 20//标签文字颜色
                        }
                    }
                },
                labelLine: {//标签连接的线条
                    normal: {//默认状态
                        lineStyle: {
                            color: '#fff'//线条颜色
                        },
                        smooth: 0,//线条的笔直程度
                        length: 25,//线条上一节的长度
                        length2: 30//线条下一节的长度
                    }
                },
                data:[
                    {value:25, name:'25\n\n正在维修中'},
                    {value:20, name:'20\n\n未处理维修'},
                    {value:15, name:'15\n\n已处理还未维修'},
                    {value:40, name:'40\n\n已完成维修'},
                ]
            }
        ]
    };
    myChart13.setOption(option13);

    var myChart14 = echarts.init(document.getElementById('main14'));
    option14 = {
        "toolbox": {
            "show": false,
            "feature": {
                "mark": {
                    "show": true
                },
                "restore": {
                    "show": true
                },
                "saveAsImage": {
                    "show": true
                }
            }
        },
        "series": [{
            "name": "指标",
            "type": "gauge",
            "startAngle": 180, //总的360，设置180就是半圆
            "endAngle": 0,
            "center": ["50%", "70%"], //整体的位置设置
            "radius": 200,
            "axisLine": {
                "lineStyle": {
                    "width": 20, //柱子的宽度
                    "color": [[0.6, "#00fff9"], [1, "#49bdca"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            "splitLine": {
                "show": false
            },
            "pointer": {
                "width": 20, //指针的宽度
                "length": "95%", //指针长度，按照半圆半径的百分比
                "color": "#00fff9"
            },
            "title": {
                "show": true,
                "offsetCenter": [0, "25%"], //标题位置设置
                "textStyle": { //标题样式设置
                    "color": "#00fff9",
                    "fontSize": 20,
                    "fontFamily": "微软雅黑",
                }
            },
            "detail": {
                "show": false
            },
            "data": [{ //显示数据
                "value": 60,
                "name": "维修速度 18"
            }]
        }]
    };
    myChart14.setOption(option14);


    //第七屏
    var myChart15 = echarts.init(document.getElementById('main15'));
    var allData = {"citys":[{"name":"延寿","value":[128.331644,45.451897,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临江","value":[126.918087,41.811979,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"嘉兴","value":[120.755486,30.746129,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四平","value":[124.350398,43.16642,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"营口","value":[122.235418,40.667012,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"密云","value":[116.801346,40.35874,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"威海","value":[122.12042,37.513068,32],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"杭州","value":[120.15507,30.274085,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"集安","value":[126.194031,41.125307,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"贵阳","value":[106.630154,26.647661,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"抚顺","value":[123.957208,41.880872,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海门","value":[121.181615,31.871173,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珠海","value":[113.576726,22.270715,9],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河北","value":[114.475704,38.584854,-19],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"深圳","value":[114.057868,22.543099,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄浦","value":[121.484443,31.231763,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"蓬莱","value":[120.758848,37.810661,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"吉林","value":[126.549572,43.837883,-364],"symbolSize":14,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"甘肃","value":[103.826308,36.059421,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"龙井","value":[129.427066,42.766311,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"茂名","value":[110.925456,21.662999,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丹东","value":[124.354707,40.0005,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"晋中","value":[112.752695,37.687024,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"浙江","value":[120.152792,30.267447,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"海城","value":[122.685217,40.882377,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"溆浦","value":[110.594921,27.908281,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"北京","value":[116.407526,39.90403,-14],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"铁岭","value":[123.726166,42.223769,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大同","value":[113.61244,40.040295,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"金坛","value":[119.597897,31.723247,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"齐齐哈尔","value":[126.661669,45.742347,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"咸阳","value":[108.708991,34.329605,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"四川","value":[104.075931,30.651652,-5],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"福田","value":[114.055036,22.52153,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"盘锦","value":[122.070714,41.119997,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"中山","value":[113.392782,22.517646,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"福建","value":[119.295144,26.10078,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泰顺","value":[119.717649,27.556884,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宝山","value":[131.401589,46.577167,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"庆安","value":[127.507825,46.880102,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海淀","value":[116.298056,39.959912,32],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大兴","value":[116.341395,39.726929,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"桦川","value":[130.719081,47.023001,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"惠州","value":[114.416196,23.111847,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"青岛","value":[120.38264,36.067082,52],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"朝阳","value":[116.443108,39.92147,17],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"沈阳","value":[123.431475,41.805698,41],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"菏泽","value":[115.480656,35.23375,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南通","value":[120.894291,31.980172,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南充","value":[106.110698,30.837793,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双城","value":[126.312745,45.383263,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南京","value":[118.796877,32.060255,17],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"新疆","value":[87.627704,43.793026,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"成都","value":[104.066541,30.572269,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"陕西","value":[108.954239,34.265472,-2],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"黄岛","value":[120.04619,35.872664,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"温州","value":[120.699367,27.994267,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石家庄","value":[114.51486,38.042307,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"邢台","value":[114.504844,37.070589,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"赣州","value":[114.93503,25.831829,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"义乌","value":[120.075058,29.306841,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"南昌","value":[115.858198,28.682892,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"闵行","value":[121.381709,31.112813,18],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长宁","value":[121.424624,31.220367,7],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"道里","value":[126.616957,45.755777,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"乳山","value":[121.539765,36.919816,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"双流","value":[103.923648,30.574473,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广州","value":[113.264435,23.129163,13],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西城","value":[116.365868,39.912289,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"佳木斯","value":[130.318917,46.799923,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"皇姑","value":[123.44197,41.824796,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"榆树","value":[126.533146,44.840288,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临汾","value":[111.518976,36.088005,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"上海","value":[121.473701,31.230416,44],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"内蒙古","value":[111.765618,40.817498,-23],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"尚志","value":[128.009895,45.209586,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖里","value":[118.146769,24.512905,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"台州","value":[121.420757,28.656386,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"潍坊","value":[119.161756,36.706774,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"苏州","value":[120.585316,31.298886,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"房山","value":[116.143267,39.749144,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"即墨","value":[120.447128,36.389639,15],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"舒兰","value":[126.965607,44.406106,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延吉","value":[129.508946,42.891255,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"三河","value":[117.078295,39.982718,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"大连","value":[121.614682,38.914003,40],"symbolSize":3,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辉南","value":[126.046912,42.684993,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"无锡","value":[120.31191,31.49117,14],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"常州","value":[119.973987,31.810689,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"广西","value":[108.327546,22.815478,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"泉州","value":[118.675676,24.874132,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"昌平","value":[116.231204,40.22066,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海阳","value":[121.158434,36.776378,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"郑州","value":[113.625368,34.7466,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东城","value":[116.416357,39.928353,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黄骅","value":[117.330048,38.371383,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武侯","value":[104.04339,30.641982,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡东","value":[131.12408,45.260412,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"龙口","value":[120.477813,37.646108,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"汤原","value":[129.905072,46.730706,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"湖北","value":[114.341862,30.546498,-4],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"克拉玛依","value":[84.889207,45.579889,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"厦门","value":[118.089425,24.479834,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"哈尔滨","value":[126.534967,45.803775,8],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"秦皇岛","value":[119.600493,39.935385,7],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"江苏","value":[118.763232,32.061707,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"常熟","value":[120.752481,31.654376,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"烟台","value":[121.447935,37.463822,24],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"和平","value":[117.21451,39.116949,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"环翠","value":[122.123444,37.501991,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宣武门外东大街","value":[116.378888,39.899332,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"张家港","value":[120.553284,31.870367,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"临安","value":[119.724733,30.233873,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"延安","value":[109.489727,36.585455,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"天津","value":[117.200983,39.084158,28],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"城阳","value":[120.39631,36.307064,15],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"石景山","value":[116.222982,39.906611,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长沙","value":[112.938814,28.228209,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"安徽","value":[117.284923,31.861184,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"昆山","value":[120.980737,31.385598,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"徐汇","value":[121.436525,31.188523,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"东港","value":[124.152705,39.863008,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"廊坊","value":[116.683752,39.538047,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鞍山","value":[122.994329,41.108647,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"海陵","value":[119.919425,32.491016,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"黑龙江","value":[126.661669,45.742347,-198],"symbolSize":8,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"西藏","value":[91.117212,29.646923,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"河南","value":[113.274379,34.445122,0],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"湖南","value":[112.98381,28.112444,-1],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"佛山","value":[113.121416,23.021548,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"珲春","value":[130.366036,42.862821,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"扬州","value":[119.412966,32.39421,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"日照","value":[119.526888,35.416377,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"唐山","value":[118.180194,39.630867,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"同江","value":[132.510919,47.642707,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荣成","value":[122.486658,37.16516,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"虎林","value":[132.93721,45.762686,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"武汉","value":[114.305393,30.593099,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"合肥","value":[117.227239,31.820587,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"荆州","value":[112.239741,30.335165,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"丰台","value":[116.287149,39.858427,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"山东","value":[117.020359,36.66853,-6],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"舟山","value":[122.207216,29.985295,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"连云港","value":[119.221611,34.596653,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"西安","value":[108.940175,34.341568,3],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"济南","value":[117.12,36.651216,4],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"绵阳","value":[104.679114,31.46745,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"辽宁","value":[123.42944,41.835441,-58],"symbolSize":3,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"山西","value":[112.562398,37.873532,-3],"symbolSize":2,"itemStyle":{"normal":{"color":"#58B3CC"}}},{"name":"呼和浩特","value":[111.749181,40.842585,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"河西","value":[117.223372,39.109563,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兴和","value":[113.834173,40.872301,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"重庆","value":[106.551557,29.56301,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"胶州","value":[120.033382,36.26468,5],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"宁波","value":[121.550357,29.874557,10],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"滨海","value":[119.820831,33.990334,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"太原","value":[112.548879,37.87059,2],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"鸡西","value":[130.969333,45.295075,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"兰山","value":[118.347707,35.051729,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"阳泉","value":[113.580519,37.856972,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"勃利","value":[130.592171,45.755063,1],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}},{"name":"长春","value":[125.323544,43.817072,8],"symbolSize":2,"itemStyle":{"normal":{"color":"#F58158"}}}],"moveLines":[{"fromName":"黑龙江","toName":"珠海","coords":[[126.661669,45.742347],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"舒兰","coords":[[126.661669,45.742347],[126.965607,44.406106]]},{"fromName":"黑龙江","toName":"大连","coords":[[126.661669,45.742347],[121.614682,38.914003]]},{"fromName":"辽宁","toName":"集安","coords":[[123.42944,41.835441],[126.194031,41.125307]]},{"fromName":"吉林","toName":"抚顺","coords":[[126.549572,43.837883],[123.957208,41.880872]]},{"fromName":"山东","toName":"南京","coords":[[117.020359,36.66853],[118.796877,32.060255]]},{"fromName":"北京","toName":"沈阳","coords":[[116.407526,39.90403],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"环翠","coords":[[126.661669,45.742347],[122.123444,37.501991]]},{"fromName":"天津","toName":"大连","coords":[[117.200983,39.084158],[121.614682,38.914003]]},{"fromName":"吉林","toName":"兴和","coords":[[126.549572,43.837883],[113.834173,40.872301]]},{"fromName":"河北","toName":"勃利","coords":[[114.475704,38.584854],[130.592171,45.755063]]},{"fromName":"吉林","toName":"大连","coords":[[126.549572,43.837883],[121.614682,38.914003]]},{"fromName":"吉林","toName":"沈阳","coords":[[126.549572,43.837883],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"闵行","coords":[[126.661669,45.742347],[121.381709,31.112813]]},{"fromName":"天津","toName":"朝阳","coords":[[117.200983,39.084158],[116.443108,39.92147]]},{"fromName":"吉林","toName":"黄岛","coords":[[126.549572,43.837883],[120.04619,35.872664]]},{"fromName":"内蒙古","toName":"上海","coords":[[111.765618,40.817498],[121.473701,31.230416]]},{"fromName":"内蒙古","toName":"南京","coords":[[111.765618,40.817498],[118.796877,32.060255]]},{"fromName":"辽宁","toName":"杭州","coords":[[123.42944,41.835441],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"海城","coords":[[126.661669,45.742347],[122.685217,40.882377]]},{"fromName":"吉林","toName":"西城","coords":[[126.549572,43.837883],[116.365868,39.912289]]},{"fromName":"四川","toName":"上海","coords":[[104.075931,30.651652],[121.473701,31.230416]]},{"fromName":"黑龙江","toName":"西城","coords":[[126.661669,45.742347],[116.365868,39.912289]]},{"fromName":"吉林","toName":"丹东","coords":[[126.549572,43.837883],[124.354707,40.0005]]},{"fromName":"吉林","toName":"宁波","coords":[[126.549572,43.837883],[121.550357,29.874557]]},{"fromName":"辽宁","toName":"海淀","coords":[[123.42944,41.835441],[116.298056,39.959912]]},{"fromName":"辽宁","toName":"青岛","coords":[[123.42944,41.835441],[120.38264,36.067082]]},{"fromName":"吉林","toName":"苏州","coords":[[126.549572,43.837883],[120.585316,31.298886]]},{"fromName":"黑龙江","toName":"抚顺","coords":[[126.661669,45.742347],[123.957208,41.880872]]},{"fromName":"吉林","toName":"临安","coords":[[126.549572,43.837883],[119.724733,30.233873]]},{"fromName":"辽宁","toName":"烟台","coords":[[123.42944,41.835441],[121.447935,37.463822]]},{"fromName":"黑龙江","toName":"海淀","coords":[[126.661669,45.742347],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"南昌","coords":[[126.661669,45.742347],[115.858198,28.682892]]},{"fromName":"内蒙古","toName":"沈阳","coords":[[111.765618,40.817498],[123.431475,41.805698]]},{"fromName":"山西","toName":"城阳","coords":[[112.562398,37.873532],[120.39631,36.307064]]},{"fromName":"吉林","toName":"广州","coords":[[126.549572,43.837883],[113.264435,23.129163]]},{"fromName":"上海","toName":"沈阳","coords":[[121.473701,31.230416],[123.431475,41.805698]]},{"fromName":"四川","toName":"阳泉","coords":[[104.075931,30.651652],[113.580519,37.856972]]},{"fromName":"河北","toName":"桦川","coords":[[114.475704,38.584854],[130.719081,47.023001]]},{"fromName":"内蒙古","toName":"海淀","coords":[[111.765618,40.817498],[116.298056,39.959912]]},{"fromName":"安徽","toName":"河北","coords":[[117.284923,31.861184],[114.475704,38.584854]]},{"fromName":"辽宁","toName":"呼和浩特","coords":[[123.42944,41.835441],[111.749181,40.842585]]},{"fromName":"广西","toName":"茂名","coords":[[108.327546,22.815478],[110.925456,21.662999]]},{"fromName":"吉林","toName":"东城","coords":[[126.549572,43.837883],[116.416357,39.928353]]},{"fromName":"内蒙古","toName":"盘锦","coords":[[111.765618,40.817498],[122.070714,41.119997]]},{"fromName":"山东","toName":"哈尔滨","coords":[[117.020359,36.66853],[126.534967,45.803775]]},{"fromName":"黑龙江","toName":"沈阳","coords":[[126.661669,45.742347],[123.431475,41.805698]]},{"fromName":"黑龙江","toName":"丰台","coords":[[126.661669,45.742347],[116.287149,39.858427]]},{"fromName":"四川","toName":"盘锦","coords":[[104.075931,30.651652],[122.070714,41.119997]]},{"fromName":"黑龙江","toName":"皇姑","coords":[[126.661669,45.742347],[123.44197,41.824796]]},{"fromName":"河北","toName":"虎林","coords":[[114.475704,38.584854],[132.93721,45.762686]]},{"fromName":"辽宁","toName":"宝山","coords":[[123.42944,41.835441],[131.401589,46.577167]]},{"fromName":"黑龙江","toName":"吉林","coords":[[126.661669,45.742347],[126.549572,43.837883]]},{"fromName":"黑龙江","toName":"青岛","coords":[[126.661669,45.742347],[120.38264,36.067082]]},{"fromName":"吉林","toName":"烟台","coords":[[126.549572,43.837883],[121.447935,37.463822]]},{"fromName":"山东","toName":"临江","coords":[[117.020359,36.66853],[126.918087,41.811979]]},{"fromName":"黑龙江","toName":"黄岛","coords":[[126.661669,45.742347],[120.04619,35.872664]]},{"fromName":"吉林","toName":"石家庄","coords":[[126.549572,43.837883],[114.51486,38.042307]]},{"fromName":"吉林","toName":"汤原","coords":[[126.549572,43.837883],[129.905072,46.730706]]},{"fromName":"黑龙江","toName":"临江","coords":[[126.661669,45.742347],[126.918087,41.811979]]},{"fromName":"吉林","toName":"济南","coords":[[126.549572,43.837883],[117.12,36.651216]]},{"fromName":"吉林","toName":"太原","coords":[[126.549572,43.837883],[112.548879,37.87059]]},{"fromName":"吉林","toName":"威海","coords":[[126.549572,43.837883],[122.12042,37.513068]]},{"fromName":"湖北","toName":"深圳","coords":[[114.341862,30.546498],[114.057868,22.543099]]},{"fromName":"内蒙古","toName":"荣成","coords":[[111.765618,40.817498],[122.486658,37.16516]]},{"fromName":"辽宁","toName":"郑州","coords":[[123.42944,41.835441],[113.625368,34.7466]]},{"fromName":"黑龙江","toName":"朝阳","coords":[[126.661669,45.742347],[116.443108,39.92147]]},{"fromName":"吉林","toName":"昆山","coords":[[126.549572,43.837883],[120.980737,31.385598]]},{"fromName":"吉林","toName":"双城","coords":[[126.549572,43.837883],[126.312745,45.383263]]},{"fromName":"黑龙江","toName":"克拉玛依","coords":[[126.661669,45.742347],[84.889207,45.579889]]},{"fromName":"辽宁","toName":"上海","coords":[[123.42944,41.835441],[121.473701,31.230416]]},{"fromName":"吉林","toName":"海阳","coords":[[126.549572,43.837883],[121.158434,36.776378]]},{"fromName":"吉林","toName":"宣武门外东大街","coords":[[126.549572,43.837883],[116.378888,39.899332]]},{"fromName":"山东","toName":"海淀","coords":[[117.020359,36.66853],[116.298056,39.959912]]},{"fromName":"内蒙古","toName":"威海","coords":[[111.765618,40.817498],[122.12042,37.513068]]},{"fromName":"黑龙江","toName":"晋中","coords":[[126.661669,45.742347],[112.752695,37.687024]]},{"fromName":"西藏","toName":"广州","coords":[[91.117212,29.646923],[113.264435,23.129163]]},{"fromName":"辽宁","toName":"无锡","coords":[[123.42944,41.835441],[120.31191,31.49117]]},{"fromName":"黑龙江","toName":"城阳","coords":[[126.661669,45.742347],[120.39631,36.307064]]},{"fromName":"河北","toName":"丰台","coords":[[114.475704,38.584854],[116.287149,39.858427]]},{"fromName":"黑龙江","toName":"扬州","coords":[[126.661669,45.742347],[119.412966,32.39421]]},{"fromName":"辽宁","toName":"天津","coords":[[123.42944,41.835441],[117.200983,39.084158]]},{"fromName":"吉林","toName":"扬州","coords":[[126.549572,43.837883],[119.412966,32.39421]]},{"fromName":"吉林","toName":"嘉兴","coords":[[126.549572,43.837883],[120.755486,30.746129]]},{"fromName":"河北","toName":"延寿","coords":[[114.475704,38.584854],[128.331644,45.451897]]},{"fromName":"吉林","toName":"义乌","coords":[[126.549572,43.837883],[120.075058,29.306841]]},{"fromName":"吉林","toName":"张家港","coords":[[126.549572,43.837883],[120.553284,31.870367]]},{"fromName":"辽宁","toName":"贵阳","coords":[[123.42944,41.835441],[106.630154,26.647661]]},{"fromName":"吉林","toName":"辽宁","coords":[[126.549572,43.837883],[123.42944,41.835441]]},{"fromName":"河南","toName":"营口","coords":[[113.274379,34.445122],[122.235418,40.667012]]},{"fromName":"吉林","toName":"合肥","coords":[[126.549572,43.837883],[117.227239,31.820587]]},{"fromName":"黑龙江","toName":"苏州","coords":[[126.661669,45.742347],[120.585316,31.298886]]},{"fromName":"黑龙江","toName":"榆树","coords":[[126.661669,45.742347],[126.533146,44.840288]]},{"fromName":"吉林","toName":"常熟","coords":[[126.549572,43.837883],[120.752481,31.654376]]},{"fromName":"吉林","toName":"乳山","coords":[[126.549572,43.837883],[121.539765,36.919816]]},{"fromName":"四川","toName":"青岛","coords":[[104.075931,30.651652],[120.38264,36.067082]]},{"fromName":"黑龙江","toName":"深圳","coords":[[126.661669,45.742347],[114.057868,22.543099]]},{"fromName":"天津","toName":"东城","coords":[[117.200983,39.084158],[116.416357,39.928353]]},{"fromName":"黑龙江","toName":"上海","coords":[[126.661669,45.742347],[121.473701,31.230416]]},{"fromName":"天津","toName":"宁波","coords":[[117.200983,39.084158],[121.550357,29.874557]]},{"fromName":"吉林","toName":"海门","coords":[[126.549572,43.837883],[121.181615,31.871173]]},{"fromName":"山西","toName":"沈阳","coords":[[112.562398,37.873532],[123.431475,41.805698]]},{"fromName":"吉林","toName":"成都","coords":[[126.549572,43.837883],[104.066541,30.572269]]},{"fromName":"吉林","toName":"南昌","coords":[[126.549572,43.837883],[115.858198,28.682892]]},{"fromName":"黑龙江","toName":"常州","coords":[[126.661669,45.742347],[119.973987,31.810689]]},{"fromName":"内蒙古","toName":"兰山","coords":[[111.765618,40.817498],[118.347707,35.051729]]},{"fromName":"吉林","toName":"河南","coords":[[126.549572,43.837883],[113.274379,34.445122]]},{"fromName":"黑龙江","toName":"福田","coords":[[126.661669,45.742347],[114.055036,22.52153]]},{"fromName":"吉林","toName":"常州","coords":[[126.549572,43.837883],[119.973987,31.810689]]},{"fromName":"吉林","toName":"双流","coords":[[126.549572,43.837883],[103.923648,30.574473]]},{"fromName":"吉林","toName":"潍坊","coords":[[126.549572,43.837883],[119.161756,36.706774]]},{"fromName":"吉林","toName":"延安","coords":[[126.549572,43.837883],[109.489727,36.585455]]},{"fromName":"辽宁","toName":"长春","coords":[[123.42944,41.835441],[125.323544,43.817072]]},{"fromName":"黑龙江","toName":"南京","coords":[[126.661669,45.742347],[118.796877,32.060255]]},{"fromName":"辽宁","toName":"和平","coords":[[123.42944,41.835441],[117.21451,39.116949]]},{"fromName":"北京","toName":"哈尔滨","coords":[[116.407526,39.90403],[126.534967,45.803775]]},{"fromName":"吉林","toName":"武汉","coords":[[126.549572,43.837883],[114.305393,30.593099]]},{"fromName":"吉林","toName":"海陵","coords":[[126.549572,43.837883],[119.919425,32.491016]]},{"fromName":"吉林","toName":"日照","coords":[[126.549572,43.837883],[119.526888,35.416377]]},{"fromName":"吉林","toName":"台州","coords":[[126.549572,43.837883],[121.420757,28.656386]]},{"fromName":"辽宁","toName":"厦门","coords":[[123.42944,41.835441],[118.089425,24.479834]]},{"fromName":"黑龙江","toName":"贵阳","coords":[[126.661669,45.742347],[106.630154,26.647661]]},{"fromName":"吉林","toName":"鞍山","coords":[[126.549572,43.837883],[122.994329,41.108647]]},{"fromName":"辽宁","toName":"荣成","coords":[[123.42944,41.835441],[122.486658,37.16516]]},{"fromName":"黑龙江","toName":"天津","coords":[[126.661669,45.742347],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"河西","coords":[[126.661669,45.742347],[117.223372,39.109563]]},{"fromName":"黑龙江","toName":"秦皇岛","coords":[[126.661669,45.742347],[119.600493,39.935385]]},{"fromName":"吉林","toName":"荆州","coords":[[126.549572,43.837883],[112.239741,30.335165]]},{"fromName":"黑龙江","toName":"东城","coords":[[126.661669,45.742347],[116.416357,39.928353]]},{"fromName":"吉林","toName":"即墨","coords":[[126.549572,43.837883],[120.447128,36.389639]]},{"fromName":"辽宁","toName":"西城","coords":[[123.42944,41.835441],[116.365868,39.912289]]},{"fromName":"黑龙江","toName":"大兴","coords":[[126.661669,45.742347],[116.341395,39.726929]]},{"fromName":"河北","toName":"哈尔滨","coords":[[114.475704,38.584854],[126.534967,45.803775]]},{"fromName":"黑龙江","toName":"江苏","coords":[[126.661669,45.742347],[118.763232,32.061707]]},{"fromName":"吉林","toName":"和平","coords":[[126.549572,43.837883],[117.21451,39.116949]]},{"fromName":"江苏","toName":"鸡东","coords":[[118.763232,32.061707],[131.12408,45.260412]]},{"fromName":"辽宁","toName":"辉南","coords":[[123.42944,41.835441],[126.046912,42.684993]]},{"fromName":"吉林","toName":"深圳","coords":[[126.549572,43.837883],[114.057868,22.543099]]},{"fromName":"福建","toName":"泰顺","coords":[[119.295144,26.10078],[119.717649,27.556884]]},{"fromName":"上海","toName":"深圳","coords":[[121.473701,31.230416],[114.057868,22.543099]]},{"fromName":"吉林","toName":"秦皇岛","coords":[[126.549572,43.837883],[119.600493,39.935385]]},{"fromName":"吉林","toName":"徐汇","coords":[[126.549572,43.837883],[121.436525,31.188523]]},{"fromName":"吉林","toName":"石景山","coords":[[126.549572,43.837883],[116.222982,39.906611]]},{"fromName":"辽宁","toName":"城阳","coords":[[123.42944,41.835441],[120.39631,36.307064]]},{"fromName":"黑龙江","toName":"威海","coords":[[126.661669,45.742347],[122.12042,37.513068]]},{"fromName":"黑龙江","toName":"惠州","coords":[[126.661669,45.742347],[114.416196,23.111847]]},{"fromName":"吉林","toName":"龙口","coords":[[126.549572,43.837883],[120.477813,37.646108]]},{"fromName":"黑龙江","toName":"四平","coords":[[126.661669,45.742347],[124.350398,43.16642]]},{"fromName":"吉林","toName":"南充","coords":[[126.549572,43.837883],[106.110698,30.837793]]},{"fromName":"河北","toName":"东港","coords":[[114.475704,38.584854],[124.152705,39.863008]]},{"fromName":"辽宁","toName":"西安","coords":[[123.42944,41.835441],[108.940175,34.341568]]},{"fromName":"内蒙古","toName":"滨海","coords":[[111.765618,40.817498],[119.820831,33.990334]]},{"fromName":"河南","toName":"青岛","coords":[[113.274379,34.445122],[120.38264,36.067082]]},{"fromName":"黑龙江","toName":"昆山","coords":[[126.661669,45.742347],[120.980737,31.385598]]},{"fromName":"辽宁","toName":"长沙","coords":[[123.42944,41.835441],[112.938814,28.228209]]},{"fromName":"吉林","toName":"哈尔滨","coords":[[126.549572,43.837883],[126.534967,45.803775]]},{"fromName":"河北","toName":"尚志","coords":[[114.475704,38.584854],[128.009895,45.209586]]},{"fromName":"辽宁","toName":"东城","coords":[[123.42944,41.835441],[116.416357,39.928353]]},{"fromName":"辽宁","toName":"珠海","coords":[[123.42944,41.835441],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"铁岭","coords":[[126.661669,45.742347],[123.726166,42.223769]]},{"fromName":"黑龙江","toName":"蓬莱","coords":[[126.661669,45.742347],[120.758848,37.810661]]},{"fromName":"北京","toName":"天津","coords":[[116.407526,39.90403],[117.200983,39.084158]]},{"fromName":"内蒙古","toName":"天津","coords":[[111.765618,40.817498],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"宁波","coords":[[126.661669,45.742347],[121.550357,29.874557]]},{"fromName":"吉林","toName":"上海","coords":[[126.549572,43.837883],[121.473701,31.230416]]},{"fromName":"辽宁","toName":"佛山","coords":[[123.42944,41.835441],[113.121416,23.021548]]},{"fromName":"吉林","toName":"长宁","coords":[[126.549572,43.837883],[121.424624,31.220367]]},{"fromName":"黑龙江","toName":"珲春","coords":[[126.661669,45.742347],[130.366036,42.862821]]},{"fromName":"山东","toName":"黄浦","coords":[[117.020359,36.66853],[121.484443,31.231763]]},{"fromName":"辽宁","toName":"威海","coords":[[123.42944,41.835441],[122.12042,37.513068]]},{"fromName":"天津","toName":"长春","coords":[[117.200983,39.084158],[125.323544,43.817072]]},{"fromName":"新疆","toName":"上海","coords":[[87.627704,43.793026],[121.473701,31.230416]]},{"fromName":"河北","toName":"鸡西","coords":[[114.475704,38.584854],[130.969333,45.295075]]},{"fromName":"陕西","toName":"呼和浩特","coords":[[108.954239,34.265472],[111.749181,40.842585]]},{"fromName":"吉林","toName":"连云港","coords":[[126.549572,43.837883],[119.221611,34.596653]]},{"fromName":"黑龙江","toName":"杭州","coords":[[126.661669,45.742347],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"嘉兴","coords":[[126.661669,45.742347],[120.755486,30.746129]]},{"fromName":"陕西","toName":"盘锦","coords":[[108.954239,34.265472],[122.070714,41.119997]]},{"fromName":"河北","toName":"同江","coords":[[114.475704,38.584854],[132.510919,47.642707]]},{"fromName":"吉林","toName":"杭州","coords":[[126.549572,43.837883],[120.15507,30.274085]]},{"fromName":"黑龙江","toName":"舟山","coords":[[126.661669,45.742347],[122.207216,29.985295]]},{"fromName":"河南","toName":"大连","coords":[[113.274379,34.445122],[121.614682,38.914003]]},{"fromName":"辽宁","toName":"绵阳","coords":[[123.42944,41.835441],[104.679114,31.46745]]},{"fromName":"吉林","toName":"溆浦","coords":[[126.549572,43.837883],[110.594921,27.908281]]},{"fromName":"吉林","toName":"朝阳","coords":[[126.549572,43.837883],[116.443108,39.92147]]},{"fromName":"吉林","toName":"无锡","coords":[[126.549572,43.837883],[120.31191,31.49117]]},{"fromName":"浙江","toName":"沈阳","coords":[[120.152792,30.267447],[123.431475,41.805698]]},{"fromName":"吉林","toName":"湖里","coords":[[126.549572,43.837883],[118.146769,24.512905]]},{"fromName":"黑龙江","toName":"无锡","coords":[[126.661669,45.742347],[120.31191,31.49117]]},{"fromName":"黑龙江","toName":"长宁","coords":[[126.661669,45.742347],[121.424624,31.220367]]},{"fromName":"辽宁","toName":"胶州","coords":[[123.42944,41.835441],[120.033382,36.26468]]},{"fromName":"吉林","toName":"青岛","coords":[[126.549572,43.837883],[120.38264,36.067082]]},{"fromName":"河北","toName":"海淀","coords":[[114.475704,38.584854],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"厦门","coords":[[126.661669,45.742347],[118.089425,24.479834]]},{"fromName":"黑龙江","toName":"中山","coords":[[126.661669,45.742347],[113.392782,22.517646]]},{"fromName":"河北","toName":"太原","coords":[[114.475704,38.584854],[112.548879,37.87059]]},{"fromName":"新疆","toName":"吉林","coords":[[87.627704,43.793026],[126.549572,43.837883]]},{"fromName":"吉林","toName":"武侯","coords":[[126.549572,43.837883],[104.04339,30.641982]]},{"fromName":"北京","toName":"廊坊","coords":[[116.407526,39.90403],[116.683752,39.538047]]},{"fromName":"浙江","toName":"临汾","coords":[[120.152792,30.267447],[111.518976,36.088005]]},{"fromName":"湖北","toName":"天津","coords":[[114.341862,30.546498],[117.200983,39.084158]]},{"fromName":"黑龙江","toName":"泉州","coords":[[126.661669,45.742347],[118.675676,24.874132]]},{"fromName":"黑龙江","toName":"温州","coords":[[126.661669,45.742347],[120.699367,27.994267]]},{"fromName":"黑龙江","toName":"唐山","coords":[[126.661669,45.742347],[118.180194,39.630867]]},{"fromName":"北京","toName":"铁岭","coords":[[116.407526,39.90403],[123.726166,42.223769]]},{"fromName":"辽宁","toName":"即墨","coords":[[123.42944,41.835441],[120.447128,36.389639]]},{"fromName":"北京","toName":"上海","coords":[[116.407526,39.90403],[121.473701,31.230416]]},{"fromName":"黑龙江","toName":"广州","coords":[[126.661669,45.742347],[113.264435,23.129163]]},{"fromName":"吉林","toName":"廊坊","coords":[[126.549572,43.837883],[116.683752,39.538047]]},{"fromName":"黑龙江","toName":"荣成","coords":[[126.661669,45.742347],[122.486658,37.16516]]},{"fromName":"吉林","toName":"海城","coords":[[126.549572,43.837883],[122.685217,40.882377]]},{"fromName":"湖南","toName":"沈阳","coords":[[112.98381,28.112444],[123.431475,41.805698]]},{"fromName":"北京","toName":"青岛","coords":[[116.407526,39.90403],[120.38264,36.067082]]},{"fromName":"河北","toName":"大连","coords":[[114.475704,38.584854],[121.614682,38.914003]]},{"fromName":"内蒙古","toName":"珠海","coords":[[111.765618,40.817498],[113.576726,22.270715]]},{"fromName":"黑龙江","toName":"房山","coords":[[126.661669,45.742347],[116.143267,39.749144]]},{"fromName":"黑龙江","toName":"金坛","coords":[[126.661669,45.742347],[119.597897,31.723247]]},{"fromName":"河北","toName":"齐齐哈尔","coords":[[114.475704,38.584854],[126.661669,45.742347]]},{"fromName":"吉林","toName":"大兴","coords":[[126.549572,43.837883],[116.341395,39.726929]]},{"fromName":"吉林","toName":"密云","coords":[[126.549572,43.837883],[116.801346,40.35874]]},{"fromName":"黑龙江","toName":"和平","coords":[[126.661669,45.742347],[117.21451,39.116949]]},{"fromName":"内蒙古","toName":"龙井","coords":[[111.765618,40.817498],[129.427066,42.766311]]},{"fromName":"吉林","toName":"道里","coords":[[126.549572,43.837883],[126.616957,45.755777]]},{"fromName":"山东","toName":"武汉","coords":[[117.020359,36.66853],[114.305393,30.593099]]},{"fromName":"甘肃","toName":"常熟","coords":[[103.826308,36.059421],[120.752481,31.654376]]},{"fromName":"黑龙江","toName":"烟台","coords":[[126.661669,45.742347],[121.447935,37.463822]]},{"fromName":"吉林","toName":"海淀","coords":[[126.549572,43.837883],[116.298056,39.959912]]},{"fromName":"黑龙江","toName":"长沙","coords":[[126.661669,45.742347],[112.938814,28.228209]]},{"fromName":"天津","toName":"石家庄","coords":[[117.200983,39.084158],[114.51486,38.042307]]},{"fromName":"吉林","toName":"佛山","coords":[[126.549572,43.837883],[113.121416,23.021548]]},{"fromName":"辽宁","toName":"黄骅","coords":[[123.42944,41.835441],[117.330048,38.371383]]},{"fromName":"内蒙古","toName":"中山","coords":[[111.765618,40.817498],[113.392782,22.517646]]},{"fromName":"黑龙江","toName":"北京","coords":[[126.661669,45.742347],[116.407526,39.90403]]},{"fromName":"黑龙江","toName":"三河","coords":[[126.661669,45.742347],[117.078295,39.982718]]},{"fromName":"河北","toName":"庆安","coords":[[114.475704,38.584854],[127.507825,46.880102]]},{"fromName":"吉林","toName":"长沙","coords":[[126.549572,43.837883],[112.938814,28.228209]]},{"fromName":"黑龙江","toName":"西安","coords":[[126.661669,45.742347],[108.940175,34.341568]]},{"fromName":"内蒙古","toName":"朝阳","coords":[[111.765618,40.817498],[116.443108,39.92147]]},{"fromName":"辽宁","toName":"丰台","coords":[[123.42944,41.835441],[116.287149,39.858427]]},{"fromName":"黑龙江","toName":"延吉","coords":[[126.661669,45.742347],[129.508946,42.891255]]},{"fromName":"黑龙江","toName":"长春","coords":[[126.661669,45.742347],[125.323544,43.817072]]},{"fromName":"吉林","toName":"天津","coords":[[126.549572,43.837883],[117.200983,39.084158]]},{"fromName":"吉林","toName":"昌平","coords":[[126.549572,43.837883],[116.231204,40.22066]]},{"fromName":"吉林","toName":"赣州","coords":[[126.549572,43.837883],[114.93503,25.831829]]},{"fromName":"吉林","toName":"厦门","coords":[[126.549572,43.837883],[118.089425,24.479834]]},{"fromName":"内蒙古","toName":"秦皇岛","coords":[[111.765618,40.817498],[119.600493,39.935385]]},{"fromName":"内蒙古","toName":"菏泽","coords":[[111.765618,40.817498],[115.480656,35.23375]]},{"fromName":"吉林","toName":"闵行","coords":[[126.549572,43.837883],[121.381709,31.112813]]},{"fromName":"辽宁","toName":"石景山","coords":[[123.42944,41.835441],[116.222982,39.906611]]},{"fromName":"吉林","toName":"珠海","coords":[[126.549572,43.837883],[113.576726,22.270715]]},{"fromName":"内蒙古","toName":"青岛","coords":[[111.765618,40.817498],[120.38264,36.067082]]},{"fromName":"北京","toName":"海门","coords":[[116.407526,39.90403],[121.181615,31.871173]]},{"fromName":"内蒙古","toName":"长春","coords":[[111.765618,40.817498],[125.323544,43.817072]]},{"fromName":"吉林","toName":"城阳","coords":[[126.549572,43.837883],[120.39631,36.307064]]},{"fromName":"吉林","toName":"大同","coords":[[126.549572,43.837883],[113.61244,40.040295]]},{"fromName":"湖北","toName":"邢台","coords":[[114.341862,30.546498],[114.504844,37.070589]]},{"fromName":"吉林","toName":"胶州","coords":[[126.549572,43.837883],[120.033382,36.26468]]},{"fromName":"吉林","toName":"重庆","coords":[[126.549572,43.837883],[106.551557,29.56301]]},{"fromName":"河北","toName":"佳木斯","coords":[[114.475704,38.584854],[130.318917,46.799923]]},{"fromName":"甘肃","toName":"大连","coords":[[103.826308,36.059421],[121.614682,38.914003]]},{"fromName":"吉林","toName":"南京","coords":[[126.549572,43.837883],[118.796877,32.060255]]},{"fromName":"内蒙古","toName":"日照","coords":[[111.765618,40.817498],[119.526888,35.416377]]},{"fromName":"吉林","toName":"鸡东","coords":[[126.549572,43.837883],[131.12408,45.260412]]},{"fromName":"黑龙江","toName":"即墨","coords":[[126.661669,45.742347],[120.447128,36.389639]]},{"fromName":"江苏","toName":"朝阳","coords":[[118.763232,32.061707],[116.443108,39.92147]]},{"fromName":"吉林","toName":"南通","coords":[[126.549572,43.837883],[120.894291,31.980172]]},{"fromName":"黑龙江","toName":"张家港","coords":[[126.661669,45.742347],[120.553284,31.870367]]},{"fromName":"吉林","toName":"三河","coords":[[126.549572,43.837883],[117.078295,39.982718]]},{"fromName":"吉林","toName":"咸阳","coords":[[126.549572,43.837883],[108.708991,34.329605]]},{"fromName":"吉林","toName":"中山","coords":[[126.549572,43.837883],[113.392782,22.517646]]},{"fromName":"黑龙江","toName":"胶州","coords":[[126.661669,45.742347],[120.033382,36.26468]]}]};
    option15 = {
        backgroundColor: '#262829',
        title: {
            text: '朴姓人口迁徙图',
            left: 'center',
            textStyle: {
                color: '#49bdca'
            }
        },
        legend: {
            show: false,
            orient: 'vertical',
            top: 'bottom',
            left: 'right',
            data: ['地点', '线路'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: '地点',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                emphasis: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: 2,
            showEffectOn: 'render',
            itemStyle: {
                normal: {
                    color: '#46bee9'
                }
            },
            data: allData.citys
        }, {
            name: '线路',
            type: 'lines',
            coordinateSystem: 'geo',
            zlevel: 2,
            large: true,
            effect: {
                show: true,
                constantSpeed: 30,
                symbol: 'pin',
                symbolSize: 3,
                trailLength: 0,
            },
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: '#58B3CC'
                    }, {
                        offset: 1, color: '#F58158'
                    }], false),
                    width: 1,
                    opacity: 0.2,
                    curveness: 0.1
                }
            },
            data: allData.moveLines
        }]
    };
    myChart15.setOption(option15);

    var myChart16 = echarts.init(document.getElementById('main16'));
    var data = [
        {name: '海门', value: 9},
        {name: '鄂尔多斯', value: 12},
        {name: '招远', value: 12},
        {name: '舟山', value: 12},
        {name: '齐齐哈尔', value: 14},
        {name: '盐城', value: 15},
        {name: '赤峰', value: 16},
        {name: '青岛', value: 18},
        {name: '乳山', value: 18},
        {name: '金昌', value: 19},
        {name: '泉州', value: 21},
        {name: '莱西', value: 21},
        {name: '日照', value: 21},
        {name: '胶南', value: 22},
        {name: '南通', value: 23},
        {name: '拉萨', value: 24},
        {name: '云浮', value: 24},
        {name: '梅州', value: 25},
        {name: '文登', value: 25},
        {name: '上海', value: 25},
        {name: '攀枝花', value: 25},
        {name: '威海', value: 25},
        {name: '承德', value: 25},
        {name: '厦门', value: 26},
        {name: '汕尾', value: 26},
        {name: '潮州', value: 26},
        {name: '丹东', value: 27},
        {name: '太仓', value: 27},
        {name: '曲靖', value: 27},
        {name: '烟台', value: 28},
        {name: '福州', value: 29},
        {name: '瓦房店', value: 30},
        {name: '即墨', value: 30},
        {name: '抚顺', value: 31},
        {name: '玉溪', value: 31},
        {name: '张家口', value: 31},
        {name: '阳泉', value: 31},
        {name: '莱州', value: 32},
        {name: '湖州', value: 32},
        {name: '汕头', value: 32},
        {name: '昆山', value: 33},
        {name: '宁波', value: 33},
        {name: '湛江', value: 33},
        {name: '揭阳', value: 34},
        {name: '荣成', value: 34},
        {name: '连云港', value: 35},
        {name: '葫芦岛', value: 35},
        {name: '常熟', value: 36},
        {name: '东莞', value: 36},
        {name: '河源', value: 36},
        {name: '淮安', value: 36},
        {name: '泰州', value: 36},
        {name: '南宁', value: 37},
        {name: '营口', value: 37},
        {name: '惠州', value: 37},
        {name: '江阴', value: 37},
        {name: '蓬莱', value: 37},
        {name: '韶关', value: 38},
        {name: '嘉峪关', value: 38},
        {name: '广州', value: 38},
        {name: '延安', value: 38},
        {name: '太原', value: 39},
        {name: '清远', value: 39},
        {name: '中山', value: 39},
        {name: '昆明', value: 39},
        {name: '寿光', value: 40},
        {name: '盘锦', value: 40},
        {name: '长治', value: 41},
        {name: '深圳', value: 41},
        {name: '珠海', value: 42},
        {name: '宿迁', value: 43},
        {name: '咸阳', value: 43},
        {name: '铜川', value: 44},
        {name: '平度', value: 44},
        {name: '佛山', value: 44},
        {name: '海口', value: 44},
        {name: '江门', value: 45},
        {name: '章丘', value: 45},
        {name: '肇庆', value: 46},
        {name: '大连', value: 47},
        {name: '临汾', value: 47},
        {name: '吴江', value: 47},
        {name: '石嘴山', value: 49},
        {name: '沈阳', value: 50},
        {name: '苏州', value: 50},
        {name: '茂名', value: 50},
        {name: '嘉兴', value: 51},
        {name: '长春', value: 51},
        {name: '胶州', value: 52},
        {name: '银川', value: 52},
        {name: '张家港', value: 52},
        {name: '三门峡', value: 53},
        {name: '锦州', value: 54},
        {name: '南昌', value: 54},
        {name: '柳州', value: 54},
        {name: '三亚', value: 54},
        {name: '自贡', value: 56},
        {name: '吉林', value: 56},
        {name: '阳江', value: 57},
        {name: '泸州', value: 57},
        {name: '西宁', value: 57},
        {name: '宜宾', value: 58},
        {name: '呼和浩特', value: 58},
        {name: '成都', value: 58},
        {name: '大同', value: 58},
        {name: '镇江', value: 59},
        {name: '桂林', value: 59},
        {name: '张家界', value: 59},
        {name: '宜兴', value: 59},
        {name: '北海', value: 60},
        {name: '西安', value: 61},
        {name: '金坛', value: 62},
        {name: '东营', value: 62},
        {name: '牡丹江', value: 63},
        {name: '遵义', value: 63},
        {name: '绍兴', value: 63},
        {name: '扬州', value: 64},
        {name: '常州', value: 64},
        {name: '潍坊', value: 65},
        {name: '重庆', value: 66},
        {name: '台州', value: 67},
        {name: '南京', value: 67},
        {name: '滨州', value: 70},
        {name: '贵阳', value: 71},
        {name: '无锡', value: 71},
        {name: '本溪', value: 71},
        {name: '克拉玛依', value: 72},
        {name: '渭南', value: 72},
        {name: '马鞍山', value: 72},
        {name: '宝鸡', value: 72},
        {name: '焦作', value: 75},
        {name: '句容', value: 75},
        {name: '北京', value: 79},
        {name: '徐州', value: 79},
        {name: '衡水', value: 80},
        {name: '包头', value: 80},
        {name: '绵阳', value: 80},
        {name: '乌鲁木齐', value: 84},
        {name: '枣庄', value: 84},
        {name: '杭州', value: 84},
        {name: '淄博', value: 85},
        {name: '鞍山', value: 86},
        {name: '溧阳', value: 86},
        {name: '库尔勒', value: 86},
        {name: '安阳', value: 90},
        {name: '开封', value: 90},
        {name: '济南', value: 92},
        {name: '德阳', value: 93},
        {name: '温州', value: 95},
        {name: '九江', value: 96},
        {name: '邯郸', value: 98},
        {name: '临安', value: 99},
        {name: '兰州', value: 99},
        {name: '沧州', value: 100},
        {name: '临沂', value: 103},
        {name: '南充', value: 104},
        {name: '天津', value: 105},
        {name: '富阳', value: 106},
        {name: '泰安', value: 112},
        {name: '诸暨', value: 112},
        {name: '郑州', value: 113},
        {name: '哈尔滨', value: 114},
        {name: '聊城', value: 116},
        {name: '芜湖', value: 117},
        {name: '唐山', value: 119},
        {name: '平顶山', value: 119},
        {name: '邢台', value: 119},
        {name: '德州', value: 120},
        {name: '济宁', value: 120},
        {name: '荆州', value: 127},
        {name: '宜昌', value: 130},
        {name: '义乌', value: 132},
        {name: '丽水', value: 133},
        {name: '洛阳', value: 134},
        {name: '秦皇岛', value: 136},
        {name: '株洲', value: 143},
        {name: '石家庄', value: 147},
        {name: '莱芜', value: 148},
        {name: '常德', value: 152},
        {name: '保定', value: 153},
        {name: '湘潭', value: 154},
        {name: '金华', value: 157},
        {name: '岳阳', value: 169},
        {name: '长沙', value: 175},
        {name: '衢州', value: 177},
        {name: '廊坊', value: 193},
        {name: '菏泽', value: 194},
        {name: '合肥', value: 229},
        {name: '武汉', value: 273},
        {name: '大庆', value: 279}
    ];
    var geoCoordMap = {
        '海门':[121.15,31.89],
        '鄂尔多斯':[109.781327,39.608266],
        '招远':[120.38,37.35],
        '舟山':[122.207216,29.985295],
        '齐齐哈尔':[123.97,47.33],
        '盐城':[120.13,33.38],
        '赤峰':[118.87,42.28],
        '青岛':[120.33,36.07],
        '乳山':[121.52,36.89],
        '金昌':[102.188043,38.520089],
        '泉州':[118.58,24.93],
        '莱西':[120.53,36.86],
        '日照':[119.46,35.42],
        '胶南':[119.97,35.88],
        '南通':[121.05,32.08],
        '拉萨':[91.11,29.97],
        '云浮':[112.02,22.93],
        '梅州':[116.1,24.55],
        '文登':[122.05,37.2],
        '上海':[121.48,31.22],
        '攀枝花':[101.718637,26.582347],
        '威海':[122.1,37.5],
        '承德':[117.93,40.97],
        '厦门':[118.1,24.46],
        '汕尾':[115.375279,22.786211],
        '潮州':[116.63,23.68],
        '丹东':[124.37,40.13],
        '太仓':[121.1,31.45],
        '曲靖':[103.79,25.51],
        '烟台':[121.39,37.52],
        '福州':[119.3,26.08],
        '瓦房店':[121.979603,39.627114],
        '即墨':[120.45,36.38],
        '抚顺':[123.97,41.97],
        '玉溪':[102.52,24.35],
        '张家口':[114.87,40.82],
        '阳泉':[113.57,37.85],
        '莱州':[119.942327,37.177017],
        '湖州':[120.1,30.86],
        '汕头':[116.69,23.39],
        '昆山':[120.95,31.39],
        '宁波':[121.56,29.86],
        '湛江':[110.359377,21.270708],
        '揭阳':[116.35,23.55],
        '荣成':[122.41,37.16],
        '连云港':[119.16,34.59],
        '葫芦岛':[120.836932,40.711052],
        '常熟':[120.74,31.64],
        '东莞':[113.75,23.04],
        '河源':[114.68,23.73],
        '淮安':[119.15,33.5],
        '泰州':[119.9,32.49],
        '南宁':[108.33,22.84],
        '营口':[122.18,40.65],
        '惠州':[114.4,23.09],
        '江阴':[120.26,31.91],
        '蓬莱':[120.75,37.8],
        '韶关':[113.62,24.84],
        '嘉峪关':[98.289152,39.77313],
        '广州':[113.23,23.16],
        '延安':[109.47,36.6],
        '太原':[112.53,37.87],
        '清远':[113.01,23.7],
        '中山':[113.38,22.52],
        '昆明':[102.73,25.04],
        '寿光':[118.73,36.86],
        '盘锦':[122.070714,41.119997],
        '长治':[113.08,36.18],
        '深圳':[114.07,22.62],
        '珠海':[113.52,22.3],
        '宿迁':[118.3,33.96],
        '咸阳':[108.72,34.36],
        '铜川':[109.11,35.09],
        '平度':[119.97,36.77],
        '佛山':[113.11,23.05],
        '海口':[110.35,20.02],
        '江门':[113.06,22.61],
        '章丘':[117.53,36.72],
        '肇庆':[112.44,23.05],
        '大连':[121.62,38.92],
        '临汾':[111.5,36.08],
        '吴江':[120.63,31.16],
        '石嘴山':[106.39,39.04],
        '沈阳':[123.38,41.8],
        '苏州':[120.62,31.32],
        '茂名':[110.88,21.68],
        '嘉兴':[120.76,30.77],
        '长春':[125.35,43.88],
        '胶州':[120.03336,36.264622],
        '银川':[106.27,38.47],
        '张家港':[120.555821,31.875428],
        '三门峡':[111.19,34.76],
        '锦州':[121.15,41.13],
        '南昌':[115.89,28.68],
        '柳州':[109.4,24.33],
        '三亚':[109.511909,18.252847],
        '自贡':[104.778442,29.33903],
        '吉林':[126.57,43.87],
        '阳江':[111.95,21.85],
        '泸州':[105.39,28.91],
        '西宁':[101.74,36.56],
        '宜宾':[104.56,29.77],
        '呼和浩特':[111.65,40.82],
        '成都':[104.06,30.67],
        '大同':[113.3,40.12],
        '镇江':[119.44,32.2],
        '桂林':[110.28,25.29],
        '张家界':[110.479191,29.117096],
        '宜兴':[119.82,31.36],
        '北海':[109.12,21.49],
        '西安':[108.95,34.27],
        '金坛':[119.56,31.74],
        '东营':[118.49,37.46],
        '牡丹江':[129.58,44.6],
        '遵义':[106.9,27.7],
        '绍兴':[120.58,30.01],
        '扬州':[119.42,32.39],
        '常州':[119.95,31.79],
        '潍坊':[119.1,36.62],
        '重庆':[106.54,29.59],
        '台州':[121.420757,28.656386],
        '南京':[118.78,32.04],
        '滨州':[118.03,37.36],
        '贵阳':[106.71,26.57],
        '无锡':[120.29,31.59],
        '本溪':[123.73,41.3],
        '克拉玛依':[84.77,45.59],
        '渭南':[109.5,34.52],
        '马鞍山':[118.48,31.56],
        '宝鸡':[107.15,34.38],
        '焦作':[113.21,35.24],
        '句容':[119.16,31.95],
        '北京':[116.46,39.92],
        '徐州':[117.2,34.26],
        '衡水':[115.72,37.72],
        '包头':[110,40.58],
        '绵阳':[104.73,31.48],
        '乌鲁木齐':[87.68,43.77],
        '枣庄':[117.57,34.86],
        '杭州':[120.19,30.26],
        '淄博':[118.05,36.78],
        '鞍山':[122.85,41.12],
        '溧阳':[119.48,31.43],
        '库尔勒':[86.06,41.68],
        '安阳':[114.35,36.1],
        '开封':[114.35,34.79],
        '济南':[117,36.65],
        '德阳':[104.37,31.13],
        '温州':[120.65,28.01],
        '九江':[115.97,29.71],
        '邯郸':[114.47,36.6],
        '临安':[119.72,30.23],
        '兰州':[103.73,36.03],
        '沧州':[116.83,38.33],
        '临沂':[118.35,35.05],
        '南充':[106.110698,30.837793],
        '天津':[117.2,39.13],
        '富阳':[119.95,30.07],
        '泰安':[117.13,36.18],
        '诸暨':[120.23,29.71],
        '郑州':[113.65,34.76],
        '哈尔滨':[126.63,45.75],
        '聊城':[115.97,36.45],
        '芜湖':[118.38,31.33],
        '唐山':[118.02,39.63],
        '平顶山':[113.29,33.75],
        '邢台':[114.48,37.05],
        '德州':[116.29,37.45],
        '济宁':[116.59,35.38],
        '荆州':[112.239741,30.335165],
        '宜昌':[111.3,30.7],
        '义乌':[120.06,29.32],
        '丽水':[119.92,28.45],
        '洛阳':[112.44,34.7],
        '秦皇岛':[119.57,39.95],
        '株洲':[113.16,27.83],
        '石家庄':[114.48,38.03],
        '莱芜':[117.67,36.19],
        '常德':[111.69,29.05],
        '保定':[115.48,38.85],
        '湘潭':[112.91,27.87],
        '金华':[119.64,29.12],
        '岳阳':[113.09,29.37],
        '长沙':[113,28.21],
        '衢州':[118.88,28.97],
        '廊坊':[116.7,39.53],
        '菏泽':[115.480656,35.23375],
        '合肥':[117.27,31.86],
        '武汉':[114.31,30.52],
        '大庆':[125.03,46.58]
    };
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    option16 = {
        backgroundColor: '#262829',
        title: {
            text: '全国主要城市空气质量',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#49bdca'
            }
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            y: 'bottom',
            x:'right',
            data:['pm2.5'],
            textStyle: {
                color: '#00fff9'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series : [
            {
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ddb926'
                    }
                }
            },
            {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function (a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                zlevel: 1
            }
        ]
    };
    myChart16.setOption(option16);

    var myChart17 = echarts.init(document.getElementById('main17'));
    function randomData() {
        return Math.round(Math.random() * 1000);
    }
    option17 = {
        backgroundColor: '#262829',
        tooltip: {
            trigger: 'none'
        },
        visualMap: {
            show: false,
            min: 400,
            max: 1000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            color: ['#ff6700', '#e50707', '#c10808']
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
            name: 'iphone3',
            type: 'map',
            mapType: 'china',
            roam: false,
            showLegendSymbol: false,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#871718'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#871718'
                    },
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            data: [{
                name: '北京',
                value: randomData()
            }, {
                name: '天津',
                value: randomData()
            }, {
                name: '上海',
                value: randomData()
            }, {
                name: '重庆',
                value: randomData()
            }, {
                name: '河北',
                value: randomData()
            }, {
                name: '河南',
                value: randomData()
            }, {
                name: '云南',
                value: randomData()
            }, {
                name: '辽宁',
                value: randomData()
            }, {
                name: '黑龙江',
                value: randomData()
            }, {
                name: '湖南',
                value: randomData()
            }, {
                name: '安徽',
                value: randomData()
            }, {
                name: '山东',
                value: randomData()
            }, {
                name: '新疆',
                value: randomData()
            }, {
                name: '江苏',
                value: randomData()
            }, {
                name: '浙江',
                value: randomData()
            }, {
                name: '江西',
                value: randomData()
            }, {
                name: '湖北',
                value: randomData()
            }, {
                name: '广西',
                value: randomData()
            }, {
                name: '甘肃',
                value: randomData()
            }, {
                name: '山西',
                value: randomData()
            }, {
                name: '内蒙古',
                value: randomData()
            }, {
                name: '陕西',
                value: randomData()
            }, {
                name: '吉林',
                value: randomData()
            }, {
                name: '福建',
                value: randomData()
            }, {
                name: '贵州',
                value: randomData()
            }, {
                name: '广东',
                value: randomData()
            }, {
                name: '青海',
                value: randomData()
            }, {
                name: '西藏',
                value: randomData()
            }, {
                name: '四川',
                value: randomData()
            }, {
                name: '宁夏',
                value: randomData()
            }, {
                name: '海南',
                value: randomData()
            }, {
                name: '台湾',
                value: randomData()
            }, {
                name: '香港',
                value: randomData()
            }, {
                name: '澳门',
                value: randomData()
            }]
        }, {
            name: 'iphone4',
            type: 'map',
            mapType: 'china',
            showLegendSymbol: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: randomData()
            }, {
                name: '天津',
                value: randomData()
            }, {
                name: '上海',
                value: randomData()
            }, {
                name: '重庆',
                value: randomData()
            }, {
                name: '河北',
                value: randomData()
            }, {
                name: '安徽',
                value: randomData()
            }, {
                name: '新疆',
                value: randomData()
            }, {
                name: '浙江',
                value: randomData()
            }, {
                name: '江西',
                value: randomData()
            }, {
                name: '山西',
                value: randomData()
            }, {
                name: '内蒙古',
                value: randomData()
            }, {
                name: '吉林',
                value: randomData()
            }, {
                name: '福建',
                value: randomData()
            }, {
                name: '广东',
                value: randomData()
            }, {
                name: '西藏',
                value: randomData()
            }, {
                name: '四川',
                value: randomData()
            }, {
                name: '宁夏',
                value: randomData()
            }, {
                name: '香港',
                value: randomData()
            }, {
                name: '澳门',
                value: randomData()
            }]
        }, {
            name: 'iphone5',
            type: 'map',
            mapType: 'china',
            showLegendSymbol: false,
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                name: '北京',
                value: randomData()
            }, {
                name: '天津',
                value: randomData()
            }, {
                name: '上海',
                value: randomData()
            }, {
                name: '广东',
                value: randomData()
            }, {
                name: '台湾',
                value: randomData()
            }, {
                name: '香港',
                value: randomData()
            }, {
                name: '澳门',
                value: randomData()
            }]
        }]
    };
    myChart17.setOption(option17);


    //第八屏
    var myChart18 = echarts.init(document.getElementById('main18'));
    var geoCoordMap = {
        "海门":[121.15,31.89],
        "鄂尔多斯":[109.781327,39.608266],
        "招远":[120.38,37.35],
        "舟山":[122.207216,29.985295],
        "齐齐哈尔":[123.97,47.33],
        "盐城":[120.13,33.38],
        "赤峰":[118.87,42.28],
        "青岛":[120.33,36.07],
        "乳山":[121.52,36.89],
        "金昌":[102.188043,38.520089],
        "泉州":[118.58,24.93],
        "莱西":[120.53,36.86],
        "日照":[119.46,35.42],
        "胶南":[119.97,35.88],
        "南通":[121.05,32.08],
        "拉萨":[91.11,29.97],
        "云浮":[112.02,22.93],
        "梅州":[116.1,24.55],
        "文登":[122.05,37.2],
        "上海":[121.48,31.22],
        "攀枝花":[101.718637,26.582347],
        "威海":[122.1,37.5],
        "承德":[117.93,40.97],
        "厦门":[118.1,24.46],
        "汕尾":[115.375279,22.786211],
        "潮州":[116.63,23.68],
        "丹东":[124.37,40.13],
        "太仓":[121.1,31.45],
        "曲靖":[103.79,25.51],
        "烟台":[121.39,37.52],
        "福州":[119.3,26.08],
        "瓦房店":[121.979603,39.627114],
        "即墨":[120.45,36.38],
        "抚顺":[123.97,41.97],
        "玉溪":[102.52,24.35],
        "张家口":[114.87,40.82],
        "阳泉":[113.57,37.85],
        "莱州":[119.942327,37.177017],
        "湖州":[120.1,30.86],
        "汕头":[116.69,23.39],
        "昆山":[120.95,31.39],
        "宁波":[121.56,29.86],
        "湛江":[110.359377,21.270708],
        "揭阳":[116.35,23.55],
        "荣成":[122.41,37.16],
        "连云港":[119.16,34.59],
        "葫芦岛":[120.836932,40.711052],
        "常熟":[120.74,31.64],
        "东莞":[113.75,23.04],
        "河源":[114.68,23.73],
        "淮安":[119.15,33.5],
        "泰州":[119.9,32.49],
        "南宁":[108.33,22.84],
        "营口":[122.18,40.65],
        "惠州":[114.4,23.09],
        "江阴":[120.26,31.91],
        "蓬莱":[120.75,37.8],
        "韶关":[113.62,24.84],
        "嘉峪关":[98.289152,39.77313],
        "广州":[113.23,23.16],
        "延安":[109.47,36.6],
        "太原":[112.53,37.87],
        "清远":[113.01,23.7],
        "中山":[113.38,22.52],
        "昆明":[102.73,25.04],
        "寿光":[118.73,36.86],
        "盘锦":[122.070714,41.119997],
        "长治":[113.08,36.18],
        "深圳":[114.07,22.62],
        "珠海":[113.52,22.3],
        "宿迁":[118.3,33.96],
        "咸阳":[108.72,34.36],
        "铜川":[109.11,35.09],
        "平度":[119.97,36.77],
        "佛山":[113.11,23.05],
        "海口":[110.35,20.02],
        "江门":[113.06,22.61],
        "章丘":[117.53,36.72],
        "肇庆":[112.44,23.05],
        "大连":[121.62,38.92],
        "临汾":[111.5,36.08],
        "吴江":[120.63,31.16],
        "石嘴山":[106.39,39.04],
        "沈阳":[123.38,41.8],
        "苏州":[120.62,31.32],
        "茂名":[110.88,21.68],
        "嘉兴":[120.76,30.77],
        "长春":[125.35,43.88],
        "胶州":[120.03336,36.264622],
        "银川":[106.27,38.47],
        "张家港":[120.555821,31.875428],
        "三门峡":[111.19,34.76],
        "锦州":[121.15,41.13],
        "南昌":[115.89,28.68],
        "柳州":[109.4,24.33],
        "三亚":[109.511909,18.252847],
        "自贡":[104.778442,29.33903],
        "吉林":[126.57,43.87],
        "阳江":[111.95,21.85],
        "泸州":[105.39,28.91],
        "西宁":[101.74,36.56],
        "宜宾":[104.56,29.77],
        "呼和浩特":[111.65,40.82],
        "成都":[104.06,30.67],
        "大同":[113.3,40.12],
        "镇江":[119.44,32.2],
        "桂林":[110.28,25.29],
        "张家界":[110.479191,29.117096],
        "宜兴":[119.82,31.36],
        "北海":[109.12,21.49],
        "西安":[108.95,34.27],
        "金坛":[119.56,31.74],
        "东营":[118.49,37.46],
        "牡丹江":[129.58,44.6],
        "遵义":[106.9,27.7],
        "绍兴":[120.58,30.01],
        "扬州":[119.42,32.39],
        "常州":[119.95,31.79],
        "潍坊":[119.1,36.62],
        "重庆":[106.54,29.59],
        "台州":[121.420757,28.656386],
        "南京":[118.78,32.04],
        "滨州":[118.03,37.36],
        "贵阳":[106.71,26.57],
        "无锡":[120.29,31.59],
        "本溪":[123.73,41.3],
        "克拉玛依":[84.77,45.59],
        "渭南":[109.5,34.52],
        "马鞍山":[118.48,31.56],
        "宝鸡":[107.15,34.38],
        "焦作":[113.21,35.24],
        "句容":[119.16,31.95],
        "北京":[116.46,39.92],
        "徐州":[117.2,34.26],
        "衡水":[115.72,37.72],
        "包头":[110,40.58],
        "绵阳":[104.73,31.48],
        "乌鲁木齐":[87.68,43.77],
        "枣庄":[117.57,34.86],
        "杭州":[120.19,30.26],
        "淄博":[118.05,36.78],
        "鞍山":[122.85,41.12],
        "溧阳":[119.48,31.43],
        "库尔勒":[86.06,41.68],
        "安阳":[114.35,36.1],
        "开封":[114.35,34.79],
        "济南":[117,36.65],
        "德阳":[104.37,31.13],
        "温州":[120.65,28.01],
        "九江":[115.97,29.71],
        "邯郸":[114.47,36.6],
        "临安":[119.72,30.23],
        "兰州":[103.73,36.03],
        "沧州":[116.83,38.33],
        "临沂":[118.35,35.05],
        "南充":[106.110698,30.837793],
        "天津":[117.2,39.13],
        "富阳":[119.95,30.07],
        "泰安":[117.13,36.18],
        "诸暨":[120.23,29.71],
        "郑州":[113.65,34.76],
        "哈尔滨":[126.63,45.75],
        "聊城":[115.97,36.45],
        "芜湖":[118.38,31.33],
        "唐山":[118.02,39.63],
        "平顶山":[113.29,33.75],
        "邢台":[114.48,37.05],
        "德州":[116.29,37.45],
        "济宁":[116.59,35.38],
        "荆州":[112.239741,30.335165],
        "宜昌":[111.3,30.7],
        "义乌":[120.06,29.32],
        "丽水":[119.92,28.45],
        "洛阳":[112.44,34.7],
        "秦皇岛":[119.57,39.95],
        "株洲":[113.16,27.83],
        "石家庄":[114.48,38.03],
        "莱芜":[117.67,36.19],
        "常德":[111.69,29.05],
        "保定":[115.48,38.85],
        "湘潭":[112.91,27.87],
        "金华":[119.64,29.12],
        "岳阳":[113.09,29.37],
        "长沙":[113,28.21],
        "衢州":[118.88,28.97],
        "廊坊":[116.7,39.53],
        "菏泽":[115.480656,35.23375],
        "合肥":[117.27,31.86],
        "武汉":[114.31,30.52],
        "大庆":[125.03,46.58]
    };
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push(geoCoord.concat(data[i].value));
            }
        }
        return res;
    };
    option18 = {
        title: {
            text: '全国主要城市空气质量',
            sublink: 'http://www.pm25.in',
            left: 'center',
            textStyle: {
                color: '#00fff9',
                fontSize: '25'
            }
        },
        backgroundColor: '#262829',
        visualMap: {
            min: 0,
            max: 500,
            splitNumber: 5,
            inRange: {
                color: ['#d94e5d','#eac736','#50a3ba'].reverse()
            },
            textStyle: {
                color: '#00fff9'
            }
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [{
            name: 'AQI',
            type: 'heatmap',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "海门", value: 9},
                {name: "鄂尔多斯", value: 12},
                {name: "招远", value: 12},
                {name: "舟山", value: 12},
                {name: "齐齐哈尔", value: 14},
                {name: "盐城", value: 15},
                {name: "赤峰", value: 16},
                {name: "青岛", value: 18},
                {name: "乳山", value: 18},
                {name: "金昌", value: 19},
                {name: "泉州", value: 21},
                {name: "莱西", value: 21},
                {name: "日照", value: 21},
                {name: "胶南", value: 22},
                {name: "南通", value: 23},
                {name: "拉萨", value: 24},
                {name: "云浮", value: 24},
                {name: "梅州", value: 25},
                {name: "文登", value: 25},
                {name: "上海", value: 25},
                {name: "攀枝花", value: 25},
                {name: "威海", value: 25},
                {name: "承德", value: 25},
                {name: "厦门", value: 26},
                {name: "汕尾", value: 26},
                {name: "潮州", value: 26},
                {name: "丹东", value: 27},
                {name: "太仓", value: 27},
                {name: "曲靖", value: 27},
                {name: "烟台", value: 28},
                {name: "福州", value: 29},
                {name: "瓦房店", value: 30},
                {name: "即墨", value: 30},
                {name: "抚顺", value: 31},
                {name: "玉溪", value: 31},
                {name: "张家口", value: 31},
                {name: "阳泉", value: 31},
                {name: "莱州", value: 32},
                {name: "湖州", value: 32},
                {name: "汕头", value: 32},
                {name: "昆山", value: 33},
                {name: "宁波", value: 33},
                {name: "湛江", value: 33},
                {name: "揭阳", value: 34},
                {name: "荣成", value: 34},
                {name: "连云港", value: 35},
                {name: "葫芦岛", value: 35},
                {name: "常熟", value: 36},
                {name: "东莞", value: 36},
                {name: "河源", value: 36},
                {name: "淮安", value: 36},
                {name: "泰州", value: 36},
                {name: "南宁", value: 37},
                {name: "营口", value: 37},
                {name: "惠州", value: 37},
                {name: "江阴", value: 37},
                {name: "蓬莱", value: 37},
                {name: "韶关", value: 38},
                {name: "嘉峪关", value: 38},
                {name: "广州", value: 38},
                {name: "延安", value: 38},
                {name: "太原", value: 39},
                {name: "清远", value: 39},
                {name: "中山", value: 39},
                {name: "昆明", value: 39},
                {name: "寿光", value: 40},
                {name: "盘锦", value: 40},
                {name: "长治", value: 41},
                {name: "深圳", value: 41},
                {name: "珠海", value: 42},
                {name: "宿迁", value: 43},
                {name: "咸阳", value: 43},
                {name: "铜川", value: 44},
                {name: "平度", value: 44},
                {name: "佛山", value: 44},
                {name: "海口", value: 44},
                {name: "江门", value: 45},
                {name: "章丘", value: 45},
                {name: "肇庆", value: 46},
                {name: "大连", value: 47},
                {name: "临汾", value: 47},
                {name: "吴江", value: 47},
                {name: "石嘴山", value: 49},
                {name: "沈阳", value: 50},
                {name: "苏州", value: 50},
                {name: "茂名", value: 50},
                {name: "嘉兴", value: 51},
                {name: "长春", value: 51},
                {name: "胶州", value: 52},
                {name: "银川", value: 52},
                {name: "张家港", value: 52},
                {name: "三门峡", value: 53},
                {name: "锦州", value: 54},
                {name: "南昌", value: 54},
                {name: "柳州", value: 54},
                {name: "三亚", value: 54},
                {name: "自贡", value: 56},
                {name: "吉林", value: 56},
                {name: "阳江", value: 57},
                {name: "泸州", value: 57},
                {name: "西宁", value: 57},
                {name: "宜宾", value: 58},
                {name: "呼和浩特", value: 58},
                {name: "成都", value: 58},
                {name: "大同", value: 58},
                {name: "镇江", value: 59},
                {name: "桂林", value: 59},
                {name: "张家界", value: 59},
                {name: "宜兴", value: 59},
                {name: "北海", value: 60},
                {name: "西安", value: 61},
                {name: "金坛", value: 62},
                {name: "东营", value: 62},
                {name: "牡丹江", value: 63},
                {name: "遵义", value: 63},
                {name: "绍兴", value: 63},
                {name: "扬州", value: 64},
                {name: "常州", value: 64},
                {name: "潍坊", value: 65},
                {name: "重庆", value: 66},
                {name: "台州", value: 67},
                {name: "南京", value: 67},
                {name: "滨州", value: 70},
                {name: "贵阳", value: 71},
                {name: "无锡", value: 71},
                {name: "本溪", value: 71},
                {name: "克拉玛依", value: 72},
                {name: "渭南", value: 72},
                {name: "马鞍山", value: 72},
                {name: "宝鸡", value: 72},
                {name: "焦作", value: 75},
                {name: "句容", value: 75},
                {name: "北京", value: 79},
                {name: "徐州", value: 79},
                {name: "衡水", value: 80},
                {name: "包头", value: 80},
                {name: "绵阳", value: 80},
                {name: "乌鲁木齐", value: 84},
                {name: "枣庄", value: 84},
                {name: "杭州", value: 84},
                {name: "淄博", value: 85},
                {name: "鞍山", value: 86},
                {name: "溧阳", value: 86},
                {name: "库尔勒", value: 86},
                {name: "安阳", value: 90},
                {name: "开封", value: 90},
                {name: "济南", value: 92},
                {name: "德阳", value: 93},
                {name: "温州", value: 95},
                {name: "九江", value: 96},
                {name: "邯郸", value: 98},
                {name: "临安", value: 99},
                {name: "兰州", value: 99},
                {name: "沧州", value: 100},
                {name: "临沂", value: 103},
                {name: "南充", value: 104},
                {name: "天津", value: 105},
                {name: "富阳", value: 106},
                {name: "泰安", value: 112},
                {name: "诸暨", value: 112},
                {name: "郑州", value: 113},
                {name: "哈尔滨", value: 114},
                {name: "聊城", value: 116},
                {name: "芜湖", value: 117},
                {name: "唐山", value: 119},
                {name: "平顶山", value: 119},
                {name: "邢台", value: 119},
                {name: "德州", value: 120},
                {name: "济宁", value: 120},
                {name: "荆州", value: 127},
                {name: "宜昌", value: 130},
                {name: "义乌", value: 132},
                {name: "丽水", value: 133},
                {name: "洛阳", value: 134},
                {name: "秦皇岛", value: 136},
                {name: "株洲", value: 143},
                {name: "石家庄", value: 147},
                {name: "莱芜", value: 148},
                {name: "常德", value: 152},
                {name: "保定", value: 153},
                {name: "湘潭", value: 154},
                {name: "金华", value: 157},
                {name: "岳阳", value: 169},
                {name: "长沙", value: 175},
                {name: "衢州", value: 177},
                {name: "廊坊", value: 193},
                {name: "菏泽", value: 194},
                {name: "合肥", value: 229},
                {name: "武汉", value: 273},
                {name: "大庆", value: 279}
            ])
        }]
    };
    myChart18.setOption(option18);

});