window.addEventListener("load", function(){
  try {

    getequationThemeObject = localStorage.getItem("theme");
    getParseObject = JSON.parse(getequationThemeObject)
    ParsedObject = getParseObject;

    if (ParsedObject.settings.layout.darkMode) {

      var Theme = 'dark';

      Apex.tooltip = {
          theme: Theme
      }
      
      /**
        ==============================
        |    @Options Charts Script   |
        ==============================
      */
      
      /*
        ======================================
            Visitor Statistics | Options
        ======================================
      */
      
      
      // Total Visits
      
      var spark1 = {
      chart: {
          id: 'unique-visits',
          group: 'sparks2',
          type: 'line',
          height: 80,
          sparkline: {
              enabled: true
          },
          dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 2,
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
      tooltip: {
          x: {
              show: false
          },
          y: {
              title: {
                  formatter: function formatter(val) {
                      return '';
                  }
              }
          }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
            chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 45,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // Paid Visits
      
      var spark2 = {
      chart: {
        id: 'total-users',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
            chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }
      
      
      /*
        ===================================
            Unique Visitors | Options
        ===================================
      */
      
      var d_1options1 = {
      chart: {
          height: 350,
          type: 'bar',
          toolbar: {
            show: false,
          }
      },
      colors: ['#622bd7', '#ffbb44'],
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
              borderRadius: 10,
      
          },
      },
      dataLabels: {
          enabled: false
      },
      legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
              width: 10,
              height: 10,
              offsetX: -5,
              offsetY: 0
          },
          itemMargin: {
              horizontal: 10,
              vertical: 8
          }
      },
      grid: {
        borderColor: '#191e3a',
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
      },
      series: [{
          name: 'Direct',
          data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
      }, {
          name: 'Organic',
          data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
      }],
      xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: Theme,
          type: 'vertical',
          shadeIntensity: 0.3,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.8,
          stops: [0, 100]
        }
      },
      tooltip: {
          marker : {
              show: false,
          },
          theme: Theme,
          y: {
              formatter: function (val) {
                  return val
              }
          }
      },
      responsive: [
          { 
              breakpoint: 767,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 0,
                          columnWidth: "50%"
                      }
                  }
              }
          },
      ]
      }
      
      /*
        ==============================
            Statistics | Options
        ==============================
      */
      
      // Followers
      
      var d_1options3 = {
      chart: {
        id: 'sparkline1',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Sales',
        data: [38, 60, 38, 52, 36, 40, 28 ]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#4361ee'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .30,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // Referral
      
      var d_1options4 = {
      chart: {
        id: 'sparkline1',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Sales',
        data: [ 60, 28, 52, 38, 40, 36, 38]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#e7515a'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .30,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // Engagement Rate
      
      var d_1options5 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
          opacity: 1,
        },
        series: [{
          name: 'Sales',
          data: [28, 50, 36, 60, 38, 52, 38 ]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#00ab55'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .30,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
      }
      

    } else {
      
      var Theme = 'dark';
      
      Apex.tooltip = {
          theme: Theme
      }
      
      /**
        ==============================
        |    @Options Charts Script   |
        ==============================
      */
      
      /*
        ======================================
            Visitor Statistics | Options
        ======================================
      */
      
      
      // Total Visits
      
      var spark1 = {
      chart: {
          id: 'unique-visits',
          group: 'sparks2',
          type: 'line',
          height: 80,
          sparkline: {
              enabled: true
          },
          dropShadow: {
              enabled: true,
              top: 1,
              left: 1,
              blur: 2,
              color: '#e2a03f',
              opacity: 0.7,
          }
      },
      series: [{
          data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
          size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#e2a03f'],
      tooltip: {
          x: {
              show: false
          },
          y: {
              title: {
                  formatter: function formatter(val) {
                      return '';
                  }
              }
          }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
            chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 45,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      
      ]
      }
      
      // Paid Visits
      
      var spark2 = {
      chart: {
        id: 'total-users',
        group: 'sparks1',
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 1,
          blur: 3,
          color: '#009688',
          opacity: 0.7,
        }
      },
      series: [{
        data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
      }],
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      markers: {
        size: 0
      },
      grid: {
        padding: {
          top: 35,
          bottom: 0,
          left: 40
        }
      },
      colors: ['#009688'],
      tooltip: {
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return '';
            }
          }
        }
      },
      responsive: [{
          breakpoint: 1351,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      },
      {
          breakpoint: 1200,
          options: {
            chart: {
                height: 80,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 40
                }
            },
          },
      },
      {
          breakpoint: 576,
          options: {
            chart: {
                height: 95,
            },
            grid: {
                padding: {
                  top: 35,
                  bottom: 0,
                  left: 0
                }
            },
          },
      }
      ]
      }
      
      
      /*
        ===================================
            Unique Visitors | Options
        ===================================
      */
      
      var d_1options11111 = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
              show: false,
            }
        },
        colors: ['#622bd7', '#ffbb44'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadius: 10,
        
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 10,
                height: 10,
                offsetX: -5,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 10,
                vertical: 8
            }
        },
        grid: {
          borderColor: '#e0e6ed',
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Direct',
            data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
        }, {
            name: 'Organic',
            data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: Theme,
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        tooltip: {
            marker : {
                show: false,
            },
            theme: Theme,
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        responsive: [
            { 
                breakpoint: 767,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: "50%"
                        }
                    }
                }
            },
        ]
      }

      var d_1options1 = {
        chart: {
            type: 'bar',
            height: 350
        },
        /* colors: ['#622bd7', '#ffbb44'], */
        series: [{
            name: 'Syer',
            data: [27, 31, 35, 35, 38, 41, 41, 45]
        }, {
            name: 'Arkan',
            data: [21, 34, 38, 25, 29, 50, 44, 66]
        }, {
            name: 'RP',
            data: [12, 22, 18, 49, 54, 21, 60, 34]
        }, {
            name: 'Mirgab',
            data: [12, 18, 42, 38, 58, 56, 34, 57]
        }, {
            name: 'Burj',
            data: [56, 31, 21, 23, 34, 62, 41, 44]
        }, {
            name: 'DSQ',
            data: [25, 22, 34, 20, 46, 32, 19, 50]
        }],        
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded',
              /* borderRadius: 10, */
          },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
              width: 10,
              height: 10,
              offsetX: -5,
              offsetY: 0
          },
          itemMargin: {
              horizontal: 10,
              vertical: 8
          }
      },
        grid: {
            borderColor: '#e0e6ed',
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        yaxis: {
            title: {
                text: 'Total Leased'
            }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: Theme,
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        tooltip: {
            marker : {
                show: false,
            },
            theme: Theme,
            y: {
                formatter: function (val) {
                    return val + " leased ( Out of 50 Offices)"
                }
            }
        },
        responsive: [
          { 
              breakpoint: 767,
              options: {
                  plotOptions: {
                      bar: {
                          borderRadius: 0,
                          columnWidth: "50%"
                      }
                  }
              }
          },
      ]
    };

    var d_1options1_a = {
        series: [{
            name: 'Syer',
            data: [27, 3, 34, 24, 12, 20, 60, 54]
        }, {
            name: 'Arkan',
            data: [90, 23, 50, 28, 15, 12, 18, 44]
        }, {
            name: 'RP',
            data: [20, 56, 50, 35, 44, 12, 20, 60]
        }, {
            name: 'Mirgab',
            data: [40, 90, 50, 70, 18, 12, 80, 42]
        }, {
            name: 'Burj',
            data: [40, 25, 32, 17, 7, 68, 30, 51]
        }, {
            name: 'DSQ',
            data: [32, 40, 75, 18, 40, 24, 58, 34]
        }],
        chart: {
            type: 'area',
            height: 350,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
            tickPlacement: 'on'
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy'
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0.0,
                stops: [0, 90, 100]
            }
        },
        yaxis: {
            title: {
                text: 'Enquiries'
            }
        }
    };

    var d_1options1_b = {
      series: [{
        name: 'Syer',
        data: [1200, 1250, 1600, 1020, 890, 1714, 1400, 2000]
      }, {
        name: 'Arkan',
        data: [1000, 1110, 1200, 1300, 1600, 1500, 1000, 990]
      }, {
        name: 'RP',
        data: [820, 1250, 1600, 1020, 890, 950, 1400, 1780]
      }, {
        name: 'Mirqab',
        data: [960, 1250, 1600, 1020, 890, 1015, 1400, 1600]
      }, {
        name: 'Burj',
        data: [650, 900, 1300, 1020, 1210, 1567, 1400, 2000]
      }, {
        name: 'DSQ',
        data: [1700, 1250, 1600, 1020, 890, 990, 1400, 1630]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
      },
      yaxis: {
        title: {
          text: 'Income'
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };

    var d_1options1_bc = {
      series: [{
        name: 'Syer',
        data: [990, 1050, 1620, 1030, 1000, 1200, 840, 1100]
      }, {
        name: 'Arkan',
        data: [900, 1110, 1200, 1300, 1600, 1500, 1010, 910]
      }, {
        name: 'RP',
        data: [960, 1250, 1000, 1020, 890, 950, 1120, 1260]
      }, {
        name: 'Mirqab',
        data: [1000, 1000, 1100, 1020, 810, 1000, 800, 1300]
      }, {
        name: 'Burj',
        data: [800, 900, 1100, 1000, 1210, 1320, 900, 1800]
      }, {
        name: 'DSQ',
        data: [1100, 1250, 1300, 1020, 890, 990, 1000, 1100]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
      },
      yaxis: {
        title: {
          text: 'Income'
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };
      
      /*
        ==============================
            Statistics | Options
        ==============================
      */
      
      // Followers
      
      var d_1options3 = {
      chart: {
        id: 'sparkline1',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Sales',
        data: [38, 60, 38, 52, 36, 40, 28 ]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#4361ee'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // Referral
      
      var d_1options4 = {
      chart: {
        id: 'sparkline1',
        type: 'area',
        height: 160,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
          curve: 'smooth',
          width: 2,
      },
      series: [{
        name: 'Sales',
        data: [ 60, 28, 52, 38, 40, 36, 38]
      }],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      colors: ['#e7515a'],
      tooltip: {
        x: {
          show: false,
        }
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false
              }
          },
          padding: {
          top: 5,
          right: 0,
          left: 0
          }, 
      },
      fill: {
        type:"gradient",
        gradient: {
            type: "vertical",
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .40,
            opacityTo: .05,
            stops: [100, 100]
        }
      }
      }
      
      // Engagement Rate
      
      var d_1options5 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        fill: {
          opacity: 1,
        },
        series: [{
          name: 'Sales',
          data: [28, 50, 36, 60, 38, 52, 38 ]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#00ab55'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .40,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
      }

    }
      
      /**
          ==============================
          |    @Render Charts Script    |
          ==============================
      */


      /*
          ======================================
              Visitor Statistics | Script
          ======================================
      */

      // Total Visits
    if(document.querySelector("#total-users")){
      d_1C_1 = new ApexCharts(document.querySelector("#total-users"), spark1);
      d_1C_1.render();
    }

      // Paid Visits
    if(document.querySelector("#paid-visits")){
      d_1C_2 = new ApexCharts(document.querySelector("#paid-visits"), spark2);
      d_1C_2.render();
    }

      /*
          ===================================
              Unique Visitors | Script
          ===================================
      */

      var d_1C_3 = new ApexCharts(
          document.querySelector("#uniqueVisits"),
          d_1options1
      );
      d_1C_3.render();

      /*
          ===================================
              Enquiry: Area | Script
          ===================================
      */

        var d_1C_31 = new ApexCharts(
            document.querySelector("#enquiry_overview"),
            d_1options1_a
        );
        d_1C_31.render();

      /*
          ===================================
              Income: income stacked | Script
          ===================================
      */

        var d_1C_32 = new ApexCharts(
            document.querySelector("#income_details"),
            d_1options1_b
        );
        d_1C_32.render();

      /*
          ===================================
              Income: expense stacked | Script
          ===================================
      */

        var d_1C_33 = new ApexCharts(
            document.querySelector("#expense_details"),
            d_1options1_bc
        );
        d_1C_33.render();


      /*
          ==============================
              Statistics | Script
          ==============================
      */


      // Followers

      /* var d_1C_5 = new ApexCharts(document.querySelector("#hybrid_followers"), d_1options3);
      d_1C_5.render()

      // Referral

      var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_followers1"), d_1options4);
      d_1C_6.render()

      // Engagement Rate

      var d_1C_7 = new ApexCharts(document.querySelector("#hybrid_followers3"), d_1options5);
      d_1C_7.render() */



    /*
        =============================================
            Perfect Scrollbar | Notifications
        =============================================
    */
    const ps = new PerfectScrollbar(document.querySelector('.mt-container'));



    /**
     * =================================================================================================
     * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
     * =================================================================================================
     */

    document.querySelector('.theme-toggle').addEventListener('click', function() {

      getequationThemeObject = localStorage.getItem("theme");
      getParseObject = JSON.parse(getequationThemeObject)
      ParsedObject = getParseObject;

      // console.log(ParsedObject.settings.layout.darkMode)

      if (ParsedObject.settings.layout.darkMode) {

           /*
              ==============================
              |    @Re-Render Charts Script    |
              ==============================
          */
      
          /*
              ===================================
                  Unique Visitors | Script
              ===================================
          */
      
          d_1C_3.updateOptions({
          grid: {
                  borderColor: '#191e3a',
              },
          })
          
          /*
              ==============================
                  Statistics | Script
              ==============================
          */
      
      
          // Followers

          d_1C_5.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .30,
                  }
              }
          })
      
          // Referral

          d_1C_6.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .30,
                  }
              }
          })
      
          // Engagement Rate

          d_1C_7.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .30,
                  }
              }
          })
          
      } else {
          
          /*
              ==============================
              |    @Re-Render Charts Script    |
              ==============================
          */
      
          /*
              ===================================
                  Unique Visitors | Script
              ===================================
          */
      
          d_1C_3.updateOptions({
          grid: {
                  borderColor: '#e0e6ed',
              },
          })
        
          /*
              ==============================
                  Statistics | Script
              ==============================
          */
      
      
          // Followers

          d_1C_5.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .40,
                  }
              }
          })
      
          // Referral

          d_1C_6.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .40,
                  }
              }
          })
      
          // Engagement Rate

          d_1C_7.updateOptions({
              fill: {
                  type:"gradient",
                  gradient: {
                      opacityFrom: .40,
                  }
              }
          })

      }
     
  })


  } catch(e) {
    // statements
    console.log(e);
  }

})