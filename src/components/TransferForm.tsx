import { TransferInfo } from '../types/invoice'

interface TransferFormProps {
  transfer: TransferInfo
  onChange: (field: keyof TransferInfo, value: string) => void
}

export const TransferForm = ({ transfer, onChange }: TransferFormProps) => {
  return (
    <div className="card">
      <h4>振込情報</h4>
      <div>
        <label htmlFor="transfer-due-date">振込期日</label>
        <input
          id="transfer-due-date"
          className="ml-15 input-medium"
          type="text"
          value={transfer.dueDate}
          onChange={(e) => onChange('dueDate', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="transfer-bank-name">銀行名</label>
        <input
          id="transfer-bank-name"
          className="ml-15 input-medium"
          type="text"
          value={transfer.bankName}
          onChange={(e) => onChange('bankName', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="transfer-branch-name">支店名</label>
        <input
          id="transfer-branch-name"
          className="ml-15 input-medium"
          type="text"
          value={transfer.branchName}
          onChange={(e) => onChange('branchName', e.target.value)}
        />
      </div>
      <div className="mt-5">
        <label htmlFor="transfer-account-number">口座番号</label>
        <input
          id="transfer-account-number"
          className="ml-15 input-medium"
          type="text"
          value={transfer.accountNumber}
          onChange={(e) => onChange('accountNumber', e.target.value)}
        />
      </div>
    </div>
  )
}
