import { InvoiceInfo } from '../types/invoice'

interface InvoiceFormProps {
  invoice: InvoiceInfo
  onChange: (field: keyof InvoiceInfo, value: string) => void
}

export const InvoiceForm = ({ invoice, onChange }: InvoiceFormProps) => {
  return (
    <div className="card">
      <h4>請求情報</h4>
      <div>
        <label htmlFor="invoice-date">請求日</label>
        <input
          id="invoice-date"
          className="ml-15 input-medium"
          type="text"
          value={invoice.date}
          onChange={(e) => onChange('date', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="invoice-sheet-number" className="label-small">請求書番号</label>
        <input
          id="invoice-sheet-number"
          className="ml-15 input-medium"
          type="text"
          value={invoice.sheetNumber}
          onChange={(e) => onChange('sheetNumber', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="invoice-number">登録番号</label>
        <input
          id="invoice-number"
          className="ml-15 input-medium"
          type="text"
          value={invoice.registrationNumber}
          onChange={(e) => onChange('registrationNumber', e.target.value)}
        />
      </div>
    </div>
  )
}
