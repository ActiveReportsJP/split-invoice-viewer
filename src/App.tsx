import { useEffect, useRef } from "react"
import "./App.css"
import { Viewer } from "@mescius/activereportsjs-react"
import "@mescius/activereportsjs-i18n"

import { useInvoiceForm } from "./hooks/useInvoiceForm"
import { CustomerForm } from "./components/CustomerForm"
import { InvoiceForm } from "./components/InvoiceForm"
import { CompanyForm } from "./components/CompanyForm"
import { HeaderForm } from "./components/HeaderForm"
import { DetailForm } from "./components/DetailForm"
import { TransferForm } from "./components/TransferForm"
import { FooterForm } from "./components/FooterForm"
import { MAX_INVOICE_DETAILS } from "./constants/invoice"

function App() {
  const viewerRef = useRef<Viewer>(null)
  const path = "reports/invoice.rdlx-json"

  const {
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
    getReportParams
  } = useInvoiceForm()

  const exportsSettings = {
    pdf: {
      author: "author"
    }
  }
  const toolbarLayout = {
    default: ["$zoom", "$print"]
  }

  useEffect(() => {
    if (!viewerRef.current) return
    const reportParams = getReportParams()
    viewerRef.current.Viewer.open(path, { ReportParams: reportParams })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceData])

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <h2>
            <a href="/split-invoice-viewer/" style={{ textDecoration: 'none', color: 'inherit' }}>
              請求書の新規作成
            </a>
          </h2>

          {/* 取引先情報 */}
          <CustomerForm
            customer={invoiceData.customer}
            onChange={updateCustomer}
          />

          {/* 請求情報 */}
          <InvoiceForm
            invoice={invoiceData.invoice}
            onChange={updateInvoice}
          />

          {/* 自社情報 */}
          <CompanyForm
            company={invoiceData.company}
            onChange={updateCompany}
          />

          {/* 請求ヘッダー */}
          <HeaderForm
            header={invoiceData.header}
            onChange={updateHeader}
          />

          {/* 請求明細 */}
          {invoiceData.details.map((detail, index) => {
            const isVisible = visibleDetails[index]
            if (!isVisible) return null

            const lastDetailIndex = MAX_INVOICE_DETAILS - 1
            const isLast = index === lastDetailIndex
            const canShowNext = index < lastDetailIndex && !visibleDetails[index + 1]

            return (
              <DetailForm
                detail={detail}
                index={index}
                onChange={updateDetail}
                showToggle={!isLast}
                toggleButtonText={canShowNext ? "＋" : "－"}
                onToggle={() => toggleDetailVisibility(index + 1)}
              />
            )
          })}

          {/* 振込情報 */}
          <TransferForm
            transfer={invoiceData.transfer}
            onChange={updateTransfer}
          />

          {/* 請求フッター */}
          <FooterForm
            footer={invoiceData.footer}
            onChange={updateFooter}
          />

        </div>
        <div className="viewer">
          <div id="viewer-host">
            <Viewer
              ref={viewerRef}
              language="ja"
              toolbarVisible={true}
              sidebarVisible={false}
              parameterPanelLocation="default"
              panelsLayout="toolbar"
              availableExports={["pdf"]}
              exportsSettings={exportsSettings}
              toolbarLayout={toolbarLayout}
              mouseMode="Pan"
              zoom="FitPage"
              fullscreen={false}
              viewMode="Continuous"
              renderMode="Paginated"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
