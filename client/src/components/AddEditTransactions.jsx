import React, { useState } from 'react'
import { Form, Input, message, Modal, Select } from "antd";
import axios from 'axios';
import Spinner from './Spinner';



const AddEditTransactions = ({showAddEditTransactionModal,setShowAddEditTransactionModal}) => {
 
    const [loading,setLoading] = useState(false)

    const onFinish = async (value)=>{
        try {
            const user = JSON.parse(localStorage.getItem("expense-tracker"))
            setLoading(true)
            await axios.post('/api/transactions/add-transaction',{...value,userid: user._id})
            message.success('Transaction Added Successfully')
            setLoading(false)
            setShowAddEditTransactionModal(false)
            console.log("singh")
        } catch (error) {
            console.log("sumit")
            message.error('something went wrong')
            setLoading(false)
        }
    }
    

  return (
    <Modal title={"Add-Transaction"} visible={showAddEditTransactionModal} onCancel={() => setShowAddEditTransactionModal(false)}   footer={false}>
    <Form
      layout="vertical"
      className="transaction-form"
      onFinish={onFinish}
    >

    {loading && <Spinner/>}

      <Form.Item label="Amount" name="amount">
        <Input type="text" />
      </Form.Item>

      <Form.Item label="Type" name="type">
        <Select>
          <Select.Option value="income">Income</Select.Option>
          <Select.Option value="expence">Expence</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Category" name="category">
        <Select>
          {" "}
          <Select.Option value="salary">Salary</Select.Option>
          <Select.Option value="freelance">Freelance</Select.Option>
          <Select.Option value="food">Food</Select.Option>
          <Select.Option value="entertainment">Entertainment</Select.Option>
          <Select.Option value="investment">Investment</Select.Option>
          <Select.Option value="travel">Travel</Select.Option>
          <Select.Option value="education">Education</Select.Option>
          <Select.Option value="medical">Medical</Select.Option>
          <Select.Option value="tax">Tax</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Date" name="date">
        <Input type="date" />
      </Form.Item>

      <Form.Item label="Reference" name="reference">
        <Input type="text" />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input type="text" />
      </Form.Item>

      <div className="d-flex justify-content-end">
        <button className="primary" type="submit">
          SAVE
        </button>
      </div>
    </Form>
  </Modal>
  )
}

export default AddEditTransactions