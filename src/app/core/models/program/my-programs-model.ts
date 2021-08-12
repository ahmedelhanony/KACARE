export class MyProgramsModel {
  searchCriteria: any;
  dtValue = [];
  filterFieldsName: any;
  rfpTopicOptions: any;
  totalrecords = 0;
  programLink!: string;

  colList: Array<any> = [
    {
      name: 'title',
      label: 'Title',
      filter: true,
      sort: true,
      linkRedirect: true,
    },
    {
      name: 'rfpTopic',
      label: 'rfpTopic',
      filter: true,
      sort: false,
      dropdown: true,
      options: 'rfpTopicOptions',
    },
    {
      name: 'isReviewed',
      label: 'KacareReviewed',
      filter: false,
      sort: true,
      dropdown: false,
      icon: true,
    },
    {
      name: 'isSubmitted',
      label: 'Submitted',
      filter: false,
      sort: true,
      dropdown: false,
      icon: true,
    },
  ];
}
