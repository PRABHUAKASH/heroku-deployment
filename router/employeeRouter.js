// const express = require("express");
// const router = express.Router();
// const employeeModules = require("../modules/employeeModule");

// router.get("/get",employeeModules.getEmployees);

// router.put("/update/:id",employeeModules.updateEmployees);

// router.post("/create",employeeModules.createEmployees);

// router.delete("/delete/:id",employeeModules.deleteEmployees);


// module.exports = router;
// ===============================================================================================================
const express = require("express");
const router = express.Router();
const employeeModule = require("../modules/employeeModule");

router.get("/get", employeeModule.getEmployees);

router.put("/update/:id", employeeModule.updateEmployees);

router.post("/create", employeeModule.createEmployees);

router.delete("/delete/:id", employeeModule.deleteEmployees);

module.exports = router;