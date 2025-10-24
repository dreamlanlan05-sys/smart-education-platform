'use client';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 顶部导航 */}
      <header className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              <span className="text-2xl font-bold text-white">智慧教育学习伴侣</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#" className="text-white hover:text-green-100 transition-colors font-medium">首页</a>
              <a href="#" className="text-white hover:text-green-100 transition-colors font-medium">课程</a>
              <a href="#" className="text-white hover:text-green-100 transition-colors font-medium">教案</a>
              <a href="#" className="text-white hover:text-green-100 transition-colors font-medium">学习分析</a>
              <a href="#" className="text-white hover:text-green-100 transition-colors font-medium">关于我们</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          <div className="inline-block mb-8">
            <span className="px-8 py-3 bg-green-400/30 backdrop-blur-md border-2 border-green-400 rounded-full text-green-300 font-bold text-lg shadow-lg">
              🎓 Learning is Earning
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            智慧教育学习伙伴
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              让学习创造价值
            </span>
          </h1>

          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI驱动的个性化学习平台，将每一次学习转化为可验证的技能资产
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-10 py-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl text-white font-bold text-xl shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all">
              🚀 开始学习之旅
            </button>
            <button className="px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-2xl text-white font-bold text-xl hover:bg-white/20 transition-all">
              📖 了解更多
            </button>
          </div>
        </div>
      </section>

      {/* 未来课堂 */}
      <section className="container mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">未来课堂，从这里开始</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI驱动的个性化学习体验，让每个学生都能找到最适合自己的学习方式
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-green-500/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/20 rounded-full blur-3xl group-hover:bg-green-400/30 transition-all"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <button className="w-full py-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                  {feature.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 选择身份 */}
      <section className="container mx-auto px-6 py-24">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              选择您的身份，开始智慧学习之旅
            </h2>
            <p className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto">
              无论您是学生、教师还是家长，我们都为您准备了专属的学习和教学工具
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {userTypes.map((type) => (
                <button
                  key={type.title}
                  className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 backdrop-blur-lg border-2 border-green-400/50 rounded-2xl p-10 hover:from-green-400/30 hover:to-emerald-500/30 hover:scale-105 hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-2xl"
                >
                  <div className="text-6xl mb-6">{type.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300 text-base">{type.description}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 bg-black/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">© 2024 智慧教育学习伴侣. All rights reserved.</p>
          <p className="text-green-400 mt-3 text-xl font-semibold">🎓 Learning is Earning - 让学习创造价值</p>
        </div>
      </footer>
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