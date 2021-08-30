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
    title: 'Composite Hydrogen Storage Tanks for Fuel Cell Vehicles',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
    image: 'assets/images/project.svg',
    technology: 'Desert Technologies',
    location:'Jeddah Makkah Highway',
    date: '27 Months',
    bidder: 'Novel Non-Metallic Solutions Manufacturing',
    value: 4000000,
    partners: 'Baker Hughes Dhahran Technology Center, ABCO Consulting, Gordon Plastics, Boston Materials',
    area: 'Green Hydrogen',
    type: 'Proof of Concept',
    overview: [
      'Design, manufacture and validate a prototype thermoplastic composite hydrogen storage tank (type IV) for use in fuel cell electric vehicles',
      'Demonstrate functionality and applicability of a new liner technology (ZRT) that eliminates hydrogen precooling needs',
      'All design and modelling will be done locally & component testing, manufacturing at a leading supplier, certification at a third-party supplier',
      'Breakthrough in “Green Hydrogen”; in line with current KSA and Aramco efforts to reduce carbon footprint using hydrogen as an alternative fuel.  This will complement current projects; opening of 1st hydrogen station, plant and pipeline',
      'Prime bidder is a Saudi JV (Aramco and BH) for nonmetallic products'
    ],
    innovation: [
      'First commercial thermoplastic pressure vessel (green field)',
      'Monolithic tank ensures compatibility between liner and composite',
      'ZRT material eliminates the hydrogen precooling needs',
      'Lower cost of manufacturing, no need for refrigeration or oven curing, unlimited shelf life',
      'Recyclable material will boost sales as environment-friendly product',
      'Better performance (durability and impact strength)'
    ],
    id: '1'
  }


  chartLegend = [
    {
      name: 'K.A.CARE Share',
      color: '#00ADEE'
    },
    {
      name: 'Desert Technologie\'s Share',
      color: '#0080C5'
    },
  ]


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
    //   // align: 'right',
    //   // verticalAlign: 'center',
    //   align: 'right',
    //   verticalAlign: 'center',
    //   layout: 'vertical',
    //   x: 0,
    //   y: 100,
    //   useHTML: true,
    //   pointFormat: function (){
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
        // colors: [
        //   '#00ADEE',
        //   '#0080C5',
        // ],
        dataLabels: {
          enabled: true,
          useHTML: true,

          format: '<div class="text-center"><span class="font-14 font-weight-bold">{point.percentage:.1f}%</span><br><span class="font-12 font-weight-normal">{point.y} SAR</span></div>',
          distance: -50,

        }
      }
    },

    series: [{
      // name: 'Share',
      // colorByPoint: true,
      data: [
        { name: this.chartLegend[0].name, y: 5702350,  sliced: true, selected: true, color: this.chartLegend[0].color },
        { name: this.chartLegend[1].name, y: 9702350, sliced: true, selected: true, color: this.chartLegend[1].color},
      ],

    }],

  };
  constructor() { }

  ngOnInit(): void {
  }

}
