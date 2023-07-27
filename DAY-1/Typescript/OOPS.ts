// interface
// interface ICompany {
//   name: string;
//   city: string;
// }
// let company: ICompany = { name: "IBM", city: "Pune", xyz: 123 };

type Company = {
  name: string;
  city?: string; // optional
};
// let company: Company = { name: "IBM", city: "Pune", xyz: 123 };
let company: Company = { name: "IBM" };
