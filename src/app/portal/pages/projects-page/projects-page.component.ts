import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {
  projectsRound = ['Round One', 'Round Two', 'Round three', 'Round four']
  projects = [
    {
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
    },
    {
      title: 'BSQ Solar, SL: Hydrogen generator from enhanced performance HCPV',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'Imam Abdulrahman Bin Faisal University-Center of  consultancy and research',
      value: 3943200,
      partners: 'Compañía Española de Alta Eficiencia Fotovoltaica  BSQ Solar, SL Spanish',
      area: 'Other Promising Renewable Energy Technologies, Green hydrogen',
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
      id: '2'
    },
    {
      title: 'DustTrackeR',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'King Abdulaziz City for Science and Technology',
      value: 4504304,
      partners: 'Fraunhofer ISC, Fraunhofer CSP',
      area: 'Theme 9: Other Promising Ren. Energy Techn',
      type: 'Proof of Concept',
      overview: [
        'Soiling (dust deposition on PV modules) is a crucial problem for solar  power generation in the Kingdom of Saudi Arabia (loss up to 0.5%/day)',
        'Project evaluates a not yet explored combination of two promising soiling  mitigation strategies: newly designed Anti-Soiling Coatings and innovative  single-axis tracking routines',
        'A soiling reduction by up to 80% is expected, which strongly reduces  cleaning demand and with that the levelized costs of electricity',
        'From a technology point of view, a fast and easy market adoption is  possible, boosting PV application in the Kingdom of Saudi-Arabia'
      ],
      innovation: [
        'PV single-axis trackers with new tracking routines including night  stowage of the PV modules at vertical (90°) or upside-down (180°)  position during night',
        'Combination with new Anti-Soiling Coatings jointly developed by  KACST and Fraunhofer, which already have shown superior  performance and will be further boosted by tracking routines'
      ],
      id: '3'
    },
    {
      title: 'Solar PV/Geothermal Integrated Greenhouse-Desalination-Soilless System For A Sustainable Solution Towards Food Security For KSA',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'Al Baha University',
      value: 3959000,
      partners: 'AASTMT',
      area: 'Building Integrated Renewable Energy Systems - Renewable Powered Desalination - Shallow Geothermal Applications',
      type: 'Proof of Concept',
      overview: [
        'Design, develop, construct and pilot testing of a solar PV/geothermal integrated-greenhouse-desalination-soilless system that grows its energy and irrigating water demand overcoming the challenges of Water-Energy-Food (WEF) nexus leading to sustainable food security for Kingdom of Saudi Arabia.',
        'This system includes different types of renewable energy applications namely; building integrated PV or TPV solar system, solar powered desalination and shallow geothermal applications.',
        'The proposed innovative system can overcome the problems of energy sustainability, water shortage, food security and unavailability of fertile suitable soil for agriculture activities creating new jobs and business opportunities and hence support the national future sustainable 2030 development plan for KSA.'
      ],
      innovation: [
        'This innovative solution presents different potential technologies which can be applied to use the available natural resources of high availability of solar energy to support solutions for challenges of (WEF) nexus in arid regions.',
        'The new system utilizes the surplus solar energy (above that photosynthetic plant requirements) to produce electrical power using integrated on-roof Photo Voltaic (PV) operating the RO desalination, cooling, ventilation and soilless agriculture systems.',
        'Shading effect of the on-roof integrated PV sufficiently reduces the GH cooling load.',
        'Soilless farming system can effectively reduce water requirements for plant growth.',
        'Geothermal underground energy system can be integrated with the GH to reduce the power consumption for the cooling/heating.'
      ],
      id: '4'
    },
    {
      title: 'INTEGRATION OF SOLAR PV AND SHALLOW GEOTHERMAL COOLING TO ZERO ENERGY AND AUTONOMOUS BUILDINGS: DESIGN OPTIMIZATION AND CONSTRUCTION OF DEMONSTRATION PROTOTYPE',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'United Business Group for Contracting  (UBGC)',
      value: 4000000,
      partners: 'Prof. Antonio Perdichizzi and his team (i.e. Prof. G. Franchini and Dr. G. Brumana) as consultants',
      area: 'Building Integrated Renewable Energy Systems',
      type: 'Proof of Concept',
      overview: [
        'Construction of a building prototype demonstrating the actual possibility to have optimal wellbeing by using only solar PV energy and Shallow Geothermal cooling, up to get Zero Energy and Energy Autonomy.',
        'Integration optimization of solar PV and Shallow Geothermal with low energy building envelope and HVAC system, by using best efficient building technologies and advanced design simulation tools.',
        'If applied on large scale, this new type of building will reduce drastically oil energy consumption and CO2 emission in KSA for residential  and office buildings. This will be obtained with an affordable cost for real estate market.'
      ],
      innovation: [
        'New building concept with outstanding energy efficiency and smart renewables integration to get Zero Energy and Energy Autonomy.',
        'New design method based on simulations to optimize energy performance and to reduce budget cost',
        'Shallow Geothermal  integration  and a design tool for other KSA sites',
        'Smart energy management'
      ],
      id: '5'
    },
    {
      title: 'Ultra Industrial Services Co Ltd: Accelerating the deployment of EV infrastructure & reducing the fuel domestic consumption',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '12 months, Anticipated start date 1.4.2021, Anticipated End date 1.4.2022',
      bidder: 'Ultra Industrial Services Co Ltd.',
      value: 475823,
      partners: 'International Power Supply AD',
      area: 'Renewable Technologies and Grid Management',
      type: 'Feasibility Study',
      overview: [
        'Accelerating the deployment of EV infrastructure, reducing the fuel domestic consumption as well as the carbon emissions through use of renewable sources of the country.',
        'The proposed technology is easy deployable in the desertic conditions, requiring minimal to non-existent maintenance, 100% autonomous from the electricity grid and it is zero emission.',
        'Project duration 12 months, Anticipated start date 1.4.2021, Anticipated End date 1.4.2022',
        'Saudi Arabia will benefit as attracting the most innovative technologies to the country, localize production of the modules and opportunity to create a manufacturing hub within the Kingdom'
      ],
      innovation: [
        'Our technology uses photovoltaic energy to power the loads.',
        'Provides full power independence for remote off-grid areas, by converting them to green, efficient, and totally autonomous sites with zero carbon emissions.',
        'No additional burden to the electricity grid.',
        'Safe and reliable operation in harsh ambient conditions.',
        'Lowest possible OPEX'
      ],
      id: '6'
    },
    {
      title: 'Adsorption-based water production and air dehumidification using renewable energy in KSA',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'FK & Partner Co',
      value: 3640000,
      partners: 'King Fahad university for petroleum and minerals',
      area: 'Renewable energy in water management',
      type: 'Proof of Concept',
      overview: [
        'To select the most cost-effective and best adsorbent for water harvesting and air dehumidification applications',
        'To design a modular adsorption prototype that can serve multiple dehumidification applications and water production in KSA.',
        'To construct and evaluate the performance of the prototype under different operating and weather conditions in KSA.',
        'The integration of renewable energy  with the prototype shall benefit the kingdom by modernizing its economy by developing green energy methods and optimizing the use of its oil resources as well as reducing greenhouse emissions'
      ],
      innovation: [
        'A high-performance adsorption materials with high thermal, chemical and mechanical stability will be developed and tested in KSA.',
        'Production of low-cost fresh water in arid regions',
        'The cost of energy will be reduced.',
        'A continuous adsorption/desorption system will enhance its overall performance and efficiency.'
      ],
      id: '7'
    },
    {
      title: 'Desalination Technology Research Center: Coupling solar CSP-PT with Rabigh MED-TVC',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'Desalination Technology Research Center',
      value: 4000000,
      partners: 'King Fahad university for petroleum and minerals',
      area: 'water management',
      type: 'Proof of Concept',
      overview: [
        'Study of coupling and optimizing solar parabolic trough with desalination high efficiency MED-TVC.',
        'Hybrid system parabolic trough with fossil fuel for powering MED-TVC desalination system.',
        'First ever coupling between CSP and thermal desalination in large scale, this test will be the base of transformation from traditional desalination to solar desalination which will reduce water production cost and greenhouse effect'
      ],
      innovation: [
        'Verify and mitigate large scale coupling Parabolic trough with MED-TVC challenges.',
        'Achieve the optimized operation conditions which assist solar technology localization '
      ],
      id: '8'
    },
    {
      title: 'Sun dish CSP solar park with hybrid diesel steam integration',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '27 Months',
      bidder: 'Moataz Maki Engineering Consultancy',
      value: 15000000,
      partners: 'ZED Solar',
      area: 'Solar Thermal Applications',
      type: 'Product Development',
      overview: [
        'Show ultra-high efficiency & reliability of the sun dish solar system for steam production and prove performance in Saudi Arabia',
        'Demonstrate  steam quality can be managed and assured at park level control',
        'Prove consistent hybrid diesel-solar steam production day and night',
        'Ascertain localization of the solar system with the existing capabilities in KSA and train relevant teams in the required local support work and operation of the solar park.'
      ],
      innovation: [
        'The sun dish solar system is an ultra-high efficiency system which converts 88% of the solar energy into useable heat energy',
        'The system us fully modular, robust and ideally suited to a wide range of industrial applications',
        'The project will integrate the solar system with a diesel steam generator to prove the overall suitability for an industrial application'
      ],
      id: '9'
    },
    {
      title: 'Feasibility Study of Fresnel Solar Collector in Industrial Heat Processes in Saudi Arabia',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '12 months starting from 1/3/2021 and end on 28/02/2022',
      bidder: 'Wahj sustainable solutions',
      value: 375000,
      partners: 'Industrial Solar GmbH & Sustainable Solution Expertise House (University of Jeddah)',
      area: 'Solar Thermal Applications',
      type: 'Feasibility Study',
      overview: [
        'To select the most cost-effective and best adsorbent for water harvesting and air dehumidification applications',
        'To design a modular adsorption prototype that can serve multiple dehumidification applications and water production in KSA.',
        'To construct and evaluate the performance of the prototype under different operating and weather conditions in KSA.',
        'The integration of renewable energy  with the prototype shall benefit the kingdom by modernizing its economy by developing green energy methods and optimizing the use of its oil resources as well as reducing greenhouse emissions'
      ],
      innovation: [
        'Low-cost solar concentrated solar collectors',
        'Lower wind load compared to other solar concentrated systems.',
        'Simple integration.',
        'Low operating cost.',
        'High surface efficiency',
        'Suits the harsh weather of KSA'
      ],
      id: '10'
    },
    {
      title: 'Techno-economic feasibility studies of Renewable Energy through the Gasification of Municipal Solid Waste in the Kingdom of Saudi Arabia',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.',
      image: 'assets/images/project.svg',
      technology: 'Desert Technologies ',
      location:'Jeddah Makkah Highway',
      date: '12 months, from 1st April 2021 to 31st March 2022',
      bidder: 'Alfanar Company Saudi Arabia',
      value: 375000,
      partners: 'Ankur Scientific Energy Techno. Pvt. Ltd, India',
      area: 'Waste to Energy by MSW Gasification',
      type: 'Feasibility Study',
      overview: [
        'To select the most cost-effective and best adsorbent for water harvesting and air dehumidification applications',
        'To design a modular adsorption prototype that can serve multiple dehumidification applications and water production in KSA.',
        'To construct and evaluate the performance of the prototype under different operating and weather conditions in KSA.',
        'The integration of renewable energy  with the prototype shall benefit the kingdom by modernizing its economy by developing green energy methods and optimizing the use of its oil resources as well as reducing greenhouse emissions'
      ],
      innovation: [
        'Innovative features of the proposed MSW gasification technology.',
        'Successful implementation for remote village electrification.'
      ],
      id: '11'
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
