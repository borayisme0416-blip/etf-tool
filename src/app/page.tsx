import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            別當韭菜了
          </Link>
          <nav className="flex gap-6">
            <Link href="/search" className="text-gray-600 hover:text-emerald-600 transition-colors">
              查詢
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-emerald-600 transition-colors">
              比較
            </Link>
            <Link href="/calculator" className="text-gray-600 hover:text-emerald-600 transition-colors">
              計算機
            </Link>
            <Link href="/learn" className="text-gray-600 hover:text-emerald-600 transition-colors">
              教學
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600 transition-colors">
              關於
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            理財一點就通
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            輕鬆了解 ETF 與股票差別<br/>
            主動式 vs 被動式一看就懂
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="輸入股票代碼或名稱..."
              className="input text-lg mb-4"
            />
            <div className="flex gap-3 justify-center">
              <Link href="/search" className="btn btn-primary">
                開始查詢
              </Link>
              <Link href="/compare" className="btn btn-outline">
                比較功能
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">功能特色</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="font-semibold text-lg mb-2">快速查詢</h3>
              <p className="text-gray-600">輸入代碼立即查看年利率、管理費等詳細資訊</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-2">智能比較</h3>
              <p className="text-gray-600">最多比較 5 檔ETF，一眼看出差異</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="font-semibold text-lg mb-2">風險警示</h3>
              <p className="text-gray-600">管理費過高、成立未滿3年自動提醒</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">快速連結</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/learn" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">📚 什麼是 ETF？</h3>
              <p className="text-gray-600">新手入門教學，帶你了解基本概念</p>
            </Link>
            <Link href="/learn#active-passive" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">🔄 主動 vs 被動</h3>
              <p className="text-gray-600">一次搞懂兩者差異與優缺點</p>
            </Link>
            <Link href="/learn#fee" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">💰 管理費是什麼？</h3>
              <p className="text-gray-600">為什麼要收管理費？怎麼計算？</p>
            </Link>
            <Link href="/search?type=tw" className="card hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">🇹🇼 台灣 ETF</h3>
              <p className="text-gray-600">查看台灣上市櫃所有 ETF</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">別當韭菜了理財一點就通</p>
          <p className="text-sm text-gray-500">僅供參考，不構成投資建議</p>
        </div>
      </footer>
    </div>
  )
}
