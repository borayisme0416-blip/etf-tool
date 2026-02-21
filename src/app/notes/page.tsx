import Link from 'next/link'
import { Suspense } from 'react'

export const metadata = {
  title: '機器學習筆記 - 別當韭菜了',
  description: '機器學習、深度學習、LLM 完整學習筆記',
}

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-emerald-600">
            別當韭菜了
          </Link>
          <nav className="flex gap-6">
            <Link href="/search" className="text-gray-600 hover:text-emerald-600">
              查詢
            </Link>
            <Link href="/compare" className="text-gray-600 hover:text-emerald-600">
              比較
            </Link>
            <Link href="/calculator" className="text-gray-600 hover:text-emerald-600">
              計算機
            </Link>
            <Link href="/learn" className="text-gray-600 hover:text-emerald-600">
              教學
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-emerald-600">
              關於
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">📚 機器學習完整筆記</h1>
          <p className="text-gray-600 mb-8">
            從基礎到大型語言模型的完整學習路徑
          </p>

          <div className="space-y-6">
            <section className="border-l-4 border-emerald-500 pl-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">🚀 學習路徑</h2>
              <p className="text-gray-600">機器學習基礎 → 深度學習 → Transformer → LLM → 應用</p>
            </section>

            <section className="border-l-4 border-blue-500 pl-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">🤖 第一部分：機器學習基礎</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• 什麼是機器學習？監督/非監督/強化學習</li>
                <li>• 監督學習：分類問題、迴歸問題</li>
                <li>• 模型評估：準確率、F1 Score、交叉驗證</li>
                <li>• 正規化：L1、L2、Dropout</li>
              </ul>
            </section>

            <section className="border-l-4 border-purple-500 pl-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">🧠 第二部分：深度學習</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• 神經網路基礎：神經元、啟動函數、梯度下降</li>
                <li>• CNN：卷積層、池化層經典架構</li>
                <li>• RNN/LSTM：序列資料處理</li>
                <li>• Transformer：注意力機制、位置編碼</li>
              </ul>
            </section>

            <section className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">💬 第三部分：大型語言模型</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• LLM 基礎：什麼是 LLM、模型規模</li>
                <li>• 訓練流程：預訓練、SFT、RLHF</li>
                <li>• Prompt Engineering：技巧與框架</li>
                <li>• RAG：檢索增強生成</li>
                <li>• Agents：LLM + 工具</li>
              </ul>
            </section>
          </div>

          <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
            <h3 className="font-bold text-emerald-800 mb-2">📖 閱讀完整筆記</h3>
            <p className="text-emerald-700 text-sm">
              筆記內容豐富，強烈建議使用電腦閱讀以獲得最佳體驗。
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Link href="/learn" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <span className="text-lg font-medium">📚 ETF 教學頁面</span>
              <p className="text-sm text-gray-600">了解 ETF 投資知識</p>
            </Link>
            <Link href="/" className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <span className="text-lg font-medium">🏠 回首頁</span>
              <p className="text-sm text-gray-600">回到 ETF 查詢工具</p>
            </Link>
          </div>
        </div>

        {/* 筆記內容 */}
        <div className="mt-8 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 筆記目錄</h2>
          
          <details className="mb-4">
            <summary className="cursor-pointer text-lg font-medium text-emerald-600 hover:text-emerald-700">
              🤖 第一部分：機器學習基礎
            </summary>
            <div className="mt-4 space-y-4 text-gray-600">
              <div>
                <h3 className="font-bold text-gray-800">1. 什麼是機器學習？</h3>
                <p className="mt-2">
                  機器學習是人工智慧的一個分支，透過演算法讓電腦從資料中自動學習規律，不需要人類明確編寫規則。
                </p>
                <h4 className="font-medium text-gray-700 mt-3">機器學習的類型：</h4>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>監督學習</strong>：有標籤資料，學習輸入→輸出映射（例：垃圾郵件分類）</li>
                  <li><strong>非監督學習</strong>：無標籤資料，找出資料內在結構（例：客戶分群）</li>
                  <li><strong>強化學習</strong>：環境互動+獎懲，學習最佳決策（例：圍棋 AI）</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">2. 監督學習詳解</h3>
                <h4 className="font-medium text-gray-700 mt-2">分類問題：</h4>
                <p className="mt-1">輸出是離散類別（貓/狗、垃圾郵件/正常郵件）</p>
                <h4 className="font-medium text-gray-700 mt-2">迴歸問題：</h4>
                <p className="mt-1">輸出是連續數值（房價預測、溫度預測）</p>
                <h4 className="font-medium text-gray-700 mt-2">常用演算法：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>邏輯迴歸、決策樹、隨機森林、SVM、KNN</li>
                  <li>線性迴歸、多項式迴歸、Ridge、Lasso</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">3. 模型評估與過擬合</h3>
                <h4 className="font-medium text-gray-700 mt-2">評估指標：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>準確率 (Accuracy)</strong>：正確預測 / 總數</li>
                  <li><strong>精確率 (Precision)</strong>：TP / (TP + FP)</li>
                  <li><strong>召回率 (Recall)</strong>：TP / (TP + FN)</li>
                  <li><strong>F1 Score</strong>：精確率與召回率的調和平均</li>
                </ul>
                <h4 className="font-medium text-gray-700 mt-3">過擬合 vs 欠擬合：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>過擬合</strong>：訓練好但測試差 → 解決：增加資料、正規化</li>
                  <li><strong>欠擬合</strong>：訓練就不好 → 解決：增加模型複雜度</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="mb-4">
            <summary className="cursor-pointer text-lg font-medium text-purple-600 hover:text-purple-700">
              🧠 第二部分：深度學習
            </summary>
            <div className="mt-4 space-y-4 text-gray-600">
              <div>
                <h3 className="font-bold text-gray-800">1. 神經網路基礎</h3>
                <p className="mt-2">使用多層神經網路自動學習特徵表示，適合處理非結構化資料（圖片、文字、音頻）。</p>
                <h4 className="font-medium text-gray-700 mt-3">核心概念：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>神經元</strong>：輸入→權重→加總→啟動函數→輸出</li>
                  <li><strong>啟動函數</strong>：ReLU（最常用）、Sigmoid、Tanh、Softmax</li>
                  <li><strong>訓練過程</strong>：前向傳播→計算損失→反向傳播→梯度下降</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">2. CNN（卷積神經網路）</h3>
                <p className="mt-2">專為處理圖像設計，能有效捕捉空間結構特徵。</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>卷積層</strong>：提取邊緣、紋理等特徵</li>
                  <li><strong>池化層</strong>：降低維度、減少計算量</li>
                  <li><strong>經典架構</strong>：LeNet→AlexNet→VGG→ResNet→EfficientNet</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">3. RNN/LSTM</h3>
                <p className="mt-2">處理序列資料，記住之前的資訊。</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>RNN</strong>：基本循環結構，但有梯度消失問題</li>
                  <li><strong>LSTM</strong>：透過門控機制解決長序列問題</li>
                  <li><strong>GRU</strong>：LSTM 的簡化版本</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">4. Transformer（重點！）</h3>
                <p className="mt-2">2017 年 Google 發表，完全使用注意力機制，徹底改變 NLP 領域。</p>
                <h4 className="font-medium text-gray-700 mt-3">核心機制：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>自注意力 (Self-Attention)</strong>：讓每個詞注意所有其他詞</li>
                  <li><strong>多頭注意力</strong>：多個頭同時學習不同特徵</li>
                  <li><strong>位置編碼</strong>：加入順序資訊</li>
                </ul>
                <h4 className="font-medium text-gray-700 mt-3">經典模型：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>BERT</strong>：Google，雙向編碼，理解任務</li>
                  <li><strong>GPT</strong>：OpenAI，單向解碼，生成任務</li>
                  <li><strong>T5</strong>：Google，文本到文本</li>
                </ul>
              </div>
            </div>
          </details>

          <details className="mb-4">
            <summary className="cursor-pointer text-lg font-medium text-orange-600 hover:text-orange-700">
              💬 第三部分：大型語言模型 (LLM)
            </summary>
            <div className="mt-4 space-y-4 text-gray-600">
              <div>
                <h3 className="font-bold text-gray-800">1. 什麼是 LLM？</h3>
                <p className="mt-2">基於 Transformer 的大規模語言模型，數十億到數千億參數，透過預測下一個詞來學習語言。</p>
                <h4 className="font-medium text-gray-700 mt-3">規模演進：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>GPT-1 (117M, 2018) → GPT-2 (1.5B, 2019)</li>
                  <li>→ GPT-3 (175B, 2020) → GPT-4 (2023)</li>
                  <li>→ Claude 3, Gemini (2024)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">2. LLM 訓練流程</h3>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li><strong>預訓練</strong>：數兆 tokens 文本，預測下一個詞</li>
                  <li><strong>監督微調 (SFT)</strong>：人類寫的問答對，學習回答</li>
                  <li><strong>獎勵模型</strong>：人類排序輸出，建立評分</li>
                  <li><strong>RLHF</strong>：強化學習優化輸出，更符合人類偏好</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">3. Prompt Engineering</h3>
                <h4 className="font-medium text-gray-700 mt-2">核心原則：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>清晰明確</strong>：具體說明需求</li>
                  <li><strong>提供上下文</strong>：給背景資訊、角色</li>
                  <li><strong>指定格式</strong>：明確輸出格式</li>
                </ul>
                <h4 className="font-medium text-gray-700 mt-3">進階技巧：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li><strong>Few-Shot</strong>：給範例讓模型學習</li>
                  <li><strong>CoT</strong>：引導一步一步思考</li>
                  <li><strong>Role Prompting</strong>：賦予特定角色</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">4. RAG（檢索增強生成）</h3>
                <p className="mt-2">解決 LLM 知識截至日期、無法訪問私有資料的問題。</p>
                <ol className="list-decimal list-inside mt-2 space-y-1">
                  <li>使用者問題 → 向量資料庫檢索</li>
                  <li>將相關資料加入 prompt</li>
                  <li>LLM 生成答案</li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-gray-800">5. LLM Agents</h3>
                <p className="mt-2">讓 LLM 能夠使用工具、規劃任務、自主決策。</p>
                <h4 className="font-medium text-gray-700 mt-2">架構：</h4>
                <p className="mt-1">LLM + 工具 + 記憶 + 規劃 = Agent</p>
                <h4 className="font-medium text-gray-700 mt-3">常用框架：</h4>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>LangChain、LlamaIndex、AutoGPT</li>
                </ul>
              </div>
            </div>
          </details>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-2">📚 學習資源推薦</h3>
            <ul className="text-blue-700 space-y-1 text-sm">
              <li>• Andrew Ng 的 Machine Learning (Coursera)</li>
              <li>• Fast.ai 深度學習課程</li>
              <li>• DeepLearning.AI</li>
              <li>• Kaggle 競賽實作</li>
              <li>• Hugging Face 實作</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
