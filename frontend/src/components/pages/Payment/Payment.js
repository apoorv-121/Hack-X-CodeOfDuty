import React, { useState } from 'react'
import axios from 'axios'
import './Payment.css'
import { MdSubtitles, MdOutlineEmail, MdLocalPhone, MdCurrencyRupee } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const Payment = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [amount, setAmount] = useState(0)

  const handleOpenRazorpay = (data) => {
    const options = {
      key: 'rzp_test_9wyk1IQemxOlUV',
      amount: Number(data.amount) * 100,
      currency: data.currency,
      name: 'Green City',
      description: 'You are donating for nature',
      order_id: data.id,
      handler: (response) => {
        // console.log(response, "16");
        axios.post('http://localhost:8000/verify', { response })
          .then(res => {
            // console.log(res);
            axios.post('http://localhost:8000/addpayment', { name, email, phone, amount, paymentId: response.razorpay_payment_id })
              .then(out => {
                console.log(out.data, '26');
                navigate('/')
              })
              .catch((err) => {
                console.log(err, '29');
              })
          })
          .catch(err => console.log(err, "19"))
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const handlePayment = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || phone === '' || amount === 0) {
      return toast.error('All fields are mandatory', {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    const _data = { amount };

    axios.post('http://localhost:8000/orders', _data)
      .then((res) => {
        console.log(res.data, "11");
        handleOpenRazorpay(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <ToastContainer />
      <div className='payment_main'>

        <div className="payment_parent">
          <div><MdSubtitles /> <input type="text" placeholder='Name Please' onChange={(e) => setName(e.target.value)} /></div>
          <div><MdOutlineEmail /><input type="email" placeholder='Email Please' onChange={(e) => setEmail(e.target.value)} /></div>
          <div><MdLocalPhone /><input type="text" placeholder='Phone Please' onChange={(e) => setPhone(e.target.value)} /></div>
          <div><MdCurrencyRupee /><input type="number" placeholder='Amount Please' onChange={(e) => setAmount(e.target.value)} /></div>
          <button onClick={handlePayment}>Pay Now</button>

        </div>
      </div>
    </>
  )
}

export default Payment