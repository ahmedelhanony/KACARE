export class AllProgramsModel {
  searchCriteria: any;
  dtValue = [];
  filterFieldsName: any;
  rfpTopicOptions: any;
  totalrecords = 0;
  programLink!: string;

  colList: Array<any> = [
    {
      name: 'organizationName',
      label: 'OrganizationName',
      filter: true,
      sort: true,
      dropdown: false,
    },
    {
      name: 'title',
      label: 'Title',
      filter: true,
      sort: true,
      dropdown: false,
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
  ];
}
