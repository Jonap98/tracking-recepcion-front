export interface Customer {
  id: number,
  name: string,
  country: Country,
  company: string,
  date: string,
  status: string,
  verified: boolean,
  activity: number,
  representative: Representative,
  balance: number
}

export interface Country {
  name: string,
  code: string,
}

export interface Representative {
  name: string,
  image: string,
}

// {
//   id: 1000,
//   name: 'James Butt',
//   country: {
//       name: 'Algeria',
//       code: 'dz'
//   },
//   company: 'Benton, John B Jr',
//   date: '2015-09-13',
//   status: 'unqualified',
//   verified: true,
//   activity: 17,
//   representative: {
//       name: 'Ioni Bowcher',
//       image: 'ionibowcher.png'
//   },
//   balance: 70663
// }

