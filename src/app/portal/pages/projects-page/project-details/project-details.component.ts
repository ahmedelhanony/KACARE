import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  projectDetails = {
    overview: [
      'PV-diesel hybrid systems in the Kingdom.',
      'Economic competitiveness of PV-diesel hybrid systems compared to conventional fuel systems. ',
      'Competitive business case to deploy PV-diesel hybrid systems in the Kingdom. ',
      'PV/diesel hybrids represent a major opportunity for a \'quick win" for solar energy in the Kingdom with clear and immediate economic benefit '
    ],
    date: '27 Months',
    image: 'assets/images/project.svg',
    technology: 'Desert Technologies ',
    location:'Jeddah Makkah Highway',
  }


  Highcharts: typeof Highcharts = Highcharts;
  OutstandingAmount: any = {
    chart: {
      type: 'pie',
      renderTo: 'container',
      // plotBackgroundColor: null,
      // plotBorderWidth: null,
      // plotShadow: false,
      width: 350,
      height: 350
    },
    title: {
      verticalAlign: 'bottom',
      // floating: true,
      text: 'Desert Technologies Share',
      // y: 20,
      align: 'center',
      style: {
        fontWeight: '300',
        color: '#1D252D',
        fontSize: '16',
        fontFamily: 'Avenir'
      }
    },
    tooltip: {
      enabled: false,
      shared: true,
      useHTML: true,
      headerFormat: '',
      pointFormat: `<div class="tooltip-chart">
                        <span class="circle" style="background-color: {point.color}"></span>
                        <div class="info">
                          <span class="font-16 font-weight-bold text-color-onyx">{point.name} : {point.y}</span>
                          <span class="font-14 text-color-gray">{point.percentage:.1f} %</span>
                        </div>
                     </div>`
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },

    // legend: {
    //   // symbolHeight: .001,
    //   // symbolWidth: .001,
    //   // symbolRadius: .001,
    //
    //   useHTML: true,
    //   labelFormatter: function (){
    //     return '<div class="wrapper"><div class="square" style="background: {point.color}"></div><div class="label"> {point.name} : {point.y} </div></div>';
    //   }
    //
    // },
    plotOptions: {

      pie: {
        // allowPointSelect: true,
        // showInLegend: true,
        // cursor: 'pointer',
        startAngle: 270,
        colors: [
          '#00ADEE',
          '#0080C5',
        ],
        dataLabels: {
          enabled: true,
          useHTML: true,

          format: '<div class="text-center"><span class="font-14 font-weight-bold">{point.percentage:.1f}%</span><br><span class="font-12 font-weight-normal">{point.y} SAR</span></div>',
          distance: -50,

        }
      }
    },

    series: [{
      name: 'Share',
      colorByPoint: true,
      data: [
        { name: 'K.A.CARE Share', y: 5702350,  sliced: true, selected: true },
        { name: 'The Total Cost of the project', y: 9702350, sliced: true, selected: true },
      ],

    }],

  };
  constructor() { }

  ngOnInit(): void {
  }

}
