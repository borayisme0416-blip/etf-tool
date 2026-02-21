'use client'

import { useState } from 'react'
import Link from 'next/link'

const allEtfs = [
  { code: '0050', name: '元大台灣50', fee: 0.43, yield: 15.2, years: 21, region: 'tw' },
  { code: '0056', name: '元大高股息', fee: 0.46, yield: 8.3, years: 15, region: 'tw' },
  { code: '00878', name: '國泰永續高股息', fee: 0.35, yield: 7.8, years: 4, region: 'tw' },
  { code: '00929', name: '復華台灣科技優息', fee: 0.3, yield: 9.1, years: 2, region: 'tw' },
  { code: 'VOO', name: 'Vanguard S&P 500', fee: 0.03, yield: 12.1, years: 14, region: 'us' },
  { code: 'VTI', name: 'Vanguard Total Stock', fee: 0.03, yield: 11.8, years: 22, region: 'us' },
  { code: 'QQQ', name: 'Invesco QQQ Trust', fee: 0.2, yield: 14.5, years: 25, region: 'us' },
  { code: 'SPY', name: 'SPDR S&P 500 ETF', fee: 0.09, yield: 12.0, years: 31, region: 'us' },
  { code: 'SCHD', name: 'Schwab US Dividend', fee: 0.06, yield: 11.2, years: 13, region: 'us' },
  { code: 'JEPI', name: 'JPMorgan Equity Premium', fee: 0.35, yield: 8.5, years: 4, region: 'us' },
]

export default function Compare() {
  const [selected, setSelected] = useState<string[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  
  const addEtf = (code: string) => {
    if (selected.length < 5 && !selected.includes(code)) {
      setSelected([...selected, code])
    }
    setShowDropdown(false)
  }
  
  const removeEtf = (code: string) => {
    setSelected(selected.filter(c => c !== code))
  }
  
  const compareList = allEtfs.filter(e => selected.includes(e.code))
  const maxYield = Math.max(...compareList.map(e => e.yield), 1)
  const minFee = Math.min(...compareList.map(e => e.fee), 1)

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
            <Link href="/compare" className="text-emerald-600 font-medium">比較</Link>
            <Link href="/learn" className="text-gray-600 hover:text-emerald-600">教學</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">關於</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">ETF 比較</h1>
        
        {/* Selector */}
        <div className="card mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            選擇要比較的 ETF（最多5檔）
          </label>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="input text-left flex justify-between items-center"
            >
              <span>{selected.length === 0 ? '點擊選擇...' : `${selected.length} 檔已選擇`}</span>
              <span className="text-gray-400">▼</span>
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
                {allEtfs.map(etf => (
                  <button
                    key={etf.code}
                    onClick={() => addEtf(etf.code)}
                    disabled={selected.includes(etf.code)}
                    className="w-full px-4 py-2 text-left hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-medium">{etf.code}</span>
                    <span className="text-gray-500 ml-2">{etf.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Selected chips */}
          {selected.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selected.map(code => {
                const etf = allEtfs.find(e => e.code === code)!
                return (
                  <span
                    key={code}
                    className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {etf.code} {etf.name}
                    <button onClick={() => removeEtf(code)} className="hover:text-red-500">×</button>
                  </span>
                )
              })}
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {compareList.length > 0 && (
          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-2 font-medium text-gray-500">項目</th>
                  {compareList.map(etf => (
                    <th key={etf.code} className="text-center py-3 px-2">
                      <div className="font-bold">{etf.code}</div>
                      <div className="text-xs text-gray-500">{etf.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">年利率</td>
                  {compareList.map(etf => (
                    <td key={etf.code} className={`text-center py-3 px-2 ${etf.yield === maxYield ? 'bg-emerald-50 font-bold text-emerald-600' : ''}`}>
                      {etf.yield}%
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">管理費</td>
                  {compareList.map(etf => (
                    <td key={etf.code} className={`text-center py-3 px-2 ${etf.fee === minFee ? 'bg-emerald-50 font-bold text-emerald-600' : ''}`}>
                      {etf.fee}%
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">成立年數</td>
                  {compareList.map(etf => (
                    <td key={etf.code} className="text-center py-3 px-2">
                      {etf.years} 年
                    </td>
                  ))}
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">地區</td>
                  {compareList.map(etf => (
                    <td key={etf.code} className="text-center py-3 px-2">
                      {etf.region === 'tw' ? '🇹🇼 台灣' : '🇺🇸 美國'}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">風險警示</td>
                  {compareList.map(etf => (
                    <td key={etf.code} className="text-center py-3 px-2">
                      {etf.years < 3 && <span className="text-orange-500 text-sm">⚠️ 成立未滿3年</span>}
                      {etf.fee > 1 && <span className="text-red-500 text-sm block">⚠️ 管理費過高</span>}
                      {etf.years >= 3 && etf.fee <= 1 && <span className="text-green-500 text-sm">✅ 正常</span>}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {compareList.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p className="text-xl mb-2">請選擇要比較的 ETF</p>
            <p className="text-sm">最多可以比較 5 檔</p>
          </div>
        )}
      </main>
    </div>
  )
}
