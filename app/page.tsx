'use client';

import { useState } from 'react';

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 顶部导航 - 改进的玻璃态效果 */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 shadow-2xl backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">🎓</span>
              <span className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">智慧教育学习伴侣</span>
            </div>
            <nav className="hidden md:flex gap-8">
              {['首页', '课程', '教案', '学习分析', '关于我们'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-white hover:text-green-100 transition-colors font-medium py-2 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - 增强动画效果 */}
      <section className="relative container mx-auto px-6 pt-20 pb-32">
        <div className="text-center relative z-10">
          <div className="inline-block mb-8 animate-bounce">
            <div className="px-8 py-3 bg-green-400/20 backdrop-blur-xl border-2 border-green-400/50 rounded-full text-green-300 font-bold text-lg shadow-2xl hover:shadow-green-400/50 hover:scale-105 transition-all duration-300 cursor-pointer">
              🎓 Learning is Earning
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
            智慧教育学习伙伴
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent animate-gradient">
              让学习创造价值
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            AI驱动的个性化学习平台，将每一次学习转化为可验证的技能资产
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* 主要按钮 - 玻璃态设计 */}
            <button className="group relative px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-green-500/60 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <span>🚀</span>
                <span>开始学习之旅</span>
              </span>
              <div className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/30 transition-all duration-300"></div>
            </button>

            {/* 次要按钮 - 玻璃态设计 */}
            <button className="group relative px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white font-bold text-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 to-emerald-500/0 group-hover:from-green-400/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <span>📖</span>
                <span>了解更多</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 未来课堂 - 改进的卡片设计 */}
      <section className="relative container mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">未来课堂，从这里开始</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            AI驱动的个性化学习体验，让每个学生都能找到最适合自己的学习方式
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/30 transition-all duration-500 cursor-pointer"
              style={{
                transform: hoveredCard === index ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
              }}
            >
              {/* 顶部装饰条 */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 rounded-t-3xl"></div>
              
              {/* 背景光效 */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400/0 via-emerald-500/0 to-green-400/0 group-hover:from-green-400/20 group-hover:via-emerald-500/20 group-hover:to-green-400/20 rounded-3xl blur-xl transition-all duration-500 -z-10"></div>
              
              {/* 悬浮光晕 */}
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/10 rounded-full blur-3xl transition-all duration-500"
                style={{
                  opacity: hoveredCard === index ? 0.5 : 0.2,
                  transform: hoveredCard === index ? 'scale(1.5)' : 'scale(1)',
                }}
              ></div>
              
              <div className="relative z-10">
                <div 
                  className="text-6xl mb-6 inline-block transition-all duration-500"
                  style={{
                    transform: hoveredCard === index ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)',
                  }}
                >
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* 玻璃态按钮 */}
                <button className="relative w-full py-3 bg-gradient-to-r from-green-400/80 to-emerald-500/80 backdrop-blur-sm rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-2xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:scale-105 transition-transform duration-300">
                    <span>{feature.buttonText}</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 选择身份 - 增强的玻璃态效果 */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-2xl overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              选择您的身份，开始智慧学习之旅
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
              无论您是学生、教师还是家长，我们都为您准备了专属的学习和教学工具
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {userTypes.map((type, index) => (
                <button
                  key={type.title}
                  onMouseEnter={() => setHoveredUser(index)}
                  onMouseLeave={() => setHoveredUser(null)}
                  className="group relative bg-gradient-to-br from-green-400/10 to-emerald-500/10 backdrop-blur-xl border-2 border-green-400/30 rounded-2xl p-10 transition-all duration-500 shadow-xl overflow-hidden"
                  style={{
                    transform: hoveredUser === index ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(1)',
                    borderColor: hoveredUser === index ? 'rgba(74, 222, 128, 0.6)' : 'rgba(74, 222, 128, 0.3)',
                    boxShadow: hoveredUser === index ? '0 20px 60px rgba(74, 222, 128, 0.4)' : '0 10px 30px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  {/* 玻璃态覆层 */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent transition-opacity duration-300"
                    style={{ opacity: hoveredUser === index ? 1 : 0 }}
                  ></div>
                  
                  {/* 光效 */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-emerald-500/0 transition-opacity duration-500"
                    style={{ opacity: hoveredUser === index ? 1 : 0 }}
                  ></div>
                  
                  <div className="relative z-10">
                    <div 
                      className="text-6xl mb-6 inline-block transition-all duration-500"
                      style={{
                        transform: hoveredUser === index ? 'scale(1.3) rotate(10deg)' : 'scale(1) rotate(0deg)',
                      }}
                    >
                      {type.emoji}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                      {type.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base group-hover:text-gray-200 transition-colors duration-300">
                      {type.description}
                    </p>
                    
                    {/* 底部装饰线 */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-b-2xl transition-all duration-300"
                      style={{
                        opacity: hoveredUser === index ? 1 : 0,
                        transform: hoveredUser === index ? 'scaleX(1)' : 'scaleX(0)',
                      }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - 玻璃态设计 */}
      <footer className="relative border-t border-white/10 py-10 bg-black/30 backdrop-blur-xl">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg mb-2">© 2024 智慧教育学习伴侣. All rights reserved.</p>
          <p className="text-green-400 text-xl font-semibold flex items-center justify-center gap-2 hover:text-green-300 transition-colors duration-300">
            <span className="animate-pulse">🎓</span>
            <span>Learning is Earning - 让学习创造价值</span>
          </p>
        </div>
      </footer>

      {/* 添加自定义动画样式 */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* 确保backdrop-filter在所有浏览器中工作 */
        .backdrop-blur-xl {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }

        .backdrop-blur-2xl {
          -webkit-backdrop-filter: blur(40px);
          backdrop-filter: blur(40px);
        }

        .backdrop-blur-md {
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
        }

        .backdrop-blur-sm {
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
        }

        /* 平滑滚动 */
        html {
          scroll-behavior: smooth;
        }

        /* 防止内容闪烁 */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}

const features = [
  {
    icon: '🤖',
    title: 'AI智能助教',
    description: '24小时在线的智能辅导，随时解答学习疑问，提供个性化学习建议和辅导。',
    buttonText: '开始对话',
  },
  {
    icon: '📚',
    title: '智能教案生成',
    description: '基于AI技术，快速生成符合课程标准的个性化教案，提升教学效率。',
    buttonText: '生成教案',
  },
  {
    icon: '🎯',
    title: '个性化学习路径',
    description: '根据学生的学习水平和兴趣，智能推荐最适合的学习内容和进度安排。',
    buttonText: '制定计划',
  },
  {
    icon: '📊',
    title: '学习数据分析',
    description: '实时跟踪学习进度，提供详细的学习报告和改进建议，让学习更有针对性。',
    buttonText: '查看分析',
  },
  {
    icon: '🎮',
    title: '互动式课程',
    description: '丰富的多媒体教学资源，互动式学习体验，让学习变得更加生动有趣。',
    buttonText: '体验课程',
  },
  {
    icon: '👥',
    title: '协作学习平台',
    description: '支持师生互动、同学协作，构建活跃的在线学习社区和交流环境。',
    buttonText: '加入社区',
  },
];

const userTypes = [
  {
    emoji: '👨‍🎓',
    title: '我是学生',
    description: '个性化学习、AI答疑、学习跟踪',
  },
  {
    emoji: '👩‍🏫',
    title: '我是教师',
    description: '智能教案、课程管理、学生分析',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: '我是家长',
    description: '学习监控、进度报告、家庭辅导',
  },
];
