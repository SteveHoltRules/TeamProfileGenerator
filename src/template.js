const fs = require("fs");

const empRole = employeeData => {
  console.log("Employee Data in EmpRole: ", employeeData);
  var empDataRoles = Object.keys(employeeData);
  console.log("empDataRoles: ", empDataRoles);
  var roleInfo = [];
  for (var i=0; i<empDataRoles.length; i++) {
    if(Object.keys(employeeData[i]) === "Engineer") {
      console.log("Employee Data Role Eng Loop: ", empDataRoles[i]);
      roleInfo.push(employeeData[i])
    }
  }
  console.log("RoleInfo: ", roleInfo);
}

  // employeeData.map((employeeData) => {

  //         return `
  //     <div class="col-md-6">
  //       <div class="h-100 p-5 text-white bg-dark rounded-3">
  //         <h2>${employeeData.name}</h2>
  //         <p>${employeeData.id}<br>${employeeData.email}<br>${employeeData.school}</p>
  //       </div>
  //     </div> 
  //     `;
  //       })
  //       .join("")}

const generatePage = (employeeData) => {
  if (!employeeData) {
    return "";
  }
  fs.writeFile(
    "index.html",
    `
<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Team Profile</title>

  <style>
    .bd-placeholder-img {
      font-size: 1.125rem;
      text-anchor: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
    }
  
    @media (min-width: 768px) {
      .bd-placeholder-img-lg {
        font-size: 3.5rem;
      }
    }
  </style>
</head>

<body>

  <main>
  <div class="container py-4">
    <header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="me-2" viewBox="0 0 118 94" role="img">
          <title>Icon Example</title>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
            fill="currentColor"></path>
        </svg>
        <span class="fs-4">Team Profile</span>
      </a>
    </header>
      <div class="row align-items-md-stretch">
      <!-- Loop starts here -->
    //body split it out first and then map and then join
    

      ${employeeData
        .map((employeeData) => {
          return `
      <div class="col-md-6">
        <div class="h-100 p-5 text-white bg-dark rounded-3">
          <h2>${employeeData.name}</h2>
          <p>${employeeData.id}<br>${employeeData.email}<br>${employeeData.school}</p>
        </div>
      </div> 
      `;
        })
        .join("")}
      </div>

    <footer class="pt-3 mt-4 text-muted border-top">
      &copy; 2021
    </footer>
  </div>
</main>


  <!-- Optional JavaScript -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
</body>`,
    (err) => console.log("error")
  );
};

module.exports = empRole;

//Calls the function for the fs write file to place into the dist folder - should be called to generate
//Note: fs.writeFile(find required arguments)
