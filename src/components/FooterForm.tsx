import { FooterInfo } from '../types/invoice'

interface FooterFormProps {
  footer: FooterInfo
  onChange: (field: keyof FooterInfo, value: string) => void
}

export const FooterForm = ({ footer, onChange }: FooterFormProps) => {
  return (
    <div className="card">
      <h4>請求フッター</h4>
      <div>
        <label htmlFor="footer-subtotal">小計</label>
        <input
          id="footer-subtotal"
          className="ml-15 input-medium"
          type="text"
          value={footer.subtotal}
          onChange={(e) => onChange('subtotal', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="footer-tax">消費税</label>
        <input
          id="footer-tax"
          className="ml-15 input-medium"
          type="text"
          value={footer.tax}
          onChange={(e) => onChange('tax', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="footer-total">合計</label>
        <input
          id="footer-total"
          className="ml-15 input-medium"
          type="text"
          value={footer.total}
          onChange={(e) => onChange('total', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="footer-remarks">備考</label>
        <br />
        <textarea
          id="footer-remarks"
          className="mt-5 input-medium textarea-large"
          value={footer.remarks}
          onChange={(e) => onChange('remarks', e.target.value)}
        />
      </div>
    </div>
  )
}
