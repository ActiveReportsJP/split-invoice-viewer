import { HeaderInfo } from '../types/invoice'

interface HeaderFormProps {
  header: HeaderInfo
  onChange: (field: keyof HeaderInfo, value: string) => void
}

export const HeaderForm = ({ header, onChange }: HeaderFormProps) => {
  return (
    <div className="card">
      <h4>請求ヘッダー</h4>
      <div>
        <label htmlFor="header-subject">件名</label>
        <input
          id="header-subject"
          className="ml-15 input-medium"
          type="text"
          value={header.subject}
          onChange={(e) => onChange('subject', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="header-total">請求金額</label>
        <input
          id="header-total"
          className="ml-15 input-medium"
          type="text"
          value={header.total}
          onChange={(e) => onChange('total', e.target.value)}
        />
      </div>
    </div>
  )
}
