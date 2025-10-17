'use client';

import { motion } from 'framer-motion';
import GlassButton from '@/components/ui/GlassButton';
import GlassCard from '@/components/ui/GlassCard';
import { BookOpen, Brain, TrendingUp, Users, Award, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block mb-6">
            <motion.span
              animate={{ 
                boxShadow: ['0 0 20px rgba(74, 222, 128, 0.5)', '0 0 40px rgba(74, 222, 128, 0.8)', '0 0 20px rgba(74, 222, 128, 0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-6 py-2 bg-green-400/20 backdrop-blur-lg border border-green-400/50 rounded-full text-green-300 font-semibold"
            >
              🎓 Learning is Earning
            </motion.span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            智慧教育学习伙伴
            <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              让学习创造价值
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            AI驱动的个性化学习平台，将每一次学习转化为可验证的技能资产
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlassButton variant="primary" size="lg">
              🚀 开始学习之旅
            </GlassButton>
            <GlassButton variant="secondary" size="lg">
              📖 了解更多
            </GlassButton>
          </div>
        </motion.div>
      </section>

      {/* 六大功能区块 */}
      <section className="container mx-auto px-4 pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          六大核心功能
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <GlassButton variant="success" size="sm">
                  体验功能 →
                </GlassButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Flywheel */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="p-12">
            <h2 className="text-4xl font-bold text-white text-center mb-8">
              🔄 学习飞轮模型
            </h2>
            <p className="text-gray-300 text-center mb-12 text-lg">
              从好奇到变现的完整成长路径
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {flywheel.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-400/10 to-emerald-500/10 backdrop-blur-lg border border-green-400/30 rounded-2xl p-6"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-3xl">{step.emoji}</span>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: '🤖',
    title: 'AI智能助教',
    description: '24/7全天候智能辅导，个性化答疑与即时反馈',
  },
  {
    icon: '📚',
    title: '智能教案生成',
    description: '自动对接课程标准，快速生成高质量教学内容',
  },
  {
    icon: '🎯',
    title: '个性化学习路径',
    description: '基于AI分析动态规划最优学习路径',
  },
  {
    icon: '📊',
    title: '学习数据分析',
    description: '实时数据反馈，精准复习与习惯养成支持',
  },
  {
    icon: '🎮',
    title: '互动式课程',
    description: '项目式任务制学习，激发主动探索能力',
  },
  {
    icon: '👥',
    title: '协作学习平台',
    description: '小组讨论、跨校合作、全球学习挑战',
  },
];

const flywheel = [
  {
    emoji: '💡',
    title: '好奇心触发',
    description: '主动探索感兴趣的学习主题',
  },
  {
    emoji: '🤖',
    title: 'AI智能规划',
    description: '个性化路径与资源匹配',
  },
  {
    emoji: '🎯',
    title: '互动式完成',
    description: '协作学习与迭代优化',
  },
  {
    emoji: '🏆',
    title: '区块链凭证',
    description: 'NFT/EduBlock技能认证',
  },
  {
    emoji: '🌟',
    title: '技能可视化',
    description: '成长树与能力雷达图',
  },
  {
    emoji: '💰',
    title: '项目变现',
    description: '接单/实习/技能变现通道',
  },
  {
    emoji: '🚀',
    title: '成就激励',
    description: '新好奇心与社群影响力',
  },
];