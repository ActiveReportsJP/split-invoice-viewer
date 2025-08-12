import { CustomerInfo } from '../types/invoice'

interface CustomerFormProps {
  customer: CustomerInfo
  onChange: (field: keyof CustomerInfo, value: string) => void
}

export const CustomerForm = ({ customer, onChange }: CustomerFormProps) => {
  return (
    <div className="card">
      <h4>取引先情報</h4>
      <div>
        <label htmlFor="customer-name">取引先名</label>
        <input
          id="customer-name"
          className="ml-15 input-medium"
          type="text"
          value={customer.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="customer-staff-name">担当者名</label>
        <input
          id="customer-staff-name"
          className="ml-15 input-medium"
          type="text"
          value={customer.staffName}
          onChange={(e) => onChange('staffName', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="customer-post-number">郵便番号</label>
        <input
          id="customer-post-number"
          className="ml-15 input-medium"
          type="text"
          value={customer.postNumber}
          onChange={(e) => onChange('postNumber', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="customer-address">住所</label>
        <input
          id="customer-address"
          className="ml-15 input-medium"
          type="text"
          value={customer.address}
          onChange={(e) => onChange('address', e.target.value)}
        />
      </div>
    </div>
  )
}
