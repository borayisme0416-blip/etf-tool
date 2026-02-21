'use client'

import { useState } from 'react'
import Link from 'next/link'

// Mock data - 之後用爬蟲替換
const twEtfs = [
  { code: '0050', name: '元大台灣50', fee: 0.43, yield: 15.2, years: 21 },
  { code: '0056', name: '元大高股息', fee: 0.46, yield: 8.3, years: 15 },
  { code: '00878', name: '國泰永續高股息', fee: 0.35, yield: 7.8, years: 4 },
  { code: '00929', name: '復華台灣科技優息', fee: 0.3, yield: 9.1, years: 2 },
  { code: '00713', name: '元大台灣高股息低波動', fee: 0.38, yield: 10.5, years: 7 },
  { code: '00919', name: '群益台灣精選高息', fee: 0.32, yield: 11.2, years: 2 },
  { code: '00915', name: '凱基優選高股息30', fee: 0.35, yield: 10.8, years: 2 },
  { code: '00918', name: '大華優利高股息30', fee: 0.33, yield: 9.5, years: 2 },
  { code: '0051', name: '元大中型100', fee: 0.5, yield: 12.1, years: 18 },
  { code: '0052', name: '元大電子', fee: 0.5, yield: 14.5, years: 16 },
]

const usEtfs = [
  { code: 'VOO', name: 'Vanguard S&P 500', fee: 0.03, yield: 12.1, years: 14 },
  { code: 'VTI', name: 'Vanguard Total Stock', fee: 0.03, yield: 11.8, years: 22 },
  { code: 'QQQ', name: 'Invesco QQQ Trust', fee: 0.2, yield: 14.5, years: 25 },
  { code: 'VUG', name: 'Vanguard Growth ETF', fee: 0.04, yield: 13.2, years: 19 },
  { code: 'VTV', name: 'Vanguard Value ETF', fee: 0.04, yield: 10.8, years: 21 },
  { code: 'SPY', name: 'SPDR S&P 500 ETF', fee: 0.09, yield: 12.0, years: 31 },
  { code: 'IVV', name: 'iShares Core S&P 500', fee: 0.03, yield: 12.1, years: 24 },
  { code: 'ARKK', name: 'ARK Innovation ETF', fee: 0.75, yield: -5.2, years: 10 },
  { code: 'JEPI', name: 'JPMorgan Equity Premium', fee: 0.35, yield: 8.5, years: 4 },
  { code: 'SCHD', name: 'Schwab US Dividend', fee: 0.06, yield: 11.2, years: 13 },
]

function WarningBadge({ years, fee }: { years: number; fee: number }) {
  const warnings: string[] = []
  if (years < 3) warnings.push('成立未滿3年')
  if (fee > 1) warnings.push('管理費過高')
  
  if (warnings.length === 0) return null
  
  return (
    <div className="flex gap-1 mt-2">
      {warnings.map((w) => (
        <span
          key={w}
          className={`text-xs px-2 py-1 rounded ${
            w.includes('3年') ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'
          }`}
        >
          ⚠️ {w}
        </span>
      ))}
    </div>
  )
}

function EtfCard({ etf }: { etf: typeof twEtfs[0] }) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg">{etf.code}</h3>
          <p className="text-gray-600">{etf.name}</p>
        </div>
        <div className="text-right">
          <p className="text-emerald-600 font-bold text-xl">{etf.yield}%</p>
          <p className="text-xs text-gray-500">年利率</p>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-3">
        <span>管理費: {etf.fee}%</span>
        <span>成立: {etf.years}年</span>
      </div>
      <WarningBadge years={etf.years} fee={etf.fee} />
    </div>
  )
}

export default function Search() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState<'all' | 'tw' | 'us'>('all')
  const [sortBy, setSortBy] = useState<'yield' | 'fee' | 'years'>('yield')
  
  const allEtfs = [...twEtfs, ...usEtfs].map(e => ({ ...e, region: e.code.match(/^[0-9]/) ? 'tw' : 'us' as const }))
  
  const filtered = allEtfs
    .filter(e => {
      if (region !== 'all' && e.region !== region) return false
      if (!search) return true
      return e.code.toLowerCase().includes(search.toLowerCase()) || 
             e.name.toLowerCase().includes(search.toLowerCase())
    })
    .sort((a, b) => {
      if (sortBy === 'yield') return b.yield - a.yield
      if (sortBy === 'fee') return a.fee - b.fee
      return b.years - a.years
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            別當韭菜了
          </Link>
          <nav className="flex gap-6">
            <Link href="/search" className="text-emerald-600 font-medium">查詢</Link>
            <Link href="/calculator">計算機</Link>
            <Link href="/compare" className="text-gray-600 hover:text-emerald-600">比較</Link>
            <Link href="/learn" className="text-gray-600 hover:text-emerald-600">教學</Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">關於</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">ETF 查詢</h1>
        
        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-wrap gap-4">
            <input
              type="text"
              placeholder="搜尋代碼或名稱..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input flex-1 min-w-[200px]"
            />
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as any)}
              className="input w-auto"
            >
              <option value="all">全部</option>
              <option value="tw">🇹🇼 台灣</option>
              <option value="us">🇺🇸 美國</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="input w-auto"
            >
              <option value="yield">按年利率</option>
              <option value="fee">按管理費</option>
              <option value="years">按成立年數</option>
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((etf) => (
            <EtfCard key={etf.code} etf={etf} />
          ))}
        </div>
        
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">沒有找到符合的 ETF</p>
        )}
      </main>
    </div>
  )
}
