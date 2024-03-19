// come up with a list of  donations

// <input name="donorName" type="text" placeholder="Donor Name" onChange={handleChange} /* other props */ />
// <input name="amount" type="number" placeholder="Amount" onChange={handleChange} /* other props */ />
// <input name="date" type="date" onChange={handleChange} />
// <select name="paymentMethod" onChange={handleChange} />
  
// </select>


const donations = [ 
    {

        donorName: 'Bright Doe',
        amount: 500,
        date: '2021-06-01',
        paymentMethod: 'Cash',
        purpose: 'General Donation',
    },

    {
        donorName: 'Bridget Boadu',
        amount: 1000,
        date: '2021-07-01',
        paymentMethod: 'Mobile Money',
        purpose: 'General Donation',

    },

    {
        donorName: 'Kwame Asare',
        amount: 2000,
        date: '2021-08-01',
        paymentMethod: 'Bank Transfer',
        purpose: 'General Donation',

    }
]
export default donations;