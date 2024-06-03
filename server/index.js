const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { Invoice } = require("./Models/invoice.js");
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Billing")
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const route = require("./Routes/customerRoute.js");
const router = require("./Routes/itemRoute.js");


app.use("/api/customer", route);
app.use("/api/getcustomers", route);
app.use("/api/customers", route);
app.use("/api/items", router);
app.use("/api/getitems", router);
app.post("/api/invoice", async (req, res) => {
//   console.log(req.body);
  const { name, address, pan, gst, Iname, Iprice } = req.body;
  const randomnum = Math.floor(Math.random()*1000000)
  const id = "INVC"+randomnum;
  const entry =await Invoice.create({
    Cname:name,
    address,
    pan,gst,Iname,IPrice:Iprice,
    invoiceId: id,
  })
  res.send(entry)
});
app.listen(8000, () => {
  console.log("server running");
});

app.get('/api/dashboard',async(req,res)=>{
    const users = await Invoice.find({})
    // console.log(users)
    res.send(users)
})
app.get('/api/dashboard/:id',async(req,res)=>{
  try {
    const InvoiceId = req.params.id;

    const InvoiceDetails = await Invoice.findById(InvoiceId);

    if (InvoiceDetails) {
        res.status(200).json(InvoiceDetails);
    } else {
        res.status(404).json({ error: 'Customer not found' });
    }
} catch (error) {
    console.error('Error fetching customer details:', error);
    res.status(500).json({ error: 'Failed to fetch customer details' });
}
})
