console.log(customers)

// function lessInfo() {
//   let _grabInfo = [_lessinfo.push]
//
//   }
//
//   return _grabInfo
// }

const list = document.querySelector("#directory")

for (var i = 0; i < customers.results.length; i++) {
  let _customer = customers.results[i]
  // let _lessinfo = {
  //   picture: _customer.picture,
  //   name: _customer.name,
  //   email: _customer.email,
  //   location: _customer.location,
  //   phone: _customer.phone,
  //   id: _customer.id.value
  // }

  const item = document.createElement("div")

  item.innerHTML = `
    <img src= ${_customer.picture.large}>
    <h3>${_customer.name.first} ${_customer.name.last}</h3>
    <p>${_customer.email}</p>
    <p>${_customer.location.street}</p>
    <p>${_customer.location.city}, ${_customer.location.state} ${_customer
    .location.postcode}</p>
    <p>${_customer.phone}</p>
    <p>${_customer.id.value}</p>
  `

  list.appendChild(item)
}
