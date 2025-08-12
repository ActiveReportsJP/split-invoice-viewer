export interface CustomerInfo {
  name: string
  staffName: string
  postNumber: string
  address: string
}

export interface InvoiceInfo {
  date: string
  sheetNumber: string
  registrationNumber: string
}

export interface CompanyInfo {
  name: string
  staffName: string
  postNumber: string
  address: string
}

export interface HeaderInfo {
  subject: string
  total: string
}

export interface DetailItem {
  dealDate: string
  description: string
  quantity: string
  unitPrice: string
  amount: string
}

export interface TransferInfo {
  dueDate: string
  bankName: string
  branchName: string
  accountNumber: string
}

export interface FooterInfo {
  subtotal: string
  tax: string
  total: string
  remarks: string
}

export interface InvoiceData {
  customer: CustomerInfo
  invoice: InvoiceInfo
  company: CompanyInfo
  header: HeaderInfo
  details: DetailItem[]
  transfer: TransferInfo
  footer: FooterInfo
}
