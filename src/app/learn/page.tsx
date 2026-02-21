import Link from 'next/link'

export default function Learn() {
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
            <Link href="/learn" className="text-emerald-600 font-medium">教學</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">關於</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">理財教學</h1>

        {/* Table of Contents */}
        <div className="card mb-8">
          <h2 className="font-semibold mb-4">目錄</h2>
          <ul className="space-y-2">
            <li><a href="#etf" className="text-emerald-600 hover:underline">什麼是 ETF？</a></li>
            <li><a href="#active-passive" className="text-emerald-600 hover:underline">主動式 vs 被動式 ETF</a></li>
            <li><a href="#fee" className="text-emerald-600 hover:underline">管理費是什麼？</a></li>
            <li><a href="#dividend" className="text-emerald-600 hover:underline">股息怎麼來？</a></li>
          </ul>
        </div>

        {/* What is ETF */}
        <section id="etf" className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">📚 什麼是 ETF？</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              <strong>ETF</strong> 的全名是「Exchange Traded Fund」，中文叫「指數股票型基金」。
            </p>
            <p className="mb-4">
              簡單來說，ETF 就像是一個「籃子」，裡面裝了很多檔股票或債券。
              買一檔 ETF，就等於一次買進好幾十甚至好幾百檔股票！
            </p>
            
            <div className="bg-emerald-50 rounded-lg p-4 my-6">
              <h3 className="font-bold text-emerald-800 mb-2">💡 舉例來說：</h3>
              <p className="text-emerald-700">
                0050（元大台灣50）這檔 ETF，裡面就包含了台灣市值前 50 大的公司。
                買一檔 0050，就等於同時買進了台積電、鴻海、聯發科...等 50 檔股票！
              </p>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-6">ETF 的優點</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>分散風險</strong>：一檔ETF涵蓋數十甚至數百檔股票</li>
              <li><strong>門檻低</strong>：幾百塊就能入手</li>
              <li><strong>交易方便</strong>：像股票一樣隨時可以買賣</li>
              <li><strong>費用低</strong>：相對共同基金便宜</li>
            </ul>
          </div>
        </section>

        {/* Active vs Passive */}
        <section id="active-passive" className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">🔄 主動式 vs 被動式 ETF</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              這是投資新手最常困惑的問題。讓我們用簡單的方式解釋！
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-bold text-blue-800 mb-2">🅰️ 被動式 ETF</h3>
                <p className="text-sm text-blue-700 mb-3">
                  基金經理人<strong>不用選股</strong>，只要複製指數的成分股就好
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 費用極低</li>
                  <li>• 緊跟大盤表現</li>
                  <li>• 不需要專業經理人</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-bold text-orange-800 mb-2">🅱️ 主動式 ETF</h3>
                <p className="text-sm text-orange-700 mb-3">
                  基金經理人<strong>主動選股</strong>，想要打敗大盤
                </p>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• 費用較高</li>
                  <li>• 有機會打敗大盤</li>
                  <li>• 需要專業團隊操作</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-6">常見迷思</h3>
            <div className="bg-yellow-50 rounded-lg p-4 my-4">
              <p className="text-yellow-800">
                ❌ <strong>迷思：</strong>「主動式一定比較好，因為經理人會幫你選好的股票」
              </p>
              <p className="text-yellow-700 mt-2">
                ✅ <strong>真相：</strong>長期來看，大部分主動式基金無法打敗被動式指數！
                根據統計，過去 10 年約 80% 的主動基金表現輸給大盤。
              </p>
            </div>

            <h3 className="text-xl font-bold mb-3">怎麼區分？</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>看名稱</strong>：名稱有「指數」、「標普」、「那斯達克」通常是被動式</li>
              <li><strong>看管理費</strong>：0.1% 以下通常是被動式，0.5%以上可能是主動式</li>
              <li><strong>看持股</strong>：持股固定不變的是被動式，經常變動的是主動式</li>
            </ul>
          </div>
        </section>

        {/* Management Fee */}
        <section id="fee" className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">💰 管理費是什麼？</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              當你買 ETF 時，基金公司會每年收取一點點費用，來支付他們管理這個基金的成本。
              這個費用就叫做「管理費」或「經理費」。
            </p>

            <h3 className="text-xl font-bold mb-3">管理費怎麼計算？</h3>
            <div className="bg-gray-100 rounded-lg p-4 my-4">
              <p className="font-mono">
                假設你投資 10 萬元，管理費是 0.5%
              </p>
              <p className="mt-2">
                那麼每年要付：10 萬 × 0.5% = <strong>500 元</strong>
              </p>
            </div>

            <h3 className="text-xl font-bold mb-3">管理費的影響</h3>
            <p className="mb-4">
              別小看這 0.5%！長期投資下來，費用會大大影響你的最終報酬。
            </p>

            <table className="w-full border-collapse my-4">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">管理費</th>
                  <th className="text-right py-2">10年總費用（投資100萬）</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2">0.03%（如 VOO）</td>
                  <td className="text-right py-2">約 3,000 元</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">0.5%（一般ETF）</td>
                  <td className="text-right py-2">約 50,000 元</td>
                </tr>
                <tr>
                  <td className="py-2">1.5%（主動型）</td>
                  <td className="text-right py-2">約 150,000 元</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-emerald-50 rounded-lg p-4 my-6">
              <h3 className="font-bold text-emerald-800 mb-2">💡 小龍蝦建議：</h3>
              <p className="text-emerald-700">
                選擇管理費低於 0.5% 的 ETF，長期下來可以省下可觀的費用！
                我們的網站會自動標示管理費過高（&gt;1%）的ETF，幫你避開地雷。
              </p>
            </div>
          </div>
        </section>

        {/* Dividend */}
        <section id="dividend" className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">💵 股息怎麼來？</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              很多人買高股息 ETF，就是為了「領股息」。但股息是怎麼來的呢？
            </p>

            <h3 className="text-xl font-bold mb-3">股息的來源</h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li><strong>股票配息</strong>：ETF 持有的股票配發現金股利</li>
              <li><strong>債券利息</strong>：債券型 ETF 的利息收入</li>
              <li><strong>資本利得</strong>：買賣股票的獲利（有時會分配）</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">高股息ETF的陷阱</h3>
            <div className="bg-red-50 rounded-lg p-4 my-4">
              <p className="text-red-800 mb-2">⚠️ 注意！高股息不等於高報酬！</p>
              <p className="text-red-700">
                有些 ETF 為了「製造」高股息，會故意賣掉上漲的股票實現獲利。
                這看起來讓你拿到錢，但長期下來可能會吃掉你的本金！
              </p>
            </div>

            <h3 className="text-xl font-bold mb-3">怎麼判斷？</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>看「年化殖利率」而不是「當次配息」</li>
              <li>看長期總報酬，不要只看股息</li>
              <li>注意「股息支付率」是否異常高</li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section className="card bg-emerald-600 text-white">
          <h2 className="text-2xl font-bold mb-4">🎯 重點整理</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span gap-2>✅</span>
              <span>ETF 是「一籃子股票」，分散風險</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✅</span>
              <span>被動式 ETF 費用低，長期表現通常更好</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✅</span>
              <span>管理費會吃掉報酬，選 0.5% 以下的</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✅</span>
              <span>高股息不等於高報酬，要看總報酬</span>
            </li>
            <li className="flex items-start gap-2">
              <span>✅</span>
              <span>成立未滿 3 年的 ETF 風險較高，慎選！</span>
            </li>
          </ul>
        </section>
      </main>
    </div>
  )
}
