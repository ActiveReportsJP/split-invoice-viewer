import { DetailItem } from '../types/invoice'

interface DetailFormProps {
  detail: DetailItem
  index: number
  onToggle: () => void
  onChange: (index: number, field: keyof DetailItem, value: string) => void
  showToggle: boolean
  toggleButtonText: string
}

export const DetailForm = ({
  detail,
  index,
  onToggle,
  onChange,
  showToggle,
  toggleButtonText,
}: DetailFormProps) => {
  const detailNumbers = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"]

  return (
    <div className="card">
      <h4>請求明細 {detailNumbers[index]}</h4>
      <div>
        <label htmlFor={`detail-deal-date-${index + 1}`}>取引日</label>
        <input
          id={`detail-deal-date-${index + 1}`}
          className="ml-15 input-medium"
          type="text"
          value={detail.dealDate}
          onChange={(e) => onChange(index, 'dealDate', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor={`detail-abc-${index + 1}`}>摘要</label>
        <input
          id={`detail-abc-${index + 1}`}
          className="ml-15 input-medium"
          type="text"
          value={detail.description}
          onChange={(e) => onChange(index, 'description', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor={`detail-quantity-${index + 1}`}>数量</label>
        <input
          id={`detail-quantity-${index + 1}`}
          className="ml-15 input-medium"
          type="text"
          value={detail.quantity}
          onChange={(e) => onChange(index, 'quantity', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor={`detail-unit-${index + 1}`}>単価</label>
        <input
          id={`detail-unit-${index + 1}`}
          className="ml-15 input-medium"
          type="text"
          value={detail.unitPrice}
          onChange={(e) => onChange(index, 'unitPrice', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor={`detail-amount-${index + 1}`}>明細金額</label>
        <input
          id={`detail-amount-${index + 1}`}
          className="ml-15 input-medium"
          type="text"
          value={detail.amount}
          onChange={(e) => onChange(index, 'amount', e.target.value)}
        />
      </div>
      {showToggle && (
        <div className="mt-15 ta-center">
          <button
            type="button"
            className="toggle-button"
            onClick={onToggle}
          >
            {toggleButtonText}
          </button>
        </div>
      )}
    </div>
  )
}
