import { CompanyInfo } from '../types/invoice'

interface CompanyFormProps {
  company: CompanyInfo
  onChange: (field: keyof CompanyInfo, value: string) => void
}

export const CompanyForm = ({ company, onChange }: CompanyFormProps) => {
  return (
    <div className="card">
      <h4>自社情報</h4>
      <div>
        <label htmlFor="own-name">自社名</label>
        <input
          id="own-name"
          className="ml-15 input-medium"
          type="text"
          value={company.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="own-staff-name">担当者名</label>
        <input
          id="own-staff-name"
          className="ml-15 input-medium"
          type="text"
          value={company.staffName}
          onChange={(e) => onChange('staffName', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="own-post-number">郵便番号</label>
        <input
          id="own-post-number"
          className="ml-15 input-medium"
          type="text"
          value={company.postNumber}
          onChange={(e) => onChange('postNumber', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="own-address">住所</label>
        <input
          id="own-address"
          className="ml-15 input-medium"
          type="text"
          value={company.address}
          onChange={(e) => onChange('address', e.target.value)}
        />
      </div>
    </div>
  )
}
