const Customer = require("../Models/customer.js");
const createCustomer = async(req, res) => {
    try {
      const {
        customerName,
        customerAddress,
        customerPanCardNumber,
        customerGstNumber,
        customerStatus,
      } = req.body;
  
      const customerData = await Customer.create({
        name: customerName,
        address: customerAddress,
        panCard: customerPanCardNumber,
        gstNumber: customerGstNumber,
        status: customerStatus,
      });
  
      console.log(customerData);
      res.status(201).json({ msg: "Customer created", data: customerData });
    } catch (error) {
      console.error("Error creating customer:", error);
      res.status(500).json({ error: "Failed to create customer" });
    }
  }
 
   const getcustomers =async(req,res)=>{
       const data = await Customer.find({})
       res.json({data})
   }

   const getcustomerbyId = async (req, res) => {
    try {
        const customerId = req.params.id;

        const customer = await Customer.findById(customerId);

        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ error: 'Customer not found' });
        }
    } catch (error) {
        console.error('Error fetching customer details:', error);
        res.status(500).json({ error: 'Failed to fetch customer details' });
    }
}

   module.exports = {createCustomer,getcustomers,getcustomerbyId}