import React from 'react'
import Master from './Pages/Master'
import CustomerInfo from './components/Customer/CustomerInfo'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CustomerForm from './components/Customer/CustomerForm'
import Iteminfo from './components/Items/Iteminfo/Iteminfo.jsx'
import ItemForm from './components/Items/ItemForm/ItemForm.jsx'
import Billing from './Pages/Billing.jsx'
import CustomerDeatils from './components/CustomerDeatils/CustomerDeatils.jsx'
import Billingitem from './components/BillingItem/Billingitem.jsx'
import BillingInvoice from './components/BillingInvoice/BillingInvoice.jsx'
import DashBoard from './Pages/DashBoard.jsx'
import DashboardInvoice from './components/DashBoradHome/DashboardInvoice.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Master />}  />
           <Route path='/billing' element={<Billing />}  />
           <Route path='/dashboard' element={<DashBoard />}  />
           <Route path='/dashboard/:id' element={<DashboardInvoice />}  />
           <Route path='/customerinfo' element={<CustomerInfo />}  />
           <Route path='/customerform' element={<CustomerForm />}  />
           <Route path='/iteminfo' element={<Iteminfo />}  />
           <Route path='/itemform' element={<ItemForm />}  />
           <Route path='/billingitem' element={<Billingitem />}  />
           <Route path='/billinginvoice' element={<BillingInvoice />}  />
           {/* <Route path='/invoice' element={<Invoice />}  /> */}
           <Route path='/customerdetails/:id' element={<CustomerDeatils />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App