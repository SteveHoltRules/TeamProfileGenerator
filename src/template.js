const fs = require("fs");

const empRole = (employeeData) => {
  console.log("Employee Data in EmpRole: ", employeeData);
  console.log("Typeof: ", typeof employeeData);
  // var container = document.querySelector(".c-aside__eventList");
  var engineerInfo = [];
  var managerInfo = [];
  var internInfo = [];
  var combined = [];
  for (var i = 0; i < employeeData.length; i++) {
    if (employeeData[i].getRole() === "Engineer") {
      // engineerInfo.push(employeeData[i]);
      engineerInfo.push(`
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${employeeData[i].getRole()}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">${employeeData[i].getName()}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Email: ${employeeData[i].getEmail()}</li>
            <li>Employee #: ${employeeData[i].getId()}</li>
            <li>GitHub: ${employeeData[i].github}</li>
          </ul>
        </div>
      </div>
    </div>    

    `);
    } else if (employeeData[i].getRole() === "Manager") {
      managerInfo.push(`
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${employeeData[i].getRole()}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">${employeeData[
            i
          ].getName()}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Email: ${employeeData[i].getEmail()}</li>
            <li>Employee #: ${employeeData[i].getId()}</li>
            <li>Office #: ${employeeData[i].officeNumber}</li>
          </ul>
        </div>
      </div>
    </div>  
    `);
    } else if (employeeData[i].getRole() === "Intern") {
      internInfo.push(`    
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">${employeeData[i].getRole()}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">${employeeData[i].getName()}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Email: ${employeeData[i].getEmail()}</li>
            <li>Employee #: ${employeeData[i].getId()}</li>
            <li>School: ${employeeData[i].school}</li>
          </ul>
        </div>
      </div>
    </div>
    `);
    }
  }
  console.log("Engineer Info: ", engineerInfo);
  console.log("Manager Info: ", managerInfo);
  console.log("Intern Info: ", internInfo);
  combined = [engineerInfo, managerInfo, internInfo];
  return combined.join("");
  //I should combine all of the HTML pages to one map function
};

const generatePage = (employeeData) => {
  if (!employeeData) {
    return "";
  }
  fs.writeFile(
    "./dist/index.html",
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
          <div class="d-flex justify-content-center align-items-center text-dark text-decoration-none">
            <img
              src="../src/noun_Book_1771987.svg"
              alt=""
              style="height: 125px"
            />
            <h2>Team Profile Generator</h2>
          </div>
        </header>

      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <!-- Loop starts here -->    
      ${empRole(employeeData)}
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

module.exports = generatePage;

//Calls the function for the fs write file to place into the dist folder - should be called to generate
//Note: fs.writeFile(find required arguments)
