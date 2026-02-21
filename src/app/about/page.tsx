import Link from 'next/link'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            別當韭菜了
          </Link>
          <nav className="flex gap-6">
            <Link href="/search" className="text-gray-600 hover:text-emerald-600">查詢</Link>
            <Link href="/calculator">計算機</Link>
            <Link href="/compare" className="text-gray-600 hover:text-emerald-600">比較</Link>
            <Link href="/learn" className="text-gray-600 hover:text-emerald-600">教學</Link>
            <Link href="/about" className="text-emerald-600 font-medium">關於</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">關於我們</h1>

        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">🌱 網站起源</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            「別當韭菜了理財一點就通」是由一群想要打破投資資訊壁壘的人創立的。
            我們相信，理財知識不應該只屬於少數人。
          </p>
          <p className="text-gray-700 leading-relaxed">
            這個網站的誕生，是因為我們看到太多人被複雜的金融術語嚇到，
            或者因為不了解 ETF 的遊戲規則而白白損失金錢。
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">🎯 我們的使命</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span>📚</span>
              <span>提供簡單易懂的理財知識</span>
            </li>
            <li className="flex items-start gap-2">
              <span>🔍</span>
              <span>幫助投資人快速比較 ETF 差異</span>
            </li>
            <li className="flex items-start gap-2">
              <span>⚠️</span>
              <span>揭露容易被忽略的費用與風險</span>
            </li>
            <li className="flex items-start gap-2">
              <span>💡</span>
              <span>讓每個人都能做出明智的投資決策</span>
            </li>
          </ul>
        </div>

        <div className="card mb-8">
          <h2 className="text-xl font-bold mb-4">⚠️ 免责声明</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 leading-relaxed">
              本網站提供的所有資訊僅供參考，不構成任何投資建議。
              投資有風險，請在做任何投資決定前諮詢專業人士。
              我們不對任何投資損失負責。
            </p>
          </div>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4">📧 聯絡我們</h2>
          <p className="text-gray-700 mb-4">
            有任何問題或建議？歡迎聯繫我們！
          </p>
          <p className="text-gray-600">
            Email: contact@example.com
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">別當韭菜了理財一點就通 © 2026</p>
          <p className="text-sm text-gray-500 mt-2">僅供參考，不構成投資建議</p>
        </div>
      </footer>
    </div>
  )
}
