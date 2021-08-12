export enum ROLES {
  Admin = 1,
  User = 2,
}

export enum SERVICES {
  Base = 'Base',
  Account = 'User',
  MatchMaking = 'MatchMaking',
  FAQ = 'FAQ',
  Technology = 'Technology',
  ProjectRole = 'ProjectRole',
  RFPTopic = 'RFPTopic',
  BidderClassification = 'BidderClassification',
  Demo = 'Demo',
  POC = 'PoConcept',
  Feas = 'FeasStudy',
  Pdevelopment = 'Pdevelopment',
}

export enum DATEFORMAT {
  date = 'DD/MM/YYYY',
  dateWithTime = 'DD/MM/YYYY h:mm:ss A',
  apiDate = 'MM/DD/YYYY',
  apiDateWithTime = 'MM/DD/YYYY HH:mm',
  apiTime = 'HH:mm',
  calendarDate = 'dd/mm/yy',
}

export enum SECURITY {
  AccessTokenExpiration = 1800000,
  allowForAnnonymous = 'true',
}

export enum NAVIGATIONS {
  homePage = '/home',
  loginPageUrl = '/account/login',
  verifyPageUrl = '/account/verify',
  accessDeniedPageUrl = '/accessdenied',
  resetPageUrl = '/account/reset',
  sendresetPageURL = 'account/sendreset',
  registerPageUrl = '/account/register',
  FAQPage = '/faq/all',
  UserMatchMakingPage = '/matchmaking/mine',
  UserDemoPage = '/demo/mine',
  AdminDemoPage = '/demo/all',
  UserFeasPage = '/feas/mine',
  AdminFeasPage = '/feas/all',
  DemoProgramLink = '/demo/form/',
  FeasProgramLink = '/feas/form/',

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
