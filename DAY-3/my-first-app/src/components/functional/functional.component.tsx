// export function MessageFunctional() {
//   return <h2>Hello !</h2>;
// }

// export let MessageFunctional = function () {
//   return <h2>Hello !</h2>;
// };

export let MessageFunctional = (props: any) => {
  return <h2>{props.message}</h2>;
};
