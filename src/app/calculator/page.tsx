'use client';

import { useState } from 'react';

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<'fee' | 'yield' | 'compound'>('fee');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-600 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <a href="/" className="text-xl font-bold">別當韭菜了</a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">🧮 理財計算機</h1>

        <div className="flex gap-2 mb-6">
          {[
            { key: 'fee', label: '管理費計算' },
            { key: 'yield', label: '殖利率計算' },
            { key: 'compound', label: '複利計算' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'fee' && <FeeCalculator />}
        {activeTab === 'yield' && <YieldCalculator />}
        {activeTab === 'compound' && <CompoundCalculator />}
      </main>
    </div>
  );
}

function FeeCalculator() {
  const [principal, setPrincipal] = useState('');
  const [feeRate, setFeeRate] = useState('0.5');
  const [years, setYears] = useState('10');
  const [result, setResult] = useState<{totalFee: number; percentage: number} | null>(null);

  const calculate = () => {
    const p = parseFloat(principal) || 0;
    const f = parseFloat(feeRate) || 0;
    const y = parseFloat(years) || 0;
    
    // 簡化計算：管理費依本金每年計算
    const yearlyFee = p * (f / 100);
    const totalFee = yearlyFee * y;
    const percentage = p > 0 ? (totalFee / p) * 100 : 0;

    setResult({ totalFee, percentage });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">📊 管理費計算機</h2>
      <p className="text-sm text-gray-600 mb-4">計算持有 ETF 期間需要支付的管理費總額</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">投入本金 (元)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="例如: 100000"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">管理費率 (%/年)</label>
          <input
            type="number"
            step="0.01"
            value={feeRate}
            onChange={(e) => setFeeRate(e.target.value)}
            placeholder="例如: 0.5"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">持有年限 (年)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="例如: 10"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700"
        >
          計算
        </button>

        {result && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <p className="text-lg">
              累積管理費: <span className="font-bold text-emerald-600">NT$ {result.totalFee.toLocaleString()}</span>
            </p>
            <p className="text-sm text-gray-600">
              佔本金的 {result.percentage.toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function YieldCalculator() {
  const [price, setPrice] = useState('');
  const [dividend, setDividend] = useState('');
  const [result, setResult] = useState<{yield_: number} | null>(null);

  const calculate = () => {
    const p = parseFloat(price) || 0;
    const d = parseFloat(dividend) || 0;
    
    const yieldPercent = p > 0 ? (d / p) * 100 : 0;
    setResult({ yield_: yieldPercent });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">💰 殖利率計算機</h2>
      <p className="text-sm text-gray-600 mb-4">計算 ETF 的殖利率 (股息率)</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">買入價格 (元)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="例如: 100"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">每年股息 (元)</label>
          <input
            type="number"
            step="0.01"
            value={dividend}
            onChange={(e) => setDividend(e.target.value)}
            placeholder="例如: 2"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700"
        >
          計算
        </button>

        {result && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <p className="text-lg">
              殖利率: <span className="font-bold text-emerald-600">{result.yield_.toFixed(2)}%</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function CompoundCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('7');
  const [years, setYears] = useState('20');
  const [monthly, setMonthly] = useState('');
  const [result, setResult] = useState<{total: number; earnings: number} | null>(null);

  const calculate = () => {
    const p = parseFloat(principal) || 0;
    const r = parseFloat(rate) / 100 || 0;
    const y = parseFloat(years) || 0;
    const m = parseFloat(monthly) || 0;
    
    // 複利公式: FV = PV(1+r)^n + PMT * ((1+r)^n - 1) / r
    const n = y;
    const futureValuePrincipal = p * Math.pow(1 + r, n);
    const futureValueMonthly = m > 0 ? m * (Math.pow(1 + r/12, n*12) - 1) / (r/12) : 0;
    const total = futureValuePrincipal + futureValueMonthly;
    const earnings = total - p - (m * 12 * y);

    setResult({ total, earnings });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">📈 複利計算機</h2>
      <p className="text-sm text-gray-600 mb-4">計算長期投資的複利效果</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">初始本金 (元)</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="例如: 100000"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">每月投入 (元)</label>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(e.target.value)}
            placeholder="例如: 5000 (可選)"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">年化報酬率 (%)</label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="例如: 7"
            className="w-full p-3 border rounded-lg"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">投資年限 (年)</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            placeholder="例如: 20"
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg font-medium hover:bg-emerald-700"
        >
          計算
        </button>

        {result && (
          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <p className="text-lg">
              總金額: <span className="font-bold text-emerald-600">NT$ {result.total.toLocaleString()}</span>
            </p>
            <p className="text-sm text-gray-600">
              總收益: NT$ {result.earnings.toLocaleString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
