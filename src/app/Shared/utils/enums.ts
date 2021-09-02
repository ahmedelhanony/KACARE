export enum ROLES {
  Admin = 1,
  User = 2,
}

export enum SERVICES {
  Base = 'Base',
  Account = 'User',
  MatchMaking = 'MatchMaking',
  FAQ = 'FAQ',
  News = 'News',
  Technology = 'Technology',
  ProjectRole = 'ProjectRole',
  RFPTopic = 'RFPTopic',
  BidderClassification = 'BidderClassification',
  Demo = 'Demo',
  POC = 'PoConcept',
  Feas = 'FeasStudy',
  Pdevelopment = 'Pdevelopment',
  ContactUs = 'ContactUs',
}

export enum DATEFORMAT {
  date = 'DD/MM/YYYY',
  BEDateFormat = 'dd/MM/yyyy',
  dateWithTime = 'DD/MM/YYYY h:mm:ss A',
  apiDate = 'MM/DD/YYYY',
  apiDateWithTime = 'dd/MM/yyyy HH:MM',
  angularMaterilaFormat = 'EEEE, MMMM d, y, h:mm:ss a zzzz',
  apiTime = 'HH:mm',
  calendarDate = 'dd/mm/yy',
}

export enum SECURITY {
  // AccessTokenExpiration = 1800000,
  AccessTokenExpiration = 18000000,
  allowForAnnonymous = 'true',
}

export enum NAVIGATIONS {
  homePage = '/home',
  loginPageUrl = '/login',
  verifyPageUrl = '/account/verify',
  accessDeniedPageUrl = '/access-denied',
  resetPageUrl = '/account/reset',
  sendresetPageURL = 'account/sendreset',
  registerPageUrl = '/signup',
  FAQPage = '/faq/all',
  UserMatchMakingPage = '/matchmaking/mine',
  UserDemoPage = '/demo/mine',
  AdminDemoPage = '/demo/all',
  UserFeasPage = '/feas/mine',
  AdminFeasPage = '/feas/all',
  DemoProgramLink = '/demo/form/',
  FeasProgramLink = '/feas/form/',

  ApplicationsPage = '/applications',
  ApplyApplication = '/applications/apply',

  AllProgramsPage = '/programs/home',

  AllQuestionsPage = '/faq/edit',

  MyDemosPage = '/demo/mine',
  AllDemosPage = '/demo/all',

  MyFeassPage = '/feas/mine',
  AllFeassPage = '/feas/all',

  UserPdevelopmentPage = '/pd/mine',
  AdminPdevelopmentPage = '/pd/all',
  PdevelopmentProgramLink = '/pd/form/',
  MyPdevelopmentsPage = '/pd/mine',
  AllPdevelopmentsPage = '/pd/all',

  UserPOCPage = '/poc/mine',
  AdminPOCPage = '/poc/all',
  POCProgramLink = '/poc/form/',
  MyPOCsPage = '/poc/mine',
  AllPOCsPage = '/poc/all',

  InfoMatchMakingPage = '/matchmaking/info',
  InfoProgramsPage = '/programs/info',

  Admin = '/admin',
  News = '/news'
}

export enum FileTypeEnum {
  Diagram = <number>1,
  TPTDiagram = <number>2,
  Patent = <number>3,
}

export enum BClassification {
  Other = <number>6,
}

export enum FILES {
  AllowedFileSize = 52428800,
  FileNameLength = 120,
  AllowedImageExtensions = 'jpg, png, gif, jpeg',
  AllowedAttachmentExtensions = '.jpg, .png , .gif , .jpeg',
  AllowedAttachmenPdftExtensions = '.pdf',
  AllowedAll = '.jpg, .png , .gif , .jpeg , .pdf ',
}

export enum PATTERNS {
  mobilePattern = '^\\d{10,20}$',
  passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[()*+,-./:;#@$!%*?&])([a-zA-Z0-9#-@$!%*?&]{8,})$',
  emailPattern = '^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$',
  urlPattern = '^(http:\\/\\/www.|https:\\/\\/www.|http:\\/\\/|https:\\/\\/|www.)[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/.*)?$',
  percentagePattern = '^\\d{0,2}(\\.\\d{0,2})?$',
  numberPattern = '^\\d{0,10}$',
  floatNumberPattern = '^\\d{0,10}(\\.\\d{0,10})?$',
  officeNnmber = '[1-9][0-9]{2}',
  saudiMobilePattern = '^(009665|9665|\\+9665|05|5|009661|9661|\\+9661|01)([0-9]{8})$',
}

export enum GridTypeEnum {
  MatchMaking = <number>1,
  MyMatchMaking = <number>2,
  FAQ = <number>3,
  Program = <number>4,
  MyProgram = <number>5,
}

export enum FORMLABELS {
  PERSONAL_NAME = 'Personal Name',
  ORGANIZATION_NAME = 'Organization Name',
  EMAIL = 'Email',
  PHONE_NUMBER = 'Phone Number',
  JOB_TITLE = 'Job Title',
  REGISTRATION_TYPE = 'Registration Type',
  PASSWORD = 'Password',
  CONFIRM_PASSWORD = 'Confirm Password',
  EXPERIENCE_FIELD = 'Organization Field of experience',
  CODE = 'Code',
  IS_REQUIRED = ' is required.',
  ADD_NEW_QUESTION = 'Add New Question',
  ADD_NEW_ARTICLE = 'Add New Article',
  EDIT_ARTICLE = 'Edit Article',
  EDIT_QUESTION = 'Edit Question',
  QUESTION = 'Question',
  ANSWER = 'Answer',
  WRITE_ANSWER = 'Write answer here..',
  //////////////////////////////
  // Match Making Form
  TECHNOLOGY = 'Technology',
  ROLE = 'Role',
  CONTACT_INFO = 'Contact Info',
  DETAILS = 'Details',
  ADD_MATCH_MAKING = 'Add New Match Making',
  EDIT_MATCH_MAKING = 'Edit Match Making',
  SUBMIT = 'Submit',
  EDIT = 'Edit',

  //////////////////////////
  // Contact US Page
  SUBJECT = 'Subject',
  FULLNAME = 'Full Name',
  BODY = 'Body',
  TITLE = 'Article title',
  DATE='Publish Date'
}

export enum AUTHPAGESNAME {
  FORGETPASS = 'FORGETPASS',
  RESETPASS = 'RESETPASS',
  VERFIYACCOUNT = 'VERFIYACCOUNT',
}

export enum TABLELISTACTIONS {
  ADD = 'Add',
  EDIT = 'Edit',
  DELETE = 'Delete',
  PUBLISH = 'Publish',
}

export enum APPLICATION {
  'Proof-Of-Concept' = SERVICES.POC,
  'Product-Development' = SERVICES.Pdevelopment,
  'Feasibility-Studies' = SERVICES.Feas,
  'Demonstration-Projects' = SERVICES.Demo,
}

export class AuthPages {
  modelName: any;
  pageName: string;
  icon: string;
  btnName: string;
  title: string;
  description?: string;

  constructor(
    _modelName: any,
    _pageName: string,
    _icon: string,
    _title: string,
    _btnName: string,
    _description?: string
  ) {
    this.modelName = _modelName;
    this.pageName = _pageName;
    this.icon = _icon;
    this.btnName = _btnName;
    this.title = _title;
    this.description = _description;
  }
}
