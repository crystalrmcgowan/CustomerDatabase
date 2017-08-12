console.log(customers)
const list = document.querySelector("#directory")

for (var i = 0; i < customers.results.length; i++) {
  let _customer = customers.results[i]
  const item = document.createElement("div")
  item.innerHTML = `
    <img src= ${_customer.picture.large}>
    <h3><span>${_customer.name.first} ${_customer.name.last}</span></h3>
    <p>${_customer.email}</p>
    <p>${_customer.location.street}</p>
    <p>${_customer.location.city}, ${_customer.location.state}
    ${_customer.location.postcode}</p>
    <p>${_customer.phone}</p>
    <p>${_customer.id.value}</p>
  `
  list.appendChild(item)
}
