import { useState } from 'react'
import { InvoiceData, DetailItem } from '../types/invoice'
import { MAX_INVOICE_DETAILS } from '../constants/invoice'

const DEFAULT_CUSTOMER = {
  name: "株式会社 GCトランスポート",
  staffName: "営業部　請求 太郎 様",
  postNumber: "000-0000",
  address: "東京都 中央区 中央1-1-1",
}

const DEFAULT_INVOICE = {
  date: "2025-04-01",
  sheetNumber: "INV-2025-0401-0001",
  registrationNumber: "T4010001228874",
}

const DEFAULT_COMPANY = {
  name: "株式会社 GCエンジニアリング",
  staffName: "総務部　請求 次郎 様",
  postNumber: "000-0000",
  address: "東京都 中央区 中央1-1-1",
}

const DEFAULT_HEADER = {
  subject: "2025年03月 ソフトウェア利用料",
  total: "121,000",
}

const DEFAULT_DETAILS: DetailItem[] = [
  {
    dealDate: "2025-03-31",
    description: "経費精算アプリ",
    quantity: "1",
    unitPrice: "50,000",
    amount: "50,000",
  },
  {
    dealDate: "2025-03-31",
    description: "勤怠管理アプリ",
    quantity: "1",
    unitPrice: "60,000",
    amount: "60,000",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
  {
    dealDate: "",
    description: "",
    quantity: "",
    unitPrice: "",
    amount: "",
  },
]

const DEFAULT_TRANSFER = {
  dueDate: "2025-04-30",
  bankName: "東京銀行",
  branchName: "法人第一支店",
  accountNumber: "1234567 ｶ)ｼﾞｰｼｰｴﾝｼﾞﾆｱﾘﾝｸﾞ",
}

const DEFAULT_FOOTER = {
  subtotal: "110,000",
  tax: "11,000",
  total: "121,000",
  remarks: "恐れ入りますが、振込手数料はお客様のご負担でお願いいたします。",
}

const DEFAULT_INVOICE_DATA: InvoiceData = {
  customer: DEFAULT_CUSTOMER,
  invoice: DEFAULT_INVOICE,
  company: DEFAULT_COMPANY,
  header: DEFAULT_HEADER,
  details: DEFAULT_DETAILS,
  transfer: DEFAULT_TRANSFER,
  footer: DEFAULT_FOOTER,
}

const DEFAULT_VISIBLE_DETAILS = [true, true, false, false, false, false, false, false, false]

export const useInvoiceForm = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(DEFAULT_INVOICE_DATA)
  const [visibleDetails, setVisibleDetails] = useState<boolean[]>(DEFAULT_VISIBLE_DETAILS)

  const updateCustomer = (field: keyof typeof invoiceData.customer, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      customer: {
        ...prev.customer,
        [field]: value
      }
    }))
  }

  const updateInvoice = (field: keyof typeof invoiceData.invoice, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      invoice: {
        ...prev.invoice,
        [field]: value
      }
    }))
  }

  const updateCompany = (field: keyof typeof invoiceData.company, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      company: {
        ...prev.company,
        [field]: value
      }
    }))
  }

  const updateHeader = (field: keyof typeof invoiceData.header, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      header: {
        ...prev.header,
        [field]: value
      }
    }))
  }

  const updateDetail = (index: number, field: keyof DetailItem, value: string) => {
    setInvoiceData(prev => {
      const newDetails = [...prev.details]
      newDetails[index] = {
        ...newDetails[index],
        [field]: value
      }
      return {
        ...prev,
        details: newDetails
      }
    })
  }

  const updateTransfer = (field: keyof typeof invoiceData.transfer, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      transfer: {
        ...prev.transfer,
        [field]: value
      }
    }))
  }

  const updateFooter = (field: keyof typeof invoiceData.footer, value: string) => {
    setInvoiceData(prev => ({
      ...prev,
      footer: {
        ...prev.footer,
        [field]: value
      }
    }))
  }

  const toggleDetailVisibility = (index: number) => {
    setVisibleDetails(prev => {
      const newVisibleDetails = [...prev]
      if (newVisibleDetails[index]) {
        for (let i = index; i < newVisibleDetails.length; i++) {
          newVisibleDetails[i] = false
        }
      } else {
        newVisibleDetails[index] = true
      }
      return newVisibleDetails
    })
  }

  const getReportParams = () => {
    const baseParams = [
      { Name: "CustomerName", Value: [invoiceData.customer.name] },
      { Name: "CustomerStaffName", Value: [invoiceData.customer.staffName] },
      { Name: "CustomerPostNumber", Value: [invoiceData.customer.postNumber] },
      { Name: "CustomerAddress", Value: [invoiceData.customer.address] },

      { Name: "InvoiceDate", Value: [invoiceData.invoice.date] },
      { Name: "InvoiceSheetNumber", Value: [invoiceData.invoice.sheetNumber] },
      { Name: "InvoiceNumber", Value: [invoiceData.invoice.registrationNumber] },

      { Name: "OwnName", Value: [invoiceData.company.name] },
      { Name: "OwnStaffName", Value: [invoiceData.company.staffName] },
      { Name: "OwnPostNumber", Value: [invoiceData.company.postNumber] },
      { Name: "OwnAddress", Value: [invoiceData.company.address] },

      { Name: "HeaderSubject", Value: [invoiceData.header.subject] },
      { Name: "HeaderTotal", Value: [invoiceData.header.total] },

      { Name: "TransferDueDate", Value: [invoiceData.transfer.dueDate] },
      { Name: "TransferBankName", Value: [invoiceData.transfer.bankName] },
      { Name: "TransferBranchName", Value: [invoiceData.transfer.branchName] },
      { Name: "TransferAccountNumber", Value: [invoiceData.transfer.accountNumber] },

      { Name: "FooterSubtotal", Value: [invoiceData.footer.subtotal] },
      { Name: "FooterTax", Value: [invoiceData.footer.tax] },
      { Name: "FooterTotal", Value: [invoiceData.footer.total] },
      { Name: "FooterRemarks", Value: [invoiceData.footer.remarks] },
    ]

    const detailParams = []
    const detailNames = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth"]
    for (let i = 0; i < MAX_INVOICE_DETAILS; i++) {
      const detail = invoiceData.details[i]
      const suffix = detailNames[i]

      detailParams.push(
        { Name: `DetailDealDate${suffix}`, Value: [detail.dealDate] },
        { Name: `DetailAbc${suffix}`, Value: [detail.description] },
        { Name: `DetailQuantity${suffix}`, Value: [detail.quantity] },
        { Name: `DetailUnit${suffix}`, Value: [detail.unitPrice] },
        { Name: `DetailAmount${suffix}`, Value: [detail.amount] }
      )
    }

    return [...baseParams, ...detailParams]
  }

  return {
    invoiceData,
    visibleDetails,
    updateCustomer,
    updateInvoice,
    updateCompany,
    updateHeader,
    updateDetail,
    updateTransfer,
    updateFooter,
    toggleDetailVisibility,
    getReportParams,
  }
}
